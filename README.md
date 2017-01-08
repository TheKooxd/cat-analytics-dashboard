[![Semver](http://img.shields.io/SemVer/0.3.0-alpha.png)](http://semver.org/spec/v2.0.0.html)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)


# cat-analytics-dashboard

Dashboard for visualization of Finnish cat-data. API is currently private because the code is so messy.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

You need NodeJS to your computer to run this program. I personally like to use [NVM](https://github.com/creationix/nvm) for my node installation, but also the normal installation method is fine. This project is developed in version 7.3.0 of NodeJS and is not yet tested on other versions. You also might like to use Git to copy project to your computer.

#### NVM installation for Debian Linux:
First download and install NVM:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
Then install NodeJS using NVM. YOU MIGHT NEED TO LOGOUT AND BACK IN TO EXECUTE THIS COMMAND!:

```
nvm install stable
```
### Installing

This dashboard is pretty useless without the API. But never the less, you can use manual data. Dashboard will send GET querys to http://localhost:8000. This tutorial will only show how to install front-end.

Creating new folder:

```
mkdir cat-analytics-dashboard-bundle
```
Going into that directory:
```
cd cat-analytics-dashboard-bundle
```
Cloning this project to that directory:

```
git clone https://github.com/TheKooxd/cat-analytics-dashboard.git
```
Going into project directory:
```
cd cat-analytics-dashboard
```
Installing required node packages:

```
npm install
```

Now you can try running the webpack-server by using this command:
```
npm start
```
## Built With

* [React](https://facebook.github.io/react/) - UI build with React.
* [Axios](https://github.com/mzabriskie/axios) - GET requests with Axios.
* [ChartJS](http://www.chartjs.org/) - Graphs build with ChartJS.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/TheKooxd/cat-analytics-dashboard/tags).

## Authors

* **Nikolas Kohvakka** - *All the work* - [TheKooxd](https://github.com/TheKooxd)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* I hate cats after this.
