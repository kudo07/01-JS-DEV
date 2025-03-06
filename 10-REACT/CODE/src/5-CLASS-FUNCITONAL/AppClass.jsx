import React from 'react';

const AppClass = () => {
  return (
    <div>
      <h2>Class-ic React vs Functional React Components</h2>
      {/*
        - Way to create components using ES6 classes.
        - Older way of writing components compared to functional components.
        - Can contain state and have access to lifecycle methods, which get executed at various
        points in a component's life cycle.
      */}{' '}
      <h5>Question 2: Explain constructor and super keywords here</h5>
      {/* 
      constructor - 
      1- Initializing State: It's used to initialize the component's state by assigning an 
      initial value to this.state.
        2- Binding Event Handlers or Methods: It's also used to bind event handlers or methods
        to component instance. 
      */}
      {/* 
      super - 
        - Used inside the constructor to call the constructor of the parent class.
        - Ensures that the component's props are correctly initialized and available within 
        the component. 
      */}
      <Counter />{' '}
      <h5>
        Question 3: Explain Component Lifecycle Methods by adding them to this
        counter app
      </h5>{' '}
      <h5>
        Question 4: Explain Function Based Component and what are hooks? Explain
        any 2.
      </h5>
      <PhotoGallery />
      <h5>
        Question 5: Convert this Class based component to Function Based
        Component and explain it.
      </h5>
      <DataList />
      <DataListFn />
    </div>
  );
};

// 2 counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  incrementCount1 = () => {
    this.setState({ count1: this.state.count1 + 1 });
  };
  componentDidMount() {
    // predefined lifecycle method
    console.log('componenet mounted');
    // initial the component loaded this is means
  }
  componentDidUpdate(prevProps, prevState) {
    // to prevent updation of coun1 only render when count changes

    if (prevState.count !== this.state.count) {
      console.log('Component updated');
    }
  }
  componentWillUnmount() {
    console.log('Component Unmounted');
  }
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Count: {this.state.count1}</p>
        <button onClick={this.incrementCount}>Increment COUNT</button>
        <button onClick={this.incrementCount1}>Increment COUNT1</button>
      </div>
    );
  }
}
// 4 photogalary
const PhotoGallery = () => {
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <div>
      <h3>Photo Gallery</h3>
      <div>
        {photos.splice(0, 5).map((photo) => {
          return <img key={photo.id} src={photo.thumbnailUrl} />;
        })}
      </div>
    </div>
  );
};
//5 data list functin
function DataListFn() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data');
        setIsLoading(false);
        console.error('Error fetching data:', error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3>Data List Functional</h3>
      <ul>
        {data.splice(0, 6).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
// data list
class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((error) => {
        this.state({ error: 'error', isLoading: false });
        console.log('error fetching', error);
      });
  }
  render() {
    const { data, isLoading, error } = this.state;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }
    return (
      <>
        <div>Data list</div>
        <ul>
          {data.splice(0, 5).map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
export default AppClass;
