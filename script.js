document.addEventListener('DOMContentLoaded', function() {
    const initialBottomSheetHTML = `<div class="BottomSheet__window-wrap shared  BottomSheet__draggable" style="height: auto; max-height: 60vh; transform: translate(0px, 0px);"><div class="BottomSheet__drag-indicator-wrap shared "><div class="BottomSheet__drag-indicator shared "></div></div><div class="BottomSheet__window shared "><div class="vXej4kRO"><div><div class="ylJaKNG_"><form class="FLrxlehu"><h3 class="_fNd2mrq">Активировать промокод</h3><div class="omJ936GU"><div class="YfjH2i5L"><input name="coupon" class="Euw1rUj0" placeholder="Введите промокод" value=""></div></div><button type="button" class="KLxcdBFJ TxtO4C0e g6lahFkA ecP4s7L7" tabindex="0" disabled="">Применить</button></form></div></div></div></div></div>`;

    const input = document.querySelector('input.Euw1rUj0[name="coupon"]');
    let button = document.querySelector('button.KLxcdBFJ.TxtO4C0e.g6lahFkA.ecP4s7L7');

    if (!input || !button) {
        console.error('Не удалось найти поле ввода или кнопку.');
        return;
    }

    input.addEventListener('input', function() {
        const parent = button.parentNode;
        const newButton = document.createElement('button');
        newButton.type = 'button';
        newButton.className = 'KLxcdBFJ TxtO4C0e g6lahFkA ecP4s7L7';
        newButton.tabIndex = 0;
        newButton.textContent = 'Применить';

        if (input.value.length === 0) {
            newButton.disabled = true;
        }

        parent.replaceChild(newButton, button);
        button = newButton;

        button.addEventListener('click', function() {
            const bottomSheet = document.querySelector('div.BottomSheet__window-wrap.shared.BottomSheet__draggable');

            if (bottomSheet) {
                bottomSheet.outerHTML = `<div class="BottomSheet__window-wrap shared  BottomSheet__draggable react-draggable-dragged" style="height: auto; max-height: 60vh; transform: translate(0px, 0px); transition: transform 0.3s ease-in-out;"><div class="BottomSheet__drag-indicator-wrap shared "><div class="BottomSheet__drag-indicator shared "></div></div><div class="BottomSheet__window shared "><div class="vXej4kRO"><div><div class="ylJaKNG_"><form class="FLrxlehu" data-gtm-form-interact-id="1"><h3 class="_fNd2mrq" style="margin-bottom: 25px;">Получена награда</h3><div class="omJ936GU">
<div class="gift_photo"><img src="photo_2025-04-05_14-05-17.jpg" style="display: block; margin: 0 auto; margin-bottom: 20px; border-radius: 8px; width: 80%;"></div>
</div><button type="button" class="KLxcdBFJ zAO5mILb g6lahFkA ecP4s7L7" tabindex="0">ВВЕСТИ ЕЩË</button></form></div></div></div></div></div>`;

                const retryButton = document.querySelector('button.KLxcdBFJ.zAO5mILb.g6lahFkA.ecP4s7L7');
                if (retryButton) {
                    retryButton.addEventListener('click', function() {
                        const currentBottomSheet = document.querySelector('div.BottomSheet__window-wrap.shared.BottomSheet__draggable');
                        if (currentBottomSheet) {
                            currentBottomSheet.outerHTML = initialBottomSheetHTML;
                        }
                    });
                }
            }
        });
    });
});
