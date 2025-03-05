import '@/styles/SizeSelector.css'
import { useStore } from '@nanostores/preact';
import { sizeSelected } from '@/Store/sizeStore';

export default function SizeButtons({sizes}) {
    const $isSizeSelected = useStore(sizeSelected);

    const handleClick = (size) => {

        //if is the same size, unset and unselect it.
        if($isSizeSelected.size === size){
            sizeSelected.set({
                size: "",
                isSelected: false,
            })
        }else{
            //set the size chosen
            sizeSelected.set({
                size: size,
                isSelected: true,
            })
            console.log(`Has seleccionado la talla ${size}`);
        }
    }

    return(
        <div class="size-selector">
            {
             Array.isArray(sizes) &&
               sizes.map((size) => (
                    <button
                        key={size}
                        id={size}
                        onClick= {() =>handleClick(size)}
                        class={`size-btn ${$isSizeSelected.size === size ? "selected":""}`}
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