const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const outputTag = document.querySelector('textarea.output')
const originalText = outputTag.value

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const colorTags = document.querySelectorAll("div.colors div")

//when I type in sentence tag, update output tag
sentenceTag.addEventListener("keyup", function () {
  if (this.value){
    outputTag.value = this.value
      }
  else {
    outputTag.value = originalText
  }
})
//when I type in output tag, update sentence tag
outputTag.addEventListener("keyup", function () {
	sentanceTag.value = this.value
})

//when I change my type size slider update the text next to it and update the output tag font size
typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px"
	typesizeOutput.innerHTML = this.value + " billy"
})
  
lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value
	lineheightOutput.innerHTML = this.value + " billy"
})

//when italic checkbox changes, update acordiongly
italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic'
  }
  else {
    outputTag.style.fontStyle = 'normal'
  }
})

//when i change select typeface option, update fontfamily
typefaceTag.addEventListener("input", function(){
  outputTag.style.fontFamily = this.value
})

//when I change slider values, it updates font weight values
fontweightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value
	fontweightOutput.innerHTML = this.value + " billy"
})

//Go thought all color tags
//Then when you click, change the background color and text color
//for each color tag (div) pass a "tag"
//for each tag listen for clciks
//when I click one, make this tag be selected
colorTags.forEach(tag => {
  
  tag.addEventListener("click", function (){
         outputTag.style.backgroundColor = this.style.backgroundColor
    		 outputTag.style.color = this.style.color
    	   //reset the classes 
    			colorTags.forEach(tag => {
            tag.classList.remove("selected")
          })
    			//add selected only to the clicked tag
          this.classList.add("selected")
        })
})