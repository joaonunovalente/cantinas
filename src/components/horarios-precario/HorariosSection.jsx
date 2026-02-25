import SectionHeader from '../common/SectionHeaderTitle';
import Horarios from './Horarios';

function HorariosSection({ horarios }) {
  return (
    <section className="help-category-section theme-section">
      <div className="container">
        <SectionHeader title='Horários'/>
        <Horarios horarios = {horarios} />
      </div>
    </section>
  );
}

export default HorariosSection;
