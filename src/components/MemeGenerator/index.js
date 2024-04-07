import {Component} from 'react'
import {
  Container,
  FormContainer,
  LabelContainer,
  Label,
  Input,
  ImageContainer,
  GeneratorContainer,
  Headers,
  ImagePara,
  Select,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    imageUrl: '',
    submitted: false,
    fontSize: '8', // Default font size
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generateImage = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <ImageContainer bgImage={imageUrl} data-testid="meme">
        <ImagePara size={fontSize}>{topText}</ImagePara>
        <ImagePara size={fontSize}>{bottomText}</ImagePara>
      </ImageContainer>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({submitted: true})
  }

  render() {
    const {imageUrl, topText, bottomText, submitted} = this.state
    return (
      <Container>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Headers>Meme Generator</Headers>
          <GeneratorContainer>
            <LabelContainer>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                placeholder="Enter the Image URL"
                type="text"
                value={imageUrl}
                onChange={this.onChangeImageUrl}
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="topText">Top Text</Label>
              <Input
                id="topText"
                placeholder="Enter the Top Text"
                type="text"
                value={topText}
                onChange={this.onChangeTopText}
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="bottomText">Bottom Text</Label>
              <Input
                id="bottomText"
                placeholder="Enter the Bottom Text"
                type="text"
                value={bottomText}
                onChange={this.onChangeBottomText}
              />
            </LabelContainer>
            <LabelContainer>
              <Label htmlFor="fontSize">Font Size</Label>
              <Select id="fontSize" onChange={this.onChangeFontSize}>
                {fontSizesOptionsList.map(option => (
                  <option key={option.optionId} value={option.optionId}>
                    {option.displayText}
                  </option>
                ))}
              </Select>
            </LabelContainer>

            <div>
              <Button type="submit">Generate</Button>
            </div>
          </GeneratorContainer>
        </FormContainer>

        {submitted && this.generateImage()}
      </Container>
    )
  }
}

export default MemeGenerator
