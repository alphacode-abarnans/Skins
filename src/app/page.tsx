"use client"
import { ButtonSkin } from "@/components/skins";
import ColorPickerSkin from "@/components/skins/color-picker/colorPicker.skin";
import { Button, ColorPicker } from "@qbit.design/shell";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState('#ff0000')
  return (
    <div className="p-10">
      <main className="">

        <h3 className="mb-2">BUTTON</h3>
        <Button value={'Button'} renderers={{ renderer: ButtonSkin }} onClick={() => { console.log('clicked'); }}/>

        <h3 className="mt-5 mb-2">COLOR</h3>
        <ColorPicker renderers={{ renderer: ColorPickerSkin }} color={color} onChange={(value: any) => setColor(value)}/>
        
      </main>
    </div>
  );
}
