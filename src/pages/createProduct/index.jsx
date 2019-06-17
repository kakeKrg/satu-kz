import React from "react";
import { Link } from "react-router-dom";

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      code: null,
      heading: "",
      model: "",
      color: "",
      data: null,
      price: null,
      textarea: "",
      imgSrc: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.imgSrcProduct = this.imgSrcProduct.bind(this);
  }

  onInputChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  imgSrcProduct(e) {
    this.setState({ imgSrc: URL.createObjectURL(e.target.files[0]) });
  }

  render() {
    const { imgSrc } = this.state;
    console.log(this.state);
    return (
      <div className="main">
        <div className="top-main">Подать объявление на SATU.KZ</div>
        <div className="body-main">
          <form>
            <div className="title-container">
              <div className="left-tc">Заголовок:</div>
              <div className="right-tc">
                <input
                  type="text"
                  className="text-header"
                  onChange={e => this.onInputChange("title", e.target.value)}
                />
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Код товара:</div>
              <div className="right-tc">
                <input
                  type="text"
                  className="code-product"
                  onChange={e => this.onInputChange("code", e.target.value)}
                />
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Рубрика:</div>
              <div className="right-tc">
                <select
                  name="heading"
                  className="heading-tc"
                  defaultValue="Рубрика"
                  onChange={e => this.onInputChange("heading", e.target.value)}
                >
                  <option disabled value="Рубрика">
                    Рубрика
                  </option>
                  <option value="phon">Смартфоны</option>
                  <option value="pc">Компьютеры</option>
                  <option value="tv audio and video">ТВ, аудио и видио</option>
                  <option value="appliances">Бытовая техника</option>
                  <option value="equipment for kitchen">
                    Техника для кухни
                  </option>
                  <option value="home">Дом</option>
                  <option value="auto products and transport">
                    Автотовары и транспорт
                  </option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Модель:</div>
              <div className="right-tc">
                <select
                  name="model"
                  className="heading-tc"
                  defaultValue="Mодель"
                  onChange={e => this.onInputChange("model", e.target.value)}
                >
                  <option disabled value="Mодель">
                    Mодель
                  </option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  <option value="htc">HTC</option>
                  <option value="huawei">Huawei</option>
                  <option value="xiaomi">Xiaomi</option>
                  <option value="lg">LG</option>
                  <option value="lenova">Lenova</option>
                  <option value="sony">Sony</option>
                  <option value="meizu">Meizu</option>
                  <option value="oppo">OPPO</option>
                  <option value="acer">Acer</option>
                  <option value="asus">Asus</option>
                  <option value="hp">HP</option>
                  <option value="tefal">Tefal</option>
                  <option value="canon">Canon</option>
                  <option value="philips">Philips</option>
                  <option value="haier">Haier</option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Цвет:</div>
              <div className="right-tc">
                <select
                  name="color"
                  className="heading-tc"
                  defaultValue="Цвет"
                  onChange={e => this.onInputChange("color", e.target.value)}
                >
                  <option disabled value="Цвет">
                    Цвет
                  </option>
                  <option value="black">Черный</option>
                  <option value="white">Белый</option>
                  <option value="gold">Золотой</option>
                  <option value="yellow">Желтый</option>
                  <option value="green">Зеленый</option>
                  <option value="blue">Синий</option>
                  <option value="brown">Коричневый</option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Год выпуска:</div>
              <div className="right-tc">
                <select
                  name="data"
                  className="heading-tc"
                  defaultValue="Год"
                  onChange={e => this.onInputChange("data", e.target.value)}
                >
                  <option disabled value="Год">
                    Год
                  </option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                </select>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Цена:</div>
              <div className="right-tc">
                <input
                  type="text"
                  className="text-prices"
                  onChange={e => this.onInputChange("price", e.target.value)}
                />
                тг.
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Описание и характеристика:</div>
              <div className="right-tc">
                <textarea
                  name="text"
                  className="text-area"
                  cols="80"
                  rows="1"
                  onChange={e => this.onInputChange("textarea", e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="title-container">
              <div className="left-tc">Добавить фото:</div>
              <div className="right-tc">
                <div className="add-img">
                  <input
                    type="file"
                    name="addImg"
                    className="add-img-file"
                    accept="image/jpeg,image/gif,image/png"
                    onChange={this.imgSrcProduct}
                  />
                  <img src={imgSrc} alt="img" />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button type="button" onClick={this.publish}>
                ОПУБЛИКОВАТЬ
              </button>
              <button type="button">
                <Link to="/">ОТМЕНА</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
