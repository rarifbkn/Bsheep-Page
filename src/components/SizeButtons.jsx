import '@/styles/SizeSelector.css'

export default function SizeButtons() {
    const sizes = ["S", "M", "L", "XL"];

    const handleClick = (size) => {
        console.log(`Has seleccionado la talla ${size}`)
        alert(`Has seleccionado la talla ${size}`);
    }

    return(
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