import SearchForm from '../common/SearchForm';

function Hero({ title = 'Perguntas Frequentes', description = 'Find articles and resources to help with your questions.' }) {
  return (
    <div className="page-heading-holder">
      <div className="container text-center">
        <h1 className="page-heading mb-3">{title}</h1>
        <div className="page-heading-sub single-col-max mx-auto">
          <div className="help-search-intro">{description}</div>
          <div className="help-search-main pt-3 d-block mx-auto">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
