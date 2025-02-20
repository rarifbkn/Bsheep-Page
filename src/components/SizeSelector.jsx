import {useStore} from "@nanostores/preact"
import { isSizeSelected } from "@/Store/sizeStore";
import '@/styles/SizeSelector.css'

export default function SizeSelector() {

  const sizes = ["S", "M", "L", "XL"];

  const $isSizeSelected = useStore(isSizeSelected);
  
  
  const handleClick = (size) => {
    console.log(`Has seleccionado la talla ${size}`)
    alert(`Has seleccionado la talla ${size}`);
  };

  return (
      <div class="size-selector">
          {
            sizes.map((size) => (
              <button
              key={size}
                id={size}
                onClick={() => handleClick(size)}
              >
                <span>
                  {size}
                </span>
              </button>
            ))
          }
      </div>
  )
}