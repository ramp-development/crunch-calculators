"use strict";
(() => {
    var pe = Object.defineProperty,
        de = Object.defineProperties;
    var fe = Object.getOwnPropertyDescriptors;
    var R = Object.getOwnPropertySymbols;
    var be = Object.prototype.hasOwnProperty,
        ye = Object.prototype.propertyIsEnumerable;
    var q = (e, t, n) => (t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
        D = (e, t) => {
            for (var n in t || (t = {})) be.call(t, n) && q(e, n, t[n]);
            if (R) for (var n of R(t)) ye.call(t, n) && q(e, n, t[n]);
            return e;
        },
        Y = (e, t) => de(e, fe(t));
    var M = (e, t) => {
        e.sort(function (o, r) {
            return r.from - o.from;
        });
        let n = t;
        return e
            .map((o) => {
                let r = n - o.from <= 0 ? 0 : n - o.from;
                return (n -= r), Y(D({}, o), { taxAtBracket: r * o.rate });
            })
            .sort(function (o, r) {
                return o.from - r.from;
            });
    };
    var P = [
        { year: "2020-21", exemption: 12300, basicRate: { residential: 0.18, other: 0.1 }, higherRate: { residential: 0.28, other: 0.2 }, badr: 0.1, personalAllowance: 12500, basicBand: 37500, higherBand: 15e4 },
        { year: "2021-22", exemption: 12300, basicRate: { residential: 0.18, other: 0.1 }, higherRate: { residential: 0.28, other: 0.2 }, badr: 0.1, personalAllowance: 12570, basicBand: 37700, higherBand: 15e4 },
        { year: "2022-23", exemption: 12300, basicRate: { residential: 0.18, other: 0.1 }, higherRate: { residential: 0.28, other: 0.2 }, badr: 0.1, personalAllowance: 12570, basicBand: 37700, higherBand: 15e4 },
    ];
    var S = [
        { year: "2020-21", rates: { ordinary: 0.075, upper: 0.325, additional: 0.381 }, allowances: { dividends: 2e3, personal: 12500, limit: 1e5 }, bands: { basic: 37500, higher: 15e4 } },
        { year: "2021-22", rates: { ordinary: 0.075, upper: 0.325, additional: 0.381 }, allowances: { dividends: 2e3, personal: 12570, limit: 1e5 }, bands: { basic: 37700, higher: 15e4 } },
        { year: "2022-23", rates: { ordinary: 0.0875, upper: 0.3375, additional: 0.3935 }, allowances: { dividends: 2e3, personal: 12570, limit: 1e5 }, bands: { basic: 37700, higher: 15e4 } },
    ];
    var A = [
        {
            year: "2020-21",
            countries: [
                {
                    name: "scotland",
                    brackets: {
                        allowance: { name: "allowance", rate: 0, from: 0, band: 12500 },
                        starter: { name: "starter", rate: 0.19, from: 12500 },
                        basic: { name: "basic", rate: 0.2, from: 14585 },
                        intermediate: { name: "intermediate", rate: 0.21, from: 25158 },
                        higher: { name: "higher", rate: 0.41, from: 43430 },
                        additional: { name: "additional", rate: 0.46, from: 15e4 },
                    },
                },
                {
                    name: "others",
                    brackets: {
                        allowance: { name: "allowance", rate: 0, from: 0, band: 12500, incomeLimit: 1e5 },
                        basic: { name: "basic", rate: 0.2, band: 37500 },
                        higher: { name: "higher", rate: 0.4 },
                        additional: { name: "additional", rate: 0.45, from: 15e4 },
                    },
                },
            ],
        },
        {
            year: "2021-22",
            countries: [
                {
                    name: "scotland",
                    brackets: {
                        allowance: { name: "allowance", rate: 0, from: 0, band: 12570 },
                        starter: { name: "starter", rate: 0.19, from: 12570 },
                        basic: { name: "basic", rate: 0.2, from: 14667 },
                        intermediate: { name: "intermediate", rate: 0.21, from: 25296 },
                        higher: { name: "higher", rate: 0.41, from: 43662 },
                        additional: { name: "additional", rate: 0.46, from: 15e4 },
                    },
                },
                {
                    name: "others",
                    brackets: {
                        allowance: { name: "allowance", rate: 0, from: 0, band: 12570, incomeLimit: 1e5 },
                        basic: { name: "basic", rate: 0.2, band: 37700 },
                        higher: { name: "higher", rate: 0.4 },
                        additional: { name: "additional", rate: 0.45, from: 15e4 },
                    },
                },
            ],
        },
        {
            year: "2022-23",
            countries: [
                {
                    name: "scotland",
                    brackets: {
                        allowance: { name: "allowance", rate: 0, from: 0, band: 12570 },
                        starter: { name: "starter", rate: 0.19, from: 12570 },
                        basic: { name: "basic", rate: 0.2, from: 14732 },
                        intermediate: { name: "intermediate", rate: 0.21, from: 25688 },
                        higher: { name: "higher", rate: 0.41, from: 43662 },
                        additional: { name: "additional", rate: 0.46, from: 15e4 },
                    },
                },
                {
                    name: "others",
                    brackets: {
                        allowance: { name: "allowance", rate: 0, from: 0, band: 12570, incomeLimit: 1e5 },
                        basic: { name: "basic", rate: 0.2, band: 37700 },
                        higher: { name: "higher", rate: 0.4 },
                        additional: { name: "additional", rate: 0.45, from: 15e4 },
                    },
                },
            ],
        },
    ];
    var F = [
        { year: "2020-21", pre10: { car: 0.45, van: 0.45, motorcycle: 0.24, bicycle: 0.2 }, post10: { car: 0.25, van: 0.25, motorcycle: 0.24, bicycle: 0.2 } },
        { year: "2021-22", pre10: { car: 0.45, van: 0.45, motorcycle: 0.24, bicycle: 0.2 }, post10: { car: 0.25, van: 0.25, motorcycle: 0.24, bicycle: 0.2 } },
        { year: "2022-23", pre10: { car: 0.45, van: 0.45, motorcycle: 0.24, bicycle: 0.2 }, post10: { car: 0.25, van: 0.25, motorcycle: 0.24, bicycle: 0.2 } },
    ];
    var V = [
        {
            year: "2020-21",
            figures: { UPL: 5e4, PT: 9500, SPT: 6475, LPL: 9500, eNIC: 4e3 },
            ni: {
                class1: { employee: { belowLEL: 0, LELtoPT: 0, PTtoUEL: 0.12, aboveUEL: 0.02 }, employer: { belowST: 0, aboveST: 0.138, STtoUEL: 0 } },
                class1a: { employer: 0.138 },
                class2: { belowSPT: 0, SPTtoLPL: 3.05, LPLtoUPL: 3.05, aboveUPL: 3.05 },
                class4: { belowSPT: 0, SPTtoLPL: 0, LPLtoUPL: 0.09, aboveUPL: 0.02 },
            },
        },
        {
            year: "2021-22",
            figures: { UPL: 50270, PT: 9568, SPT: 6515, LPL: 9568, eNIC: 4e3 },
            ni: {
                class1: { employee: { belowLEL: 0, LELtoPT: 0, PTtoUEL: 0.12, aboveUEL: 0.02 }, employer: { belowST: 0, aboveST: 0.138, STtoUEL: 0 } },
                class1a: { employer: 0.138 },
                class2: { belowSPT: 0, SPTtoLPL: 3.05, LPLtoUPL: 3.05, aboveUPL: 3.05 },
                class4: { belowSPT: 0, SPTtoLPL: 0, LPLtoUPL: 0.09, aboveUPL: 0.02 },
            },
        },
        {
            year: "2022-23",
            figures: { UPL: 50270, PT: 12570, SPT: 6725, LPL: 11908, eNIC: 5e3 },
            ni: {
                class1: { employee: { belowLEL: 0, LELtoPT: 0, PTtoUEL: 0.1325, aboveUEL: 0.0325 }, employer: { belowST: 0, aboveST: 0.1505, STtoUEL: 0 } },
                class1a: { employer: 0.1453 },
                class2: { belowSPT: 0, SPTtoLPL: 0, LPLtoUPL: 3.15, aboveUPL: 3.15 },
                class4: { belowSPT: 0, SPTtoLPL: 0, LPLtoUPL: 0.1025, aboveUPL: 0.0325 },
            },
        },
    ];
    var k = [
        {
            year: "2020-21",
            studentLoans: { plan1: { threshold: 19390, rate: 0.09 }, plan2: { threshold: 26575, rate: 0.09 }, plan4: { threshold: 0, rate: 0 } },
            postgraduateLoans: { england: { threshold: 21e3, rate: 0.06 }, scotland: { threshold: 18330, rate: 0.09 }, wales: { threshold: 21e3, rate: 0.06 }, "northern-ireland": { threshold: 18330, rate: 0.09 } },
        },
        {
            year: "2021-22",
            studentLoans: { plan1: { threshold: 19895, rate: 0.09 }, plan2: { threshold: 27295, rate: 0.09 }, plan4: { threshold: 25e3, rate: 0.09 } },
            postgraduateLoans: { england: { threshold: 21e3, rate: 0.06 }, scotland: { threshold: 18330, rate: 0.09 }, wales: { threshold: 21e3, rate: 0.06 }, "northern-ireland": { threshold: 18330, rate: 0.09 } },
        },
        {
            year: "2022-23",
            studentLoans: { plan1: { threshold: 20195, rate: 0.09 }, plan2: { threshold: 27295, rate: 0.09 }, plan4: { threshold: 25375, rate: 0.09 } },
            postgraduateLoans: { england: { threshold: 21e3, rate: 0.06 }, scotland: { threshold: 18330, rate: 0.09 }, wales: { threshold: 21e3, rate: 0.06 }, "northern-ireland": { threshold: 18330, rate: 0.09 } },
        },
    ];
    var w = (e, t) => e.find((n) => n.year === t);
    var C = (e, t) => {
        let n;
        switch (e) {
            case "capitalGains":
                n = P;
                break;
            case "dividends":
                n = S;
                break;
            case "incomeTax":
                n = A;
                break;
            case "mileage":
                n = F;
                break;
            case "nationalInsurance":
                n = V;
                break;
            case "studentLoans":
                n = k;
                break;
        }
        return w(n, t);
    };
    var v = (e, t) => {
        let n = { style: "currency", currency: "GBP" };
        return t || (n.maximumSignificantDigits = 21), new Intl.NumberFormat("gb-GB", n).format(e);
    };
    var H = (e, t) => {
        for (let n of Object.values(e)) {
            n.render();
            let { toggleOptions: a } = n;
            a &&
                a.forEach((o) => {
                    let r = o.option.name,
                        l = n.nodeList.find((s) => s.value === r);
                    e[o.query.name].getValue() === o.query.value ? (l.disabled = !1) : ((l.disabled = !0), l.checked === !0 && n.clear());
                });
        }
        for (let n of Object.values(t)) n.render();
    };
    var h = (e, t, n, a) => {
        if (!e) return;
        let o = n(e),
            r = (l) => {
                let p = o.year.getValue().toString(),
                    s = w(t, p);
                if (!s) return;
                let f = a(l, o, s);
                H(o, f);
            };
        r(e),
            document.addEventListener("renderCalc", (l) => {
                let { name: p, item: s } = l.detail;
                p === "change" && s.type === "number" && s.getValue() === "" && s.setValue("0"), r(e);
            });
    };
    var E = (e, t) => {
        if (!e) return;
        let n = e.closest('[data-calc="wrapper"]');
        n && (t ? n.style.removeProperty("display") : (n.style.display = "none"));
    };
    var i = class {
        constructor(t, n) {
            (this.input = n.form[t]),
                (this.isNodeList = this.input instanceof NodeList),
                (this.nodeList = this.isNodeList ? [...this.input] : [this.input]),
                (this.type = this.nodeList[0].type),
                n.visibleIf && (this.visibleIf = n.visibleIf),
                n.toggleOptions && (this.toggleOptions = n.toggleOptions);
            let a = this.getValue();
            if (((this.defaultValue = a.toString().length === 0 ? 0 : a), !this.isNodeList)) {
                let o = this.input.getAttribute("data-calc-default");
                o && (this.defaultValue = o);
            }
            (this.defaultValue === 0 || this.defaultValue) && this.setValue(this.defaultValue),
                this.setVisibility(),
                this.nodeList.forEach((o) => {
                    o.addEventListener("keyup", () => {
                        document.dispatchEvent(new CustomEvent("renderCalc", { detail: { name: "keyup", item: this } }));
                    }),
                        o.addEventListener("change", () => {
                            document.dispatchEvent(new CustomEvent("renderCalc", { detail: { name: "change", item: this } }));
                        }),
                        this.type === "number" &&
                            (o.addEventListener("focus", () => {
                                this.getValueAsNumber() === 0 && this.setValue("");
                            }),
                            o.addEventListener("focusout", () => {
                                this.getValueAsNumber() === 0 && this.setValue("0");
                            }));
                });
        }
        getValue() {
            return this.type === "checkbox" ? this.input.checked : this.input.value;
        }
        getValueAsNumber() {
            if (this.type !== "number") return NaN;
            let { valueAsNumber: t } = this.input;
            return isNaN(t) ? 0 : t;
        }
        getValueAsBoolean() {
            return this.type !== "checkbox" ? !1 : this.input.checked;
        }
        setValue(t) {
            switch (this.type) {
                case "number":
                    this.input.value = t.toString();
                    break;
                case "select-one":
                    this.input.value = t.toString();
                    break;
                case "checkbox":
                    this.input.checked = t;
                    break;
                case "radio":
                    this.input.value = t.toString();
                    break;
            }
        }
        setVisibility() {
            let t = this.nodeList[0];
            t && this.visibleIf && E(t, this.visibleIf());
        }
        toDefault() {
            this.defaultValue && this.setValue(this.defaultValue);
        }
        clear() {
            switch (this.type) {
                case "number":
                    this.input.value = "0";
                    break;
                case "select-one":
                    this.input.value = this.input.options[0].value;
                    break;
                case "checkbox":
                    this.input.checked = !1;
                    break;
                case "radio":
                    this.nodeList.forEach((t) => {
                        t.checked = !1;
                    });
                    break;
            }
        }
        render() {
            this.setVisibility();
        }
    };
    var u = class {
        constructor(t, n) {
            var a;
            (this.element = n.form.querySelector(`[data-calc="${t}"]`)),
                (this.type = ((a = this.element) == null ? void 0 : a.dataset.calcType) === "text" ? "text" : "currency"),
                (this.value = n.value),
                n.visibleIf && (this.visibleIf = n.visibleIf),
                n.labels && (this.labels = n.labels);
        }
        getValue() {
            return this.value();
        }
        getValueAsNumber() {
            return Number(this.value());
        }
        setValue() {
            if (this.element)
                switch (this.type) {
                    case "currency":
                        this.element.textContent = v(Number(this.value()), !0);
                        break;
                    case "text":
                        this.element.textContent = this.value().toString();
                        break;
                }
        }
        setVisibility() {
            this.element && this.visibleIf && E(this.element, this.visibleIf());
        }
        getLabel() {
            if (!this.element) return "";
            let t = this.element.closest('[data-calc="wrapper"]');
            if (!t) return "";
            let n = t.querySelector("label");
            return n && n.textContent ? n.textContent : "";
        }
        setLabel() {
            if (!this.element) return;
            let t = this.element.closest('[data-calc="wrapper"]');
            if (!t) return;
            let n = t.querySelector("label");
            n && this.labels && (n.textContent = this.labels());
        }
        render() {
            this.setLabel(), this.setValue();
        }
    };
    var j = (e) => ({ year: new i("year", { form: e }), dividendIncome: new i("dividend-income", { form: e }), otherIncome: new i("other-income", { form: e }) });
    var W = (e, t) => {
        let n = e.dividendIncome,
            a = (() => {
                let { rates: r, allowances: l, bands: p } = t,
                    { dividendIncome: s } = e,
                    { otherIncome: f } = e,
                    y = s + f,
                    L = f <= l.personal ? l.personal - f : 0,
                    c = s - L - l.dividends;
                if (c <= 0) return 0;
                let g = l.personal + p.basic,
                    b = f < g ? g - f - l.dividends : 0,
                    d = b === 0 ? 0 : c >= b ? b * r.ordinary : c * r.ordinary,
                    m = y > p.higher ? p.higher - f - l.dividends : y - p.basic - l.personal <= 0 ? 0 : y - p.basic - l.personal,
                    x = m === 0 ? 0 : c > m ? m * r.upper : (c - b) * r.upper,
                    T = c - b - m <= 0 ? 0 : (c - b - m) * r.additional;
                return d + x + T;
            })(),
            o = e.dividendIncome - a;
        return { dividendProfits: n, taxToPay: a, profitAfterTax: o };
    };
    var $ = (e, t, n) => {
        if (!t) return;
        let a = W({ dividendIncome: t.dividendIncome.getValueAsNumber(), otherIncome: t.otherIncome.getValueAsNumber() }, n);
        return {
            dividendProfits: new u("dividend-profits", { form: e, value: () => a.dividendProfits }),
            taxToPay: new u("tax-to-pay", { form: e, value: () => a.taxToPay }),
            allowance: new u("allowance", { form: e, value: () => "\xA32,000 tax-free dividend allowance" }),
            profitAfterTax: new u("profit-after-tax", { form: e, value: () => a.profitAfterTax }),
        };
    };
    var z = (e) => {
        e && h(e, S, j, $);
    };
    var _ = (e) => ({ year: new i("year", { form: e }), how: new i("how", { form: e }), capitalGains: new i("capital-gains", { form: e }), otherIncome: new i("other-income", { form: e }) });
    var J = (e, t) => {
        let n = e.capitalGains,
            a = (() => {
                let { exemption: r, basicBand: l, personalAllowance: p, basicRate: s, higherRate: f, badr: y } = t,
                    L = e.otherIncome <= l ? e.otherIncome : l,
                    c = p + l - L;
                c = c >= l ? l : c;
                let g = e.capitalGains - r,
                    b = g >= c ? c : g,
                    d = g - b,
                    m = 0;
                switch (e.how) {
                    case "property":
                        m = b * s.residential + d * f.residential;
                        break;
                    case "shares":
                        m = b * y + d * y;
                        break;
                    default:
                        m = b * s.other + d * f.other;
                }
                return m;
            })(),
            o = e.capitalGains + e.otherIncome - a;
        return { profit: n, taxToPay: a, profitAfterTax: o };
    };
    var K = (e, t, n) => {
        if (!t) return;
        let a = J({ how: t.how.getValue(), capitalGains: t.capitalGains.getValueAsNumber(), otherIncome: t.otherIncome.getValueAsNumber() }, n);
        return {
            profit: new u("profit", {
                form: e,
                value: () => a.profit,
                labels: () => {
                    let r = "";
                    switch (t.how.getValue()) {
                        case "shares":
                            r = "shares";
                            break;
                        case "property":
                            r = "property";
                            break;
                        case "crypto":
                            r = "cryptocurrencies";
                            break;
                        case "other":
                            r = "other assets";
                            break;
                    }
                    return `Your profit from ${r}`;
                },
            }),
            allowance: new u("allowance", { form: e, value: () => `${v(n.exemption, !1)} tax-free CGT allowance` }),
            taxToPay: new u("tax-to-pay", { form: e, value: () => a.taxToPay }),
            profitAfterTax: new u("profit-after-tax", { form: e, value: () => a.profitAfterTax }),
        };
    };
    var Q = (e) => {
        e && h(e, P, _, K);
    };
    var X = (e) => {
        let t = { year: new i("year", { form: e }), country: new i("country", { form: e }), isEmployed: new i("is-employed", { form: e }), isSelfEmployed: new i("is-self-employed", { form: e }) };
        return (
            (t.annualSalary = new i("annual-salary", { form: e, visibleIf: () => !!t.isEmployed.getValue() })),
            (t.selfEmployedIncome = new i("self-employed-income", { form: e, visibleIf: () => !!t.isSelfEmployed.getValue() })),
            (t.selfEmployedExpenses = new i("self-employed-expenses", { form: e, visibleIf: () => !!t.isSelfEmployed.getValue() })),
            t
        );
    };
    var O = (e, t) => (e >= t ? t : e);
    var B = (e, t) => (e <= t ? t : e);
    var G = (e, t) => {
        let { ni: n } = t,
            { UPL: a, PT: o, SPT: r, LPL: l, eNIC: p } = t.figures,
            s = (() => {
                let m = 0;
                return e.isEmployed && (m += e.annualSalary), e.isSelfEmployed && (m += e.selfEmployedIncome - O(e.selfEmployedExpenses, 1e3)), B(m, 0);
            })(),
            f = (() => {
                if (!e.isEmployed) return 0;
                let { employee: m, employer: x } = n.class1;
                return s < o ? 0 : s > a ? (a - o) * m.PTtoUEL + (s - a) * m.aboveUEL : (s - o) * m.PTtoUEL;
            })(),
            y = (() => {
                if (!e.isSelfEmployed) return 0;
                let { belowSPT: m, SPTtoLPL: x, LPLtoUPL: T, aboveUPL: N } = n.class2;
                return s > r ? x * 52 : 0;
            })(),
            L = (() => {
                if (!e.isSelfEmployed) return 0;
                let { belowSPT: m, SPTtoLPL: x, LPLtoUPL: T, aboveUPL: N } = n.class4;
                return s < l ? 0 : s > a ? (a - l) * T + (s - a) * N : (s - l) * T;
            })(),
            c = f + y + L,
            { pathname: g } = window.location;
        if (!g.includes("/national-insurance")) return { totalEarnings: s, niClass1: f, niClass2: y, niClass4: L, niTotal: c };
        let b = (() => {
                let m = C("incomeTax", e.year);
                return U(
                    { year: e.year, country: e.country, isEmployed: e.isEmployed, isSelfEmployed: e.isSelfEmployed, annualSalary: e.annualSalary, selfEmployedIncome: e.selfEmployedIncome, selfEmployedExpenses: e.selfEmployedExpenses },
                    m
                ).incomeTax;
            })(),
            d = e.annualSalary - b - c;
        return { totalEarnings: s, niClass1: f, niClass2: y, niClass4: L, niTotal: c, incomeTax: b, remains: d };
    };
    var U = (e, t) => {
        let n = e.country === "scotland" ? "scotland" : "others",
            a = t.countries.find((c) => c.name === n),
            o = O(e.selfEmployedExpenses, 1e3),
            r = (() => {
                let c = 0;
                return e.isEmployed && (c += e.annualSalary), e.isSelfEmployed && (c += e.selfEmployedIncome - o), c;
            })(),
            p = (() => {
                let c = (() => {
                        let d = a == null ? void 0 : a.brackets.allowance.incomeLimit;
                        if (!d || d > e.annualSalary) return a == null ? void 0 : a.brackets.allowance.band;
                        let m = e.annualSalary - d;
                        return B(a.brackets.allowance.band - m / 2, 0);
                    })(),
                    g = [];
                for (let d of Object.values(a == null ? void 0 : a.brackets)) g.push(d);
                g.sort(function (d, m) {
                    return d.rate - m.rate;
                });
                let b = [];
                return (
                    g.forEach((d, m) => {
                        if (m === 0 && c === 0) return;
                        let x = 0;
                        n === "scotland" || d.from ? (x = d.from) : d.name === "basic" ? (x = c) : d.name === "higher" && (x = c + (a == null ? void 0 : a.brackets.basic.band)), b.push({ name: d.name, rate: d.rate, from: x });
                    }),
                    M(b, e.annualSalary)
                );
            })().reduce((c, g) => c + g.taxAtBracket, 0),
            { pathname: s } = window.location;
        if (!s.includes("/income-tax")) return { totalEarnings: r, incomeTax: p };
        let f = (() => {
                let c = C("nationalInsurance", e.year);
                return G(
                    { year: e.year, country: e.country, isEmployed: e.isEmployed, isSelfEmployed: e.isSelfEmployed, annualSalary: e.annualSalary, selfEmployedIncome: e.selfEmployedIncome, selfEmployedExpenses: e.selfEmployedExpenses },
                    c
                ).niTotal;
            })(),
            y = p + f,
            L = r - y;
        return { totalEarnings: r, incomeTax: p, nationalInsurance: f, taxToPay: y, remains: L };
    };
    var Z = (e, t, n) => {
        if (!t) return;
        let a = U(
            {
                year: t.year.getValue(),
                country: t.country.getValue(),
                isEmployed: t.isEmployed.getValueAsBoolean(),
                isSelfEmployed: t.isSelfEmployed.getValueAsBoolean(),
                annualSalary: t.annualSalary.getValueAsNumber(),
                selfEmployedIncome: t.selfEmployedIncome.getValueAsNumber(),
                selfEmployedExpenses: t.selfEmployedExpenses.getValueAsNumber(),
            },
            n
        );
        return {
            totalEarnings: new u("total-earnings", { form: e, value: () => a.totalEarnings }),
            nationalInsurance: new u("national-insurance", { form: e, value: () => a.nationalInsurance }),
            incomeTax: new u("income-tax", { form: e, value: () => a.incomeTax }),
            taxToPay: new u("tax-to-pay", { form: e, value: () => a.taxToPay }),
            remains: new u("remains", { form: e, value: () => a.remains }),
        };
    };
    var ee = (e) => {
        e && h(e, A, X, Z);
    };
    var te = (e) => {
        let t = { year: new i("year", { form: e }), country: new i("country", { form: e }), isEmployed: new i("is-employed", { form: e }), isSelfEmployed: new i("is-self-employed", { form: e }) };
        return (
            (t.annualSalary = new i("annual-salary", { form: e, visibleIf: () => t.isEmployed.getValueAsBoolean() })),
            (t.selfEmployedIncome = new i("self-employed-income", { form: e, visibleIf: () => t.isSelfEmployed.getValueAsBoolean() })),
            (t.selfEmployedExpenses = new i("self-employed-expenses", { form: e, visibleIf: () => t.isSelfEmployed.getValueAsBoolean() })),
            t
        );
    };
    var ne = (e, t, n) => {
        if (!t) return;
        let a = G(
            {
                year: t.year.getValue(),
                country: t.country.getValue(),
                isEmployed: t.isEmployed.getValueAsBoolean(),
                isSelfEmployed: t.isSelfEmployed.getValueAsBoolean(),
                annualSalary: t.annualSalary.getValueAsNumber() + t.selfEmployedIncome.getValueAsNumber(),
                selfEmployedIncome: t.selfEmployedIncome.getValueAsNumber(),
                selfEmployedExpenses: t.selfEmployedExpenses.getValueAsNumber(),
            },
            n
        );
        return {
            totalEarnings: new u("total-earnings", { form: e, value: () => a.totalEarnings }),
            allowance: new u("allowance", { form: e, value: () => "\xA31,000 tax-free Trading Allowance", visibleIf: () => t.isSelfEmployed.getValueAsBoolean() }),
            niClass1: new u("ni-class1", { form: e, value: () => a.niClass1, visibleIf: () => t.isEmployed.getValueAsBoolean() }),
            niClass2: new u("ni-class2", { form: e, value: () => a.niClass2, visibleIf: () => t.isSelfEmployed.getValueAsBoolean() }),
            niClass4: new u("ni-class4", { form: e, value: () => a.niClass4, visibleIf: () => t.isSelfEmployed.getValueAsBoolean() }),
            niTotal: new u("ni-total", { form: e, value: () => a.niTotal }),
            incomeTax: new u("income-tax", { form: e, value: () => a.incomeTax }),
            remains: new u("remains", { form: e, value: () => a.remains }),
        };
    };
    var ae = (e) => {
        e && h(e, V, te, ne);
    };
    var re = (e) => {
        let t = { year: new i("year", { form: e }), own: new i("own", { form: e }) };
        return (
            (t.work = new i("work", { form: e, visibleIf: () => t.own.getValue() === "yes" })),
            (t.type = new i("type", { form: e, visibleIf: () => (t.work.visibleIf ? t.work.visibleIf() && t.work.getValue() === "yes" : !1) })),
            (t.miles = new i("miles", { form: e, visibleIf: () => (t.type.visibleIf ? t.type.visibleIf() && t.type.getValue() !== "" : !1) })),
            t
        );
    };
    var oe = (e, t) => ({
        claim: (() => {
            if (e.own !== "yes" || e.work !== "yes" || !e.type) return 0;
            let a = e.miles >= 1e4 ? 1e4 : e.miles,
                o = e.miles >= 1e4 ? e.miles - 1e4 : 0,
                r = t.pre10[e.type] * a,
                l = t.post10[e.type] * o;
            return r + l;
        })(),
    });
    var le = (e, t, n) => {
        if (!t) return;
        let a = oe({ own: t.own.getValue(), work: t.work.getValue(), type: t.type.getValue(), miles: t.miles.getValueAsNumber() }, n);
        return { claim: new u("claim", { form: e, value: () => a.claim }) };
    };
    var ie = (e) => {
        e && h(e, F, re, le);
    };
    var se = (e) => {
        let t = { year: new i("year", { form: e }), isStudent: new i("is-student", { form: e }), isPostGraduate: new i("is-post-graduate", { form: e }) };
        return (
            (t.studentLoanPlan = new i("student-loan-plan", { form: e, visibleIf: () => !!t.isStudent.getValue(), toggleOptions: [{ option: { name: "plan4" }, query: { name: "postGraduateLoanCountry", value: "scotland" } }] })),
            (t.postGraduateLoanCountry = new i("post-graduate-loan-country", { form: e, visibleIf: () => !!t.isPostGraduate.getValue() })),
            (t.allIncome = new i("all-income", {
                form: e,
                visibleIf: () => {
                    let n = !!t.isStudent.getValue(),
                        a = !!t.isPostGraduate.getValue();
                    return !n && !a ? !1 : !!((n && t.studentLoanPlan.getValue() !== "") || (a && t.postGraduateLoanCountry.getValue() !== ""));
                },
            })),
            t
        );
    };
    var ue = (e, t) => {
        let n = (() => {
                if (!e.isStudent || !e.studentLoanPlan || (e.studentLoanPlan === "plan4" && e.postGraduateLoanCountry !== "scotland")) return 0;
                let { threshold: r, rate: l } = t.studentLoans[e.studentLoanPlan];
                return e.allIncome >= r ? (e.allIncome - r) * l : 0;
            })(),
            a = (() => {
                if (!e.isPostGraduate || !e.postGraduateLoanCountry) return 0;
                let { threshold: r, rate: l } = t.postgraduateLoans[e.postGraduateLoanCountry];
                return e.allIncome >= r ? (e.allIncome - r) * l : 0;
            })(),
            o = (() => n + a)();
        return { studentLoanTotal: n, postGraduateTotal: a, loanTotal: o };
    };
    var ce = (e, t, n) => {
        if (!t) return;
        let a = t.isStudent.getValueAsBoolean(),
            o = t.isPostGraduate.getValueAsBoolean(),
            r = t.studentLoanPlan.getValue(),
            l = t.postGraduateLoanCountry.getValue(),
            p = ue({ allIncome: t.allIncome.getValueAsNumber(), isStudent: a, isPostGraduate: o, studentLoanPlan: r, postGraduateLoanCountry: l }, n);
        return {
            studentLoanTotal: new u("student-loan-total", { form: e, value: () => p.studentLoanTotal, visibleIf: () => !!a && !!r }),
            postGraduateTotal: new u("post-graduate-total", { form: e, value: () => p.postGraduateTotal, visibleIf: () => !!o && !!l }),
            loanTotal: new u("loan-total", { form: e, value: () => p.loanTotal }),
        };
    };
    var me = (e) => {
        e && h(e, k, se, ce);
    };
    window.Webflow || (window.Webflow = []);
    window.Webflow.push(() => {
        let e = document.querySelector('[data-calc="wrapper"]');
        [...(e == null ? void 0 : e.querySelectorAll(".calculator-input_group label"))].forEach((l) => {
            let p = l.getAttribute("for");
            if (p) {
                let s = p.replace(/(-)([0-9])+/g, "");
                l.setAttribute("for", s);
            } else {
                let s = l.querySelector("span"),
                    f = s.getAttribute("for");
                if (f) {
                    let y = f.replace(/(-)([0-9])+/g, "");
                    s.setAttribute("for", y);
                }
            }
        }),
            [...(e == null ? void 0 : e.querySelectorAll("input, select"))].forEach((l) => {
                let p = l.id.replace(/(-)([0-9])+/g, "");
                (l.id = p), l.type !== "radio" && (l.name = p);
            });
        let { pathname: a } = window.location,
            o = a.match(/[^\/]+/g)[1],
            r = document.querySelector(`[data-calc="wrapper"] [data-calc-name="${o}"]`);
        r &&
            (a.includes("/capital-gains") && Q(r),
            a.includes("/dividend-tax") && z(r),
            a.includes("/income-tax") && ee(r),
            a.includes("/national-insurance") && ae(r),
            a.includes("/mileage") && ie(r),
            a.includes("/student-and-post-graduate-loan-repayments") && me(r));
    });
})();
