const isLocalhost = typeof window !== 'undefined' && window.location.host === 'localhost:3000'

module.exports = {
  backend: isLocalhost ? { name: 'test-repo' } : {
    name: 'github',
    repo: 'yuribmontez/solaland-test',
    base_url:' https://solaland-test.vercel.app',
    // auth_endpoint: 'api/auth/',
    branch: 'main',
  },
  load_config_file: false,
  media_folder: 'public/img/drops',
  public_folder: '/img/drops',
  publish_mode: 'editorial_workflow',
  collections: [
    {
      name: 'drop',
      label: 'Upcoming Drops',
      folder: 'content/drops',
      create: true,
      slug: '{{slug}}',
      fields: [
        { label: "Name", name: 'name', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        { label: 'Twitter URL', name: 'twitter', widget: 'string' },
        { label: 'Discord URL', name: 'discord', widget: 'string' },
        { label: 'Image', name: 'image', widget: 'image', allow_multiple: false },
        { label: 'Mint Website', name: 'website', widget: 'string'  },
        { label: 'Mint date', name: 'date', widget: 'datetime', format: "MMDD", dateFormat: "MMDD", timeFormat: false },
        { label: 'Mint price', name: 'price', widget: 'number', value_type: 'float' },
      ]
    }
  ]
}
