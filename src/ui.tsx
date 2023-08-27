import { render, Container, Text, VerticalSpace, Button, Checkbox, Dropdown, DropdownOption, Columns, IconButton, IconPlus32, IconAdjust32, Divider, Textbox, Stack, useInitialFocus, Modal, IconChevronDown32, Toggle } from '@create-figma-plugin/ui';
import { JSX, h } from 'preact';
import { useState } from 'preact/hooks';
import style from './styles.css';
import Card from './components/Card'




function Plugin(props: { greeting: string }) {

  


  function modalSocialMedia() {
    return (
      <div style={style}>
      <Stack space='medium'>
        <Text style={{fontWeight: 600, paddingBottom: 8, marginTop: 4}}>Pages</Text>
        <Toggle onChange={handleChangePage} value={pageValue}>
          <Text>Moodboard</Text>
        </Toggle>
        <Toggle onChange={handleChangeDesignPage} value={designPageValue} > 
          <Text>Design</Text>
        </Toggle>
      </Stack>
        </div>
    )
  }

  //TOGGLE

  // Discovery
  const [pageValue, setPageValue] = useState<boolean>(true);
  function handleChangePage(event: JSX.TargetedEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.checked;
    console.log(newValue);
    setPageValue(newValue);
  }

    // Design
    const [designPageValue, setDesignPageValue] = useState<boolean>(true);
    function handleChangeDesignPage(event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = event.currentTarget.checked;
      console.log(newValue);
      setDesignPageValue(newValue);
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
  const style = {
    padding: '12px',
    width: '240px'
  };


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
          <Button fullWidth onClick={onCreate}>Começar agora</Button>
      </Stack>
    </Container>
    
    <Modal onCloseButtonClick={handleCloseButtonClick} open={open} position="left" title={`Editar Pages (${value})`}>
       {value === 'Social Media'? modalSocialMedia() : value === 'Landing Page' ?  <div style={style}>
      <Stack space='medium'>
        <Toggle onChange={handleChangePage} value={pageValue}>
          <Text>Discovery</Text>
        </Toggle>
        <Toggle onChange={handleChangeDesignPage} value={designPageValue} > 
          <Text>Design</Text>
        </Toggle>
      </Stack>
        </div> : 
         <div style={style}>
         <Stack space='medium'>
           <Toggle onChange={handleChangePage} value={pageValue}>
             <Text>Discovery</Text>
           </Toggle>
           <Toggle onChange={handleChangeDesignPage} value={designPageValue} > 
             <Text>Design</Text>
           </Toggle>
         </Stack>
           </div>}
      </Modal>

      <VerticalSpace space='medium' />
    </div>
  )
}

export default render(Plugin);
