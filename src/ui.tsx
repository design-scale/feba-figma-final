import { render, Container, Text, VerticalSpace, Button, Dropdown, DropdownOption, Columns, IconButton, IconAdjust32, Divider, Textbox, Stack, useInitialFocus, IconChevronDown32, Toggle, IconArrowLeft16, IconArrowLeftRight32, IconChevronLeft32 } from '@create-figma-plugin/ui';
import { JSX, h } from 'preact';
import {Modal} from './components/Modal/modal'
import { useState } from 'preact/hooks';
import style from './styles.css';
import Card from './components/Card'

function Plugin(props: { greeting: string }) {

  
  const modalSize = {
    padding: '12px',
    width: '290'
  };

  function modalSocialMedia() {
    return (
      <div style={modalSize}>
      <Stack space='medium'>
        <Text style={{fontWeight: 600, paddingBottom: 8, marginTop: 4}}>Pages</Text>
        <Toggle onChange={handleMoodboardToggle} value={isMoodboardEnabled}>
          <Text>Moodboard</Text>
        </Toggle>
        <Toggle onChange={handleDesignToggle} value={isDesignEnabled} > 
          <Text>Design</Text>
        </Toggle>
      </Stack>
        </div>
    )
  }

  function modalLandingPage(){
    return (
      <div style={modalSize}>
      <Stack space='medium'>
      <Text style={{fontWeight: 600, paddingBottom: 8, marginTop: 4}}>Pages</Text>
            <Toggle onChange={handleBenchmarkToggle} value={isBenchmarkEnabled}>
              <Text>Benchmark</Text>
            </Toggle>
            <Toggle onChange={handleWireframeToggle} value={isWireframeEnabled} > 
              <Text>Wireframe</Text>
            </Toggle>
            <Toggle onChange={handleDesignToggle} value={isDesignEnabled} > 
              <Text>Design</Text>
            </Toggle>
            <Toggle onChange={handleExplorationToggle} value={isExplorationEnabled} > 
              <Text>Exploration</Text>
            </Toggle>
            <Toggle onChange={handleHandoofToggle} value={isHandoofEnabled} > 
              <Text>Hand-off</Text>
            </Toggle>
      </Stack>
        </div> 
    )
  }

  function modalEmail() {
    return (
      <div style={modalSize}>
      <Stack space='medium'>
      <Text style={{fontWeight: 600, paddingBottom: 8, marginTop: 4}}>Pages</Text>
         <Toggle onChange={handleBenchmarkToggle} value={isDiscoveryEnabled}>
           <Text>🔎 Benchmark</Text>
         </Toggle>
         <Toggle onChange={handleWireframeToggle} value={isWireframeEnabled} > 
           <Text>🌐 Wireframe</Text>
         </Toggle>
         <Toggle onChange={handleDesignToggle} value={isDesignEnabled} > 
           <Text>↪ 🎨 Design</Text>
         </Toggle>
         <Toggle onChange={handleExplorationToggle} value={isExplorationEnabled} > 
           <Text>↪💡 Exploration</Text>
         </Toggle>
         <Toggle onChange={handleHandoofToggle} value={isHandoofEnabled} > 
           <Text>🗂 Hand-off</Text>
         </Toggle>
      </Stack>
        </div>
    )
  }

  //TOGGLE

  // Design
  const [isDiscoveryEnabled, setIsDiscoveryEnabled] = useState<boolean>(true);
  function handleDiscoveryToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setIsDesignEnabled(newValue);
  }

  // Design
  const [isDesignEnabled, setIsDesignEnabled] = useState<boolean>(true);
  function handleDesignToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setIsDesignEnabled(newValue);
  }

  // Benchmark
  const [isBenchmarkEnabled, setIsBenchmarkEnabled] = useState<boolean>(true);
  function handleBenchmarkToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setIsBenchmarkEnabled(newValue);
  }

  // Wireframe
  const [isWireframeEnabled, setIsWireframeEnabled] = useState<boolean>(true);
  function handleWireframeToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setIsWireframeEnabled(newValue);
  }

  // Handoof
  const [isHandoofEnabled, setIsHandoofEnabled] = useState<boolean>(true);
  function handleHandoofToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setIsHandoofEnabled(newValue);
  }

  // Exploration
  const [isExplorationEnabled, setIsExplorationEnabled] = useState<boolean>(true);
  function handleExplorationToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setIsExplorationEnabled(newValue);
  }

    // Moodboard
    const [isMoodboardEnabled, setIsMoodboardEnabled] = useState<boolean>(true);
    function handleMoodboardToggle(event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = event.currentTarget.checked;
      console.log(newValue);
      setIsMoodboardEnabled(newValue);
    }
  


  // MODAL
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(event: JSX.TargetedMouseEvent<HTMLButtonElement>) {
    console.log(event);
    setOpen(false);
  }


  // INPUT
  const [inputValue, setInputValue] = useState<string>('');
  function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setInputValue(newValue);
  }

  const onCreate = () => {
    const parsedCount = parseInt(inputValue, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: parsedCount } }, '*');
  };

  // SELECT
  const [value, setValue] = useState<string>('Landing Page');
  const [investida, setInvestida] = useState<string>('Abrahão');

  const options: Array<DropdownOption> = [{
    value: 'Landing Page'
  }, {
    value: 'Social Media'
  },{
    value: 'Email'
  } ];

  const investidas: Array<DropdownOption> = [{
    value: 'Abrahão'
  }, {
    value: 'Assinafy'
  },{
    value: 'Cobre Fácil'
  },{
    value: 'Coalize'
  }  ];

  function handleClick(event: JSX.TargetedEvent<HTMLButtonElement>) {
    console.log(event);
  }


  function handleChange(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setValue(newValue);
  }

  function handleChanges(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log(newValue);
    setInvestida(newValue);
  }

  
  return (
    <div >
      
    <Container space='small'>
      <Columns space="extraSmall" style={{padding: "8px 0px"}}>
        <Dropdown  style={{position: 'absolute', left: 10, width: 100, fontWeight: 600}} onChange={handleChanges} options={investidas} value={investida} />
        <Dropdown style={{marginLeft: 80 , width: 108}} onChange={handleChange} options={options} value={value} variant="border" />
        <IconButton onClick={handleOpenButtonClick} style={{padding: 0, position: 'absolute', right: 8}}><IconAdjust32 /></IconButton>
      </Columns>
    </Container>  
  
  
   
      <Divider/>

    <Container space='small'>
      <Columns space="extraSmall" style={{padding: "16px 0px"}} >
      <Stack space="extraSmall">
      <Card investida={investida} inputValue={inputValue}>
    {(inputValue.length < 1)? 'Insira um título para começar': inputValue } 
    </Card>
      


      </Stack>
      
    </Columns>
    </Container>




    <Container space='small'>
      <Stack space='small'>

      
          <Textbox {...useInitialFocus()} onInput={handleInput} placeholder="Insira um título para começar" value={inputValue} variant="border"/>
          {inputValue.length < 1 
              ? <Button fullWidth onClick={onCreate} disabled >Começar agora</Button> 
              :<Button fullWidth onClick={onCreate} >Começar agora</Button> 
          }
      </Stack>
    </Container>
 
    
    <Modal closeButtonPosition="left" noTransition onCloseButtonClick={handleCloseButtonClick} open={open} position="left" title={`Editar Pages (${value})`}>
       {value === 'Social Media'? modalSocialMedia() : value === 'Landing Page' ?  modalLandingPage(): modalEmail()}
      </Modal>

      <VerticalSpace space='medium' />
    </div>
  )
}

export default render(Plugin);
