import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, IconButton, Input, Tooltip, useColorModeValue, useEditableControls } from "@chakra-ui/react";
import { CheckIcon, Edit, X } from "lucide-react";

function CustomControlsExample() {
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
            <button>button</button>
          <IconButton aria-label='' icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <IconButton aria-label='' icon={<X />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center'>
          <IconButton aria-label='' size='sm' icon={<Edit />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <Editable
        textAlign='center'
        defaultValue='Rasengan ⚡️'
        fontSize='2xl'
        isPreviewFocusable={false}
      >
        <EditablePreview />
            <Tooltip label="Click to edit" shouldWrapChildren={true}>
            <EditablePreview
                py={2}
                px={4}
                _hover={{
                background: useColorModeValue("gray.100", "gray.700")
                }}
            />
            </Tooltip>
            <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
    )
  }

  export default CustomControlsExample