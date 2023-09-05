let volume_el = document.querySelector('.volume');
let abv_el = document.querySelector('.abv');

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  
  let volume = parseFloat(volume_el.value);
  let abv = parseFloat(abv_el.value);
  let ounces = volume / 29.574
  
  let calories = (abv * 2.5) * ounces

  document.querySelectorAll('h2, .share_result').forEach((e) => {
    e.textContent = `~ ${Math.round(calories)} calories`;
  })
  
  document.querySelector('.share_title').textContent = `My ${volume}ml of beer at ${abv}% ABV is:`

})

document.querySelectorAll('input[type=radio]').forEach((e) => {
  e.addEventListener('click', (e) => {
    volume_el.value = e.target.value;
  })
})

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault()

  let element = document.querySelector('.container')
  
  // domtoimage.toSvg(element)
  //   .then(function (dataUrl) {
  //     var img = new Image()
  //     img.src = dataUrl
  //     document.body.appendChild(img)
  //   })
  //   .catch(function (error) {
  //     console.error('oops, something went wrong!', error)
  //   })

  domtoimage.toBlob(element)
    .then(function (blob) {
      var file = new File([blob], "picture.png", { type: 'image/png' });
      var filesArray = [file];

      console.log(filesArray)

      navigator.share({
        text: '',
        files: filesArray,
        title: '',
        url: ''
      });

      // if (navigator.canShare && navigator.canShare({ files: filesArray })) {
      //   navigator.share({
      //     text: 'some_text',
      //     files: filesArray,
      //     title: 'some_title',
      //     url: 'some_url'
      //   });
      // }
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
})