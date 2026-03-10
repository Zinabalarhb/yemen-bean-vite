 import "../styles/Categories.css";
import { getCategories } from "../services/api.public";

import { Container, Row, Col } from "react-bootstrap";
import { Coffee, Filter, Settings, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const categoriesIconMap = {
  "حبوب البن": Coffee,
  "أدوات التقطير": Filter,
  "ماكينات الإسبريسو": Settings,
  "مطاحن القهوة": Cpu,
};

 
export default function Categories() {
const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

   /* ===============================
     Load Categories
  ================================ */
useEffect(()=>{
  const loadCategories = async () => {
     try {
            const data = await getCategories();
 
            setCategories(data);

          } catch (err) {
            setError("حدث خطأ أثناء تحميل الأقسام");
          } finally {
            setLoading(false);
          }
        };
    
        loadCategories();
},[]);

  return (
    <section id="categories" className="yb-categories">
      <Container>
        <div className="text-center mb-5">
          <h2  >أقسام المتجر</h2>
          <p className="text-muted">
            كل ما تحتاجه لتجربة قهوة متكاملة
          </p>
        </div>
          {/* Loading */}
          {loading && (
            <p className="text-center my-5">⏳ جاري تحميل الأقسام...</p>
          )}

          {/* Error */}
          {error && (
            <p className="text-center text-danger my-5">{error}</p>
          )}
            {/* categories */}
          {!loading && !error && (
        <Row className="g-2 " >
          {categories.map((category ,index)  => {
           const icons = [Coffee, Filter, Settings, Cpu];
  const Icon = icons[index];


            return (
              
              <Col md={6} lg={3} key={category.id}>
                 <div className="yb-category-item">
                  {Icon && <Icon size={36} />}
                  <h6>{category.name}</h6>
                  {/* <p>{category.desc}</p> */}
                </div>
              </Col>
            );
          })}
        </Row>
          )}
      </Container>
    </section>
  );
}
