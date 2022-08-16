import svgtvi from '@svgtvi/core'

svgtvi({
  input: './source',
  output: 'dist',
  template: ({ fragment, group }) => {
    if (group === 'twoTone') {
      const svg = fragment.querySelector('svg')
      svg?.setAttribute('width', '1em')
      svg?.setAttribute('height', '1em')
      svg?.removeAttribute('class')

      fragment.find('path', 'fill', '#333').set('fill', 'currentColor')
      fragment.find('path', 'fill', '#EB4242').set('fill', 'primary', true)

      return `
        <script setup>
        defineProps({ 
          primary: {
            type: String,
            default: '#3662EB'
          }
        })
        </script>  
        <template>
          ${fragment.serialize()}
        </template>
      `
    }
    return fragment.serialize()
  },
  plugins: [
    {
      name: 'preview',
      params: {
        name: 'svgtvi-example-icons',
        version: '0.1.0',
        author: 'dong.xing@outlook.com',
        description: 'svgtvi example icons components for vue3',
        homepage: 'https://github.com/WX-DongXing/svgtvi-example-icons.git',
        repository: 'https://github.com/WX-DongXing/svgtvi-example-icons.git'
      }
    }
  ]
})
  .then(() => {
    console.log('Successfully!')
  })
  .catch((error) => {
    console.error('Failed! ', error)
  })
