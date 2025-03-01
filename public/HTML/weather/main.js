// 天气配置对象
const WEATHER_CONFIG = {
    sunny: {
        icon: 'wb_sunny',
        description: 'Sunny and bright day',
        temperature: '25°C',
        background: 'linear-gradient(135deg, #ff9800, #ffd54f)',
        effects: ['sun-effect']
    },
    cloudy: {
        icon: 'cloud',
        description: 'Cloudy with gentle breeze',
        temperature: '20°C',
        background: 'linear-gradient(135deg, #78909c, #b0bec5)',
        effects: ['cloud-container']
    },
    rainy: {
        icon: 'grain',
        description: 'Rain showers',
        temperature: '18°C',
        background: 'linear-gradient(135deg, #42a5f5, #90caf9)',
        effects: ['cloud-container', 'rain-container', 'wind-container', 'rainy-bg'],
        additionalClasses: { cloud: 'windy' }
    },
    snowy: {
        icon: 'ac_unit',
        description: 'Light snow falling',
        temperature: '-2°C',
        background: 'linear-gradient(135deg, #90a4ae, #cfd8dc)',
        effects: ['cloud-container', 'snow-container', 'snowy-bg']
    }
};

// 天气效果生成器
const WeatherEffects = {
    createRainDrops(count = 100) {
        return this.createElements('.rain-container', count, 'rain-drop');
    },

    createWindParticles(count = 30) {
        return this.createElements('.wind-container', count, 'wind-particle');
    },

    createElements(containerSelector, count, className) {
        const container = document.querySelector(containerSelector);
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.className = className;
            fragment.appendChild(element);
        }
        
        container.appendChild(fragment);
    },

    createBackgroundRain(count = 100) {
        const container = document.createElement('div');
        container.className = 'rainy-bg';
        
        for (let i = 0; i < count; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'rain-drop-bg';
            container.appendChild(raindrop);
        }
        
        document.querySelector('.weather-effect').appendChild(container);
    },

    createBackgroundSnow(count = 50) {
        const container = document.createElement('div');
        container.className = 'snowy-bg';
        
        for (let i = 0; i < count; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake-bg';
            container.appendChild(snowflake);
        }
        
        document.querySelector('.weather-effect').appendChild(container);
    }
};

// 天气UI控制器
class WeatherController {
    constructor() {
        this.weatherIcon = document.getElementById('weather-icon');
        this.weatherDescription = document.getElementById('weather-description');
        this.temperatureValue = document.getElementById('temperature-value');
        this.effectElements = {
            'sun-effect': document.querySelector('.sun-effect'),
            'cloud-container': document.querySelector('.cloud-container'),
            'rain-container': document.querySelector('.rain-container'),
            'snow-container': document.querySelector('.snow-container'),
            'wind-container': document.querySelector('.wind-container'),
            'rainy-bg': document.querySelector('.rainy-bg'),
            'snowy-bg': document.querySelector('.snowy-bg')
        };
        this.clouds = document.querySelectorAll('.cloud');
        
        this.initializeEffects();
        this.initializeEventListeners();
    }

    initializeEffects() {
        WeatherEffects.createRainDrops();
        WeatherEffects.createWindParticles();
        WeatherEffects.createBackgroundRain();
        WeatherEffects.createBackgroundSnow();
    }

    initializeEventListeners() {
        document.querySelectorAll('.weather-btn').forEach(button => {
            button.addEventListener('click', (e) => this.handleWeatherChange(e));
        });
    }

    handleWeatherChange(event) {
        const weatherType = event.currentTarget.dataset.weather;
        const config = WEATHER_CONFIG[weatherType];
        
        this.updateUI(config);
        this.updateEffects(config);
        this.updateButtonStates(event.currentTarget);
    }

    updateUI(config) {
        this.weatherIcon.textContent = config.icon;
        this.weatherDescription.textContent = config.description;
        this.temperatureValue.textContent = config.temperature;
        document.body.style.background = config.background;
        
        // 刷新图标动画
        this.weatherIcon.classList.remove('animated');
        void this.weatherIcon.offsetWidth; // 触发重绘
        this.weatherIcon.classList.add('animated');
    }

    updateEffects(config) {
        // 重置所有效果
        Object.values(this.effectElements).forEach(element => {
            element.classList.remove('active');
        });
        this.clouds.forEach(cloud => cloud.classList.remove('windy'));

        // 激活配置的效果
        config.effects.forEach(effectName => {
            this.effectElements[effectName]?.classList.add('active');
        });

        // 添加额外的类
        if (config.additionalClasses) {
            Object.entries(config.additionalClasses).forEach(([element, className]) => {
                if (element === 'cloud') {
                    this.clouds.forEach(cloud => cloud.classList.add(className));
                }
            });
        }
    }

    updateButtonStates(activeButton) {
        document.querySelectorAll('.weather-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new WeatherController();
});