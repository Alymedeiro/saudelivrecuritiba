/**
 * Dados de contato da Saúde Livre Vacinas Curitiba.
 * ATENÇÃO: preencher com os dados reais antes de publicar.
 */
export const clinic = {
  name: "Saúde Livre Vacinas Curitiba",
  // Número no formato internacional, somente dígitos
  whatsappNumber: "5541995770562",
  whatsappDisplay: "(41) 99577-0562",
  address: "Rua Emiliano Perneta, 860 - Lj 07 - Centro, Curitiba - PR, 80420-080",
  hours: "Horário de atendimento a confirmar",
  instagram: "https://www.instagram.com/saudelivre.curitibacentro?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  instagramHandle: "@saudelivre.curitibacentro",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua+Emiliano+Perneta%2C+860+-+Lj+07+-+Centro%2C+Curitiba+-+PR%2C+80420-080",
};

export function whatsappLink(
  message = "Olá! Gostaria de orientação sobre vacinação na Saúde Livre.",
) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
