import SectionHeader from '../common/SectionHeaderTitle';
import Precario from './Precario';

function PrecarioSection({ precario }) {
  return (
    <section className="help-category-section theme-section">
      <div className="container">
        <SectionHeader title='Preçário'/>
        <Precario precario = {precario} />
      </div>
    </section>
  );
}

export default PrecarioSection;
