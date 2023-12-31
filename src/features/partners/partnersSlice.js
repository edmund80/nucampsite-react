import { PARTNERS }  from '../../app/shared/PARTNERS';

export const selectALLPartners = () => {
    return PARTNERS
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
};