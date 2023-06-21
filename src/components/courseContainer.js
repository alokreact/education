import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllcourses } from "../features/courseSlice";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { addItem } from "../features/cart/cartSlice";

const CourseContainer = () => {

    const { courses, isLoading } = useSelector((store) => store.allCourses);
    const { cartItems, isAdding } = useSelector((store) => store.cart);


    console.log('cartItems', cartItems)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllcourses())
    }, []);

    if (isLoading) {
        return (
            <>Loading...</>
        )
    }
    if (courses.length === 0) {
        return (
            <>No Courses to Diaplay.</>
        )
    }
    return (
        <>
            All Courses.
            {
                courses.map((course) => {
                    const existinCart = cartItems.find((item) => item.id === course.id);
                    return (

                        <>
                            <div style={{ margin: '2%' }} key={course.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    {/* <CardMedia
        component="img"
        height="140"
        image={Chevrolet}
        alt="Chevrolet"
      /> */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {course.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Chevrolet is an iconic American car brand known for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">{course.price}</Button>
                                        {existinCart ?
                                            <Button size="small">
                                                {'Already Added'}</Button>
                                            :
                                            <Button size="small" onClick={() => dispatch(addItem(course))}>
                                                {isAdding ? 'Loading...' : 'Add To Cart'}</Button>

                                        }
                                    </CardActions>
                                </Card>
                            </div></>
                    )
                })
            }
        </>
    )
}
export default CourseContainer;