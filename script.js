const receiptForm = document.getElementById('receipt-form');
const receiptContainer = document.getElementById('receipt-container');

receiptForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const senderName = document.getElementById('sender-name').value;
  const senderAccount = document.getElementById('sender-account').value;
  const recipientName = document.getElementById('recipient-name').value;
  const recipientAccount = document.getElementById('recipient-account').value;

  const receiptTemplate = Handlebars.compile(document.getElementById('receipt-template').innerHTML);
  const receiptHTML = receiptTemplate({
    senderName,
    senderAccount,
    recipientName,
    recipientAccount
  });

  receiptContainer.innerHTML = receiptHTML;

  const pdf = new jsPDF();
  pdf.fromHTML(receiptContainer.innerHTML);
  pdf.save('receipt.pdf');
});
