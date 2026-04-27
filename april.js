function blowCandle() {
  const flame = document.getElementById('flame');
  const smoke = document.getElementById('smoke');

  if (!flame || !smoke) return;

  flame.classList.add('blown');
  smoke.classList.add('active');

  // Wait for animation, then go to next page
  setTimeout(() => {
    window.location.href = "message.html";
  }, 800);
}

function showMessage() {
  const msg = document.getElementById('surprise');
  if (!msg) return;

  msg.innerText =
    "Maynta ma achieve nimo imong pangandoy sa kinabuhi. And don't stop dreamin'. Dapat inana ta HAHAHAHAHAH. Long lived, Lovie! HHAHAHAHAH. Wala nay lain meaning ha! HAHAHAHAH. Mwaps!🎈";
}