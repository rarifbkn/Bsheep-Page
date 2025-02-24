import { useStore } from "@nanostores/preact";
import { sizeSelected } from "@/Store/sizeStore";


export default function ShopButtonClient() {
    const $selectedSize = useStore(sizeSelected);

    const handleClick = () => {
        console.log('Comprando...');
    }

    return (
        <div>
            <button
            onClick={()=>handleClick}
            class={`shop-button ${!$selectedSize.isSelected ? 'disabled':''}`}
            disabled={!$selectedSize.isSelected}
        >
            Comprar
        </button>
        </div>
    )
}