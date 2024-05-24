let selectedSizes = { width: null, depth: null, height: null };
const prices = { 750: 100000, 900: 100000, 1200: 100000, 1500: 100000, 1800: 100000, 2100: 100000 };

function toggleSizeList(option) {
    const list = document.getElementById(`${option}List`);
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
}

function selectSize(option, size) {
    selectedSizes[option] = size;
    document.querySelectorAll(`#${option}List .size-btn`).forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    calculatePrice();
}

function calculatePrice() {
    if (selectedSizes.width && selectedSizes.depth && selectedSizes.height) {
        const price = prices[selectedSizes.height];
        document.getElementById('finalPrice').textContent = price.toLocaleString() + '원';
        document.getElementById('priceDisplay').style.display = 'block';
    } else {
        document.getElementById('priceDisplay').style.display = 'none';
    }
}
