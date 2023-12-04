"use client"
import * as React from "react"
import { FormLabel } from '@chakra-ui/react';

const Label = React.forwardRef<
  React.ElementRef<typeof FormLabel>,
  React.ComponentPropsWithoutRef<typeof FormLabel>
>(({ className, ...props }, ref) => (
  <FormLabel ref={ref} fontSize='sm' fontWeight='md' className={className} {...props} />
))
Label.displayName = FormLabel.displayName

export { Label }
