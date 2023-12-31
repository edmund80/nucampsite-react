import { Col } from 'reactstrap';
import Partner from '../partners/Partner';
import { selectALLPartners }  from '../partners/partnersSlice';

const PartnersList = () => {
    const partners = selectALLPartners();

    return (
        <Col className='mt-4'>
            {partners.map((partner) => (
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner partner={partner} />
                </div>
            ))}
        </Col>
    )

};

export default PartnersList
