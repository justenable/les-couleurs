const phoneNumber: string = '27 66 256 9900';

export const environment = {
  phoneNumber: '+' + phoneNumber,
  whatsappLink: 'https://wa.me/' + phoneNumber.replaceAll(' ', ''),
  facebookLink:
    'https://www.facebook.com/profile.php?id=100089711379211&mibextid=ZbWKwL',
};
