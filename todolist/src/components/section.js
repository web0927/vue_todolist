import Vue from 'vue';

export default {
    render() {
        return<section>
            <h2>正在进行 <span id="todocount">0</span></h2>
            <ol id="todolist" class="demo-box">
                <li><input type="checkbox" />{this.name}<a>-</a></li>
                {/* <li >
                    <input type="checkbox" />
                    <p>
                        <input type="text"/>
                    </p>
                    <a>-</a>
                </li> */}
            </ol>
            <h2>已经完成 <span id="donecount">1</span></h2>
            <ul id="donelist">
                <li><input type="checkbox" />{this.name}<a>-</a></li>
                {/* <li >
                    <input type="checkbox"/>
                    <p >我的
                        <input type="text" />
                    </p>
                    <a >-</a>
                </li> */}
            </ul>
        </section>
    },
    data() {
        return {
            name:'我得'
        }
    }
}