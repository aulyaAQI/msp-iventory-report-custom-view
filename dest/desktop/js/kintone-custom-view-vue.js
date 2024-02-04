/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $l(t, e) {
  const n = new Set(t.split(","));
  return e ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const Ce = {}, xr = [], vt = () => {
}, C_ = () => !1, bo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ll = (t) => t.startsWith("onUpdate:"), Ze = Object.assign, Fl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, x_ = Object.prototype.hasOwnProperty, _e = (t, e) => x_.call(t, e), re = Array.isArray, Nr = (t) => Hi(t) === "[object Map]", Eo = (t) => Hi(t) === "[object Set]", Ou = (t) => Hi(t) === "[object Date]", se = (t) => typeof t == "function", Le = (t) => typeof t == "string", Cn = (t) => typeof t == "symbol", Ae = (t) => t !== null && typeof t == "object", Cd = (t) => (Ae(t) || se(t)) && se(t.then) && se(t.catch), xd = Object.prototype.toString, Hi = (t) => xd.call(t), N_ = (t) => Hi(t).slice(8, -1), Nd = (t) => Hi(t) === "[object Object]", Wl = (t) => Le(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Fs = /* @__PURE__ */ $l(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, D_ = /-(\w)/g, Mr = wo((t) => t.replace(D_, (e, n) => n ? n.toUpperCase() : "")), P_ = /\B([A-Z])/g, zr = wo(
  (t) => t.replace(P_, "-$1").toLowerCase()
), Dd = wo((t) => t.charAt(0).toUpperCase() + t.slice(1)), ya = wo((t) => t ? `on${Dd(t)}` : ""), xn = (t, e) => !Object.is(t, e), Ws = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Xs = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ii = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Au;
const Pd = () => Au || (Au = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vl(t) {
  if (re(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = Le(r) ? M_(r) : Vl(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else if (Le(t) || Ae(t))
    return t;
}
const I_ = /;(?![^(]*\))/g, R_ = /:([^]+)/, k_ = /\/\*[^]*?\*\//g;
function M_(t) {
  const e = {};
  return t.replace(k_, "").split(I_).forEach((n) => {
    if (n) {
      const r = n.split(R_);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function jl(t) {
  let e = "";
  if (Le(t))
    e = t;
  else if (re(t))
    for (let n = 0; n < t.length; n++) {
      const r = jl(t[n]);
      r && (e += r + " ");
    }
  else if (Ae(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const $_ = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", L_ = /* @__PURE__ */ $l($_);
function Id(t) {
  return !!t || t === "";
}
function F_(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Ri(t[r], e[r]);
  return n;
}
function Ri(t, e) {
  if (t === e)
    return !0;
  let n = Ou(t), r = Ou(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Cn(t), r = Cn(e), n || r)
    return t === e;
  if (n = re(t), r = re(e), n || r)
    return n && r ? F_(t, e) : !1;
  if (n = Ae(t), r = Ae(e), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(t).length, s = Object.keys(e).length;
    if (i !== s)
      return !1;
    for (const o in t) {
      const a = t.hasOwnProperty(o), u = e.hasOwnProperty(o);
      if (a && !u || !a && u || !Ri(t[o], e[o]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function W_(t, e) {
  return t.findIndex((n) => Ri(n, e));
}
const yr = (t) => Le(t) ? t : t == null ? "" : re(t) || Ae(t) && (t.toString === xd || !se(t.toString)) ? JSON.stringify(t, Rd, 2) : String(t), Rd = (t, e) => e && e.__v_isRef ? Rd(t, e.value) : Nr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, i], s) => (n[va(r, s) + " =>"] = i, n),
    {}
  )
} : Eo(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => va(n))
} : Cn(e) ? va(e) : Ae(e) && !re(e) && !Nd(e) ? String(e) : e, va = (t, e = "") => {
  var n;
  return Cn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
let yt;
class kd {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = yt, !e && yt && (this.index = (yt.scopes || (yt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = yt;
      try {
        return yt = this, e();
      } finally {
        yt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    yt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    yt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Md(t) {
  return new kd(t);
}
function V_(t, e = yt) {
  e && e.active && e.effects.push(t);
}
function $d() {
  return yt;
}
function j_(t) {
  yt && yt.cleanups.push(t);
}
let Zn;
class Ul {
  constructor(e, n, r, i) {
    this.fn = e, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, V_(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      Nn();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (U_(n.computed), this._dirtyLevel >= 2))
          break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), Dn();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 2 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = Tn, n = Zn;
    try {
      return Tn = !0, Zn = this, this._runnings++, Tu(this), this.fn();
    } finally {
      Cu(this), this._runnings--, Zn = n, Tn = e;
    }
  }
  stop() {
    var e;
    this.active && (Tu(this), Cu(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function U_(t) {
  return t.value;
}
function Tu(t) {
  t._trackId++, t._depsLength = 0;
}
function Cu(t) {
  if (t.deps && t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Ld(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Ld(t, e) {
  const n = t.get(e);
  n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let Tn = !0, Xa = 0;
const Fd = [];
function Nn() {
  Fd.push(Tn), Tn = !1;
}
function Dn() {
  const t = Fd.pop();
  Tn = t === void 0 ? !0 : t;
}
function Hl() {
  Xa++;
}
function Bl() {
  for (Xa--; !Xa && el.length; )
    el.shift()();
}
function Wd(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const r = t.deps[t._depsLength];
    r !== e ? (r && Ld(r, t), t.deps[t._depsLength++] = e) : t._depsLength++;
  }
}
const el = [];
function Vd(t, e, n) {
  Hl();
  for (const r of t.keys())
    if (r._dirtyLevel < e && t.get(r) === r._trackId) {
      const i = r._dirtyLevel;
      r._dirtyLevel = e, i === 0 && (r._shouldSchedule = !0, r.trigger());
    }
  jd(t), Bl();
}
function jd(t) {
  for (const e of t.keys())
    e.scheduler && e._shouldSchedule && (!e._runnings || e.allowRecurse) && t.get(e) === e._trackId && (e._shouldSchedule = !1, el.push(e.scheduler));
}
const Ud = (t, e) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = t, n.computed = e, n;
}, eo = /* @__PURE__ */ new WeakMap(), Jn = Symbol(""), tl = Symbol("");
function ht(t, e, n) {
  if (Tn && Zn) {
    let r = eo.get(t);
    r || eo.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = Ud(() => r.delete(n))), Wd(
      Zn,
      i
    );
  }
}
function rn(t, e, n, r, i, s) {
  const o = eo.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (n === "length" && re(t)) {
    const u = Number(r);
    o.forEach((c, f) => {
      (f === "length" || !Cn(f) && f >= u) && a.push(c);
    });
  } else
    switch (n !== void 0 && a.push(o.get(n)), e) {
      case "add":
        re(t) ? Wl(n) && a.push(o.get("length")) : (a.push(o.get(Jn)), Nr(t) && a.push(o.get(tl)));
        break;
      case "delete":
        re(t) || (a.push(o.get(Jn)), Nr(t) && a.push(o.get(tl)));
        break;
      case "set":
        Nr(t) && a.push(o.get(Jn));
        break;
    }
  Hl();
  for (const u of a)
    u && Vd(
      u,
      2
    );
  Bl();
}
function H_(t, e) {
  var n;
  return (n = eo.get(t)) == null ? void 0 : n.get(e);
}
const B_ = /* @__PURE__ */ $l("__proto__,__v_isRef,__isVue"), Hd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Cn)
), xu = /* @__PURE__ */ q_();
function q_() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = he(this);
      for (let s = 0, o = this.length; s < o; s++)
        ht(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(he)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Nn(), Hl();
      const r = he(this)[e].apply(this, n);
      return Bl(), Dn(), r;
    };
  }), t;
}
function K_(t) {
  const e = he(this);
  return ht(e, "has", t), e.hasOwnProperty(t);
}
class Bd {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._shallow = n;
  }
  get(e, n, r) {
    const i = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? sb : zd : s ? Gd : Kd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const o = re(e);
    if (!i) {
      if (o && _e(xu, n))
        return Reflect.get(xu, n, r);
      if (n === "hasOwnProperty")
        return K_;
    }
    const a = Reflect.get(e, n, r);
    return (Cn(n) ? Hd.has(n) : B_(n)) || (i || ht(e, "get", n), s) ? a : De(a) ? o && Wl(n) ? a : a.value : Ae(a) ? i ? Yd(a) : Oo(a) : a;
  }
}
class qd extends Bd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, i) {
    let s = e[n];
    if (!this._shallow) {
      const u = $r(s);
      if (!to(r) && !$r(r) && (s = he(s), r = he(r)), !re(e) && De(s) && !De(r))
        return u ? !1 : (s.value = r, !0);
    }
    const o = re(e) && Wl(n) ? Number(n) < e.length : _e(e, n), a = Reflect.set(e, n, r, i);
    return e === he(i) && (o ? xn(r, s) && rn(e, "set", n, r) : rn(e, "add", n, r)), a;
  }
  deleteProperty(e, n) {
    const r = _e(e, n);
    e[n];
    const i = Reflect.deleteProperty(e, n);
    return i && r && rn(e, "delete", n, void 0), i;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Cn(n) || !Hd.has(n)) && ht(e, "has", n), r;
  }
  ownKeys(e) {
    return ht(
      e,
      "iterate",
      re(e) ? "length" : Jn
    ), Reflect.ownKeys(e);
  }
}
class G_ extends Bd {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const z_ = /* @__PURE__ */ new qd(), Y_ = /* @__PURE__ */ new G_(), Z_ = /* @__PURE__ */ new qd(
  !0
), ql = (t) => t, So = (t) => Reflect.getPrototypeOf(t);
function _s(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = he(t), s = he(e);
  n || (xn(e, s) && ht(i, "get", e), ht(i, "get", s));
  const { has: o } = So(i), a = r ? ql : n ? zl : ki;
  if (o.call(i, e))
    return a(t.get(e));
  if (o.call(i, s))
    return a(t.get(s));
  t !== i && t.get(e);
}
function bs(t, e = !1) {
  const n = this.__v_raw, r = he(n), i = he(t);
  return e || (xn(t, i) && ht(r, "has", t), ht(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Es(t, e = !1) {
  return t = t.__v_raw, !e && ht(he(t), "iterate", Jn), Reflect.get(t, "size", t);
}
function Nu(t) {
  t = he(t);
  const e = he(this);
  return So(e).has.call(e, t) || (e.add(t), rn(e, "add", t, t)), this;
}
function Du(t, e) {
  e = he(e);
  const n = he(this), { has: r, get: i } = So(n);
  let s = r.call(n, t);
  s || (t = he(t), s = r.call(n, t));
  const o = i.call(n, t);
  return n.set(t, e), s ? xn(e, o) && rn(n, "set", t, e) : rn(n, "add", t, e), this;
}
function Pu(t) {
  const e = he(this), { has: n, get: r } = So(e);
  let i = n.call(e, t);
  i || (t = he(t), i = n.call(e, t)), r && r.call(e, t);
  const s = e.delete(t);
  return i && rn(e, "delete", t, void 0), s;
}
function Iu() {
  const t = he(this), e = t.size !== 0, n = t.clear();
  return e && rn(t, "clear", void 0, void 0), n;
}
function ws(t, e) {
  return function(r, i) {
    const s = this, o = s.__v_raw, a = he(o), u = e ? ql : t ? zl : ki;
    return !t && ht(a, "iterate", Jn), o.forEach((c, f) => r.call(i, u(c), u(f), s));
  };
}
function Ss(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = he(i), o = Nr(s), a = t === "entries" || t === Symbol.iterator && o, u = t === "keys" && o, c = i[t](...r), f = n ? ql : e ? zl : ki;
    return !e && ht(
      s,
      "iterate",
      u ? tl : Jn
    ), {
      // iterator protocol
      next() {
        const { value: p, done: v } = c.next();
        return v ? { value: p, done: v } : {
          value: a ? [f(p[0]), f(p[1])] : f(p),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function hn(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function J_() {
  const t = {
    get(s) {
      return _s(this, s);
    },
    get size() {
      return Es(this);
    },
    has: bs,
    add: Nu,
    set: Du,
    delete: Pu,
    clear: Iu,
    forEach: ws(!1, !1)
  }, e = {
    get(s) {
      return _s(this, s, !1, !0);
    },
    get size() {
      return Es(this);
    },
    has: bs,
    add: Nu,
    set: Du,
    delete: Pu,
    clear: Iu,
    forEach: ws(!1, !0)
  }, n = {
    get(s) {
      return _s(this, s, !0);
    },
    get size() {
      return Es(this, !0);
    },
    has(s) {
      return bs.call(this, s, !0);
    },
    add: hn("add"),
    set: hn("set"),
    delete: hn("delete"),
    clear: hn("clear"),
    forEach: ws(!0, !1)
  }, r = {
    get(s) {
      return _s(this, s, !0, !0);
    },
    get size() {
      return Es(this, !0);
    },
    has(s) {
      return bs.call(this, s, !0);
    },
    add: hn("add"),
    set: hn("set"),
    delete: hn("delete"),
    clear: hn("clear"),
    forEach: ws(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Ss(
      s,
      !1,
      !1
    ), n[s] = Ss(
      s,
      !0,
      !1
    ), e[s] = Ss(
      s,
      !1,
      !0
    ), r[s] = Ss(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    r
  ];
}
const [
  Q_,
  X_,
  eb,
  tb
] = /* @__PURE__ */ J_();
function Kl(t, e) {
  const n = e ? t ? tb : eb : t ? X_ : Q_;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    _e(n, i) && i in r ? n : r,
    i,
    s
  );
}
const nb = {
  get: /* @__PURE__ */ Kl(!1, !1)
}, rb = {
  get: /* @__PURE__ */ Kl(!1, !0)
}, ib = {
  get: /* @__PURE__ */ Kl(!0, !1)
}, Kd = /* @__PURE__ */ new WeakMap(), Gd = /* @__PURE__ */ new WeakMap(), zd = /* @__PURE__ */ new WeakMap(), sb = /* @__PURE__ */ new WeakMap();
function ob(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ab(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ob(N_(t));
}
function Oo(t) {
  return $r(t) ? t : Gl(
    t,
    !1,
    z_,
    nb,
    Kd
  );
}
function lb(t) {
  return Gl(
    t,
    !1,
    Z_,
    rb,
    Gd
  );
}
function Yd(t) {
  return Gl(
    t,
    !0,
    Y_,
    ib,
    zd
  );
}
function Gl(t, e, n, r, i) {
  if (!Ae(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const o = ab(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? r : n
  );
  return i.set(t, a), a;
}
function sn(t) {
  return $r(t) ? sn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function $r(t) {
  return !!(t && t.__v_isReadonly);
}
function to(t) {
  return !!(t && t.__v_isShallow);
}
function Zd(t) {
  return sn(t) || $r(t);
}
function he(t) {
  const e = t && t.__v_raw;
  return e ? he(e) : t;
}
function Ao(t) {
  return Xs(t, "__v_skip", !0), t;
}
const ki = (t) => Ae(t) ? Oo(t) : t, zl = (t) => Ae(t) ? Yd(t) : t;
class Jd {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ul(
      () => e(this._value),
      () => Vs(this, 1),
      () => this.dep && jd(this.dep)
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = he(this);
    return (!e._cacheable || e.effect.dirty) && xn(e._value, e._value = e.effect.run()) && Vs(e, 2), Qd(e), e.effect._dirtyLevel >= 1 && Vs(e, 1), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
  // #endregion
}
function cb(t, e, n = !1) {
  let r, i;
  const s = se(t);
  return s ? (r = t, i = vt) : (r = t.get, i = t.set), new Jd(r, i, s || !i, n);
}
function Qd(t) {
  Tn && Zn && (t = he(t), Wd(
    Zn,
    t.dep || (t.dep = Ud(
      () => t.dep = void 0,
      t instanceof Jd ? t : void 0
    ))
  ));
}
function Vs(t, e = 2, n) {
  t = he(t);
  const r = t.dep;
  r && Vd(
    r,
    e
  );
}
function De(t) {
  return !!(t && t.__v_isRef === !0);
}
function Yl(t) {
  return ub(t, !1);
}
function ub(t, e) {
  return De(t) ? t : new fb(t, e);
}
class fb {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : he(e), this._value = n ? e : ki(e);
  }
  get value() {
    return Qd(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || to(e) || $r(e);
    e = n ? e : he(e), xn(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : ki(e), Vs(this, 2));
  }
}
function Mi(t) {
  return De(t) ? t.value : t;
}
const db = {
  get: (t, e, n) => Mi(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return De(i) && !De(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Xd(t) {
  return sn(t) ? t : new Proxy(t, db);
}
function pb(t) {
  const e = re(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = ep(t, n);
  return e;
}
class hb {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return H_(he(this._object), this._key);
  }
}
class mb {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function gb(t, e, n) {
  return De(t) ? t : se(t) ? new mb(t) : Ae(t) && arguments.length > 1 ? ep(t, e, n) : Yl(t);
}
function ep(t, e, n) {
  const r = t[e];
  return De(r) ? r : new hb(t, e, n);
}
var vi = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\kuya\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17100_BKLCNNPJZSRCREQM", COLOR: "1", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-PPEVJ58", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CONDA_PROMPT_MODIFIER: "False", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", envContainerTelemetryApiCmdLine: '-st "C:\\Program Files\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll"', GIT_ASKPASS: "c:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\kuya", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\kuya", INIT_CWD: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\kuya\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-PPEVJ58", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NODE_PATH: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules", NPM_CLI_JS: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\kuya\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\kuya\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\kuya\\.npm-init.js", npm_config_local_prefix: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view", npm_config_node_gyp: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.2.5", npm_config_prefix: "C:\\Users\\kuya\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\kuya\\.npmrc", npm_config_user_agent: "npm/10.2.5 node/v20.10.0 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vite build --mode development --watch", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view\\package.json", npm_package_name: "inventory_report_cv_1_2195", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "8", OneDrive: "C:\\Users\\kuya\\OneDrive", OneDriveConsumer: "C:\\Users\\kuya\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\SMP\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\node_modules\\.bin;C:\\Kerja\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\php;C:\\ProgramData\\ComposerSetup\\bin;C:\\Program Files\\PuTTY\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Users\\kuya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\kuya\\OneDrive\\Documents\\Work Documents\\ktn-upload;C:\\Users\\kuya\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\kuya\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Users\\kuya\\AppData\\Roaming\\npm;C:\\Users\\kuya\\AppData\\Local\\Programs\\oh-my-posh\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", POSH_AZURE_ENABLED: "False", POSH_CURSOR_COLUMN: "1", POSH_CURSOR_LINE: "8", POSH_GIT_ENABLED: "False", POSH_INSTALLER: "winget", POSH_PID: "11556", POSH_SHELL_VERSION: "5.1.22621.2506", POSH_THEME: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes\\night-owl.omp.json", POSH_THEMES_PATH: "C:\\Users\\kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes", POWERLINE_COMMAND: "oh-my-posh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 151 Stepping 5, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "9705", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\kuya\\Documents\\WindowsPowerShell\\Modules;C:\\Users\\kuya\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\kuya\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.85.2", TMP: "C:\\Users\\kuya\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-PPEVJ58", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-PPEVJ58", USERNAME: "kuya", USERPROFILE: "C:\\Users\\kuya", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-8a65c42db2-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS", WSLENV: "WT_SESSION:WT_PROFILE_ID:", WT_PROFILE_ID: "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", WT_SESSION: "051b0132-3141-4168-87b5-8bbd18e359c8", __PSLockDownPolicy: "0" };
const _i = [];
function yb(t, ...e) {
  Nn();
  const n = _i.length ? _i[_i.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = vb();
  if (r)
    on(
      r,
      n,
      11,
      [
        t + e.join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${Cp(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ..._b(i)), console.warn(...s);
  }
  Dn();
}
function vb() {
  let t = _i[_i.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function _b(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...bb(n));
  }), e;
}
function bb({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${Cp(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...Eb(t.props), s] : [i + s];
}
function Eb(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...tp(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function tp(t, e, n) {
  return Le(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : De(e) ? (e = tp(t, he(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : se(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = he(e), n ? e : [`${t}=`, e]);
}
function on(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    To(s, e, n);
  }
  return i;
}
function Ft(t, e, n, r) {
  if (se(t)) {
    const s = on(t, e, n, r);
    return s && Cd(s) && s.catch((o) => {
      To(o, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Ft(t[s], e, n, r));
  return i;
}
function To(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](t, o, a) === !1)
            return;
      }
      s = s.parent;
    }
    const u = e.appContext.config.errorHandler;
    if (u) {
      on(
        u,
        null,
        10,
        [t, o, a]
      );
      return;
    }
  }
  wb(t, n, i, r);
}
function wb(t, e, n, r = !0) {
  console.error(t);
}
let $i = !1, nl = !1;
const ze = [];
let zt = 0;
const Dr = [];
let _n = null, qn = 0;
const np = /* @__PURE__ */ Promise.resolve();
let Zl = null;
function Jl(t) {
  const e = Zl || np;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Sb(t) {
  let e = zt + 1, n = ze.length;
  for (; e < n; ) {
    const r = e + n >>> 1, i = ze[r], s = Li(i);
    s < t || s === t && i.pre ? e = r + 1 : n = r;
  }
  return e;
}
function Ql(t) {
  (!ze.length || !ze.includes(
    t,
    $i && t.allowRecurse ? zt + 1 : zt
  )) && (t.id == null ? ze.push(t) : ze.splice(Sb(t.id), 0, t), rp());
}
function rp() {
  !$i && !nl && (nl = !0, Zl = np.then(sp));
}
function Ob(t) {
  const e = ze.indexOf(t);
  e > zt && ze.splice(e, 1);
}
function Ab(t) {
  re(t) ? Dr.push(...t) : (!_n || !_n.includes(
    t,
    t.allowRecurse ? qn + 1 : qn
  )) && Dr.push(t), rp();
}
function Ru(t, e, n = $i ? zt + 1 : 0) {
  for (; n < ze.length; n++) {
    const r = ze[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid)
        continue;
      ze.splice(n, 1), n--, r();
    }
  }
}
function ip(t) {
  if (Dr.length) {
    const e = [...new Set(Dr)].sort(
      (n, r) => Li(n) - Li(r)
    );
    if (Dr.length = 0, _n) {
      _n.push(...e);
      return;
    }
    for (_n = e, qn = 0; qn < _n.length; qn++)
      _n[qn]();
    _n = null, qn = 0;
  }
}
const Li = (t) => t.id == null ? 1 / 0 : t.id, Tb = (t, e) => {
  const n = Li(t) - Li(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function sp(t) {
  nl = !1, $i = !0, ze.sort(Tb);
  const e = vt;
  try {
    for (zt = 0; zt < ze.length; zt++) {
      const n = ze[zt];
      n && n.active !== !1 && (vi.NODE_ENV !== "production" && e(n), on(n, null, 14));
    }
  } finally {
    zt = 0, ze.length = 0, ip(), $i = !1, Zl = null, (ze.length || Dr.length) && sp();
  }
}
function Cb(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Ce;
  let i = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in r) {
    const f = `${o === "modelValue" ? "model" : o}Modifiers`, { number: p, trim: v } = r[f] || Ce;
    v && (i = n.map((y) => Le(y) ? y.trim() : y)), p && (i = n.map(Ii));
  }
  let a, u = r[a = ya(e)] || // also try camelCase event handler (#2249)
  r[a = ya(Mr(e))];
  !u && s && (u = r[a = ya(zr(e))]), u && Ft(
    u,
    t,
    6,
    i
  );
  const c = r[a + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[a])
      return;
    t.emitted[a] = !0, Ft(
      c,
      t,
      6,
      i
    );
  }
}
function op(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let o = {}, a = !1;
  if (!se(t)) {
    const u = (c) => {
      const f = op(c, e, !0);
      f && (a = !0, Ze(o, f));
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  return !s && !a ? (Ae(t) && r.set(t, null), null) : (re(s) ? s.forEach((u) => o[u] = null) : Ze(o, s), Ae(t) && r.set(t, o), o);
}
function Co(t, e) {
  return !t || !bo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), _e(t, e[0].toLowerCase() + e.slice(1)) || _e(t, zr(e)) || _e(t, e));
}
let pt = null, ap = null;
function no(t) {
  const e = pt;
  return pt = t, ap = t && t.type.__scopeId || null, e;
}
function xb(t, e = pt, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && Bu(-1);
    const s = no(e);
    let o;
    try {
      o = t(...i);
    } finally {
      no(s), r._d && Bu(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function _a(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: s,
    propsOptions: [o],
    slots: a,
    attrs: u,
    emit: c,
    render: f,
    renderCache: p,
    data: v,
    setupState: y,
    ctx: b,
    inheritAttrs: E
  } = t;
  let C, T;
  const q = no(t);
  try {
    if (n.shapeFlag & 4) {
      const W = i || r, G = vi.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(W, {
        get(B, Q, z) {
          return yb(
            `Property '${String(
              Q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(B, Q, z);
        }
      }) : W;
      C = qt(
        f.call(
          G,
          W,
          p,
          s,
          y,
          v,
          b
        )
      ), T = u;
    } else {
      const W = e;
      vi.NODE_ENV, C = qt(
        W.length > 1 ? W(
          s,
          vi.NODE_ENV !== "production" ? {
            get attrs() {
              return u;
            },
            slots: a,
            emit: c
          } : { attrs: u, slots: a, emit: c }
        ) : W(
          s,
          null
          /* we know it doesn't need it */
        )
      ), T = e.props ? u : Nb(u);
    }
  } catch (W) {
    wi.length = 0, To(W, t, 1), C = Zt(Wi);
  }
  let V = C;
  if (T && E !== !1) {
    const W = Object.keys(T), { shapeFlag: G } = V;
    W.length && G & 7 && (o && W.some(Ll) && (T = Db(
      T,
      o
    )), V = Lr(V, T));
  }
  return n.dirs && (V = Lr(V), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (V.transition = n.transition), C = V, no(q), C;
}
const Nb = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || bo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Db = (t, e) => {
  const n = {};
  for (const r in t)
    (!Ll(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function Pb(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: o, children: a, patchFlag: u } = e, c = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? ku(r, o, c) : !!o;
    if (u & 8) {
      const f = e.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const v = f[p];
        if (o[v] !== r[v] && !Co(c, v))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? o ? ku(r, o, c) : !0 : !!o;
  return !1;
}
function ku(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !Co(n, s))
      return !0;
  }
  return !1;
}
function Ib({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const Rb = Symbol.for("v-ndc"), kb = (t) => t.__isSuspense;
function Mb(t, e) {
  e && e.pendingBranch ? re(t) ? e.effects.push(...t) : e.effects.push(t) : Ab(t);
}
const $b = Symbol.for("v-scx"), Lb = () => Ei($b), Os = {};
function js(t, e, n) {
  return lp(t, e, n);
}
function lp(t, e, {
  immediate: n,
  deep: r,
  flush: i,
  once: s,
  onTrack: o,
  onTrigger: a
} = Ce) {
  if (e && s) {
    const B = e;
    e = (...Q) => {
      B(...Q), G();
    };
  }
  const u = Be, c = (B) => r === !0 ? B : (
    // for deep: false, only traverse root-level properties
    zn(B, r === !1 ? 1 : void 0)
  );
  let f, p = !1, v = !1;
  if (De(t) ? (f = () => t.value, p = to(t)) : sn(t) ? (f = () => c(t), p = !0) : re(t) ? (v = !0, p = t.some((B) => sn(B) || to(B)), f = () => t.map((B) => {
    if (De(B))
      return B.value;
    if (sn(B))
      return c(B);
    if (se(B))
      return on(B, u, 2);
  })) : se(t) ? e ? f = () => on(t, u, 2) : f = () => (y && y(), Ft(
    t,
    u,
    3,
    [b]
  )) : f = vt, e && r) {
    const B = f;
    f = () => zn(B());
  }
  let y, b = (B) => {
    y = V.onStop = () => {
      on(B, u, 4), y = V.onStop = void 0;
    };
  }, E;
  if (Po)
    if (b = vt, e ? n && Ft(e, u, 3, [
      f(),
      v ? [] : void 0,
      b
    ]) : f(), i === "sync") {
      const B = Lb();
      E = B.__watcherHandles || (B.__watcherHandles = []);
    } else
      return vt;
  let C = v ? new Array(t.length).fill(Os) : Os;
  const T = () => {
    if (!(!V.active || !V.dirty))
      if (e) {
        const B = V.run();
        (r || p || (v ? B.some((Q, z) => xn(Q, C[z])) : xn(B, C))) && (y && y(), Ft(e, u, 3, [
          B,
          // pass undefined as the old value when it's changed for the first time
          C === Os ? void 0 : v && C[0] === Os ? [] : C,
          b
        ]), C = B);
      } else
        V.run();
  };
  T.allowRecurse = !!e;
  let q;
  i === "sync" ? q = T : i === "post" ? q = () => ut(T, u && u.suspense) : (T.pre = !0, u && (T.id = u.uid), q = () => Ql(T));
  const V = new Ul(f, vt, q), W = $d(), G = () => {
    V.stop(), W && Fl(W.effects, V);
  };
  return e ? n ? T() : C = V.run() : i === "post" ? ut(
    V.run.bind(V),
    u && u.suspense
  ) : V.run(), E && E.push(G), G;
}
function Fb(t, e, n) {
  const r = this.proxy, i = Le(t) ? t.includes(".") ? cp(r, t) : () => r[t] : t.bind(r, r);
  let s;
  se(e) ? s = e : (s = e.handler, n = e);
  const o = Bi(this), a = lp(i, s.bind(r), n);
  return o(), a;
}
function cp(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function zn(t, e, n = 0, r) {
  if (!Ae(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (n >= e)
      return t;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(t))
    return t;
  if (r.add(t), De(t))
    zn(t.value, e, n, r);
  else if (re(t))
    for (let i = 0; i < t.length; i++)
      zn(t[i], e, n, r);
  else if (Eo(t) || Nr(t))
    t.forEach((i) => {
      zn(i, e, n, r);
    });
  else if (Nd(t))
    for (const i in t)
      zn(t[i], e, n, r);
  return t;
}
function Mu(t, e) {
  if (pt === null)
    return t;
  const n = Io(pt) || pt.proxy, r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [s, o, a, u = Ce] = e[i];
    s && (se(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && zn(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: u
    }));
  }
  return t;
}
function jn(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let u = a.dir[r];
    u && (Nn(), Ft(u, n, 8, [
      t.el,
      a,
      t,
      e
    ]), Dn());
  }
}
const Us = (t) => !!t.type.__asyncLoader, up = (t) => t.type.__isKeepAlive;
function Wb(t, e) {
  fp(t, "a", e);
}
function Vb(t, e) {
  fp(t, "da", e);
}
function fp(t, e, n = Be) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (xo(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      up(i.parent.vnode) && jb(r, e, n, i), i = i.parent;
  }
}
function jb(t, e, n, r) {
  const i = xo(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  pp(() => {
    Fl(r[e], i);
  }, n);
}
function xo(t, e, n = Be, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Nn();
      const a = Bi(n), u = Ft(e, n, t, o);
      return a(), Dn(), u;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const un = (t) => (e, n = Be) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Po || t === "sp") && xo(t, (...r) => e(...r), n)
), Ub = un("bm"), dp = un("m"), Hb = un("bu"), Bb = un("u"), qb = un("bum"), pp = un("um"), Kb = un("sp"), Gb = un(
  "rtg"
), zb = un(
  "rtc"
);
function Yb(t, e = Be) {
  xo("ec", t, e);
}
function As(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (re(t) || Le(t)) {
    i = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      i[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    i = new Array(t);
    for (let o = 0; o < t; o++)
      i[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (Ae(t))
    if (t[Symbol.iterator])
      i = Array.from(
        t,
        (o, a) => e(o, a, void 0, s && s[a])
      );
    else {
      const o = Object.keys(t);
      i = new Array(o.length);
      for (let a = 0, u = o.length; a < u; a++) {
        const c = o[a];
        i[a] = e(t[c], c, a, s && s[a]);
      }
    }
  else
    i = [];
  return n && (n[r] = i), i;
}
const rl = (t) => t ? Ap(t) ? Io(t) || t.proxy : rl(t.parent) : null, bi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ze(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => rl(t.parent),
    $root: (t) => rl(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Xl(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, Ql(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Jl.bind(t.proxy)),
    $watch: (t) => Fb.bind(t)
  })
), ba = (t, e) => t !== Ce && !t.__isScriptSetup && _e(t, e), Zb = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: a, appContext: u } = t;
    let c;
    if (e[0] !== "$") {
      const y = o[e];
      if (y !== void 0)
        switch (y) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (ba(r, e))
          return o[e] = 1, r[e];
        if (i !== Ce && _e(i, e))
          return o[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && _e(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== Ce && _e(n, e))
          return o[e] = 4, n[e];
        il && (o[e] = 0);
      }
    }
    const f = bi[e];
    let p, v;
    if (f)
      return e === "$attrs" && ht(t, "get", e), f(t);
    if (
      // css module (injected by vue-loader)
      (p = a.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== Ce && _e(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      v = u.config.globalProperties, _e(v, e)
    )
      return v[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return ba(i, e) ? (i[e] = n, !0) : r !== Ce && _e(r, e) ? (r[e] = n, !0) : _e(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s }
  }, o) {
    let a;
    return !!n[o] || t !== Ce && _e(t, o) || ba(e, o) || (a = s[0]) && _e(a, o) || _e(r, o) || _e(bi, o) || _e(i.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : _e(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function $u(t) {
  return re(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let il = !0;
function Jb(t) {
  const e = Xl(t), n = t.proxy, r = t.ctx;
  il = !1, e.beforeCreate && Lu(e.beforeCreate, t, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: u,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: v,
    beforeUpdate: y,
    updated: b,
    activated: E,
    deactivated: C,
    beforeDestroy: T,
    beforeUnmount: q,
    destroyed: V,
    unmounted: W,
    render: G,
    renderTracked: B,
    renderTriggered: Q,
    errorCaptured: z,
    serverPrefetch: F,
    // public API
    expose: Y,
    inheritAttrs: X,
    // assets
    components: le,
    directives: ce,
    filters: Te
  } = e;
  if (c && Qb(c, r, null), o)
    for (const oe in o) {
      const fe = o[oe];
      se(fe) && (r[oe] = fe.bind(n));
    }
  if (i) {
    const oe = i.call(n, n);
    Ae(oe) && (t.data = Oo(oe));
  }
  if (il = !0, s)
    for (const oe in s) {
      const fe = s[oe], Re = se(fe) ? fe.bind(n, n) : se(fe.get) ? fe.get.bind(n, n) : vt, Qe = !se(fe) && se(fe.set) ? fe.set.bind(n) : vt, qe = xp({
        get: Re,
        set: Qe
      });
      Object.defineProperty(r, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => qe.value,
        set: (Pe) => qe.value = Pe
      });
    }
  if (a)
    for (const oe in a)
      hp(a[oe], r, n, oe);
  if (u) {
    const oe = se(u) ? u.call(n) : u;
    Reflect.ownKeys(oe).forEach((fe) => {
      iE(fe, oe[fe]);
    });
  }
  f && Lu(f, t, "c");
  function ee(oe, fe) {
    re(fe) ? fe.forEach((Re) => oe(Re.bind(n))) : fe && oe(fe.bind(n));
  }
  if (ee(Ub, p), ee(dp, v), ee(Hb, y), ee(Bb, b), ee(Wb, E), ee(Vb, C), ee(Yb, z), ee(zb, B), ee(Gb, Q), ee(qb, q), ee(pp, W), ee(Kb, F), re(Y))
    if (Y.length) {
      const oe = t.exposed || (t.exposed = {});
      Y.forEach((fe) => {
        Object.defineProperty(oe, fe, {
          get: () => n[fe],
          set: (Re) => n[fe] = Re
        });
      });
    } else
      t.exposed || (t.exposed = {});
  G && t.render === vt && (t.render = G), X != null && (t.inheritAttrs = X), le && (t.components = le), ce && (t.directives = ce);
}
function Qb(t, e, n = vt) {
  re(t) && (t = sl(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Ae(i) ? "default" in i ? s = Ei(
      i.from || r,
      i.default,
      !0
    ) : s = Ei(i.from || r) : s = Ei(i), De(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : e[r] = s;
  }
}
function Lu(t, e, n) {
  Ft(
    re(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function hp(t, e, n, r) {
  const i = r.includes(".") ? cp(n, r) : () => n[r];
  if (Le(t)) {
    const s = e[t];
    se(s) && js(i, s);
  } else if (se(t))
    js(i, t.bind(n));
  else if (Ae(t))
    if (re(t))
      t.forEach((s) => hp(s, e, n, r));
    else {
      const s = se(t.handler) ? t.handler.bind(n) : e[t.handler];
      se(s) && js(i, s, t);
    }
}
function Xl(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let u;
  return a ? u = a : !i.length && !n && !r ? u = e : (u = {}, i.length && i.forEach(
    (c) => ro(u, c, o, !0)
  ), ro(u, e, o)), Ae(e) && s.set(e, u), u;
}
function ro(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && ro(t, s, n, !0), i && i.forEach(
    (o) => ro(t, o, n, !0)
  );
  for (const o in e)
    if (!(r && o === "expose")) {
      const a = Xb[o] || n && n[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Xb = {
  data: Fu,
  props: Wu,
  emits: Wu,
  // objects
  methods: gi,
  computed: gi,
  // lifecycle
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  // assets
  components: gi,
  directives: gi,
  // watch
  watch: tE,
  // provide / inject
  provide: Fu,
  inject: eE
};
function Fu(t, e) {
  return e ? t ? function() {
    return Ze(
      se(t) ? t.call(this, this) : t,
      se(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function eE(t, e) {
  return gi(sl(t), sl(e));
}
function sl(t) {
  if (re(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function rt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function gi(t, e) {
  return t ? Ze(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Wu(t, e) {
  return t ? re(t) && re(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ze(
    /* @__PURE__ */ Object.create(null),
    $u(t),
    $u(e ?? {})
  ) : e;
}
function tE(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Ze(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = rt(t[r], e[r]);
  return n;
}
function mp() {
  return {
    app: null,
    config: {
      isNativeTag: C_,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let nE = 0;
function rE(t, e) {
  return function(r, i = null) {
    se(r) || (r = Ze({}, r)), i != null && !Ae(i) && (i = null);
    const s = mp(), o = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const u = s.app = {
      _uid: nE++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: kE,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...f) {
        return o.has(c) || (c && se(c.install) ? (o.add(c), c.install(u, ...f)) : se(c) && (o.add(c), c(u, ...f))), u;
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      },
      component(c, f) {
        return f ? (s.components[c] = f, u) : s.components[c];
      },
      directive(c, f) {
        return f ? (s.directives[c] = f, u) : s.directives[c];
      },
      mount(c, f, p) {
        if (!a) {
          const v = Zt(r, i);
          return v.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), f && e ? e(v, c) : t(v, c, p), a = !0, u._container = c, c.__vue_app__ = u, Io(v.component) || v.component.proxy;
        }
      },
      unmount() {
        a && (t(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, f) {
        return s.provides[c] = f, u;
      },
      runWithContext(c) {
        Fi = u;
        try {
          return c();
        } finally {
          Fi = null;
        }
      }
    };
    return u;
  };
}
let Fi = null;
function iE(t, e) {
  if (Be) {
    let n = Be.provides;
    const r = Be.parent && Be.parent.provides;
    r === n && (n = Be.provides = Object.create(r)), n[t] = e;
  }
}
function Ei(t, e, n = !1) {
  const r = Be || pt;
  if (r || Fi) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Fi._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && se(e) ? e.call(r && r.proxy) : e;
  }
}
function sE() {
  return !!(Be || pt || Fi);
}
function oE(t, e, n, r = !1) {
  const i = {}, s = {};
  Xs(s, Do, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), gp(t, e, i, s);
  for (const o in t.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? t.props = r ? i : lb(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function aE(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = t, a = he(i), [u] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = t.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let v = f[p];
        if (Co(t.emitsOptions, v))
          continue;
        const y = e[v];
        if (u)
          if (_e(s, v))
            y !== s[v] && (s[v] = y, c = !0);
          else {
            const b = Mr(v);
            i[b] = ol(
              u,
              a,
              b,
              y,
              t,
              !1
            );
          }
        else
          y !== s[v] && (s[v] = y, c = !0);
      }
    }
  } else {
    gp(t, e, i, s) && (c = !0);
    let f;
    for (const p in a)
      (!e || // for camelCase
      !_e(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = zr(p)) === p || !_e(e, f))) && (u ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[f] !== void 0) && (i[p] = ol(
        u,
        a,
        p,
        void 0,
        t,
        !0
      )) : delete i[p]);
    if (s !== a)
      for (const p in s)
        (!e || !_e(e, p)) && (delete s[p], c = !0);
  }
  c && rn(t, "set", "$attrs");
}
function gp(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1, a;
  if (e)
    for (let u in e) {
      if (Fs(u))
        continue;
      const c = e[u];
      let f;
      i && _e(i, f = Mr(u)) ? !s || !s.includes(f) ? n[f] = c : (a || (a = {}))[f] = c : Co(t.emitsOptions, u) || (!(u in r) || c !== r[u]) && (r[u] = c, o = !0);
    }
  if (s) {
    const u = he(n), c = a || Ce;
    for (let f = 0; f < s.length; f++) {
      const p = s[f];
      n[p] = ol(
        i,
        u,
        p,
        c[p],
        t,
        !_e(c, p)
      );
    }
  }
  return o;
}
function ol(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const a = _e(o, "default");
    if (a && r === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && se(u)) {
        const { propsDefaults: c } = i;
        if (n in c)
          r = c[n];
        else {
          const f = Bi(i);
          r = c[n] = u.call(
            null,
            e
          ), f();
        }
      } else
        r = u;
    }
    o[
      0
      /* shouldCast */
    ] && (s && !a ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === zr(n)) && (r = !0));
  }
  return r;
}
function yp(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, o = {}, a = [];
  let u = !1;
  if (!se(t)) {
    const f = (p) => {
      u = !0;
      const [v, y] = yp(p, e, !0);
      Ze(o, v), y && a.push(...y);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!s && !u)
    return Ae(t) && r.set(t, xr), xr;
  if (re(s))
    for (let f = 0; f < s.length; f++) {
      const p = Mr(s[f]);
      Vu(p) && (o[p] = Ce);
    }
  else if (s)
    for (const f in s) {
      const p = Mr(f);
      if (Vu(p)) {
        const v = s[f], y = o[p] = re(v) || se(v) ? { type: v } : Ze({}, v);
        if (y) {
          const b = Hu(Boolean, y.type), E = Hu(String, y.type);
          y[
            0
            /* shouldCast */
          ] = b > -1, y[
            1
            /* shouldCastTrue */
          ] = E < 0 || b < E, (b > -1 || _e(y, "default")) && a.push(p);
        }
      }
    }
  const c = [o, a];
  return Ae(t) && r.set(t, c), c;
}
function Vu(t) {
  return t[0] !== "$";
}
function ju(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function Uu(t, e) {
  return ju(t) === ju(e);
}
function Hu(t, e) {
  return re(e) ? e.findIndex((n) => Uu(n, t)) : se(e) && Uu(e, t) ? 0 : -1;
}
const vp = (t) => t[0] === "_" || t === "$stable", ec = (t) => re(t) ? t.map(qt) : [qt(t)], lE = (t, e, n) => {
  if (e._n)
    return e;
  const r = xb((...i) => (vi.NODE_ENV !== "production" && Be && (!n || (n.root, Be.root)), ec(e(...i))), n);
  return r._c = !1, r;
}, _p = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (vp(i))
      continue;
    const s = t[i];
    if (se(s))
      e[i] = lE(i, s, r);
    else if (s != null) {
      const o = ec(s);
      e[i] = () => o;
    }
  }
}, bp = (t, e) => {
  const n = ec(e);
  t.slots.default = () => n;
}, cE = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = he(e), Xs(e, "_", n)) : _p(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && bp(t, e);
  Xs(t.slots, Do, 1);
}, uE = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, o = Ce;
  if (r.shapeFlag & 32) {
    const a = e._;
    a ? n && a === 1 ? s = !1 : (Ze(i, e), !n && a === 1 && delete i._) : (s = !e.$stable, _p(e, i)), o = e;
  } else
    e && (bp(t, e), o = { default: 1 });
  if (s)
    for (const a in i)
      !vp(a) && o[a] == null && delete i[a];
};
function al(t, e, n, r, i = !1) {
  if (re(t)) {
    t.forEach(
      (v, y) => al(
        v,
        e && (re(e) ? e[y] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Us(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Io(r.component) || r.component.proxy : r.el, o = i ? null : s, { i: a, r: u } = t, c = e && e.r, f = a.refs === Ce ? a.refs = {} : a.refs, p = a.setupState;
  if (c != null && c !== u && (Le(c) ? (f[c] = null, _e(p, c) && (p[c] = null)) : De(c) && (c.value = null)), se(u))
    on(u, a, 12, [o, f]);
  else {
    const v = Le(u), y = De(u), b = t.f;
    if (v || y) {
      const E = () => {
        if (b) {
          const C = v ? _e(p, u) ? p[u] : f[u] : u.value;
          i ? re(C) && Fl(C, s) : re(C) ? C.includes(s) || C.push(s) : v ? (f[u] = [s], _e(p, u) && (p[u] = f[u])) : (u.value = [s], t.k && (f[t.k] = u.value));
        } else
          v ? (f[u] = o, _e(p, u) && (p[u] = o)) : y && (u.value = o, t.k && (f[t.k] = o));
      };
      i || b ? E() : (E.id = -1, ut(E, n));
    }
  }
}
const ut = Mb;
function fE(t) {
  return dE(t);
}
function dE(t, e) {
  const n = Pd();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: u,
    setText: c,
    setElementText: f,
    parentNode: p,
    nextSibling: v,
    setScopeId: y = vt,
    insertStaticContent: b
  } = t, E = (m, _, S, D = null, P = null, R = null, j = void 0, w = null, k = !!_.dynamicChildren) => {
    if (m === _)
      return;
    m && !ui(m, _) && (D = O(m), Pe(m, P, R, !0), m = null), _.patchFlag === -2 && (k = !1, _.dynamicChildren = null);
    const { type: I, ref: K, shapeFlag: J } = _;
    switch (I) {
      case No:
        C(m, _, S, D);
        break;
      case Wi:
        T(m, _, S, D);
        break;
      case Hs:
        m == null && q(_, S, D, j);
        break;
      case ft:
        le(
          m,
          _,
          S,
          D,
          P,
          R,
          j,
          w,
          k
        );
        break;
      default:
        J & 1 ? G(
          m,
          _,
          S,
          D,
          P,
          R,
          j,
          w,
          k
        ) : J & 6 ? ce(
          m,
          _,
          S,
          D,
          P,
          R,
          j,
          w,
          k
        ) : (J & 64 || J & 128) && I.process(
          m,
          _,
          S,
          D,
          P,
          R,
          j,
          w,
          k,
          Ne
        );
    }
    K != null && P && al(K, m && m.ref, R, _ || m, !_);
  }, C = (m, _, S, D) => {
    if (m == null)
      r(
        _.el = a(_.children),
        S,
        D
      );
    else {
      const P = _.el = m.el;
      _.children !== m.children && c(P, _.children);
    }
  }, T = (m, _, S, D) => {
    m == null ? r(
      _.el = u(_.children || ""),
      S,
      D
    ) : _.el = m.el;
  }, q = (m, _, S, D) => {
    [m.el, m.anchor] = b(
      m.children,
      _,
      S,
      D,
      m.el,
      m.anchor
    );
  }, V = ({ el: m, anchor: _ }, S, D) => {
    let P;
    for (; m && m !== _; )
      P = v(m), r(m, S, D), m = P;
    r(_, S, D);
  }, W = ({ el: m, anchor: _ }) => {
    let S;
    for (; m && m !== _; )
      S = v(m), i(m), m = S;
    i(_);
  }, G = (m, _, S, D, P, R, j, w, k) => {
    _.type === "svg" ? j = "svg" : _.type === "math" && (j = "mathml"), m == null ? B(
      _,
      S,
      D,
      P,
      R,
      j,
      w,
      k
    ) : F(
      m,
      _,
      P,
      R,
      j,
      w,
      k
    );
  }, B = (m, _, S, D, P, R, j, w) => {
    let k, I;
    const { props: K, shapeFlag: J, transition: Z, dirs: te } = m;
    if (k = m.el = o(
      m.type,
      R,
      K && K.is,
      K
    ), J & 8 ? f(k, m.children) : J & 16 && z(
      m.children,
      k,
      null,
      D,
      P,
      Ea(m, R),
      j,
      w
    ), te && jn(m, null, D, "created"), Q(k, m, m.scopeId, j, D), K) {
      for (const ye in K)
        ye !== "value" && !Fs(ye) && s(
          k,
          ye,
          null,
          K[ye],
          R,
          m.children,
          D,
          P,
          xe
        );
      "value" in K && s(k, "value", null, K.value, R), (I = K.onVnodeBeforeMount) && jt(I, D, m);
    }
    te && jn(m, null, D, "beforeMount");
    const ae = pE(P, Z);
    ae && Z.beforeEnter(k), r(k, _, S), ((I = K && K.onVnodeMounted) || ae || te) && ut(() => {
      I && jt(I, D, m), ae && Z.enter(k), te && jn(m, null, D, "mounted");
    }, P);
  }, Q = (m, _, S, D, P) => {
    if (S && y(m, S), D)
      for (let R = 0; R < D.length; R++)
        y(m, D[R]);
    if (P) {
      let R = P.subTree;
      if (_ === R) {
        const j = P.vnode;
        Q(
          m,
          j,
          j.scopeId,
          j.slotScopeIds,
          P.parent
        );
      }
    }
  }, z = (m, _, S, D, P, R, j, w, k = 0) => {
    for (let I = k; I < m.length; I++) {
      const K = m[I] = w ? bn(m[I]) : qt(m[I]);
      E(
        null,
        K,
        _,
        S,
        D,
        P,
        R,
        j,
        w
      );
    }
  }, F = (m, _, S, D, P, R, j) => {
    const w = _.el = m.el;
    let { patchFlag: k, dynamicChildren: I, dirs: K } = _;
    k |= m.patchFlag & 16;
    const J = m.props || Ce, Z = _.props || Ce;
    let te;
    if (S && Un(S, !1), (te = Z.onVnodeBeforeUpdate) && jt(te, S, _, m), K && jn(_, m, S, "beforeUpdate"), S && Un(S, !0), I ? Y(
      m.dynamicChildren,
      I,
      w,
      S,
      D,
      Ea(_, P),
      R
    ) : j || fe(
      m,
      _,
      w,
      null,
      S,
      D,
      Ea(_, P),
      R,
      !1
    ), k > 0) {
      if (k & 16)
        X(
          w,
          _,
          J,
          Z,
          S,
          D,
          P
        );
      else if (k & 2 && J.class !== Z.class && s(w, "class", null, Z.class, P), k & 4 && s(w, "style", J.style, Z.style, P), k & 8) {
        const ae = _.dynamicProps;
        for (let ye = 0; ye < ae.length; ye++) {
          const Ee = ae[ye], Me = J[Ee], Ot = Z[Ee];
          (Ot !== Me || Ee === "value") && s(
            w,
            Ee,
            Me,
            Ot,
            P,
            m.children,
            S,
            D,
            xe
          );
        }
      }
      k & 1 && m.children !== _.children && f(w, _.children);
    } else
      !j && I == null && X(
        w,
        _,
        J,
        Z,
        S,
        D,
        P
      );
    ((te = Z.onVnodeUpdated) || K) && ut(() => {
      te && jt(te, S, _, m), K && jn(_, m, S, "updated");
    }, D);
  }, Y = (m, _, S, D, P, R, j) => {
    for (let w = 0; w < _.length; w++) {
      const k = m[w], I = _[w], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === ft || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ui(k, I) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 70) ? p(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      E(
        k,
        I,
        K,
        null,
        D,
        P,
        R,
        j,
        !0
      );
    }
  }, X = (m, _, S, D, P, R, j) => {
    if (S !== D) {
      if (S !== Ce)
        for (const w in S)
          !Fs(w) && !(w in D) && s(
            m,
            w,
            S[w],
            null,
            j,
            _.children,
            P,
            R,
            xe
          );
      for (const w in D) {
        if (Fs(w))
          continue;
        const k = D[w], I = S[w];
        k !== I && w !== "value" && s(
          m,
          w,
          I,
          k,
          j,
          _.children,
          P,
          R,
          xe
        );
      }
      "value" in D && s(m, "value", S.value, D.value, j);
    }
  }, le = (m, _, S, D, P, R, j, w, k) => {
    const I = _.el = m ? m.el : a(""), K = _.anchor = m ? m.anchor : a("");
    let { patchFlag: J, dynamicChildren: Z, slotScopeIds: te } = _;
    te && (w = w ? w.concat(te) : te), m == null ? (r(I, S, D), r(K, S, D), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      S,
      K,
      P,
      R,
      j,
      w,
      k
    )) : J > 0 && J & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren ? (Y(
      m.dynamicChildren,
      Z,
      S,
      P,
      R,
      j,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || P && _ === P.subTree) && Ep(
      m,
      _,
      !0
      /* shallow */
    )) : fe(
      m,
      _,
      S,
      K,
      P,
      R,
      j,
      w,
      k
    );
  }, ce = (m, _, S, D, P, R, j, w, k) => {
    _.slotScopeIds = w, m == null ? _.shapeFlag & 512 ? P.ctx.activate(
      _,
      S,
      D,
      j,
      k
    ) : Te(
      _,
      S,
      D,
      P,
      R,
      j,
      k
    ) : Se(m, _, k);
  }, Te = (m, _, S, D, P, R, j) => {
    const w = m.component = AE(
      m,
      D,
      P
    );
    if (up(m) && (w.ctx.renderer = Ne), TE(w), w.asyncDep) {
      if (P && P.registerDep(w, ee), !m.el) {
        const k = w.subTree = Zt(Wi);
        T(null, k, _, S);
      }
    } else
      ee(
        w,
        m,
        _,
        S,
        P,
        R,
        j
      );
  }, Se = (m, _, S) => {
    const D = _.component = m.component;
    if (Pb(m, _, S))
      if (D.asyncDep && !D.asyncResolved) {
        oe(D, _, S);
        return;
      } else
        D.next = _, Ob(D.update), D.effect.dirty = !0, D.update();
    else
      _.el = m.el, D.vnode = _;
  }, ee = (m, _, S, D, P, R, j) => {
    const w = () => {
      if (m.isMounted) {
        let { next: K, bu: J, u: Z, parent: te, vnode: ae } = m;
        {
          const fn = wp(m);
          if (fn) {
            K && (K.el = ae.el, oe(m, K, j)), fn.asyncDep.then(() => {
              m.isUnmounted || w();
            });
            return;
          }
        }
        let ye = K, Ee;
        Un(m, !1), K ? (K.el = ae.el, oe(m, K, j)) : K = ae, J && Ws(J), (Ee = K.props && K.props.onVnodeBeforeUpdate) && jt(Ee, te, K, ae), Un(m, !0);
        const Me = _a(m), Ot = m.subTree;
        m.subTree = Me, E(
          Ot,
          Me,
          // parent may have changed if it's in a teleport
          p(Ot.el),
          // anchor may have changed if it's in a fragment
          O(Ot),
          m,
          P,
          R
        ), K.el = Me.el, ye === null && Ib(m, Me.el), Z && ut(Z, P), (Ee = K.props && K.props.onVnodeUpdated) && ut(
          () => jt(Ee, te, K, ae),
          P
        );
      } else {
        let K;
        const { el: J, props: Z } = _, { bm: te, m: ae, parent: ye } = m, Ee = Us(_);
        if (Un(m, !1), te && Ws(te), !Ee && (K = Z && Z.onVnodeBeforeMount) && jt(K, ye, _), Un(m, !0), J && We) {
          const Me = () => {
            m.subTree = _a(m), We(
              J,
              m.subTree,
              m,
              P,
              null
            );
          };
          Ee ? _.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !m.isUnmounted && Me()
          ) : Me();
        } else {
          const Me = m.subTree = _a(m);
          E(
            null,
            Me,
            S,
            D,
            m,
            P,
            R
          ), _.el = Me.el;
        }
        if (ae && ut(ae, P), !Ee && (K = Z && Z.onVnodeMounted)) {
          const Me = _;
          ut(
            () => jt(K, ye, Me),
            P
          );
        }
        (_.shapeFlag & 256 || ye && Us(ye.vnode) && ye.vnode.shapeFlag & 256) && m.a && ut(m.a, P), m.isMounted = !0, _ = S = D = null;
      }
    }, k = m.effect = new Ul(
      w,
      vt,
      () => Ql(I),
      m.scope
      // track it in component's effect scope
    ), I = m.update = () => {
      k.dirty && k.run();
    };
    I.id = m.uid, Un(m, !0), I();
  }, oe = (m, _, S) => {
    _.component = m;
    const D = m.vnode.props;
    m.vnode = _, m.next = null, aE(m, _.props, D, S), uE(m, _.children, S), Nn(), Ru(m), Dn();
  }, fe = (m, _, S, D, P, R, j, w, k = !1) => {
    const I = m && m.children, K = m ? m.shapeFlag : 0, J = _.children, { patchFlag: Z, shapeFlag: te } = _;
    if (Z > 0) {
      if (Z & 128) {
        Qe(
          I,
          J,
          S,
          D,
          P,
          R,
          j,
          w,
          k
        );
        return;
      } else if (Z & 256) {
        Re(
          I,
          J,
          S,
          D,
          P,
          R,
          j,
          w,
          k
        );
        return;
      }
    }
    te & 8 ? (K & 16 && xe(I, P, R), J !== I && f(S, J)) : K & 16 ? te & 16 ? Qe(
      I,
      J,
      S,
      D,
      P,
      R,
      j,
      w,
      k
    ) : xe(I, P, R, !0) : (K & 8 && f(S, ""), te & 16 && z(
      J,
      S,
      D,
      P,
      R,
      j,
      w,
      k
    ));
  }, Re = (m, _, S, D, P, R, j, w, k) => {
    m = m || xr, _ = _ || xr;
    const I = m.length, K = _.length, J = Math.min(I, K);
    let Z;
    for (Z = 0; Z < J; Z++) {
      const te = _[Z] = k ? bn(_[Z]) : qt(_[Z]);
      E(
        m[Z],
        te,
        S,
        null,
        P,
        R,
        j,
        w,
        k
      );
    }
    I > K ? xe(
      m,
      P,
      R,
      !0,
      !1,
      J
    ) : z(
      _,
      S,
      D,
      P,
      R,
      j,
      w,
      k,
      J
    );
  }, Qe = (m, _, S, D, P, R, j, w, k) => {
    let I = 0;
    const K = _.length;
    let J = m.length - 1, Z = K - 1;
    for (; I <= J && I <= Z; ) {
      const te = m[I], ae = _[I] = k ? bn(_[I]) : qt(_[I]);
      if (ui(te, ae))
        E(
          te,
          ae,
          S,
          null,
          P,
          R,
          j,
          w,
          k
        );
      else
        break;
      I++;
    }
    for (; I <= J && I <= Z; ) {
      const te = m[J], ae = _[Z] = k ? bn(_[Z]) : qt(_[Z]);
      if (ui(te, ae))
        E(
          te,
          ae,
          S,
          null,
          P,
          R,
          j,
          w,
          k
        );
      else
        break;
      J--, Z--;
    }
    if (I > J) {
      if (I <= Z) {
        const te = Z + 1, ae = te < K ? _[te].el : D;
        for (; I <= Z; )
          E(
            null,
            _[I] = k ? bn(_[I]) : qt(_[I]),
            S,
            ae,
            P,
            R,
            j,
            w,
            k
          ), I++;
      }
    } else if (I > Z)
      for (; I <= J; )
        Pe(m[I], P, R, !0), I++;
    else {
      const te = I, ae = I, ye = /* @__PURE__ */ new Map();
      for (I = ae; I <= Z; I++) {
        const et = _[I] = k ? bn(_[I]) : qt(_[I]);
        et.key != null && ye.set(et.key, I);
      }
      let Ee, Me = 0;
      const Ot = Z - ae + 1;
      let fn = !1, ss = 0;
      const Rn = new Array(Ot);
      for (I = 0; I < Ot; I++)
        Rn[I] = 0;
      for (I = te; I <= J; I++) {
        const et = m[I];
        if (Me >= Ot) {
          Pe(et, P, R, !0);
          continue;
        }
        let Ke;
        if (et.key != null)
          Ke = ye.get(et.key);
        else
          for (Ee = ae; Ee <= Z; Ee++)
            if (Rn[Ee - ae] === 0 && ui(et, _[Ee])) {
              Ke = Ee;
              break;
            }
        Ke === void 0 ? Pe(et, P, R, !0) : (Rn[Ke - ae] = I + 1, Ke >= ss ? ss = Ke : fn = !0, E(
          et,
          _[Ke],
          S,
          null,
          P,
          R,
          j,
          w,
          k
        ), Me++);
      }
      const ii = fn ? hE(Rn) : xr;
      for (Ee = ii.length - 1, I = Ot - 1; I >= 0; I--) {
        const et = ae + I, Ke = _[et], os = et + 1 < K ? _[et + 1].el : D;
        Rn[I] === 0 ? E(
          null,
          Ke,
          S,
          os,
          P,
          R,
          j,
          w,
          k
        ) : fn && (Ee < 0 || I !== ii[Ee] ? qe(Ke, S, os, 2) : Ee--);
      }
    }
  }, qe = (m, _, S, D, P = null) => {
    const { el: R, type: j, transition: w, children: k, shapeFlag: I } = m;
    if (I & 6) {
      qe(m.component.subTree, _, S, D);
      return;
    }
    if (I & 128) {
      m.suspense.move(_, S, D);
      return;
    }
    if (I & 64) {
      j.move(m, _, S, Ne);
      return;
    }
    if (j === ft) {
      r(R, _, S);
      for (let J = 0; J < k.length; J++)
        qe(k[J], _, S, D);
      r(m.anchor, _, S);
      return;
    }
    if (j === Hs) {
      V(m, _, S);
      return;
    }
    if (D !== 2 && I & 1 && w)
      if (D === 0)
        w.beforeEnter(R), r(R, _, S), ut(() => w.enter(R), P);
      else {
        const { leave: J, delayLeave: Z, afterLeave: te } = w, ae = () => r(R, _, S), ye = () => {
          J(R, () => {
            ae(), te && te();
          });
        };
        Z ? Z(R, ae, ye) : ye();
      }
    else
      r(R, _, S);
  }, Pe = (m, _, S, D = !1, P = !1) => {
    const {
      type: R,
      props: j,
      ref: w,
      children: k,
      dynamicChildren: I,
      shapeFlag: K,
      patchFlag: J,
      dirs: Z
    } = m;
    if (w != null && al(w, null, S, m, !0), K & 256) {
      _.ctx.deactivate(m);
      return;
    }
    const te = K & 1 && Z, ae = !Us(m);
    let ye;
    if (ae && (ye = j && j.onVnodeBeforeUnmount) && jt(ye, _, m), K & 6)
      Xe(m.component, S, D);
    else {
      if (K & 128) {
        m.suspense.unmount(S, D);
        return;
      }
      te && jn(m, null, _, "beforeUnmount"), K & 64 ? m.type.remove(
        m,
        _,
        S,
        P,
        Ne,
        D
      ) : I && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (R !== ft || J > 0 && J & 64) ? xe(
        I,
        _,
        S,
        !1,
        !0
      ) : (R === ft && J & 384 || !P && K & 16) && xe(k, _, S), D && St(m);
    }
    (ae && (ye = j && j.onVnodeUnmounted) || te) && ut(() => {
      ye && jt(ye, _, m), te && jn(m, null, _, "unmounted");
    }, S);
  }, St = (m) => {
    const { type: _, el: S, anchor: D, transition: P } = m;
    if (_ === ft) {
      mt(S, D);
      return;
    }
    if (_ === Hs) {
      W(m);
      return;
    }
    const R = () => {
      i(S), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (m.shapeFlag & 1 && P && !P.persisted) {
      const { leave: j, delayLeave: w } = P, k = () => j(S, R);
      w ? w(m.el, R, k) : k();
    } else
      R();
  }, mt = (m, _) => {
    let S;
    for (; m !== _; )
      S = v(m), i(m), m = S;
    i(_);
  }, Xe = (m, _, S) => {
    const { bum: D, scope: P, update: R, subTree: j, um: w } = m;
    D && Ws(D), P.stop(), R && (R.active = !1, Pe(j, m, _, S)), w && ut(w, _), ut(() => {
      m.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
  }, xe = (m, _, S, D = !1, P = !1, R = 0) => {
    for (let j = R; j < m.length; j++)
      Pe(m[j], _, S, D, P);
  }, O = (m) => m.shapeFlag & 6 ? O(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : v(m.anchor || m.el);
  let U = !1;
  const Oe = (m, _, S) => {
    m == null ? _._vnode && Pe(_._vnode, null, null, !0) : E(
      _._vnode || null,
      m,
      _,
      null,
      null,
      null,
      S
    ), U || (U = !0, Ru(), ip(), U = !1), _._vnode = m;
  }, Ne = {
    p: E,
    um: Pe,
    m: qe,
    r: St,
    mt: Te,
    mc: z,
    pc: fe,
    pbc: Y,
    n: O,
    o: t
  };
  let x, We;
  return e && ([x, We] = e(
    Ne
  )), {
    render: Oe,
    hydrate: x,
    createApp: rE(Oe, x)
  };
}
function Ea({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Un({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function pE(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Ep(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (re(r) && re(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let a = i[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = bn(i[s]), a.el = o.el), n || Ep(o, a)), a.type === No && (a.el = o.el);
    }
}
function hE(t) {
  const e = t.slice(), n = [0];
  let r, i, s, o, a;
  const u = t.length;
  for (r = 0; r < u; r++) {
    const c = t[r];
    if (c !== 0) {
      if (i = n[n.length - 1], t[i] < c) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        a = s + o >> 1, t[n[a]] < c ? s = a + 1 : o = a;
      c < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = e[o];
  return n;
}
function wp(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : wp(e);
}
const mE = (t) => t.__isTeleport, ft = Symbol.for("v-fgt"), No = Symbol.for("v-txt"), Wi = Symbol.for("v-cmt"), Hs = Symbol.for("v-stc"), wi = [];
let $t = null;
function Ht(t = !1) {
  wi.push($t = t ? null : []);
}
function gE() {
  wi.pop(), $t = wi[wi.length - 1] || null;
}
let Vi = 1;
function Bu(t) {
  Vi += t;
}
function yE(t) {
  return t.dynamicChildren = Vi > 0 ? $t || xr : null, gE(), Vi > 0 && $t && $t.push(t), t;
}
function Bt(t, e, n, r, i, s) {
  return yE(
    pe(
      t,
      e,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function vE(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ui(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Do = "__vInternal", Sp = ({ key: t }) => t ?? null, Bs = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Le(t) || De(t) || se(t) ? { i: pt, r: t, k: e, f: !!n } : t : null);
function pe(t, e = null, n = null, r = 0, i = null, s = t === ft ? 0 : 1, o = !1, a = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Sp(e),
    ref: e && Bs(e),
    scopeId: ap,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: pt
  };
  return a ? (tc(u, n), s & 128 && t.normalize(u)) : n && (u.shapeFlag |= Le(n) ? 8 : 16), Vi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  $t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && $t.push(u), u;
}
const Zt = _E;
function _E(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === Rb) && (t = Wi), vE(t)) {
    const a = Lr(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && tc(a, n), Vi > 0 && !s && $t && (a.shapeFlag & 6 ? $t[$t.indexOf(t)] = a : $t.push(a)), a.patchFlag |= -2, a;
  }
  if (RE(t) && (t = t.__vccOpts), e) {
    e = bE(e);
    let { class: a, style: u } = e;
    a && !Le(a) && (e.class = jl(a)), Ae(u) && (Zd(u) && !re(u) && (u = Ze({}, u)), e.style = Vl(u));
  }
  const o = Le(t) ? 1 : kb(t) ? 128 : mE(t) ? 64 : Ae(t) ? 4 : se(t) ? 2 : 0;
  return pe(
    t,
    e,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function bE(t) {
  return t ? Zd(t) || Do in t ? Ze({}, t) : t : null;
}
function Lr(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = t, a = e ? wE(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && Sp(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? re(i) ? i.concat(Bs(e)) : [i, Bs(e)] : Bs(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== ft ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Lr(t.ssContent),
    ssFallback: t.ssFallback && Lr(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function EE(t = " ", e = 0) {
  return Zt(No, null, t, e);
}
function Op(t, e) {
  const n = Zt(Hs, null, t);
  return n.staticCount = e, n;
}
function qt(t) {
  return t == null || typeof t == "boolean" ? Zt(Wi) : re(t) ? Zt(
    ft,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? bn(t) : Zt(No, null, String(t));
}
function bn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Lr(t);
}
function tc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (re(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), tc(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(Do in e) ? e._ctx = pt : i === 3 && pt && (pt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    se(e) ? (e = { default: e, _ctx: pt }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [EE(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function wE(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = jl([e.class, r.class]));
      else if (i === "style")
        e.style = Vl([e.style, r.style]);
      else if (bo(i)) {
        const s = e[i], o = r[i];
        o && s !== o && !(re(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function jt(t, e, n, r = null) {
  Ft(t, e, 7, [
    n,
    r
  ]);
}
const SE = mp();
let OE = 0;
function AE(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || SE, s = {
    uid: OE++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new kd(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yp(r, i),
    emitsOptions: op(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Cb.bind(null, s), t.ce && t.ce(s), s;
}
let Be = null, io, ll;
{
  const t = Pd(), e = (n, r) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  io = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Be = n
  ), ll = e(
    "__VUE_SSR_SETTERS__",
    (n) => Po = n
  );
}
const Bi = (t) => {
  const e = Be;
  return io(t), t.scope.on(), () => {
    t.scope.off(), io(e);
  };
}, qu = () => {
  Be && Be.scope.off(), io(null);
};
function Ap(t) {
  return t.vnode.shapeFlag & 4;
}
let Po = !1;
function TE(t, e = !1) {
  e && ll(e);
  const { props: n, children: r } = t.vnode, i = Ap(t);
  oE(t, n, i, e), cE(t, r);
  const s = i ? CE(t, e) : void 0;
  return e && ll(!1), s;
}
function CE(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Ao(new Proxy(t.ctx, Zb));
  const { setup: r } = n;
  if (r) {
    const i = t.setupContext = r.length > 1 ? NE(t) : null, s = Bi(t);
    Nn();
    const o = on(
      r,
      t,
      0,
      [
        t.props,
        i
      ]
    );
    if (Dn(), s(), Cd(o)) {
      if (o.then(qu, qu), e)
        return o.then((a) => {
          Ku(t, a, e);
        }).catch((a) => {
          To(a, t, 0);
        });
      t.asyncDep = o;
    } else
      Ku(t, o, e);
  } else
    Tp(t, e);
}
function Ku(t, e, n) {
  se(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ae(e) && (t.setupState = Xd(e)), Tp(t, n);
}
let Gu;
function Tp(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Gu && !r.render) {
      const i = r.template || Xl(t).template;
      if (i) {
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: a, compilerOptions: u } = r, c = Ze(
          Ze(
            {
              isCustomElement: s,
              delimiters: a
            },
            o
          ),
          u
        );
        r.render = Gu(i, c);
      }
    }
    t.render = r.render || vt;
  }
  {
    const i = Bi(t);
    Nn();
    try {
      Jb(t);
    } finally {
      Dn(), i();
    }
  }
}
function xE(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return ht(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function NE(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return xE(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Io(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(Xd(Ao(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in bi)
          return bi[n](t);
      },
      has(e, n) {
        return n in e || n in bi;
      }
    }));
}
const DE = /(?:^|[-_])(\w)/g, PE = (t) => t.replace(DE, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function IE(t, e = !0) {
  return se(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Cp(t, e, n = !1) {
  let r = IE(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const o in s)
        if (s[o] === e)
          return o;
    };
    r = i(
      t.components || t.parent.type.components
    ) || i(t.appContext.components);
  }
  return r ? PE(r) : n ? "App" : "Anonymous";
}
function RE(t) {
  return se(t) && "__vccOpts" in t;
}
const xp = (t, e) => cb(t, e, Po), kE = "3.4.15", ME = "http://www.w3.org/2000/svg", $E = "http://www.w3.org/1998/Math/MathML", En = typeof document < "u" ? document : null, zu = En && /* @__PURE__ */ En.createElement("template"), LE = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e === "svg" ? En.createElementNS(ME, t) : e === "mathml" ? En.createElementNS($E, t) : En.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => En.createTextNode(t),
  createComment: (t) => En.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => En.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, i, s) {
    const o = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      zu.innerHTML = r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t;
      const a = zu.content;
      if (r === "svg" || r === "mathml") {
        const u = a.firstChild;
        for (; u.firstChild; )
          a.appendChild(u.firstChild);
        a.removeChild(u);
      }
      e.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, FE = Symbol("_vtc");
function WE(t, e, n) {
  const r = t[FE];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const VE = Symbol("_vod"), jE = Symbol("");
function UE(t, e, n) {
  const r = t.style, i = r.display, s = Le(n);
  if (n && !s) {
    if (e && !Le(e))
      for (const o in e)
        n[o] == null && cl(r, o, "");
    for (const o in n)
      cl(r, o, n[o]);
  } else if (s) {
    if (e !== n) {
      const o = r[jE];
      o && (n += ";" + o), r.cssText = n;
    }
  } else
    e && t.removeAttribute("style");
  VE in t && (r.display = i);
}
const Yu = /\s*!important$/;
function cl(t, e, n) {
  if (re(n))
    n.forEach((r) => cl(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = HE(t, e);
    Yu.test(n) ? t.setProperty(
      zr(r),
      n.replace(Yu, ""),
      "important"
    ) : t[r] = n;
  }
}
const Zu = ["Webkit", "Moz", "ms"], wa = {};
function HE(t, e) {
  const n = wa[e];
  if (n)
    return n;
  let r = Mr(e);
  if (r !== "filter" && r in t)
    return wa[e] = r;
  r = Dd(r);
  for (let i = 0; i < Zu.length; i++) {
    const s = Zu[i] + r;
    if (s in t)
      return wa[e] = s;
  }
  return e;
}
const Ju = "http://www.w3.org/1999/xlink";
function BE(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Ju, e.slice(6, e.length)) : t.setAttributeNS(Ju, e, n);
  else {
    const s = L_(e);
    n == null || s && !Id(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function qE(t, e, n, r, i, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    r && o(r, i, s), t[e] = n ?? "";
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    t._value = n;
    const c = a === "OPTION" ? t.getAttribute("value") : t.value, f = n ?? "";
    c !== f && (t.value = f), n == null && t.removeAttribute(e);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean" ? n = Id(n) : n == null && c === "string" ? (n = "", u = !0) : c === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(e);
}
function Kn(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function KE(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Qu = Symbol("_vei");
function GE(t, e, n, r, i = null) {
  const s = t[Qu] || (t[Qu] = {}), o = s[e];
  if (r && o)
    o.value = r;
  else {
    const [a, u] = zE(e);
    if (r) {
      const c = s[e] = JE(r, i);
      Kn(t, a, c, u);
    } else
      o && (KE(t, a, o, u), s[e] = void 0);
  }
}
const Xu = /(?:Once|Passive|Capture)$/;
function zE(t) {
  let e;
  if (Xu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Xu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : zr(t.slice(2)), e];
}
let Sa = 0;
const YE = /* @__PURE__ */ Promise.resolve(), ZE = () => Sa || (YE.then(() => Sa = 0), Sa = Date.now());
function JE(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ft(
      QE(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = ZE(), n;
}
function QE(t, e) {
  if (re(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const ef = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, XE = (t, e, n, r, i, s, o, a, u) => {
  const c = i === "svg";
  e === "class" ? WE(t, r, c) : e === "style" ? UE(t, n, r) : bo(e) ? Ll(e) || GE(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : ew(t, e, r, c)) ? qE(
    t,
    e,
    r,
    s,
    o,
    a,
    u
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), BE(t, e, r, c));
};
function ew(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ef(e) && se(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const i = t.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ef(e) && Le(n) ? !1 : e in t;
}
const so = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return re(e) ? (n) => Ws(e, n) : e;
};
function tw(t) {
  t.target.composing = !0;
}
function tf(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Pr = Symbol("_assign"), nw = {
  created(t, { modifiers: { lazy: e, trim: n, number: r } }, i) {
    t[Pr] = so(i);
    const s = r || i.props && i.props.type === "number";
    Kn(t, e ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let a = t.value;
      n && (a = a.trim()), s && (a = Ii(a)), t[Pr](a);
    }), n && Kn(t, "change", () => {
      t.value = t.value.trim();
    }), e || (Kn(t, "compositionstart", tw), Kn(t, "compositionend", tf), Kn(t, "change", tf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: r, number: i } }, s) {
    if (t[Pr] = so(s), t.composing)
      return;
    const o = i || t.type === "number" ? Ii(t.value) : t.value, a = e ?? "";
    o !== a && (document.activeElement === t && t.type !== "range" && (n || r && t.value.trim() === a) || (t.value = a));
  }
}, rw = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, r) {
    const i = Eo(e);
    Kn(t, "change", () => {
      const s = Array.prototype.filter.call(t.options, (o) => o.selected).map(
        (o) => n ? Ii(oo(o)) : oo(o)
      );
      t[Pr](
        t.multiple ? i ? new Set(s) : s : s[0]
      ), t._assigning = !0, Jl(() => {
        t._assigning = !1;
      });
    }), t[Pr] = so(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e, oldValue: n, modifiers: { number: r } }) {
    nf(t, e, n, r);
  },
  beforeUpdate(t, e, n) {
    t[Pr] = so(n);
  },
  updated(t, { value: e, oldValue: n, modifiers: { number: r } }) {
    t._assigning || nf(t, e, n, r);
  }
};
function nf(t, e, n, r) {
  const i = t.multiple, s = re(e);
  if (!(i && !s && !Eo(e)) && !(s && Ri(e, n))) {
    for (let o = 0, a = t.options.length; o < a; o++) {
      const u = t.options[o], c = oo(u);
      if (i)
        if (s) {
          const f = typeof c;
          f === "string" || f === "number" ? u.selected = e.includes(
            r ? Ii(c) : c
          ) : u.selected = W_(e, c) > -1;
        } else
          u.selected = e.has(c);
      else if (Ri(oo(u), e)) {
        t.selectedIndex !== o && (t.selectedIndex = o);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function oo(t) {
  return "_value" in t ? t._value : t.value;
}
const iw = /* @__PURE__ */ Ze({ patchProp: XE }, LE);
let rf;
function sw() {
  return rf || (rf = fE(iw));
}
const ow = (...t) => {
  const e = sw().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const i = lw(r);
    if (!i)
      return;
    const s = e._component;
    !se(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const o = n(i, !1, aw(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, e;
};
function aw(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function lw(t) {
  return Le(t) ? document.querySelector(t) : t;
}
var cw = !1, Np = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\kuya\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17100_BKLCNNPJZSRCREQM", COLOR: "1", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-PPEVJ58", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CONDA_PROMPT_MODIFIER: "False", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\WINDOWS\\notepad.exe", envContainerTelemetryApiCmdLine: '-st "C:\\Program Files\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll"', GIT_ASKPASS: "c:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\kuya", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\kuya", INIT_CWD: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\kuya\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-PPEVJ58", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NODE_PATH: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules", NPM_CLI_JS: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\kuya\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\kuya\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\kuya\\.npm-init.js", npm_config_local_prefix: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view", npm_config_node_gyp: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.2.5", npm_config_prefix: "C:\\Users\\kuya\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\kuya\\.npmrc", npm_config_user_agent: "npm/10.2.5 node/v20.10.0 win32 x64 workspaces/false", npm_execpath: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build", npm_lifecycle_script: "vite build --mode development --watch", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view\\package.json", npm_package_name: "inventory_report_cv_1_2195", npm_package_version: "0.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "8", OneDrive: "C:\\Users\\kuya\\OneDrive", OneDriveConsumer: "C:\\Users\\kuya\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "C:\\Kerja\\kintone custom view\\SMP\\msp-inventory-report-custom-view\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\SMP\\node_modules\\.bin;C:\\Kerja\\kintone custom view\\node_modules\\.bin;C:\\Kerja\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Users\\kuya\\AppData\\Roaming\\npm\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\php;C:\\ProgramData\\ComposerSetup\\bin;C:\\Program Files\\PuTTY\\;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\nodejs\\;C:\\Users\\kuya\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\kuya\\OneDrive\\Documents\\Work Documents\\ktn-upload;C:\\Users\\kuya\\AppData\\Roaming\\Composer\\vendor\\bin;C:\\Users\\kuya\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\bin;C:\\Users\\kuya\\AppData\\Roaming\\npm;C:\\Users\\kuya\\AppData\\Local\\Programs\\oh-my-posh\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", POSH_AZURE_ENABLED: "False", POSH_CURSOR_COLUMN: "1", POSH_CURSOR_LINE: "8", POSH_GIT_ENABLED: "False", POSH_INSTALLER: "winget", POSH_PID: "11556", POSH_SHELL_VERSION: "5.1.22621.2506", POSH_THEME: "C:\\Users\\Kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes\\night-owl.omp.json", POSH_THEMES_PATH: "C:\\Users\\kuya\\AppData\\Local\\Programs\\oh-my-posh\\themes", POWERLINE_COMMAND: "oh-my-posh", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 151 Stepping 5, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "9705", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\kuya\\Documents\\WindowsPowerShell\\Modules;C:\\Users\\kuya\\AppData\\Local\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\kuya\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.85.2", TMP: "C:\\Users\\kuya\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-PPEVJ58", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-PPEVJ58", USERNAME: "kuya", USERPROFILE: "C:\\Users\\kuya", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "--ms-enable-electron-run-as-node", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\kuya\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-8a65c42db2-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS", WSLENV: "WT_SESSION:WT_PROFILE_ID:", WT_PROFILE_ID: "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", WT_SESSION: "051b0132-3141-4168-87b5-8bbd18e359c8", __PSLockDownPolicy: "0" };
let Dp;
const Ro = (t) => Dp = t, Pp = (
  /* istanbul ignore next */
  Symbol()
);
function ul(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Si;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Si || (Si = {}));
function uw() {
  const t = Md(!0), e = t.run(() => Yl({}));
  let n = [], r = [];
  const i = Ao({
    install(s) {
      Ro(i), i._a = s, s.provide(Pp, i), s.config.globalProperties.$pinia = i, r.forEach((o) => n.push(o)), r = [];
    },
    use(s) {
      return !this._a && !cw ? r.push(s) : n.push(s), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return i;
}
const Ip = () => {
};
function sf(t, e, n, r = Ip) {
  t.push(e);
  const i = () => {
    const s = t.indexOf(e);
    s > -1 && (t.splice(s, 1), r());
  };
  return !n && $d() && j_(i), i;
}
function vr(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
const fw = (t) => t();
function fl(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, r) => t.set(r, n)), t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], i = t[n];
    ul(i) && ul(r) && t.hasOwnProperty(n) && !De(r) && !sn(r) ? t[n] = fl(i, r) : t[n] = r;
  }
  return t;
}
const dw = (
  /* istanbul ignore next */
  Symbol()
);
function pw(t) {
  return !ul(t) || !t.hasOwnProperty(dw);
}
const { assign: vn } = Object;
function hw(t) {
  return !!(De(t) && t.effect);
}
function mw(t, e, n, r) {
  const { state: i, actions: s, getters: o } = e, a = n.state.value[t];
  let u;
  function c() {
    !a && Np.NODE_ENV === "production" && (n.state.value[t] = i ? i() : {});
    const f = pb(n.state.value[t]);
    return vn(f, s, Object.keys(o || {}).reduce((p, v) => (p[v] = Ao(xp(() => {
      Ro(n);
      const y = n._s.get(t);
      return o[v].call(y, y);
    })), p), {}));
  }
  return u = Rp(t, c, e, n, r, !0), u;
}
function Rp(t, e, n = {}, r, i, s) {
  let o;
  const a = vn({ actions: {} }, n), u = {
    deep: !0
    // flush: 'post',
  };
  let c, f, p = [], v = [], y;
  const b = r.state.value[t];
  !s && !b && Np.NODE_ENV === "production" && (r.state.value[t] = {}), Yl({});
  let E;
  function C(z) {
    let F;
    c = f = !1, typeof z == "function" ? (z(r.state.value[t]), F = {
      type: Si.patchFunction,
      storeId: t,
      events: y
    }) : (fl(r.state.value[t], z), F = {
      type: Si.patchObject,
      payload: z,
      storeId: t,
      events: y
    });
    const Y = E = Symbol();
    Jl().then(() => {
      E === Y && (c = !0);
    }), f = !0, vr(p, F, r.state.value[t]);
  }
  const T = s ? function() {
    const { state: F } = n, Y = F ? F() : {};
    this.$patch((X) => {
      vn(X, Y);
    });
  } : (
    /* istanbul ignore next */
    Ip
  );
  function q() {
    o.stop(), p = [], v = [], r._s.delete(t);
  }
  function V(z, F) {
    return function() {
      Ro(r);
      const Y = Array.from(arguments), X = [], le = [];
      function ce(ee) {
        X.push(ee);
      }
      function Te(ee) {
        le.push(ee);
      }
      vr(v, {
        args: Y,
        name: z,
        store: G,
        after: ce,
        onError: Te
      });
      let Se;
      try {
        Se = F.apply(this && this.$id === t ? this : G, Y);
      } catch (ee) {
        throw vr(le, ee), ee;
      }
      return Se instanceof Promise ? Se.then((ee) => (vr(X, ee), ee)).catch((ee) => (vr(le, ee), Promise.reject(ee))) : (vr(X, Se), Se);
    };
  }
  const W = {
    _p: r,
    // _s: scope,
    $id: t,
    $onAction: sf.bind(null, v),
    $patch: C,
    $reset: T,
    $subscribe(z, F = {}) {
      const Y = sf(p, z, F.detached, () => X()), X = o.run(() => js(() => r.state.value[t], (le) => {
        (F.flush === "sync" ? f : c) && z({
          storeId: t,
          type: Si.direct,
          events: y
        }, le);
      }, vn({}, u, F)));
      return Y;
    },
    $dispose: q
  }, G = Oo(W);
  r._s.set(t, G);
  const Q = (r._a && r._a.runWithContext || fw)(() => r._e.run(() => (o = Md()).run(e)));
  for (const z in Q) {
    const F = Q[z];
    if (De(F) && !hw(F) || sn(F))
      s || (b && pw(F) && (De(F) ? F.value = b[z] : fl(F, b[z])), r.state.value[t][z] = F);
    else if (typeof F == "function") {
      const Y = V(z, F);
      Q[z] = Y, a.actions[z] = F;
    }
  }
  return vn(G, Q), vn(he(G), Q), Object.defineProperty(G, "$state", {
    get: () => r.state.value[t],
    set: (z) => {
      C((F) => {
        vn(F, z);
      });
    }
  }), r._p.forEach((z) => {
    vn(G, o.run(() => z({
      store: G,
      app: r._a,
      pinia: r,
      options: a
    })));
  }), b && s && n.hydrate && n.hydrate(G.$state, b), c = !0, f = !0, G;
}
function qi(t, e, n) {
  let r, i;
  const s = typeof e == "function";
  typeof t == "string" ? (r = t, i = s ? n : e) : (i = t, r = t.id);
  function o(a, u) {
    const c = sE();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? Ei(Pp, null) : null), a && Ro(a), a = Dp, a._s.has(r) || (s ? Rp(r, e, i, a) : mw(r, i, a)), a._s.get(r);
  }
  return o.$id = r, o;
}
function Kt(t) {
  {
    t = he(t);
    const e = {};
    for (const n in t) {
      const r = t[n];
      (De(r) || sn(r)) && (e[n] = // ---
      gb(t, n));
    }
    return e;
  }
}
var $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kp(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var ko = {}, Ki = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.injectPlatformDeps = t.platformDeps = void 0, t.platformDeps = {
    readFileFromPath: function() {
      throw new Error("not implemented");
    },
    getRequestToken: function() {
      throw new Error("not implemented");
    },
    getDefaultAuth: function() {
      throw new Error("not implemented");
    },
    buildPlatformDependentConfig: function() {
      throw new Error("not implemented");
    },
    buildHeaders: function() {
      throw new Error("not implemented");
    },
    buildFormDataValue: function() {
      throw new Error("not implemented");
    },
    buildBaseUrl: function() {
      throw new Error("not implemented");
    },
    getVersion: function() {
      throw new Error("not implemented");
    }
  };
  var e = function(n) {
    n.readFileFromPath && (t.platformDeps.readFileFromPath = n.readFileFromPath), n.getRequestToken && (t.platformDeps.getRequestToken = n.getRequestToken), n.getDefaultAuth && (t.platformDeps.getDefaultAuth = n.getDefaultAuth), n.buildPlatformDependentConfig && (t.platformDeps.buildPlatformDependentConfig = n.buildPlatformDependentConfig), n.buildHeaders && (t.platformDeps.buildHeaders = n.buildHeaders), n.buildFormDataValue && (t.platformDeps.buildFormDataValue = n.buildFormDataValue), n.buildBaseUrl && (t.platformDeps.buildBaseUrl = n.buildBaseUrl), n.getVersion && (t.platformDeps.getVersion = n.getVersion);
  };
  t.injectPlatformDeps = e;
})(Ki);
var He = {}, Yr = {}, gw = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.UnsupportedPlatformError = void 0;
var yw = (
  /** @class */
  function(t) {
    gw(e, t);
    function e(n) {
      var r = this, i = "This function is not supported in ".concat(n, " environment");
      return r = t.call(this, i) || this, Error.captureStackTrace && Error.captureStackTrace(r, e), r.name = "UnsupportedPlatformError", r.platform = n, Object.setPrototypeOf(r, e.prototype), r;
    }
    return e;
  }(Error)
);
Yr.UnsupportedPlatformError = yw;
function Mo() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let t = 0; t < arguments.length; t++)
    this.define(arguments[t]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
Mo.prototype.define = function(t, e) {
  for (let n in t) {
    let r = t[n].map(function(i) {
      return i.toLowerCase();
    });
    n = n.toLowerCase();
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      if (s[0] !== "*") {
        if (!e && s in this._types)
          throw new Error(
            'Attempt to change mapping for "' + s + '" extension from "' + this._types[s] + '" to "' + n + '". Pass `force=true` to allow this, otherwise remove "' + s + '" from the list of extensions for "' + n + '".'
          );
        this._types[s] = n;
      }
    }
    if (e || !this._extensions[n]) {
      const i = r[0];
      this._extensions[n] = i[0] !== "*" ? i : i.substr(1);
    }
  }
};
Mo.prototype.getType = function(t) {
  t = String(t);
  let e = t.replace(/^.*[/\\]/, "").toLowerCase(), n = e.replace(/^.*\./, "").toLowerCase(), r = e.length < t.length;
  return (n.length < e.length - 1 || !r) && this._types[n] || null;
};
Mo.prototype.getExtension = function(t) {
  return t = /^\s*([^;\s]*)/.test(t) && RegExp.$1, t && this._extensions[t.toLowerCase()] || null;
};
var vw = Mo, _w = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
let bw = vw;
var Ew = new bw(_w);
const ww = "@kintone/rest-api-client", Sw = "5.0.6", Ow = {
  access: "public"
}, Aw = {
  name: "Cybozu, Inc.",
  url: "https://cybozu.co.jp"
}, Tw = "Kintone REST API client for JavaScript", Cw = "lib/src/index.js", xw = "esm/src/index.js", Nw = "lib/src/index.browser.js", Dw = "lib/src/index.d.ts", Pw = {
  prebuild: "pnpm clean",
  build: "tsc --build --force",
  postbuild: "run-p build:*",
  lint: "eslint 'src/**/*.ts' --max-warnings 0",
  prepublishOnly: "run-p build:umd_*",
  test: "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest",
  "test:ci": "cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand",
  "build:umd_dev": "rollup -c --environment BUILD:development",
  "build:umd_prod": "rollup -c --environment BUILD:production",
  clean: "rimraf lib esm umd",
  fix: "pnpm lint --fix",
  start: "pnpm build --watch"
}, Iw = {
  type: "git",
  url: "git+https://github.com/kintone/js-sdk.git",
  directory: "packages/rest-api-client"
}, Rw = [
  "esm",
  "lib",
  "umd",
  "index.mjs"
], kw = [
  "kintone",
  "rest",
  "api-client"
], Mw = "MIT", $w = {
  url: "https://github.com/kintone/js-sdk/issues"
}, Lw = "https://github.com/kintone/js-sdk/tree/master/packages/rest-api-client#readme", Fw = {
  node: ">=18"
}, Ww = {
  "@rollup/plugin-babel": "^6.0.4",
  "@rollup/plugin-commonjs": "^25.0.7",
  "@rollup/plugin-json": "^6.1.0",
  "@rollup/plugin-node-resolve": "^15.2.3",
  "@rollup/plugin-terser": "^0.4.4",
  "@types/core-js": "^2.5.8",
  "@types/js-base64": "^3.0.0",
  "@types/mime": "^3.0.4",
  "@types/qs": "^6.9.11",
  rollup: "^4.9.5",
  "rollup-plugin-ecma-version-validator": "^0.2.13",
  "rollup-plugin-license": "^3.2.0",
  "rollup-plugin-node-globals": "^1.4.0",
  "rollup-plugin-polyfill-node": "^0.13.0",
  webpack: "^5.89.0",
  "webpack-cli": "^5.1.4",
  "babel-loader": "^9.1.3",
  vite: "^5.0.11",
  rimraf: "^5.0.5",
  "cross-env": "^7.0.3"
}, Vw = {
  "core-js": "^3.35.0",
  axios: "^1.6.5",
  "form-data": "^4.0.0",
  "js-base64": "^3.7.5",
  mime: "^3.0.0",
  qs: "^6.11.2"
}, jw = {
  ".": {
    types: {
      import: "./esm/src/index.d.ts",
      require: "./lib/src/index.d.ts",
      default: "./lib/src/index.d.ts"
    },
    node: {
      import: "./index.mjs",
      require: "./lib/src/index.js",
      default: "./lib/src/index.js"
    },
    browser: "./lib/src/index.browser.js"
  },
  "./package.json": "./package.json"
}, Uw = {
  name: ww,
  version: Sw,
  publishConfig: Ow,
  author: Aw,
  description: Tw,
  main: Cw,
  module: xw,
  browser: Nw,
  types: Dw,
  scripts: Pw,
  repository: Iw,
  files: Rw,
  keywords: kw,
  license: Mw,
  bugs: $w,
  homepage: Lw,
  engines: Fw,
  devDependencies: Ww,
  dependencies: Vw,
  exports: jw
};
var Hw = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, Bw = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Mp = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(He, "__esModule", { value: !0 });
He.getVersion = He.buildBaseUrl = He.buildFormDataValue = He.buildHeaders = He.buildPlatformDependentConfig = He.getDefaultAuth = He.getRequestToken = He.readFileFromPath = void 0;
var qw = Yr, Kw = Mp(Ew), Gw = Mp(Uw), zw = function(t) {
  throw new qw.UnsupportedPlatformError("Browser");
};
He.readFileFromPath = zw;
var Yw = function() {
  return Hw(void 0, void 0, void 0, function() {
    var t, e;
    return Bw(this, function(n) {
      if (typeof kintone == "object" && kintone !== null && typeof kintone.getRequestToken == "function")
        return [2, kintone.getRequestToken()];
      if (typeof garoon == "object" && garoon !== null && typeof ((e = (t = garoon.connect) === null || t === void 0 ? void 0 : t.kintone) === null || e === void 0 ? void 0 : e.getRequestToken) == "function")
        return [2, garoon.connect.kintone.getRequestToken()];
      throw new Error("session authentication must specify a request token");
    });
  });
};
He.getRequestToken = Yw;
var Zw = function() {
  return {
    type: "session"
  };
};
He.getDefaultAuth = Zw;
var Jw = function() {
  return {};
};
He.buildPlatformDependentConfig = Jw;
var Qw = function() {
  return {};
};
He.buildHeaders = Qw;
var Xw = function(t, e) {
  var n = {};
  return e && (n.type = Kw.default.getType(e) || void 0), new Blob([t], n);
};
He.buildFormDataValue = Xw;
var eS = function(t) {
  if (t)
    return t;
  if (location === void 0)
    throw new Error("The baseUrl parameter is required for this environment");
  var e = location.host, n = location.protocol;
  return "".concat(n, "//").concat(e);
};
He.buildBaseUrl = eS;
var tS = function() {
  return Gw.default.version;
};
He.getVersion = tS;
var $o = {}, Lo = {}, sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.buildPath = void 0;
var nS = function(t) {
  var e = t.endpointName, n = t.guestSpaceId, r = t.preview, i = n !== void 0 ? "/guest/".concat(n) : "", s = r ? "/preview" : "";
  return "/k".concat(i, "/v1").concat(s, "/").concat(e, ".json");
};
sr.buildPath = nS;
var Oi = $ && $.__assign || function() {
  return Oi = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Oi.apply(this, arguments);
}, rS = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.BulkRequestClient = void 0;
var iS = sr, sS = (
  /** @class */
  function() {
    function t(e, n) {
      this.client = e, this.guestSpaceId = n, this.REQUESTS_LENGTH_LIMIT = 20;
    }
    return t.prototype.send = function(e) {
      var n = this, r = e.requests, i = r.map(function(o) {
        if ("endpointName" in o) {
          var a = o.endpointName, u = rS(o, ["endpointName"]);
          return Oi({ api: n.buildPathWithGuestSpaceId({ endpointName: a }) }, u);
        }
        return o;
      }), s = this.buildPathWithGuestSpaceId({
        endpointName: "bulkRequest"
      });
      return this.client.post(s, { requests: i });
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, iS.buildPath)(Oi(Oi({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
Lo.BulkRequestClient = sS;
var Fo = {}, gt = $ && $.__assign || function() {
  return gt = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, gt.apply(this, arguments);
}, oS = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, aS = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, lt = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.AppClient = void 0;
var lS = sr, cS = (
  /** @class */
  function() {
    function t(e, n) {
      this.client = e, this.guestSpaceId = n;
    }
    return t.prototype.getFormFields = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.addFormFields = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: !0
      });
      return this.client.post(n, e);
    }, t.prototype.updateFormFields = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.deleteFormFields = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/fields",
        preview: !0
      });
      return this.client.delete(n, e);
    }, t.prototype.getFormLayout = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/layout",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateFormLayout = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/form/layout",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getViews = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/views",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateViews = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/views",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getApp = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app"
      });
      return this.client.get(n, e);
    }, t.prototype.getApps = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "apps"
      });
      return this.client.get(n, e);
    }, t.prototype.addApp = function(e) {
      return oS(this, void 0, void 0, function() {
        var n, r, i, s, o;
        return aS(this, function(a) {
          switch (a.label) {
            case 0:
              return n = e.name, r = e.space, i = this.buildPathWithGuestSpaceId({
                endpointName: "app",
                preview: !0
              }), r ? (s = this.buildPathWithGuestSpaceId({
                endpointName: "space"
              }), [4, this.client.get(s, {
                id: r
              })]) : [3, 2];
            case 1:
              return o = a.sent().defaultThread, [2, this.client.post(i, gt(gt({}, e), { thread: o }))];
            case 2:
              return [2, this.client.post(i, { name: n })];
          }
        });
      });
    }, t.prototype.getAppSettings = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/settings",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateAppSettings = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/settings",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getProcessManagement = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/status",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateProcessManagement = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/status",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getDeployStatus = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/deploy",
        preview: !0
      });
      return this.client.get(n, e);
    }, t.prototype.deployApp = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/deploy",
        preview: !0
      });
      return this.client.post(n, e);
    }, t.prototype.getFieldAcl = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "field/acl",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateFieldAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "field/acl",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getAppAcl = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/acl",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateAppAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/acl",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.evaluateRecordsAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/acl/evaluate"
      });
      return this.client.get(n, e);
    }, t.prototype.getRecordAcl = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "record/acl",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateRecordAcl = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/acl",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getAppCustomize = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/customize",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateAppCustomize = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/customize",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getGeneralNotifications = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/general",
        preview: n
      });
      return this.client.get(i, gt({}, r));
    }, t.prototype.updateGeneralNotifications = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/general",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getPerRecordNotifications = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/perRecord",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updatePerRecordNotifications = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/perRecord",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getReminderNotifications = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/reminder",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateReminderNotifications = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/notifications/reminder",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getReports = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/reports",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateReports = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/reports",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.getAppActions = function(e) {
      var n = e.preview, r = lt(e, ["preview"]), i = this.buildPathWithGuestSpaceId({
        endpointName: "app/actions",
        preview: n
      });
      return this.client.get(i, r);
    }, t.prototype.updateAppActions = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "app/actions",
        preview: !0
      });
      return this.client.put(n, e);
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, lS.buildPath)(gt(gt({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
Fo.AppClient = cS;
var Wo = {}, Gi = {}, uS = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.KintoneAllRecordsError = void 0;
var fS = (
  /** @class */
  function(t) {
    uS(e, t);
    function e(n, r, i, s, o) {
      var a = this, u = i - r.length, c = e.extractErrorIndex(u, s, o), f = e.buildErrorMessage(u, i, c);
      return a = t.call(this, f) || this, a.name = "KintoneAllRecordsError", a.processedRecordsResult = n, a.unprocessedRecords = r, a.error = s, a.errorIndex = c, a.message = f, a.numOfProcessedRecords = u, a.numOfAllRecords = i, Object.setPrototypeOf(a, e.prototype), a;
    }
    return e.parseErrorIndex = function(n) {
      var r = [];
      return Object.keys(n).forEach(function(i) {
        var s = i.match(/records\[(\d+)\]/);
        s && r.push(Number(s[1]));
      }), r.length > 0 ? Math.min.apply(Math, r) : null;
    }, e.extractErrorIndex = function(n, r, i) {
      if (r.bulkRequestIndex !== void 0 && r.errors) {
        var s = e.parseErrorIndex(r.errors);
        if (s !== null)
          return n + r.bulkRequestIndex * i + s;
      }
    }, e.buildErrorMessage = function(n, r, i) {
      var s = "";
      return i !== void 0 && (s = "An error occurred at records[".concat(i, "]. ")), s += "".concat(n, "/").concat(r, " records are processed successfully"), s;
    }, e;
  }(Error)
);
Gi.KintoneAllRecordsError = fS;
var ct = $ && $.__assign || function() {
  return ct = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, ct.apply(this, arguments);
}, tt = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, nt = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Oa = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}, Ts = $ && $.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.RecordClient = void 0;
var dS = sr, Aa = Gi, Ta = 100, Ca = 100, xa = 100, fi = 500, pS = (
  /** @class */
  function() {
    function t(e, n, r) {
      this.client = e, this.bulkRequestClient = n, this.guestSpaceId = r, this.didWarnMaximumOffsetValue = !1;
    }
    return t.prototype.getRecord = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record"
      });
      return this.client.get(n, e);
    }, t.prototype.addRecord = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record"
      });
      return this.client.post(n, e);
    }, t.prototype.updateRecord = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record"
      });
      return this.client.put(n, e);
    }, t.prototype.upsertRecord = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a;
        return nt(this, function(u) {
          switch (u.label) {
            case 0:
              return n = e.app, r = e.updateKey, i = e.record, [4, this.getRecords({
                app: n,
                query: "".concat(r.field, ' = "').concat(r.value, '"')
              })];
            case 1:
              return s = u.sent().records, s.length > 0 ? s[0].$id.type !== "__ID__" ? [3, 3] : [4, this.updateRecord(e)] : [3, 4];
            case 2:
              return o = u.sent().revision, [2, { id: s[0].$id.value, revision: o }];
            case 3:
              throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
            case 4:
              return [2, this.addRecord({
                app: n,
                record: Object.assign({}, i, (a = {}, a[r.field] = { value: r.value }, a))
              })];
          }
        });
      });
    }, t.prototype.getRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r;
        return nt(this, function(i) {
          switch (i.label) {
            case 0:
              return n = this.buildPathWithGuestSpaceId({
                endpointName: "records"
              }), [4, this.client.get(n, e)];
            case 1:
              return r = i.sent(), this.warnMaximumOffsetValueIfNeeded(e.query), [2, r];
          }
        });
      });
    }, t.prototype.warnMaximumOffsetValueIfNeeded = function(e) {
      if (e) {
        var n = /offset\s+(\d+)/i, r = e.match(n);
        !this.didWarnMaximumOffsetValue && r && Number(r[1]) > 1e4 && (this.didWarnMaximumOffsetValue = !0, console.warn("Warning: The maximum offset value will be limited to 10,000 in the future. Please use `createCursor()` and `getRecordsByCursor()` instead."));
      }
    }, t.prototype.addRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s;
        return nt(this, function(o) {
          switch (o.label) {
            case 0:
              return n = this.buildPathWithGuestSpaceId({
                endpointName: "records"
              }), [4, this.client.post(n, e)];
            case 1:
              return r = o.sent(), i = r.ids, s = r.revisions, [2, {
                ids: i,
                revisions: s,
                records: i.map(function(a, u) {
                  return { id: a, revision: s[u] };
                })
              }];
          }
        });
      });
    }, t.prototype.updateRecords = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records"
      });
      return this.client.put(n, e);
    }, t.prototype.deleteRecords = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records"
      });
      return this.client.delete(n, e);
    }, t.prototype.createCursor = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/cursor"
      });
      return this.client.post(n, e);
    }, t.prototype.getRecordsByCursor = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/cursor"
      });
      return this.client.get(n, e);
    }, t.prototype.deleteCursor = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/cursor"
      });
      return this.client.delete(n, e);
    }, t.prototype.getAllRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a, u;
        return nt(this, function(c) {
          return n = e.condition, r = e.orderBy, i = e.withCursor, s = i === void 0 ? !0 : i, o = Oa(e, ["condition", "orderBy", "withCursor"]), r ? s ? (a = n ? "".concat(n, " ") : "", u = "".concat(a).concat(r ? "order by ".concat(r) : ""), [2, this.getAllRecordsWithCursor(ct(ct({}, o), { query: u }))]) : [2, this.getAllRecordsWithOffset(ct(ct({}, o), { orderBy: r, condition: n }))] : [2, this.getAllRecordsWithId(ct(ct({}, o), { condition: n }))];
        });
      });
    }, t.prototype.getAllRecordsWithId = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a, u, c, f, p;
        return nt(this, function(v) {
          switch (v.label) {
            case 0:
              n = e.fields, r = e.condition, i = Oa(e, ["fields", "condition"]), s = n, s && s.length > 0 && s.indexOf("$id") === -1 && (s = Ts(Ts([], s, !0), ["$id"], !1)), o = r ? "(".concat(r, ") and ") : "", a = [], u = "0", v.label = 1;
            case 1:
              return c = "".concat(o, "$id > ").concat(u, " order by $id asc limit ").concat(fi), [4, this.getRecords(ct(ct({}, i), { fields: s, query: c }))];
            case 2:
              if (f = v.sent(), a = a.concat(f.records), f.records.length < fi)
                return [3, 3];
              if (p = f.records[f.records.length - 1], p.$id.type === "__ID__")
                u = p.$id.value;
              else
                throw new Error("Missing `$id` in `getRecords` response. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
              return [3, 1];
            case 3:
              return [2, a];
          }
        });
      });
    }, t.prototype.getAllRecordsWithOffset = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s, o, a, u, c;
        return nt(this, function(f) {
          switch (f.label) {
            case 0:
              n = e.condition, r = e.orderBy, i = Oa(e, ["condition", "orderBy"]), s = n ? "".concat(n, " ") : "", o = [], a = 0, f.label = 1;
            case 1:
              return u = "".concat(s).concat(r ? "order by ".concat(r, " ") : "", "limit ").concat(fi, " offset ").concat(a), [4, this.getRecords(ct(ct({}, i), { query: u }))];
            case 2:
              return c = f.sent(), o = o.concat(c.records), c.records.length < fi ? [3, 3] : (a += fi, [3, 1]);
            case 3:
              return [2, o];
          }
        });
      });
    }, t.prototype.getAllRecordsWithCursor = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i, s;
        return nt(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.createCursor(e)];
            case 1:
              n = o.sent().id, o.label = 2;
            case 2:
              o.trys.push([2, 6, , 8]), r = [], o.label = 3;
            case 3:
              return [4, this.getRecordsByCursor({ id: n })];
            case 4:
              return i = o.sent(), r = r.concat(i.records), i.next ? [3, 3] : [3, 5];
            case 5:
              return [2, r];
            case 6:
              return s = o.sent(), [4, this.deleteCursor({ id: n })];
            case 7:
              throw o.sent(), s;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.addAllRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        return nt(this, function(n) {
          if (!e.records.every(function(r) {
            return !Array.isArray(r) && r instanceof Object;
          }))
            throw new Error("the `records` parameter must be an array of object.");
          return [2, this.addAllRecordsRecursive(e, e.records.length, [])];
        });
      });
    }, t.prototype.addAllRecordsRecursive = function(e, n, r) {
      return tt(this, void 0, void 0, function() {
        var i, s, o, a, u, c;
        return nt(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * Ta, s = e.app, o = e.records, a = o.slice(0, i), a.length === 0)
                return [2, { records: r }];
              f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), [4, this.addAllRecordsWithBulkRequest({
                app: s,
                records: a
              })];
            case 2:
              return u = f.sent(), [3, 4];
            case 3:
              throw c = f.sent(), new Aa.KintoneAllRecordsError({ records: r }, o, n, c, Ta);
            case 4:
              return [2, this.addAllRecordsRecursive({
                app: s,
                records: o.slice(i)
              }, n, r.concat(u))];
          }
        });
      });
    }, t.prototype.addAllRecordsWithBulkRequest = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i;
        return nt(this, function(s) {
          switch (s.label) {
            case 0:
              return n = this.separateArrayRecursive(Ta, [], e.records), r = n.map(function(o) {
                return {
                  method: "POST",
                  endpointName: "records",
                  payload: {
                    app: e.app,
                    records: o
                  }
                };
              }), [4, this.bulkRequestClient.send({ requests: r })];
            case 1:
              return i = s.sent().results, [2, i.map(function(o) {
                var a = o.ids, u = o.revisions;
                return a.map(function(c, f) {
                  return { id: c, revision: u[f] };
                });
              }).reduce(function(o, a) {
                return o.concat(a);
              }, [])];
          }
        });
      });
    }, t.prototype.updateAllRecords = function(e) {
      return tt(this, void 0, void 0, function() {
        return nt(this, function(n) {
          return [2, this.updateAllRecordsRecursive(e, e.records.length, [])];
        });
      });
    }, t.prototype.updateAllRecordsRecursive = function(e, n, r) {
      return tt(this, void 0, void 0, function() {
        var i, s, o, a, u, c;
        return nt(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * Ca, s = e.app, o = e.records, a = o.slice(0, i), a.length === 0)
                return [2, { records: r }];
              f.label = 1;
            case 1:
              return f.trys.push([1, 3, , 4]), [4, this.updateAllRecordsWithBulkRequest({
                app: s,
                records: a
              })];
            case 2:
              return u = f.sent(), [3, 4];
            case 3:
              throw c = f.sent(), new Aa.KintoneAllRecordsError({ records: r }, o, n, c, Ca);
            case 4:
              return [2, this.updateAllRecordsRecursive({
                app: s,
                records: o.slice(i)
              }, n, r.concat(u))];
          }
        });
      });
    }, t.prototype.updateAllRecordsWithBulkRequest = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r, i;
        return nt(this, function(s) {
          switch (s.label) {
            case 0:
              return n = this.separateArrayRecursive(Ca, [], e.records), r = n.map(function(o) {
                return {
                  method: "PUT",
                  endpointName: "records",
                  payload: {
                    app: e.app,
                    records: o
                  }
                };
              }), [4, this.bulkRequestClient.send({ requests: r })];
            case 1:
              return i = s.sent().results, [2, i.map(function(o) {
                return o.records;
              }).reduce(function(o, a) {
                return o.concat(a);
              }, [])];
          }
        });
      });
    }, t.prototype.deleteAllRecords = function(e) {
      return this.deleteAllRecordsRecursive(e, e.records.length);
    }, t.prototype.deleteAllRecordsRecursive = function(e, n) {
      return tt(this, void 0, void 0, function() {
        var r, i, s, o, a;
        return nt(this, function(u) {
          switch (u.label) {
            case 0:
              if (r = this.bulkRequestClient.REQUESTS_LENGTH_LIMIT * xa, i = e.app, s = e.records, o = s.slice(0, r), o.length === 0)
                return [2, {}];
              u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.deleteAllRecordsWithBulkRequest({
                app: i,
                records: o
              })];
            case 2:
              return u.sent(), [3, 4];
            case 3:
              throw a = u.sent(), new Aa.KintoneAllRecordsError({}, s, n, a, xa);
            case 4:
              return [2, this.deleteAllRecordsRecursive({
                app: i,
                records: s.slice(r)
              }, n)];
          }
        });
      });
    }, t.prototype.deleteAllRecordsWithBulkRequest = function(e) {
      return tt(this, void 0, void 0, function() {
        var n, r;
        return nt(this, function(i) {
          switch (i.label) {
            case 0:
              return n = this.separateArrayRecursive(xa, [], e.records), r = n.map(function(s) {
                return {
                  method: "DELETE",
                  endpointName: "records",
                  payload: {
                    app: e.app,
                    ids: s.map(function(o) {
                      return o.id;
                    }),
                    revisions: s.map(function(o) {
                      return o.revision;
                    })
                  }
                };
              }), [4, this.bulkRequestClient.send({ requests: r })];
            case 1:
              return i.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.separateArrayRecursive = function(e, n, r) {
      var i = r.slice(0, e);
      return i.length === 0 ? n : this.separateArrayRecursive(e, Ts(Ts([], n, !0), [i], !1), r.slice(e));
    }, t.prototype.addRecordComment = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/comment"
      });
      return this.client.post(n, e);
    }, t.prototype.deleteRecordComment = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/comment"
      });
      return this.client.delete(n, e);
    }, t.prototype.getRecordComments = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/comments"
      });
      return this.client.get(n, e);
    }, t.prototype.updateRecordAssignees = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/assignees"
      });
      return this.client.put(n, e);
    }, t.prototype.updateRecordStatus = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "record/status"
      });
      return this.client.put(n, e);
    }, t.prototype.updateRecordsStatus = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "records/status"
      });
      return this.client.put(n, e);
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, dS.buildPath)(ct(ct({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
Wo.RecordClient = pS;
var Vo = {}, $p = typeof self == "object" ? self.FormData : window.FormData, ao = $ && $.__assign || function() {
  return ao = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, ao.apply(this, arguments);
}, hS = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, mS = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, gS = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.FileClient = void 0;
var yS = sr, vS = gS($p), of = Ki, _S = Yr, bS = (
  /** @class */
  function() {
    function t(e, n) {
      this.client = e, this.guestSpaceId = n;
    }
    return t.prototype.uploadFile = function(e) {
      return hS(this, void 0, void 0, function() {
        var n, r, i, s, c, o, a, u, c, f;
        return mS(this, function(p) {
          switch (p.label) {
            case 0:
              if (n = this.buildPathWithGuestSpaceId({
                endpointName: "file"
              }), r = new vS.default(), !("path" in e.file))
                return [3, 5];
              p.label = 1;
            case 1:
              return p.trys.push([1, 3, , 4]), [4, of.platformDeps.readFileFromPath(e.file.path)];
            case 2:
              return i = p.sent(), s = i.name, c = i.data, r.append("file", c, s), [3, 4];
            case 3:
              throw o = p.sent(), o instanceof _S.UnsupportedPlatformError ? new Error("uploadFile doesn't allow to accept a file path in ".concat(o.platform, " environment.")) : o;
            case 4:
              return [3, 6];
            case 5:
              a = e.file, u = a.name, c = a.data, f = of.platformDeps.buildFormDataValue(c, u), r.append("file", f, u), p.label = 6;
            case 6:
              return [2, this.client.postData(n, r)];
          }
        });
      });
    }, t.prototype.downloadFile = function(e) {
      var n = this.buildPathWithGuestSpaceId({
        endpointName: "file"
      });
      return this.client.getData(n, e);
    }, t.prototype.buildPathWithGuestSpaceId = function(e) {
      return (0, yS.buildPath)(ao(ao({}, e), { guestSpaceId: this.guestSpaceId }));
    }, t;
  }()
);
Vo.FileClient = bS;
var Lp = {}, jo = {};
function Fp(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ES } = Object.prototype, { getPrototypeOf: nc } = Object, Uo = /* @__PURE__ */ ((t) => (e) => {
  const n = ES.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xt = (t) => (t = t.toLowerCase(), (e) => Uo(e) === t), Ho = (t) => (e) => typeof e === t, { isArray: Zr } = Array, ji = Ho("undefined");
function wS(t) {
  return t !== null && !ji(t) && t.constructor !== null && !ji(t.constructor) && Dt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Wp = Xt("ArrayBuffer");
function SS(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Wp(t.buffer), e;
}
const OS = Ho("string"), Dt = Ho("function"), Vp = Ho("number"), Bo = (t) => t !== null && typeof t == "object", AS = (t) => t === !0 || t === !1, qs = (t) => {
  if (Uo(t) !== "object")
    return !1;
  const e = nc(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, TS = Xt("Date"), CS = Xt("File"), xS = Xt("Blob"), NS = Xt("FileList"), DS = (t) => Bo(t) && Dt(t.pipe), PS = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Dt(t.append) && ((e = Uo(t)) === "formdata" || // detect form-data instance
  e === "object" && Dt(t.toString) && t.toString() === "[object FormData]"));
}, IS = Xt("URLSearchParams"), RS = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, i;
  if (typeof t != "object" && (t = [t]), Zr(t))
    for (r = 0, i = t.length; r < i; r++)
      e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = s.length;
    let a;
    for (r = 0; r < o; r++)
      a = s[r], e.call(null, t[a], a, t);
  }
}
function jp(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], e === i.toLowerCase())
      return i;
  return null;
}
const Up = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : $, Hp = (t) => !ji(t) && t !== Up;
function dl() {
  const { caseless: t } = Hp(this) && this || {}, e = {}, n = (r, i) => {
    const s = t && jp(e, i) || i;
    qs(e[s]) && qs(r) ? e[s] = dl(e[s], r) : qs(r) ? e[s] = dl({}, r) : Zr(r) ? e[s] = r.slice() : e[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && zi(arguments[r], n);
  return e;
}
const kS = (t, e, n, { allOwnKeys: r } = {}) => (zi(e, (i, s) => {
  n && Dt(i) ? t[s] = Fp(i, n) : t[s] = i;
}, { allOwnKeys: r }), t), MS = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), $S = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, LS = (t, e, n, r) => {
  let i, s, o;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
      o = i[s], (!r || r(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
    t = n !== !1 && nc(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, FS = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, WS = (t) => {
  if (!t)
    return null;
  if (Zr(t))
    return t;
  let e = t.length;
  if (!Vp(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, VS = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && nc(Uint8Array)), jS = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    e.call(t, s[0], s[1]);
  }
}, US = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, HS = Xt("HTMLFormElement"), BS = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), af = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), qS = Xt("RegExp"), Bp = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  zi(n, (i, s) => {
    let o;
    (o = e(i, s, t)) !== !1 && (r[s] = o || i);
  }), Object.defineProperties(t, r);
}, KS = (t) => {
  Bp(t, (e, n) => {
    if (Dt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Dt(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, GS = (t, e) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return Zr(t) ? r(t) : r(String(t).split(e)), n;
}, zS = () => {
}, YS = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Na = "abcdefghijklmnopqrstuvwxyz", lf = "0123456789", qp = {
  DIGIT: lf,
  ALPHA: Na,
  ALPHA_DIGIT: Na + Na.toUpperCase() + lf
}, ZS = (t = 16, e = qp.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function JS(t) {
  return !!(t && Dt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const QS = (t) => {
  const e = new Array(10), n = (r, i) => {
    if (Bo(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[i] = r;
        const s = Zr(r) ? [] : {};
        return zi(r, (o, a) => {
          const u = n(o, i + 1);
          !ji(u) && (s[a] = u);
        }), e[i] = void 0, s;
      }
    }
    return r;
  };
  return n(t, 0);
}, XS = Xt("AsyncFunction"), e0 = (t) => t && (Bo(t) || Dt(t)) && Dt(t.then) && Dt(t.catch);
var N = {
  isArray: Zr,
  isArrayBuffer: Wp,
  isBuffer: wS,
  isFormData: PS,
  isArrayBufferView: SS,
  isString: OS,
  isNumber: Vp,
  isBoolean: AS,
  isObject: Bo,
  isPlainObject: qs,
  isUndefined: ji,
  isDate: TS,
  isFile: CS,
  isBlob: xS,
  isRegExp: qS,
  isFunction: Dt,
  isStream: DS,
  isURLSearchParams: IS,
  isTypedArray: VS,
  isFileList: NS,
  forEach: zi,
  merge: dl,
  extend: kS,
  trim: RS,
  stripBOM: MS,
  inherits: $S,
  toFlatObject: LS,
  kindOf: Uo,
  kindOfTest: Xt,
  endsWith: FS,
  toArray: WS,
  forEachEntry: jS,
  matchAll: US,
  isHTMLForm: HS,
  hasOwnProperty: af,
  hasOwnProp: af,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bp,
  freezeMethods: KS,
  toObjectSet: GS,
  toCamelCase: BS,
  noop: zS,
  toFiniteNumber: YS,
  findKey: jp,
  global: Up,
  isContextDefined: Hp,
  ALPHABET: qp,
  generateString: ZS,
  isSpecCompliantForm: JS,
  toJSONObject: QS,
  isAsyncFn: XS,
  isThenable: e0
};
function ge(t, e, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
N.inherits(ge, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Kp = ge.prototype, Gp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Gp[t] = { value: t };
});
Object.defineProperties(ge, Gp);
Object.defineProperty(Kp, "isAxiosError", { value: !0 });
ge.from = (t, e, n, r, i, s) => {
  const o = Object.create(Kp);
  return N.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ge.call(o, t.message, e, n, r, i), o.cause = t, o.name = t.name, s && Object.assign(o, s), o;
};
var t0 = null;
function pl(t) {
  return N.isPlainObject(t) || N.isArray(t);
}
function zp(t) {
  return N.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function cf(t, e, n) {
  return t ? t.concat(e).map(function(i, s) {
    return i = zp(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : e;
}
function n0(t) {
  return N.isArray(t) && !t.some(pl);
}
const r0 = N.toFlatObject(N, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function qo(t, e, n) {
  if (!N.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = N.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, C) {
    return !N.isUndefined(C[E]);
  });
  const r = n.metaTokens, i = n.visitor || f, s = n.dots, o = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(e);
  if (!N.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(b) {
    if (b === null)
      return "";
    if (N.isDate(b))
      return b.toISOString();
    if (!u && N.isBlob(b))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(b) || N.isTypedArray(b) ? u && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function f(b, E, C) {
    let T = b;
    if (b && !C && typeof b == "object") {
      if (N.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), b = JSON.stringify(b);
      else if (N.isArray(b) && n0(b) || (N.isFileList(b) || N.endsWith(E, "[]")) && (T = N.toArray(b)))
        return E = zp(E), T.forEach(function(V, W) {
          !(N.isUndefined(V) || V === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? cf([E], W, s) : o === null ? E : E + "[]",
            c(V)
          );
        }), !1;
    }
    return pl(b) ? !0 : (e.append(cf(C, E, s), c(b)), !1);
  }
  const p = [], v = Object.assign(r0, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: pl
  });
  function y(b, E) {
    if (!N.isUndefined(b)) {
      if (p.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(b), N.forEach(b, function(T, q) {
        (!(N.isUndefined(T) || T === null) && i.call(
          e,
          T,
          N.isString(q) ? q.trim() : q,
          E,
          v
        )) === !0 && y(T, E ? E.concat(q) : [q]);
      }), p.pop();
    }
  }
  if (!N.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function uf(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function rc(t, e) {
  this._pairs = [], t && qo(t, this, e);
}
const Yp = rc.prototype;
Yp.append = function(e, n) {
  this._pairs.push([e, n]);
};
Yp.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, uf);
  } : uf;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function i0(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Zp(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || i0, i = n && n.serialize;
  let s;
  if (i ? s = i(e, n) : s = N.isURLSearchParams(e) ? e.toString() : new rc(e, n).toString(r), s) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class s0 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    N.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
var ff = s0, Jp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, o0 = typeof URLSearchParams < "u" ? URLSearchParams : rc, a0 = typeof FormData < "u" ? FormData : null, l0 = typeof Blob < "u" ? Blob : null, c0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: o0,
    FormData: a0,
    Blob: l0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const Qp = typeof window < "u" && typeof document < "u", u0 = ((t) => Qp && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), f0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function";
var d0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: Qp,
  hasStandardBrowserWebWorkerEnv: f0,
  hasStandardBrowserEnv: u0
}), Yt = {
  ...d0,
  ...c0
};
function p0(t, e) {
  return qo(t, new Yt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return Yt.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function h0(t) {
  return N.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function m0(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function Xp(t) {
  function e(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__")
      return !0;
    const a = Number.isFinite(+o), u = s >= n.length;
    return o = !o && N.isArray(i) ? i.length : o, u ? (N.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !a) : ((!i[o] || !N.isObject(i[o])) && (i[o] = []), e(n, r, i[o], s) && N.isArray(i[o]) && (i[o] = m0(i[o])), !a);
  }
  if (N.isFormData(t) && N.isFunction(t.entries)) {
    const n = {};
    return N.forEachEntry(t, (r, i) => {
      e(h0(r), i, n, 0);
    }), n;
  }
  return null;
}
function g0(t, e, n) {
  if (N.isString(t))
    try {
      return (e || JSON.parse)(t), N.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const ic = {
  transitional: Jp,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = N.isObject(e);
    if (s && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e))
      return i && i ? JSON.stringify(Xp(e)) : e;
    if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e))
      return e;
    if (N.isArrayBufferView(e))
      return e.buffer;
    if (N.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return p0(e, this.formSerializer).toString();
      if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return qo(
          a ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), g0(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || ic.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (e && N.isString(e) && (r && !this.responseType || i)) {
      const o = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? ge.from(a, ge.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Yt.classes.FormData,
    Blob: Yt.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  ic.headers[t] = {};
});
var sc = ic;
const y0 = N.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var v0 = (t) => {
  const e = {};
  let n, r, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || e[n] && y0[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
};
const df = Symbol("internals");
function di(t) {
  return t && String(t).trim().toLowerCase();
}
function Ks(t) {
  return t === !1 || t == null ? t : N.isArray(t) ? t.map(Ks) : String(t);
}
function _0(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const b0 = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Da(t, e, n, r, i) {
  if (N.isFunction(r))
    return r.call(this, e, n);
  if (i && (e = n), !!N.isString(e)) {
    if (N.isString(r))
      return e.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(e);
  }
}
function E0(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function w0(t, e) {
  const n = N.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(i, s, o) {
        return this[r].call(this, e, i, s, o);
      },
      configurable: !0
    });
  });
}
class Ko {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const i = this;
    function s(a, u, c) {
      const f = di(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = N.findKey(i, f);
      (!p || i[p] === void 0 || c === !0 || c === void 0 && i[p] !== !1) && (i[p || u] = Ks(a));
    }
    const o = (a, u) => N.forEach(a, (c, f) => s(c, f, u));
    return N.isPlainObject(e) || e instanceof this.constructor ? o(e, n) : N.isString(e) && (e = e.trim()) && !b0(e) ? o(v0(e), n) : e != null && s(n, e, r), this;
  }
  get(e, n) {
    if (e = di(e), e) {
      const r = N.findKey(this, e);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return _0(i);
        if (N.isFunction(n))
          return n.call(this, i, r);
        if (N.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = di(e), e) {
      const r = N.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Da(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (o = di(o), o) {
        const a = N.findKey(r, o);
        a && (!n || Da(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return N.isArray(e) ? e.forEach(s) : s(e), i;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || Da(this, this[s], s, e, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(e) {
    const n = this, r = {};
    return N.forEach(this, (i, s) => {
      const o = N.findKey(r, s);
      if (o) {
        n[o] = Ks(i), delete n[s];
        return;
      }
      const a = e ? E0(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Ks(i), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = e && N.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(e) {
    const r = (this[df] = this[df] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = di(o);
      r[a] || (w0(i, o), r[a] = !0);
    }
    return N.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
Ko.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Ko.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
N.freezeMethods(Ko);
var an = Ko;
function Pa(t, e) {
  const n = this || sc, r = e || n, i = an.from(r.headers);
  let s = r.data;
  return N.forEach(t, function(a) {
    s = a.call(n, s, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), s;
}
function eh(t) {
  return !!(t && t.__CANCEL__);
}
function Yi(t, e, n) {
  ge.call(this, t ?? "canceled", ge.ERR_CANCELED, e, n), this.name = "CanceledError";
}
N.inherits(Yi, ge, {
  __CANCEL__: !0
});
function S0(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new ge(
    "Request failed with status code " + n.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
var O0 = Yt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, i, s) {
      const o = [t + "=" + encodeURIComponent(e)];
      N.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), N.isString(r) && o.push("path=" + r), N.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function A0(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function T0(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function th(t, e) {
  return t && !A0(e) ? T0(t, e) : e;
}
var C0 = Yt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(s) {
      let o = s;
      return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(o) {
      const a = N.isString(o) ? i(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function x0(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function N0(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let i = 0, s = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = r[s];
    o || (o = c), n[i] = u, r[i] = c;
    let p = s, v = 0;
    for (; p !== i; )
      v += n[p++], p = p % t;
    if (i = (i + 1) % t, i === s && (s = (s + 1) % t), c - o < e)
      return;
    const y = f && c - f;
    return y ? Math.round(v * 1e3 / y) : void 0;
  };
}
function pf(t, e) {
  let n = 0;
  const r = N0(50, 250);
  return (i) => {
    const s = i.loaded, o = i.lengthComputable ? i.total : void 0, a = s - n, u = r(a), c = s <= o;
    n = s;
    const f = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && o && c ? (o - s) / u : void 0,
      event: i
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const D0 = typeof XMLHttpRequest < "u";
var P0 = D0 && function(t) {
  return new Promise(function(n, r) {
    let i = t.data;
    const s = an.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: a } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if (N.isFormData(i)) {
      if (Yt.hasStandardBrowserEnv || Yt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((f = s.getContentType()) !== !1) {
        const [E, ...C] = f ? f.split(";").map((T) => T.trim()).filter(Boolean) : [];
        s.setContentType([E || "multipart/form-data", ...C].join("; "));
      }
    }
    let p = new XMLHttpRequest();
    if (t.auth) {
      const E = t.auth.username || "", C = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(E + ":" + C));
    }
    const v = th(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), Zp(v, t.params, t.paramsSerializer), !0), p.timeout = t.timeout;
    function y() {
      if (!p)
        return;
      const E = an.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), T = {
        data: !o || o === "text" || o === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: E,
        config: t,
        request: p
      };
      S0(function(V) {
        n(V), c();
      }, function(V) {
        r(V), c();
      }, T), p = null;
    }
    if ("onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, p.onabort = function() {
      p && (r(new ge("Request aborted", ge.ECONNABORTED, t, p)), p = null);
    }, p.onerror = function() {
      r(new ge("Network Error", ge.ERR_NETWORK, t, p)), p = null;
    }, p.ontimeout = function() {
      let C = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const T = t.transitional || Jp;
      t.timeoutErrorMessage && (C = t.timeoutErrorMessage), r(new ge(
        C,
        T.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        t,
        p
      )), p = null;
    }, Yt.hasStandardBrowserEnv && (a && N.isFunction(a) && (a = a(t)), a || a !== !1 && C0(v))) {
      const E = t.xsrfHeaderName && t.xsrfCookieName && O0.read(t.xsrfCookieName);
      E && s.set(t.xsrfHeaderName, E);
    }
    i === void 0 && s.setContentType(null), "setRequestHeader" in p && N.forEach(s.toJSON(), function(C, T) {
      p.setRequestHeader(T, C);
    }), N.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), o && o !== "json" && (p.responseType = t.responseType), typeof t.onDownloadProgress == "function" && p.addEventListener("progress", pf(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", pf(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (E) => {
      p && (r(!E || E.type ? new Yi(null, t, p) : E), p.abort(), p = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const b = x0(v);
    if (b && Yt.protocols.indexOf(b) === -1) {
      r(new ge("Unsupported protocol " + b + ":", ge.ERR_BAD_REQUEST, t));
      return;
    }
    p.send(i || null);
  });
};
const hl = {
  http: t0,
  xhr: P0
};
N.forEach(hl, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const hf = (t) => `- ${t}`, I0 = (t) => N.isFunction(t) || t === null || t === !1;
var nh = {
  getAdapter: (t) => {
    t = N.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const i = {};
    for (let s = 0; s < e; s++) {
      n = t[s];
      let o;
      if (r = n, !I0(n) && (r = hl[(o = String(n)).toLowerCase()], r === void 0))
        throw new ge(`Unknown adapter '${o}'`);
      if (r)
        break;
      i[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? s.length > 1 ? `since :
` + s.map(hf).join(`
`) : " " + hf(s[0]) : "as no adapter specified";
      throw new ge(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: hl
};
function Ia(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Yi(null, t);
}
function mf(t) {
  return Ia(t), t.headers = an.from(t.headers), t.data = Pa.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), nh.getAdapter(t.adapter || sc.adapter)(t).then(function(r) {
    return Ia(t), r.data = Pa.call(
      t,
      t.transformResponse,
      r
    ), r.headers = an.from(r.headers), r;
  }, function(r) {
    return eh(r) || (Ia(t), r && r.response && (r.response.data = Pa.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = an.from(r.response.headers))), Promise.reject(r);
  });
}
const gf = (t) => t instanceof an ? t.toJSON() : t;
function Fr(t, e) {
  e = e || {};
  const n = {};
  function r(c, f, p) {
    return N.isPlainObject(c) && N.isPlainObject(f) ? N.merge.call({ caseless: p }, c, f) : N.isPlainObject(f) ? N.merge({}, f) : N.isArray(f) ? f.slice() : f;
  }
  function i(c, f, p) {
    if (N.isUndefined(f)) {
      if (!N.isUndefined(c))
        return r(void 0, c, p);
    } else
      return r(c, f, p);
  }
  function s(c, f) {
    if (!N.isUndefined(f))
      return r(void 0, f);
  }
  function o(c, f) {
    if (N.isUndefined(f)) {
      if (!N.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, f);
  }
  function a(c, f, p) {
    if (p in e)
      return r(c, f);
    if (p in t)
      return r(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, f) => i(gf(c), gf(f), !0)
  };
  return N.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const p = u[f] || i, v = p(t[f], e[f], f);
    N.isUndefined(v) && p !== a || (n[f] = v);
  }), n;
}
const rh = "1.6.5", oc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  oc[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const yf = {};
oc.transitional = function(e, n, r) {
  function i(s, o) {
    return "[Axios v" + rh + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, a) => {
    if (e === !1)
      throw new ge(
        i(o, " has been removed" + (n ? " in " + n : "")),
        ge.ERR_DEPRECATED
      );
    return n && !yf[o] && (yf[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, o, a) : !0;
  };
};
function R0(t, e, n) {
  if (typeof t != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], o = e[s];
    if (o) {
      const a = t[s], u = a === void 0 || o(a, s, t);
      if (u !== !0)
        throw new ge("option " + s + " must be " + u, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ge("Unknown option " + s, ge.ERR_BAD_OPTION);
  }
}
var ml = {
  assertOptions: R0,
  validators: oc
};
const mn = ml.validators;
class lo {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new ff(),
      response: new ff()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Fr(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && ml.assertOptions(r, {
      silentJSONParsing: mn.transitional(mn.boolean),
      forcedJSONParsing: mn.transitional(mn.boolean),
      clarifyTimeoutError: mn.transitional(mn.boolean)
    }, !1), i != null && (N.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : ml.assertOptions(i, {
      encode: mn.function,
      serialize: mn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && N.merge(
      s.common,
      s[n.method]
    );
    s && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete s[b];
      }
    ), n.headers = an.concat(o, s);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (u = u && E.synchronous, a.unshift(E.fulfilled, E.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(E) {
      c.push(E.fulfilled, E.rejected);
    });
    let f, p = 0, v;
    if (!u) {
      const b = [mf.bind(this), void 0];
      for (b.unshift.apply(b, a), b.push.apply(b, c), v = b.length, f = Promise.resolve(n); p < v; )
        f = f.then(b[p++], b[p++]);
      return f;
    }
    v = a.length;
    let y = n;
    for (p = 0; p < v; ) {
      const b = a[p++], E = a[p++];
      try {
        y = b(y);
      } catch (C) {
        E.call(this, C);
        break;
      }
    }
    try {
      f = mf.call(this, y);
    } catch (b) {
      return Promise.reject(b);
    }
    for (p = 0, v = c.length; p < v; )
      f = f.then(c[p++], c[p++]);
    return f;
  }
  getUri(e) {
    e = Fr(this.defaults, e);
    const n = th(e.baseURL, e.url);
    return Zp(n, e.params, e.paramsSerializer);
  }
}
N.forEach(["delete", "get", "head", "options"], function(e) {
  lo.prototype[e] = function(n, r) {
    return this.request(Fr(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(s, o, a) {
      return this.request(Fr(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  lo.prototype[e] = n(), lo.prototype[e + "Form"] = n(!0);
});
var Gs = lo;
class ac {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, e(function(s, o, a) {
      r.reason || (r.reason = new Yi(s, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new ac(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
}
var k0 = ac;
function M0(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function $0(t) {
  return N.isObject(t) && t.isAxiosError === !0;
}
const gl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(gl).forEach(([t, e]) => {
  gl[e] = t;
});
var L0 = gl;
function ih(t) {
  const e = new Gs(t), n = Fp(Gs.prototype.request, e);
  return N.extend(n, Gs.prototype, e, { allOwnKeys: !0 }), N.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(i) {
    return ih(Fr(t, i));
  }, n;
}
const Fe = ih(sc);
Fe.Axios = Gs;
Fe.CanceledError = Yi;
Fe.CancelToken = k0;
Fe.isCancel = eh;
Fe.VERSION = rh;
Fe.toFormData = qo;
Fe.AxiosError = ge;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(e) {
  return Promise.all(e);
};
Fe.spread = M0;
Fe.isAxiosError = $0;
Fe.mergeConfig = Fr;
Fe.AxiosHeaders = an;
Fe.formToJSON = (t) => Xp(N.isHTMLForm(t) ? new FormData(t) : t);
Fe.getAdapter = nh.getAdapter;
Fe.HttpStatusCode = L0;
Fe.default = Fe;
var F0 = Fe, co = $ && $.__assign || function() {
  return co = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, co.apply(this, arguments);
}, _r = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, br = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, W0 = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.AxiosClient = void 0;
var V0 = W0(F0), j0 = (
  /** @class */
  function() {
    function t(e) {
      var n = e.responseHandler, r = e.requestConfigBuilder;
      this.responseHandler = n, this.requestConfigBuilder = r;
    }
    return t.prototype.get = function(e, n) {
      return _r(this, void 0, void 0, function() {
        var r;
        return br(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("get", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.getData = function(e, n) {
      return _r(this, void 0, void 0, function() {
        var r;
        return br(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("get", e, n, {
                responseType: "arraybuffer"
              })];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.post = function(e, n) {
      return _r(this, void 0, void 0, function() {
        var r;
        return br(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("post", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.postData = function(e, n) {
      return _r(this, void 0, void 0, function() {
        var r;
        return br(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("post", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.put = function(e, n) {
      return _r(this, void 0, void 0, function() {
        var r;
        return br(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("put", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.delete = function(e, n) {
      return _r(this, void 0, void 0, function() {
        var r;
        return br(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.requestConfigBuilder.build("delete", e, n)];
            case 1:
              return r = i.sent(), [4, this.sendRequest(r)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, t.prototype.sendRequest = function(e) {
      return this.responseHandler.handle(
        // eslint-disable-next-line new-cap
        (0, V0.default)(co(co({}, e), { maxBodyLength: 1 / 0, maxContentLength: 1 / 0 }))
      );
    }, t;
  }()
);
jo.AxiosClient = j0;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DefaultHttpClient = void 0;
  var e = jo;
  Object.defineProperty(t, "DefaultHttpClient", { enumerable: !0, get: function() {
    return e.AxiosClient;
  } });
})(Lp);
var Go = {}, U0 = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[n] = i;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var s = Object.getOwnPropertySymbols(e);
  if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, n);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, vf = typeof Symbol < "u" && Symbol, H0 = U0, B0 = function() {
  return typeof vf != "function" || typeof Symbol != "function" || typeof vf("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : H0();
}, _f = {
  foo: {}
}, q0 = Object, K0 = function() {
  return { __proto__: _f }.foo === _f.foo && !({ __proto__: null } instanceof q0);
}, G0 = "Function.prototype.bind called on incompatible ", z0 = Object.prototype.toString, Y0 = Math.max, Z0 = "[object Function]", bf = function(e, n) {
  for (var r = [], i = 0; i < e.length; i += 1)
    r[i] = e[i];
  for (var s = 0; s < n.length; s += 1)
    r[s + e.length] = n[s];
  return r;
}, J0 = function(e, n) {
  for (var r = [], i = n || 0, s = 0; i < e.length; i += 1, s += 1)
    r[s] = e[i];
  return r;
}, Q0 = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, X0 = function(e) {
  var n = this;
  if (typeof n != "function" || z0.apply(n) !== Z0)
    throw new TypeError(G0 + n);
  for (var r = J0(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var f = n.apply(
        this,
        bf(r, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return n.apply(
      e,
      bf(r, arguments)
    );
  }, o = Y0(0, n.length - r.length), a = [], u = 0; u < o; u++)
    a[u] = "$" + u;
  if (i = Function("binder", "return function (" + Q0(a, ",") + "){ return binder.apply(this,arguments); }")(s), n.prototype) {
    var c = function() {
    };
    c.prototype = n.prototype, i.prototype = new c(), c.prototype = null;
  }
  return i;
}, eO = X0, lc = Function.prototype.bind || eO, tO = Function.prototype.call, nO = Object.prototype.hasOwnProperty, rO = lc, iO = rO.call(tO, nO), de, Wr = SyntaxError, sh = Function, Ir = TypeError, Ra = function(t) {
  try {
    return sh('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Qn = Object.getOwnPropertyDescriptor;
if (Qn)
  try {
    Qn({}, "");
  } catch {
    Qn = null;
  }
var ka = function() {
  throw new Ir();
}, sO = Qn ? function() {
  try {
    return arguments.callee, ka;
  } catch {
    try {
      return Qn(arguments, "callee").get;
    } catch {
      return ka;
    }
  }
}() : ka, Er = B0(), oO = K0(), Ue = Object.getPrototypeOf || (oO ? function(t) {
  return t.__proto__;
} : null), Ar = {}, aO = typeof Uint8Array > "u" || !Ue ? de : Ue(Uint8Array), Xn = {
  "%AggregateError%": typeof AggregateError > "u" ? de : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? de : ArrayBuffer,
  "%ArrayIteratorPrototype%": Er && Ue ? Ue([][Symbol.iterator]()) : de,
  "%AsyncFromSyncIteratorPrototype%": de,
  "%AsyncFunction%": Ar,
  "%AsyncGenerator%": Ar,
  "%AsyncGeneratorFunction%": Ar,
  "%AsyncIteratorPrototype%": Ar,
  "%Atomics%": typeof Atomics > "u" ? de : Atomics,
  "%BigInt%": typeof BigInt > "u" ? de : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? de : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? de : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? de : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? de : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? de : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? de : FinalizationRegistry,
  "%Function%": sh,
  "%GeneratorFunction%": Ar,
  "%Int8Array%": typeof Int8Array > "u" ? de : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? de : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? de : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Er && Ue ? Ue(Ue([][Symbol.iterator]())) : de,
  "%JSON%": typeof JSON == "object" ? JSON : de,
  "%Map%": typeof Map > "u" ? de : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Er || !Ue ? de : Ue((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? de : Promise,
  "%Proxy%": typeof Proxy > "u" ? de : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? de : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? de : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Er || !Ue ? de : Ue((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? de : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Er && Ue ? Ue(""[Symbol.iterator]()) : de,
  "%Symbol%": Er ? Symbol : de,
  "%SyntaxError%": Wr,
  "%ThrowTypeError%": sO,
  "%TypedArray%": aO,
  "%TypeError%": Ir,
  "%Uint8Array%": typeof Uint8Array > "u" ? de : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? de : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? de : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? de : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? de : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? de : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? de : WeakSet
};
if (Ue)
  try {
    null.error;
  } catch (t) {
    var lO = Ue(Ue(t));
    Xn["%Error.prototype%"] = lO;
  }
var cO = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Ra("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Ra("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Ra("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && Ue && (n = Ue(i.prototype));
  }
  return Xn[e] = n, n;
}, Ef = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Zi = lc, uo = iO, uO = Zi.call(Function.call, Array.prototype.concat), fO = Zi.call(Function.apply, Array.prototype.splice), wf = Zi.call(Function.call, String.prototype.replace), fo = Zi.call(Function.call, String.prototype.slice), dO = Zi.call(Function.call, RegExp.prototype.exec), pO = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, hO = /\\(\\)?/g, mO = function(e) {
  var n = fo(e, 0, 1), r = fo(e, -1);
  if (n === "%" && r !== "%")
    throw new Wr("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Wr("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return wf(e, pO, function(s, o, a, u) {
    i[i.length] = a ? wf(u, hO, "$1") : o || s;
  }), i;
}, gO = function(e, n) {
  var r = e, i;
  if (uo(Ef, r) && (i = Ef[r], r = "%" + i[0] + "%"), uo(Xn, r)) {
    var s = Xn[r];
    if (s === Ar && (s = cO(r)), typeof s > "u" && !n)
      throw new Ir("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: r,
      value: s
    };
  }
  throw new Wr("intrinsic " + e + " does not exist!");
}, or = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new Ir("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new Ir('"allowMissing" argument must be a boolean');
  if (dO(/^%?[^%]*%?$/, e) === null)
    throw new Wr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = mO(e), i = r.length > 0 ? r[0] : "", s = gO("%" + i + "%", n), o = s.name, a = s.value, u = !1, c = s.alias;
  c && (i = c[0], fO(r, uO([0, 1], c)));
  for (var f = 1, p = !0; f < r.length; f += 1) {
    var v = r[f], y = fo(v, 0, 1), b = fo(v, -1);
    if ((y === '"' || y === "'" || y === "`" || b === '"' || b === "'" || b === "`") && y !== b)
      throw new Wr("property names with quotes must have matching quotes");
    if ((v === "constructor" || !p) && (u = !0), i += "." + v, o = "%" + i + "%", uo(Xn, o))
      a = Xn[o];
    else if (a != null) {
      if (!(v in a)) {
        if (!n)
          throw new Ir("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Qn && f + 1 >= r.length) {
        var E = Qn(a, v);
        p = !!E, p && "get" in E && !("originalValue" in E.get) ? a = E.get : a = a[v];
      } else
        p = uo(a, v), a = a[v];
      p && !u && (Xn[o] = a);
    }
  }
  return a;
}, oh = { exports: {} }, yO = or, yl = yO("%Object.defineProperty%", !0), vl = function() {
  if (yl)
    try {
      return yl({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
vl.hasArrayLengthDefineBug = function() {
  if (!vl())
    return null;
  try {
    return yl([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ah = vl, vO = or, zs = vO("%Object.getOwnPropertyDescriptor%", !0);
if (zs)
  try {
    zs([], "length");
  } catch {
    zs = null;
  }
var lh = zs, _O = ah(), cc = or, Ai = _O && cc("%Object.defineProperty%", !0);
if (Ai)
  try {
    Ai({}, "a", { value: 1 });
  } catch {
    Ai = !1;
  }
var bO = cc("%SyntaxError%"), wr = cc("%TypeError%"), Sf = lh, EO = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new wr("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new wr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new wr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new wr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new wr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new wr("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, u = !!Sf && Sf(e, n);
  if (Ai)
    Ai(e, n, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: r,
      writable: s === null && u ? u.writable : !s
    });
  else if (a || !i && !s && !o)
    e[n] = r;
  else
    throw new bO("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, ch = or, Of = EO, wO = ah(), Af = lh, Tf = ch("%TypeError%"), SO = ch("%Math.floor%"), OO = function(e, n) {
  if (typeof e != "function")
    throw new Tf("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || SO(n) !== n)
    throw new Tf("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], i = !0, s = !0;
  if ("length" in e && Af) {
    var o = Af(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (s = !1);
  }
  return (i || s || !r) && (wO ? Of(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : Of(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = lc, n = or, r = OO, i = n("%TypeError%"), s = n("%Function.prototype.apply%"), o = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || e.call(o, s), u = n("%Object.defineProperty%", !0), c = n("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  t.exports = function(v) {
    if (typeof v != "function")
      throw new i("a function is required");
    var y = a(e, o, arguments);
    return r(
      y,
      1 + c(0, v.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return a(e, s, arguments);
  };
  u ? u(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(oh);
var AO = oh.exports, uh = or, fh = AO, TO = fh(uh("String.prototype.indexOf")), CO = function(e, n) {
  var r = uh(e, !!n);
  return typeof r == "function" && TO(e, ".prototype.") > -1 ? fh(r) : r;
};
const xO = {}, NO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xO
}, Symbol.toStringTag, { value: "Module" })), DO = /* @__PURE__ */ kp(NO);
var uc = typeof Map == "function" && Map.prototype, Ma = Object.getOwnPropertyDescriptor && uc ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, po = uc && Ma && typeof Ma.get == "function" ? Ma.get : null, Cf = uc && Map.prototype.forEach, fc = typeof Set == "function" && Set.prototype, $a = Object.getOwnPropertyDescriptor && fc ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ho = fc && $a && typeof $a.get == "function" ? $a.get : null, xf = fc && Set.prototype.forEach, PO = typeof WeakMap == "function" && WeakMap.prototype, Ti = PO ? WeakMap.prototype.has : null, IO = typeof WeakSet == "function" && WeakSet.prototype, Ci = IO ? WeakSet.prototype.has : null, RO = typeof WeakRef == "function" && WeakRef.prototype, Nf = RO ? WeakRef.prototype.deref : null, kO = Boolean.prototype.valueOf, MO = Object.prototype.toString, $O = Function.prototype.toString, LO = String.prototype.match, dc = String.prototype.slice, An = String.prototype.replace, FO = String.prototype.toUpperCase, Df = String.prototype.toLowerCase, dh = RegExp.prototype.test, Pf = Array.prototype.concat, Gt = Array.prototype.join, WO = Array.prototype.slice, If = Math.floor, _l = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, La = Object.getOwnPropertySymbols, bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Vr = typeof Symbol == "function" && typeof Symbol.iterator == "object", Je = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Vr || !0) ? Symbol.toStringTag : null, ph = Object.prototype.propertyIsEnumerable, Rf = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function kf(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || dh.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -If(-t) : If(t);
    if (r !== t) {
      var i = String(r), s = dc.call(e, i.length + 1);
      return An.call(i, n, "$&_") + "." + An.call(An.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return An.call(e, n, "$&_");
}
var El = DO, Mf = El.custom, $f = mh(Mf) ? Mf : null, VO = function t(e, n, r, i) {
  var s = n || {};
  if (wn(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (wn(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = wn(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (wn(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (wn(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return yh(e, s);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return a ? kf(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return a ? kf(e, c) : c;
  }
  var f = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof r > "u" && (r = 0), r >= f && f > 0 && typeof e == "object")
    return wl(e) ? "[Array]" : "[Object]";
  var p = iA(s, r);
  if (typeof i > "u")
    i = [];
  else if (gh(i, e) >= 0)
    return "[Circular]";
  function v(ce, Te, Se) {
    if (Te && (i = WO.call(i), i.push(Te)), Se) {
      var ee = {
        depth: s.depth
      };
      return wn(s, "quoteStyle") && (ee.quoteStyle = s.quoteStyle), t(ce, ee, r + 1, i);
    }
    return t(ce, s, r + 1, i);
  }
  if (typeof e == "function" && !Lf(e)) {
    var y = YO(e), b = Cs(e, v);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (b.length > 0 ? " { " + Gt.call(b, ", ") + " }" : "");
  }
  if (mh(e)) {
    var E = Vr ? An.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : bl.call(e);
    return typeof e == "object" && !Vr ? pi(E) : E;
  }
  if (tA(e)) {
    for (var C = "<" + Df.call(String(e.nodeName)), T = e.attributes || [], q = 0; q < T.length; q++)
      C += " " + T[q].name + "=" + hh(jO(T[q].value), "double", s);
    return C += ">", e.childNodes && e.childNodes.length && (C += "..."), C += "</" + Df.call(String(e.nodeName)) + ">", C;
  }
  if (wl(e)) {
    if (e.length === 0)
      return "[]";
    var V = Cs(e, v);
    return p && !rA(V) ? "[" + Sl(V, p) + "]" : "[ " + Gt.call(V, ", ") + " ]";
  }
  if (HO(e)) {
    var W = Cs(e, v);
    return !("cause" in Error.prototype) && "cause" in e && !ph.call(e, "cause") ? "{ [" + String(e) + "] " + Gt.call(Pf.call("[cause]: " + v(e.cause), W), ", ") + " }" : W.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Gt.call(W, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if ($f && typeof e[$f] == "function" && El)
      return El(e, { depth: f - r });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (ZO(e)) {
    var G = [];
    return Cf && Cf.call(e, function(ce, Te) {
      G.push(v(Te, e, !0) + " => " + v(ce, e));
    }), Ff("Map", po.call(e), G, p);
  }
  if (XO(e)) {
    var B = [];
    return xf && xf.call(e, function(ce) {
      B.push(v(ce, e));
    }), Ff("Set", ho.call(e), B, p);
  }
  if (JO(e))
    return Fa("WeakMap");
  if (eA(e))
    return Fa("WeakSet");
  if (QO(e))
    return Fa("WeakRef");
  if (qO(e))
    return pi(v(Number(e)));
  if (GO(e))
    return pi(v(_l.call(e)));
  if (KO(e))
    return pi(kO.call(e));
  if (BO(e))
    return pi(v(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === $)
    return "{ [object globalThis] }";
  if (!UO(e) && !Lf(e)) {
    var Q = Cs(e, v), z = Rf ? Rf(e) === Object.prototype : e instanceof Object || e.constructor === Object, F = e instanceof Object ? "" : "null prototype", Y = !z && Je && Object(e) === e && Je in e ? dc.call(Pn(e), 8, -1) : F ? "Object" : "", X = z || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", le = X + (Y || F ? "[" + Gt.call(Pf.call([], Y || [], F || []), ": ") + "] " : "");
    return Q.length === 0 ? le + "{}" : p ? le + "{" + Sl(Q, p) + "}" : le + "{ " + Gt.call(Q, ", ") + " }";
  }
  return String(e);
};
function hh(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function jO(t) {
  return An.call(String(t), /"/g, "&quot;");
}
function wl(t) {
  return Pn(t) === "[object Array]" && (!Je || !(typeof t == "object" && Je in t));
}
function UO(t) {
  return Pn(t) === "[object Date]" && (!Je || !(typeof t == "object" && Je in t));
}
function Lf(t) {
  return Pn(t) === "[object RegExp]" && (!Je || !(typeof t == "object" && Je in t));
}
function HO(t) {
  return Pn(t) === "[object Error]" && (!Je || !(typeof t == "object" && Je in t));
}
function BO(t) {
  return Pn(t) === "[object String]" && (!Je || !(typeof t == "object" && Je in t));
}
function qO(t) {
  return Pn(t) === "[object Number]" && (!Je || !(typeof t == "object" && Je in t));
}
function KO(t) {
  return Pn(t) === "[object Boolean]" && (!Je || !(typeof t == "object" && Je in t));
}
function mh(t) {
  if (Vr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !bl)
    return !1;
  try {
    return bl.call(t), !0;
  } catch {
  }
  return !1;
}
function GO(t) {
  if (!t || typeof t != "object" || !_l)
    return !1;
  try {
    return _l.call(t), !0;
  } catch {
  }
  return !1;
}
var zO = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function wn(t, e) {
  return zO.call(t, e);
}
function Pn(t) {
  return MO.call(t);
}
function YO(t) {
  if (t.name)
    return t.name;
  var e = LO.call($O.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function gh(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function ZO(t) {
  if (!po || !t || typeof t != "object")
    return !1;
  try {
    po.call(t);
    try {
      ho.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function JO(t) {
  if (!Ti || !t || typeof t != "object")
    return !1;
  try {
    Ti.call(t, Ti);
    try {
      Ci.call(t, Ci);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function QO(t) {
  if (!Nf || !t || typeof t != "object")
    return !1;
  try {
    return Nf.call(t), !0;
  } catch {
  }
  return !1;
}
function XO(t) {
  if (!ho || !t || typeof t != "object")
    return !1;
  try {
    ho.call(t);
    try {
      po.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function eA(t) {
  if (!Ci || !t || typeof t != "object")
    return !1;
  try {
    Ci.call(t, Ci);
    try {
      Ti.call(t, Ti);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function tA(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function yh(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return yh(dc.call(t, 0, e.maxStringLength), e) + r;
  }
  var i = An.call(An.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, nA);
  return hh(i, "single", e);
}
function nA(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + FO.call(e.toString(16));
}
function pi(t) {
  return "Object(" + t + ")";
}
function Fa(t) {
  return t + " { ? }";
}
function Ff(t, e, n, r) {
  var i = r ? Sl(n, r) : Gt.call(n, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function rA(t) {
  for (var e = 0; e < t.length; e++)
    if (gh(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function iA(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = Gt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Gt.call(Array(e + 1), n)
  };
}
function Sl(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + Gt.call(t, "," + n) + `
` + e.prev;
}
function Cs(t, e) {
  var n = wl(t), r = [];
  if (n) {
    r.length = t.length;
    for (var i = 0; i < t.length; i++)
      r[i] = wn(t, i) ? e(t[i], t) : "";
  }
  var s = typeof La == "function" ? La(t) : [], o;
  if (Vr) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var u in t)
    wn(t, u) && (n && String(Number(u)) === u && u < t.length || Vr && o["$" + u] instanceof Symbol || (dh.call(/[^\w$]/, u) ? r.push(e(u, t) + ": " + e(t[u], t)) : r.push(u + ": " + e(t[u], t))));
  if (typeof La == "function")
    for (var c = 0; c < s.length; c++)
      ph.call(t, s[c]) && r.push("[" + e(s[c]) + "]: " + e(t[s[c]], t));
  return r;
}
var pc = or, Jr = CO, sA = VO, oA = pc("%TypeError%"), xs = pc("%WeakMap%", !0), Ns = pc("%Map%", !0), aA = Jr("WeakMap.prototype.get", !0), lA = Jr("WeakMap.prototype.set", !0), cA = Jr("WeakMap.prototype.has", !0), uA = Jr("Map.prototype.get", !0), fA = Jr("Map.prototype.set", !0), dA = Jr("Map.prototype.has", !0), hc = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = t.next, t.next = r, r;
}, pA = function(t, e) {
  var n = hc(t, e);
  return n && n.value;
}, hA = function(t, e, n) {
  var r = hc(t, e);
  r ? r.value = n : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: n
  };
}, mA = function(t, e) {
  return !!hc(t, e);
}, gA = function() {
  var e, n, r, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new oA("Side channel does not contain " + sA(s));
    },
    get: function(s) {
      if (xs && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return aA(e, s);
      } else if (Ns) {
        if (n)
          return uA(n, s);
      } else if (r)
        return pA(r, s);
    },
    has: function(s) {
      if (xs && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return cA(e, s);
      } else if (Ns) {
        if (n)
          return dA(n, s);
      } else if (r)
        return mA(r, s);
      return !1;
    },
    set: function(s, o) {
      xs && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new xs()), lA(e, s, o)) : Ns ? (n || (n = new Ns()), fA(n, s, o)) : (r || (r = { key: {}, next: null }), hA(r, s, o));
    }
  };
  return i;
}, yA = String.prototype.replace, vA = /%20/g, Wa = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, mc = {
  default: Wa.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return yA.call(t, vA, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Wa.RFC1738,
  RFC3986: Wa.RFC3986
}, _A = mc, Va = Object.prototype.hasOwnProperty, Gn = Array.isArray, Ut = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), bA = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (Gn(r)) {
      for (var i = [], s = 0; s < r.length; ++s)
        typeof r[s] < "u" && i.push(r[s]);
      n.obj[n.prop] = i;
    }
  }
}, vh = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (r[i] = e[i]);
  return r;
}, EA = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Gn(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Va.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var i = e;
  return Gn(e) && !Gn(n) && (i = vh(e, r)), Gn(e) && Gn(n) ? (n.forEach(function(s, o) {
    if (Va.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = t(a, s, r) : e.push(s);
    } else
      e[o] = s;
  }), e) : Object.keys(n).reduce(function(s, o) {
    var a = n[o];
    return Va.call(s, o) ? s[o] = t(s[o], a, r) : s[o] = a, s;
  }, i);
}, wA = function(e, n) {
  return Object.keys(n).reduce(function(r, i) {
    return r[i] = n[i], r;
  }, e);
}, SA = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, OA = function(e, n, r, i, s) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), r === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var a = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || s === _A.RFC1738 && (c === 40 || c === 41)) {
      a += o.charAt(u);
      continue;
    }
    if (c < 128) {
      a = a + Ut[c];
      continue;
    }
    if (c < 2048) {
      a = a + (Ut[192 | c >> 6] + Ut[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      a = a + (Ut[224 | c >> 12] + Ut[128 | c >> 6 & 63] + Ut[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), a += Ut[240 | c >> 18] + Ut[128 | c >> 12 & 63] + Ut[128 | c >> 6 & 63] + Ut[128 | c & 63];
  }
  return a;
}, AA = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], i = 0; i < n.length; ++i)
    for (var s = n[i], o = s.obj[s.prop], a = Object.keys(o), u = 0; u < a.length; ++u) {
      var c = a[u], f = o[c];
      typeof f == "object" && f !== null && r.indexOf(f) === -1 && (n.push({ obj: o, prop: c }), r.push(f));
    }
  return bA(n), e;
}, TA = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, CA = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, xA = function(e, n) {
  return [].concat(e, n);
}, NA = function(e, n) {
  if (Gn(e)) {
    for (var r = [], i = 0; i < e.length; i += 1)
      r.push(n(e[i]));
    return r;
  }
  return n(e);
}, _h = {
  arrayToObject: vh,
  assign: wA,
  combine: xA,
  compact: AA,
  decode: SA,
  encode: OA,
  isBuffer: CA,
  isRegExp: TA,
  maybeMap: NA,
  merge: EA
}, bh = gA, Ys = _h, xi = mc, DA = Object.prototype.hasOwnProperty, Wf = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, n) {
    return e + "[" + n + "]";
  },
  repeat: function(e) {
    return e;
  }
}, nn = Array.isArray, PA = Array.prototype.push, Eh = function(t, e) {
  PA.apply(t, nn(e) ? e : [e]);
}, IA = Date.prototype.toISOString, Vf = xi.default, Ge = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Ys.encode,
  encodeValuesOnly: !1,
  format: Vf,
  formatter: xi.formatters[Vf],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return IA.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, RA = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, ja = {}, kA = function t(e, n, r, i, s, o, a, u, c, f, p, v, y, b, E, C) {
  for (var T = e, q = C, V = 0, W = !1; (q = q.get(ja)) !== void 0 && !W; ) {
    var G = q.get(e);
    if (V += 1, typeof G < "u") {
      if (G === V)
        throw new RangeError("Cyclic object value");
      W = !0;
    }
    typeof q.get(ja) > "u" && (V = 0);
  }
  if (typeof u == "function" ? T = u(n, T) : T instanceof Date ? T = p(T) : r === "comma" && nn(T) && (T = Ys.maybeMap(T, function(ee) {
    return ee instanceof Date ? p(ee) : ee;
  })), T === null) {
    if (s)
      return a && !b ? a(n, Ge.encoder, E, "key", v) : n;
    T = "";
  }
  if (RA(T) || Ys.isBuffer(T)) {
    if (a) {
      var B = b ? n : a(n, Ge.encoder, E, "key", v);
      return [y(B) + "=" + y(a(T, Ge.encoder, E, "value", v))];
    }
    return [y(n) + "=" + y(String(T))];
  }
  var Q = [];
  if (typeof T > "u")
    return Q;
  var z;
  if (r === "comma" && nn(T))
    b && a && (T = Ys.maybeMap(T, a)), z = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
  else if (nn(u))
    z = u;
  else {
    var F = Object.keys(T);
    z = c ? F.sort(c) : F;
  }
  for (var Y = i && nn(T) && T.length === 1 ? n + "[]" : n, X = 0; X < z.length; ++X) {
    var le = z[X], ce = typeof le == "object" && typeof le.value < "u" ? le.value : T[le];
    if (!(o && ce === null)) {
      var Te = nn(T) ? typeof r == "function" ? r(Y, le) : Y : Y + (f ? "." + le : "[" + le + "]");
      C.set(e, V);
      var Se = bh();
      Se.set(ja, C), Eh(Q, t(
        ce,
        Te,
        r,
        i,
        s,
        o,
        r === "comma" && b && nn(T) ? null : a,
        u,
        c,
        f,
        p,
        v,
        y,
        b,
        E,
        Se
      ));
    }
  }
  return Q;
}, MA = function(e) {
  if (!e)
    return Ge;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || Ge.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = xi.default;
  if (typeof e.format < "u") {
    if (!DA.call(xi.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var i = xi.formatters[r], s = Ge.filter;
  return (typeof e.filter == "function" || nn(e.filter)) && (s = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ge.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Ge.allowDots : !!e.allowDots,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ge.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Ge.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Ge.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Ge.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ge.encodeValuesOnly,
    filter: s,
    format: r,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ge.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ge.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ge.strictNullHandling
  };
}, $A = function(t, e) {
  var n = t, r = MA(e), i, s;
  typeof r.filter == "function" ? (s = r.filter, n = s("", n)) : nn(r.filter) && (s = r.filter, i = s);
  var o = [];
  if (typeof n != "object" || n === null)
    return "";
  var a;
  e && e.arrayFormat in Wf ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var u = Wf[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
  for (var f = bh(), p = 0; p < i.length; ++p) {
    var v = i[p];
    r.skipNulls && n[v] === null || Eh(o, kA(
      n[v],
      v,
      u,
      c,
      r.strictNullHandling,
      r.skipNulls,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      f
    ));
  }
  var y = o.join(r.delimiter), b = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), y.length > 0 ? b + y : "";
}, jr = _h, Ol = Object.prototype.hasOwnProperty, LA = Array.isArray, je = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: jr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, FA = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, wh = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, WA = "utf8=%26%2310003%3B", VA = "utf8=%E2%9C%93", jA = function(e, n) {
  var r = { __proto__: null }, i = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, s = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, o = i.split(n.delimiter, s), a = -1, u, c = n.charset;
  if (n.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === VA ? c = "utf-8" : o[u] === WA && (c = "iso-8859-1"), a = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== a) {
      var f = o[u], p = f.indexOf("]="), v = p === -1 ? f.indexOf("=") : p + 1, y, b;
      v === -1 ? (y = n.decoder(f, je.decoder, c, "key"), b = n.strictNullHandling ? null : "") : (y = n.decoder(f.slice(0, v), je.decoder, c, "key"), b = jr.maybeMap(
        wh(f.slice(v + 1), n),
        function(E) {
          return n.decoder(E, je.decoder, c, "value");
        }
      )), b && n.interpretNumericEntities && c === "iso-8859-1" && (b = FA(b)), f.indexOf("[]=") > -1 && (b = LA(b) ? [b] : b), Ol.call(r, y) ? r[y] = jr.combine(r[y], b) : r[y] = b;
    }
  return r;
}, UA = function(t, e, n, r) {
  for (var i = r ? e : wh(e, n), s = t.length - 1; s >= 0; --s) {
    var o, a = t[s];
    if (a === "[]" && n.parseArrays)
      o = [].concat(i);
    else {
      o = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, c = parseInt(u, 10);
      !n.parseArrays && u === "" ? o = { 0: i } : !isNaN(c) && a !== u && String(c) === u && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (o = [], o[c] = i) : u !== "__proto__" && (o[u] = i);
    }
    i = o;
  }
  return i;
}, HA = function(e, n, r, i) {
  if (e) {
    var s = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, u = r.depth > 0 && o.exec(s), c = u ? s.slice(0, u.index) : s, f = [];
    if (c) {
      if (!r.plainObjects && Ol.call(Object.prototype, c) && !r.allowPrototypes)
        return;
      f.push(c);
    }
    for (var p = 0; r.depth > 0 && (u = a.exec(s)) !== null && p < r.depth; ) {
      if (p += 1, !r.plainObjects && Ol.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + s.slice(u.index) + "]"), UA(f, n, r, i);
  }
}, BA = function(e) {
  if (!e)
    return je;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? je.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? je.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : je.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : je.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : je.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : je.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : je.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : je.decoder,
    delimiter: typeof e.delimiter == "string" || jr.isRegExp(e.delimiter) ? e.delimiter : je.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : je.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : je.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : je.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : je.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : je.strictNullHandling
  };
}, qA = function(t, e) {
  var n = BA(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? jA(t, n) : t, i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(r), o = 0; o < s.length; ++o) {
    var a = s[o], u = HA(a, r[a], n, typeof t == "string");
    i = jr.merge(i, u, n);
  }
  return n.allowSparse === !0 ? i : jr.compact(i);
}, KA = $A, GA = qA, zA = mc, YA = {
  formats: zA,
  parse: GA,
  stringify: KA
}, Sh = { exports: {} };
(function(t, e) {
  (function(n, r) {
    t.exports = r();
  })(typeof self < "u" ? self : typeof window < "u" ? window : $, function() {
    var n = "3.7.6", r = n, i = typeof atob == "function", s = typeof btoa == "function", o = typeof Buffer == "function", a = typeof TextDecoder == "function" ? new TextDecoder() : void 0, u = typeof TextEncoder == "function" ? new TextEncoder() : void 0, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", f = Array.prototype.slice.call(c), p = function(O) {
      var U = {};
      return O.forEach(function(Oe, Ne) {
        return U[Oe] = Ne;
      }), U;
    }(f), v = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, y = String.fromCharCode.bind(String), b = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : function(O) {
      return new Uint8Array(Array.prototype.slice.call(O, 0));
    }, E = function(O) {
      return O.replace(/=/g, "").replace(/[+\/]/g, function(U) {
        return U == "+" ? "-" : "_";
      });
    }, C = function(O) {
      return O.replace(/[^A-Za-z0-9\+\/]/g, "");
    }, T = function(O) {
      for (var U, Oe, Ne, x, We = "", m = O.length % 3, _ = 0; _ < O.length; ) {
        if ((Oe = O.charCodeAt(_++)) > 255 || (Ne = O.charCodeAt(_++)) > 255 || (x = O.charCodeAt(_++)) > 255)
          throw new TypeError("invalid character found");
        U = Oe << 16 | Ne << 8 | x, We += f[U >> 18 & 63] + f[U >> 12 & 63] + f[U >> 6 & 63] + f[U & 63];
      }
      return m ? We.slice(0, m - 3) + "===".substring(m) : We;
    }, q = s ? function(O) {
      return btoa(O);
    } : o ? function(O) {
      return Buffer.from(O, "binary").toString("base64");
    } : T, V = o ? function(O) {
      return Buffer.from(O).toString("base64");
    } : function(O) {
      for (var U = 4096, Oe = [], Ne = 0, x = O.length; Ne < x; Ne += U)
        Oe.push(y.apply(null, O.subarray(Ne, Ne + U)));
      return q(Oe.join(""));
    }, W = function(O, U) {
      return U === void 0 && (U = !1), U ? E(V(O)) : V(O);
    }, G = function(O) {
      if (O.length < 2) {
        var U = O.charCodeAt(0);
        return U < 128 ? O : U < 2048 ? y(192 | U >>> 6) + y(128 | U & 63) : y(224 | U >>> 12 & 15) + y(128 | U >>> 6 & 63) + y(128 | U & 63);
      } else {
        var U = 65536 + (O.charCodeAt(0) - 55296) * 1024 + (O.charCodeAt(1) - 56320);
        return y(240 | U >>> 18 & 7) + y(128 | U >>> 12 & 63) + y(128 | U >>> 6 & 63) + y(128 | U & 63);
      }
    }, B = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Q = function(O) {
      return O.replace(B, G);
    }, z = o ? function(O) {
      return Buffer.from(O, "utf8").toString("base64");
    } : u ? function(O) {
      return V(u.encode(O));
    } : function(O) {
      return q(Q(O));
    }, F = function(O, U) {
      return U === void 0 && (U = !1), U ? E(z(O)) : z(O);
    }, Y = function(O) {
      return F(O, !0);
    }, X = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, le = function(O) {
      switch (O.length) {
        case 4:
          var U = (7 & O.charCodeAt(0)) << 18 | (63 & O.charCodeAt(1)) << 12 | (63 & O.charCodeAt(2)) << 6 | 63 & O.charCodeAt(3), Oe = U - 65536;
          return y((Oe >>> 10) + 55296) + y((Oe & 1023) + 56320);
        case 3:
          return y((15 & O.charCodeAt(0)) << 12 | (63 & O.charCodeAt(1)) << 6 | 63 & O.charCodeAt(2));
        default:
          return y((31 & O.charCodeAt(0)) << 6 | 63 & O.charCodeAt(1));
      }
    }, ce = function(O) {
      return O.replace(X, le);
    }, Te = function(O) {
      if (O = O.replace(/\s+/g, ""), !v.test(O))
        throw new TypeError("malformed base64.");
      O += "==".slice(2 - (O.length & 3));
      for (var U, Oe = "", Ne, x, We = 0; We < O.length; )
        U = p[O.charAt(We++)] << 18 | p[O.charAt(We++)] << 12 | (Ne = p[O.charAt(We++)]) << 6 | (x = p[O.charAt(We++)]), Oe += Ne === 64 ? y(U >> 16 & 255) : x === 64 ? y(U >> 16 & 255, U >> 8 & 255) : y(U >> 16 & 255, U >> 8 & 255, U & 255);
      return Oe;
    }, Se = i ? function(O) {
      return atob(C(O));
    } : o ? function(O) {
      return Buffer.from(O, "base64").toString("binary");
    } : Te, ee = o ? function(O) {
      return b(Buffer.from(O, "base64"));
    } : function(O) {
      return b(Se(O).split("").map(function(U) {
        return U.charCodeAt(0);
      }));
    }, oe = function(O) {
      return ee(Re(O));
    }, fe = o ? function(O) {
      return Buffer.from(O, "base64").toString("utf8");
    } : a ? function(O) {
      return a.decode(ee(O));
    } : function(O) {
      return ce(Se(O));
    }, Re = function(O) {
      return C(O.replace(/[-_]/g, function(U) {
        return U == "-" ? "+" : "/";
      }));
    }, Qe = function(O) {
      return fe(Re(O));
    }, qe = function(O) {
      if (typeof O != "string")
        return !1;
      var U = O.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(U) || !/[^\s0-9a-zA-Z\-_]/.test(U);
    }, Pe = function(O) {
      return {
        value: O,
        enumerable: !1,
        writable: !0,
        configurable: !0
      };
    }, St = function() {
      var O = function(U, Oe) {
        return Object.defineProperty(String.prototype, U, Pe(Oe));
      };
      O("fromBase64", function() {
        return Qe(this);
      }), O("toBase64", function(U) {
        return F(this, U);
      }), O("toBase64URI", function() {
        return F(this, !0);
      }), O("toBase64URL", function() {
        return F(this, !0);
      }), O("toUint8Array", function() {
        return oe(this);
      });
    }, mt = function() {
      var O = function(U, Oe) {
        return Object.defineProperty(Uint8Array.prototype, U, Pe(Oe));
      };
      O("toBase64", function(U) {
        return W(this, U);
      }), O("toBase64URI", function() {
        return W(this, !0);
      }), O("toBase64URL", function() {
        return W(this, !0);
      });
    }, Xe = function() {
      St(), mt();
    }, xe = {
      version: n,
      VERSION: r,
      atob: Se,
      atobPolyfill: Te,
      btoa: q,
      btoaPolyfill: T,
      fromBase64: Qe,
      toBase64: F,
      encode: F,
      encodeURI: Y,
      encodeURL: Y,
      utob: Q,
      btou: ce,
      decode: Qe,
      isValid: qe,
      fromUint8Array: W,
      toUint8Array: oe,
      extendString: St,
      extendUint8Array: mt,
      extendBuiltins: Xe
    };
    return xe.Base64 = {}, Object.keys(xe).forEach(function(O) {
      return xe.Base64[O] = xe[O];
    }), xe;
  });
})(Sh);
var ZA = Sh.exports, me = $ && $.__assign || function() {
  return me = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, me.apply(this, arguments);
}, Ua = $ && $.__awaiter || function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(f) {
      try {
        c(r.next(f));
      } catch (p) {
        o(p);
      }
    }
    function u(f) {
      try {
        c(r.throw(f));
      } catch (p) {
        o(p);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    c((r = r.apply(t, e || [])).next());
  });
}, Ha = $ && $.__generator || function(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Oh = $ && $.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.KintoneRequestConfigBuilder = void 0;
var jf = Oh($p), JA = Oh(YA), Uf = ZA, Ba = Ki, QA = "http", XA = 4096, eT = (
  /** @class */
  function() {
    function t(e) {
      if (this.baseUrl = e.baseUrl, this.auth = e.auth, this.headers = this.buildHeaders({
        basicAuth: e.basicAuth,
        userAgent: e.userAgent
      }), "httpsAgent" in e) {
        if ("clientCertAuth" in e)
          throw new Error("Cannot specify clientCertAuth along with httpsAgent.");
        this.httpsAgent = e.httpsAgent;
      } else
        "clientCertAuth" in e && (this.clientCertAuth = e.clientCertAuth);
      this.proxy = e.proxy, this.requestToken = null, this.socketTimeout = e.socketTimeout;
    }
    return t.prototype.build = function(e, n, r, i) {
      return Ua(this, void 0, void 0, function() {
        var s, o, p, a, u, c, f, p, v, y, b, E, C;
        return Ha(this, function(T) {
          switch (T.label) {
            case 0:
              switch (s = me(me(me({ method: e, headers: this.headers, url: "".concat(this.baseUrl).concat(n) }, i || {}), Ba.platformDeps.buildPlatformDependentConfig({
                httpsAgent: this.httpsAgent,
                clientCertAuth: this.clientCertAuth,
                socketTimeout: this.socketTimeout
              })), { proxy: this.buildProxyConfig(this.proxy) }), o = e, o) {
                case "get":
                  return [3, 1];
                case "post":
                  return [3, 4];
                case "put":
                  return [3, 8];
                case "delete":
                  return [3, 10];
              }
              return [3, 12];
            case 1:
              return p = this.buildRequestUrl(n, r), p.length > XA ? (a = [me({}, s)], b = { method: "post", headers: me(me({}, this.headers), { "X-HTTP-Method-Override": "GET" }) }, [4, this.buildData(r)]) : [3, 3];
            case 2:
              return [2, me.apply(void 0, a.concat([(b.data = T.sent(), b)]))];
            case 3:
              return [2, me(me({}, s), { url: p })];
            case 4:
              return r instanceof jf.default ? [4, this.buildData(r)] : [3, 6];
            case 5:
              return u = T.sent(), [2, me(me({}, s), { headers: (
                // NOTE: formData.getHeaders does not exist in a browser environment.
                typeof u.getHeaders == "function" ? me(me({}, this.headers), u.getHeaders()) : this.headers
              ), data: u })];
            case 6:
              return c = [me({}, s)], E = {}, [4, this.buildData(r)];
            case 7:
              return [2, me.apply(void 0, c.concat([(E.data = T.sent(), E)]))];
            case 8:
              return f = [me({}, s)], C = {}, [4, this.buildData(r)];
            case 9:
              return [2, me.apply(void 0, f.concat([(C.data = T.sent(), C)]))];
            case 10:
              return v = this.buildRequestUrl, y = [n], [4, this.buildData(r)];
            case 11:
              return p = v.apply(this, y.concat([T.sent()])), [2, me(me({}, s), { url: p })];
            case 12:
              throw new Error("".concat(e, " method is not supported"));
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.buildProxyConfig = function(e) {
      var n;
      if (e !== void 0) {
        if (e === !1)
          return !1;
        var r = e;
        return r.auth && (r.auth.username.length === 0 || r.auth.password.length === 0) && (r.auth = void 0), r.protocol = (n = r.protocol) !== null && n !== void 0 ? n : QA, r;
      }
    }, t.prototype.buildRequestUrl = function(e, n) {
      return "".concat(this.baseUrl).concat(e, "?").concat(JA.default.stringify(n));
    }, t.prototype.buildData = function(e) {
      return Ua(this, void 0, void 0, function() {
        var n;
        return Ha(this, function(r) {
          switch (r.label) {
            case 0:
              return this.auth.type !== "session" ? [3, 2] : [4, this.getRequestToken()];
            case 1:
              return n = r.sent(), e instanceof jf.default ? (e.append("__REQUEST_TOKEN__", n), [2, e]) : [2, me({ __REQUEST_TOKEN__: n }, e)];
            case 2:
              return [2, e];
          }
        });
      });
    }, t.prototype.buildHeaders = function(e) {
      var n = e.basicAuth, r = e.userAgent, i = n ? {
        Authorization: "Basic ".concat(Uf.Base64.encode("".concat(n.username, ":").concat(n.password)))
      } : {}, s = Ba.platformDeps.buildHeaders({ userAgent: r }), o = me(me({}, s), i);
      switch (this.auth.type) {
        case "password":
          return me(me({}, o), { "X-Cybozu-Authorization": Uf.Base64.encode("".concat(this.auth.username, ":").concat(this.auth.password)) });
        case "apiToken": {
          var a = this.auth.apiToken;
          return Array.isArray(a) ? me(me({}, o), { "X-Cybozu-API-Token": a.join(",") }) : me(me({}, o), { "X-Cybozu-API-Token": a });
        }
        case "oAuthToken":
          return me(me({}, o), { Authorization: "Bearer ".concat(this.auth.oAuthToken) });
        default:
          return me(me({}, o), { "X-Requested-With": "XMLHttpRequest" });
      }
    }, t.prototype.getRequestToken = function() {
      return Ua(this, void 0, void 0, function() {
        var e;
        return Ha(this, function(n) {
          switch (n.label) {
            case 0:
              return this.requestToken !== null ? [3, 2] : (e = this, [4, Ba.platformDeps.getRequestToken()]);
            case 1:
              e.requestToken = n.sent(), n.label = 2;
            case 2:
              return [2, this.requestToken];
          }
        });
      });
    }, t;
  }()
);
Go.KintoneRequestConfigBuilder = eT;
var zo = {}, Ji = {}, tT = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.KintoneAbortSearchError = void 0;
var nT = (
  /** @class */
  function(t) {
    tT(e, t);
    function e(n) {
      var r = t.call(this, n) || this;
      return r.name = "KintoneAbortSearchError", r.message = n, Object.setPrototypeOf(r, e.prototype), r;
    }
    return e;
  }(Error)
);
Ji.KintoneAbortSearchError = nT;
var Qi = {}, rT = $ && $.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.KintoneRestAPIError = void 0;
var iT = (
  /** @class */
  function(t) {
    rT(e, t);
    function e(n) {
      var r = this, i = e.buildErrorResponseDateWithIndex(n), s = i.data, o = i.bulkRequestIndex;
      return r = t.call(this, s.message) || this, r.name = "KintoneRestAPIError", r.id = s.id, r.code = s.code, r.errors = s.errors, r.status = n.status, r.bulkRequestIndex = o, r.headers = n.headers, r.message = "[".concat(n.status, "] [").concat(r.code, "] ").concat(r.message, " (").concat(r.id, ")"), Error.captureStackTrace && Error.captureStackTrace(r, e), Object.setPrototypeOf(r, e.prototype), r;
    }
    return e.findErrorResponseDataWithIndex = function(n) {
      for (var r = 0; r < n.length; r++)
        if (Object.keys(n[r]).length !== 0) {
          var i = n[r];
          return { data: i, bulkRequestIndex: r };
        }
      throw Error("Missing response data in `results`. This error is likely caused by a bug in Kintone REST API Client. Please file an issue.");
    }, e.buildErrorResponseDateWithIndex = function(n) {
      return "results" in n.data ? e.findErrorResponseDataWithIndex(n.data.results) : { data: n.data };
    }, e;
  }(Error)
);
Qi.KintoneRestAPIError = iT;
var Al = $ && $.__assign || function() {
  return Al = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Al.apply(this, arguments);
}, sT = $ && $.__rest || function(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.KintoneResponseHandler = void 0;
var oT = Ji, aT = Qi, lT = (
  /** @class */
  function() {
    function t(e) {
      var n = e.enableAbortSearchError;
      this.enableAbortSearchError = n;
    }
    return t.prototype.handle = function(e) {
      var n = this;
      return e.then(function(r) {
        return n.handleSuccessResponse(r);
      }, function(r) {
        return n.handleErrorResponse(r);
      });
    }, t.prototype.handleSuccessResponse = function(e) {
      if (this.enableAbortSearchError && /Filter aborted because of too many search results/.test(e.headers["x-cybozu-warning"]))
        throw new oT.KintoneAbortSearchError(e.headers["x-cybozu-warning"]);
      return e.data;
    }, t.prototype.handleErrorResponse = function(e) {
      if (!e.response)
        throw /mac verify failure/.test(e.toString()) ? new Error("invalid clientCertAuth setting") : e;
      var n = e.response, r = n.data, i = sT(n, ["data"]);
      throw typeof r == "string" ? new Error("".concat(i.status, ": ").concat(i.statusText)) : new aT.KintoneRestAPIError(Al({ data: r }, i));
    }, t;
  }()
);
zo.KintoneResponseHandler = lT;
var er = $ && $.__assign || function() {
  return er = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, er.apply(this, arguments);
};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.KintoneRestAPIClient = void 0;
var cT = Lo, uT = Fo, fT = Wo, dT = Vo, pT = Lp, hT = Go, mT = zo, Tl = Ki, gT = Yr, yT = function(t) {
  if ("username" in t)
    return er({ type: "password" }, t);
  if ("apiToken" in t)
    return er({ type: "apiToken" }, t);
  if ("oAuthToken" in t)
    return er({ type: "oAuthToken" }, t);
  try {
    return Tl.platformDeps.getDefaultAuth();
  } catch (e) {
    throw e instanceof gT.UnsupportedPlatformError ? new Error("session authentication is not supported in ".concat(e.platform, " environment.")) : e;
  }
}, vT = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {});
      var n, r, i;
      _T(e), this.baseUrl = Tl.platformDeps.buildBaseUrl(e.baseUrl).replace(/\/+$/, "");
      var s = yT((n = e.auth) !== null && n !== void 0 ? n : {}), o = new hT.KintoneRequestConfigBuilder(er(er({}, e), { baseUrl: this.baseUrl, auth: s })), a = new mT.KintoneResponseHandler({
        enableAbortSearchError: (i = (r = e.featureFlags) === null || r === void 0 ? void 0 : r.enableAbortSearchError) !== null && i !== void 0 ? i : !1
      }), u = new pT.DefaultHttpClient({
        responseHandler: a,
        requestConfigBuilder: o
      }), c = e.guestSpaceId;
      this.bulkRequest_ = new cT.BulkRequestClient(u, c), this.record = new fT.RecordClient(u, this.bulkRequest_, c), this.app = new uT.AppClient(u, c), this.file = new dT.FileClient(u, c);
    }
    return Object.defineProperty(t, "version", {
      get: function() {
        return Tl.platformDeps.getVersion();
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getBaseUrl = function() {
      return this.baseUrl;
    }, t.prototype.bulkRequest = function(e) {
      return this.bulkRequest_.send(e);
    }, t;
  }()
);
$o.KintoneRestAPIClient = vT;
var _T = function(t) {
  bT(t.baseUrl), ET(t.guestSpaceId), wT(t.socketTimeout);
}, bT = function(t) {
  if (t !== void 0) {
    var e = new URL(t);
    if (e.hostname !== "localhost" && e.protocol !== "https:")
      throw new Error('The protocol of baseUrl must be "https".');
  }
}, ET = function(t) {
  if (t === "" || t === null)
    throw new Error("invalid guestSpaceId: got [".concat(t, "]"));
}, wT = function(t) {
  if (t !== void 0) {
    var e = parseFloat(t.toString());
    if (isNaN(e) || e < 0)
      throw new Error("Invalid socketTimeout. Must be a positive number.");
  }
}, Ah = {};
(function(t) {
  var e = $ && $.__createBinding || (Object.create ? function(r, i, s, o) {
    o === void 0 && (o = s);
    var a = Object.getOwnPropertyDescriptor(i, s);
    (!a || ("get" in a ? !i.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(r, o, a);
  } : function(r, i, s, o) {
    o === void 0 && (o = s), r[o] = i[s];
  }), n = $ && $.__exportStar || function(r, i) {
    for (var s in r)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, r, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), n(Ji, t), n(Gi, t), n(Qi, t);
})(Ah);
(function(t) {
  var e = $ && $.__createBinding || (Object.create ? function(u, c, f, p) {
    p === void 0 && (p = f);
    var v = Object.getOwnPropertyDescriptor(c, f);
    (!v || ("get" in v ? !c.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return c[f];
    } }), Object.defineProperty(u, p, v);
  } : function(u, c, f, p) {
    p === void 0 && (p = f), u[p] = c[f];
  }), n = $ && $.__setModuleDefault || (Object.create ? function(u, c) {
    Object.defineProperty(u, "default", { enumerable: !0, value: c });
  } : function(u, c) {
    u.default = c;
  }), r = $ && $.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var c = {};
    if (u != null)
      for (var f in u)
        f !== "default" && Object.prototype.hasOwnProperty.call(u, f) && e(c, u, f);
    return n(c, u), c;
  }, i = $ && $.__exportStar || function(u, c) {
    for (var f in u)
      f !== "default" && !Object.prototype.hasOwnProperty.call(c, f) && e(c, u, f);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.KintoneRestAPIClient = void 0;
  var s = Ki, o = r(He);
  (0, s.injectPlatformDeps)(o);
  var a = $o;
  Object.defineProperty(t, "KintoneRestAPIClient", { enumerable: !0, get: function() {
    return a.KintoneRestAPIClient;
  } }), i(Ah, t);
})(ko);
class ar extends Error {
}
class ST extends ar {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class OT extends ar {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class AT extends ar {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Cr extends ar {
}
class Th extends ar {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class dt extends ar {
}
class gn extends ar {
  constructor() {
    super("Zone is an abstract class");
  }
}
const H = "numeric", Wt = "short", _t = "long", mo = {
  year: H,
  month: H,
  day: H
}, Ch = {
  year: H,
  month: Wt,
  day: H
}, TT = {
  year: H,
  month: Wt,
  day: H,
  weekday: Wt
}, xh = {
  year: H,
  month: _t,
  day: H
}, Nh = {
  year: H,
  month: _t,
  day: H,
  weekday: _t
}, Dh = {
  hour: H,
  minute: H
}, Ph = {
  hour: H,
  minute: H,
  second: H
}, Ih = {
  hour: H,
  minute: H,
  second: H,
  timeZoneName: Wt
}, Rh = {
  hour: H,
  minute: H,
  second: H,
  timeZoneName: _t
}, kh = {
  hour: H,
  minute: H,
  hourCycle: "h23"
}, Mh = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23"
}, $h = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23",
  timeZoneName: Wt
}, Lh = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23",
  timeZoneName: _t
}, Fh = {
  year: H,
  month: H,
  day: H,
  hour: H,
  minute: H
}, Wh = {
  year: H,
  month: H,
  day: H,
  hour: H,
  minute: H,
  second: H
}, Vh = {
  year: H,
  month: Wt,
  day: H,
  hour: H,
  minute: H
}, jh = {
  year: H,
  month: Wt,
  day: H,
  hour: H,
  minute: H,
  second: H
}, CT = {
  year: H,
  month: Wt,
  day: H,
  weekday: Wt,
  hour: H,
  minute: H
}, Uh = {
  year: H,
  month: _t,
  day: H,
  hour: H,
  minute: H,
  timeZoneName: Wt
}, Hh = {
  year: H,
  month: _t,
  day: H,
  hour: H,
  minute: H,
  second: H,
  timeZoneName: Wt
}, Bh = {
  year: H,
  month: _t,
  day: H,
  weekday: _t,
  hour: H,
  minute: H,
  timeZoneName: _t
}, qh = {
  year: H,
  month: _t,
  day: H,
  weekday: _t,
  hour: H,
  minute: H,
  second: H,
  timeZoneName: _t
};
class Xi {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new gn();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new gn();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new gn();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, n) {
    throw new gn();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    throw new gn();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new gn();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new gn();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new gn();
  }
}
let qa = null;
class Yo extends Xi {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return qa === null && (qa = new Yo()), qa;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: n, locale: r }) {
    return em(e, n, r);
  }
  /** @override **/
  formatOffset(e, n) {
    return Ni(this.offset(e), n);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Zs = {};
function xT(t) {
  return Zs[t] || (Zs[t] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Zs[t];
}
const NT = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function DT(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, s, o, a, u, c, f] = r;
  return [o, i, s, a, u, c, f];
}
function PT(t, e) {
  const n = t.formatToParts(e), r = [];
  for (let i = 0; i < n.length; i++) {
    const { type: s, value: o } = n[i], a = NT[s];
    s === "era" ? r[a] = o : ie(a) || (r[a] = parseInt(o, 10));
  }
  return r;
}
let Ds = {};
class ln extends Xi {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Ds[e] || (Ds[e] = new ln(e)), Ds[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Ds = {}, Zs = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = ln.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: n, locale: r }) {
    return em(e, n, r, this.name);
  }
  /** @override **/
  formatOffset(e, n) {
    return Ni(this.offset(e), n);
  }
  /** @override **/
  offset(e) {
    const n = new Date(e);
    if (isNaN(n))
      return NaN;
    const r = xT(this.name);
    let [i, s, o, a, u, c, f] = r.formatToParts ? PT(r, n) : DT(r, n);
    a === "BC" && (i = -Math.abs(i) + 1);
    const v = Jo({
      year: i,
      month: s,
      day: o,
      hour: u === 24 ? 0 : u,
      minute: c,
      second: f,
      millisecond: 0
    });
    let y = +n;
    const b = y % 1e3;
    return y -= b >= 0 ? b : 1e3 + b, (v - y) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let Hf = {};
function IT(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Hf[n];
  return r || (r = new Intl.ListFormat(t, e), Hf[n] = r), r;
}
let Cl = {};
function xl(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Cl[n];
  return r || (r = new Intl.DateTimeFormat(t, e), Cl[n] = r), r;
}
let Nl = {};
function RT(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let r = Nl[n];
  return r || (r = new Intl.NumberFormat(t, e), Nl[n] = r), r;
}
let Dl = {};
function kT(t, e = {}) {
  const { base: n, ...r } = e, i = JSON.stringify([t, r]);
  let s = Dl[i];
  return s || (s = new Intl.RelativeTimeFormat(t, e), Dl[i] = s), s;
}
let yi = null;
function MT() {
  return yi || (yi = new Intl.DateTimeFormat().resolvedOptions().locale, yi);
}
let Bf = {};
function $T(t) {
  let e = Bf[t];
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, Bf[t] = e;
  }
  return e;
}
function LT(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let r, i;
    try {
      r = xl(t).resolvedOptions(), i = t;
    } catch {
      const u = t.substring(0, n);
      r = xl(u).resolvedOptions(), i = u;
    }
    const { numberingSystem: s, calendar: o } = r;
    return [i, s, o];
  }
}
function FT(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function WT(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const r = ne.utc(2009, n, 1);
    e.push(t(r));
  }
  return e;
}
function VT(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const r = ne.utc(2016, 11, 13 + n);
    e.push(t(r));
  }
  return e;
}
function Ps(t, e, n, r) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : r(e);
}
function jT(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn";
}
class UT {
  constructor(e, n, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: s, ...o } = r;
    if (!n || Object.keys(o).length > 0) {
      const a = { useGrouping: !1, ...r };
      r.padTo > 0 && (a.minimumIntegerDigits = r.padTo), this.inf = RT(e, a);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : _c(e, 3);
      return $e(n, this.padTo);
    }
  }
}
class HT {
  constructor(e, n, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const o = -1 * (e.offset / 60), a = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
      e.offset !== 0 && ln.create(a).valid ? (i = a, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const s = { ...this.opts };
    s.timeZone = s.timeZone || i, this.dtf = xl(n, s);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((n) => {
      if (n.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: r
        };
      } else
        return n;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class BT {
  constructor(e, n, r) {
    this.opts = { style: "long", ...r }, !n && Qh() && (this.rtf = kT(e, r));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : uC(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const qT = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class we {
  static fromOpts(e) {
    return we.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, r, i, s = !1) {
    const o = e || ke.defaultLocale, a = o || (s ? "en-US" : MT()), u = n || ke.defaultNumberingSystem, c = r || ke.defaultOutputCalendar, f = Pl(i) || ke.defaultWeekSettings;
    return new we(a, u, c, f, o);
  }
  static resetCache() {
    yi = null, Cl = {}, Nl = {}, Dl = {};
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: r, weekSettings: i } = {}) {
    return we.create(e, n, r, i);
  }
  constructor(e, n, r, i, s) {
    const [o, a, u] = LT(e);
    this.locale = o, this.numberingSystem = n || a || null, this.outputCalendar = r || u || null, this.weekSettings = i, this.intl = FT(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = jT(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : we.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Pl(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1) {
    return Ps(this, e, rm, () => {
      const r = n ? { month: e, day: "numeric" } : { month: e }, i = n ? "format" : "standalone";
      return this.monthsCache[i][e] || (this.monthsCache[i][e] = WT((s) => this.extract(s, r, "month"))), this.monthsCache[i][e];
    });
  }
  weekdays(e, n = !1) {
    return Ps(this, e, om, () => {
      const r = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = VT(
        (s) => this.extract(s, r, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Ps(
      this,
      void 0,
      () => am,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [ne.utc(2016, 11, 13, 9), ne.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Ps(this, e, lm, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [ne.utc(-40, 1, 1), ne.utc(2017, 1, 1)].map(
        (r) => this.extract(r, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, r) {
    const i = this.dtFormatter(e, n), s = i.formatToParts(), o = s.find((a) => a.type.toLowerCase() === r);
    return o ? o.value : null;
  }
  numberFormatter(e = {}) {
    return new UT(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new HT(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new BT(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return IT(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Xh() ? $T(this.locale) : qT;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let Ka = null;
class it extends Xi {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ka === null && (Ka = new it(0)), Ka;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? it.utcInstance : new it(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new it(Qo(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Ni(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ni(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, n) {
    return Ni(this.fixed, n);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class KT extends Xi {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function On(t, e) {
  if (ie(t) || t === null)
    return e;
  if (t instanceof Xi)
    return t;
  if (YT(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Yo.instance : n === "utc" || n === "gmt" ? it.utcInstance : it.parseSpecifier(n) || ln.create(t);
  } else
    return tr(t) ? it.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new KT(t);
}
let qf = () => Date.now(), Kf = "system", Gf = null, zf = null, Yf = null, Zf = 60, Jf, Qf = null;
class ke {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return qf;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    qf = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Kf = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return On(Kf, Yo.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Gf;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Gf = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return zf;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    zf = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Yf;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Yf = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return Qf;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Qf = Pl(e);
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Zf;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    Zf = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Jf;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Jf = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    we.resetCache(), ln.resetCache();
  }
}
class Lt {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Kh = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Gh = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function xt(t, e) {
  return new Lt(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function gc(t, e, n) {
  const r = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function zh(t, e, n) {
  return n + (es(t) ? Gh : Kh)[e - 1];
}
function Yh(t, e) {
  const n = es(t) ? Gh : Kh, r = n.findIndex((s) => s < e), i = e - n[r];
  return { month: r + 1, day: i };
}
function yc(t, e) {
  return (t - e + 7) % 7 + 1;
}
function go(t, e = 4, n = 1) {
  const { year: r, month: i, day: s } = t, o = zh(r, i, s), a = yc(gc(r, i, s), n);
  let u = Math.floor((o - a + 14 - e) / 7), c;
  return u < 1 ? (c = r - 1, u = Ui(c, e, n)) : u > Ui(r, e, n) ? (c = r + 1, u = 1) : c = r, { weekYear: c, weekNumber: u, weekday: a, ...Xo(t) };
}
function Xf(t, e = 4, n = 1) {
  const { weekYear: r, weekNumber: i, weekday: s } = t, o = yc(gc(r, 1, e), n), a = Rr(r);
  let u = i * 7 + s - o - 7 + e, c;
  u < 1 ? (c = r - 1, u += Rr(c)) : u > a ? (c = r + 1, u -= Rr(r)) : c = r;
  const { month: f, day: p } = Yh(c, u);
  return { year: c, month: f, day: p, ...Xo(t) };
}
function Ga(t) {
  const { year: e, month: n, day: r } = t, i = zh(e, n, r);
  return { year: e, ordinal: i, ...Xo(t) };
}
function ed(t) {
  const { year: e, ordinal: n } = t, { month: r, day: i } = Yh(e, n);
  return { year: e, month: r, day: i, ...Xo(t) };
}
function td(t, e) {
  if (!ie(t.localWeekday) || !ie(t.localWeekNumber) || !ie(t.localWeekYear)) {
    if (!ie(t.weekday) || !ie(t.weekNumber) || !ie(t.weekYear))
      throw new Cr(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ie(t.localWeekday) || (t.weekday = t.localWeekday), ie(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), ie(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function GT(t, e = 4, n = 1) {
  const r = Zo(t.weekYear), i = Nt(
    t.weekNumber,
    1,
    Ui(t.weekYear, e, n)
  ), s = Nt(t.weekday, 1, 7);
  return r ? i ? s ? !1 : xt("weekday", t.weekday) : xt("week", t.weekNumber) : xt("weekYear", t.weekYear);
}
function zT(t) {
  const e = Zo(t.year), n = Nt(t.ordinal, 1, Rr(t.year));
  return e ? n ? !1 : xt("ordinal", t.ordinal) : xt("year", t.year);
}
function Zh(t) {
  const e = Zo(t.year), n = Nt(t.month, 1, 12), r = Nt(t.day, 1, yo(t.year, t.month));
  return e ? n ? r ? !1 : xt("day", t.day) : xt("month", t.month) : xt("year", t.year);
}
function Jh(t) {
  const { hour: e, minute: n, second: r, millisecond: i } = t, s = Nt(e, 0, 23) || e === 24 && n === 0 && r === 0 && i === 0, o = Nt(n, 0, 59), a = Nt(r, 0, 59), u = Nt(i, 0, 999);
  return s ? o ? a ? u ? !1 : xt("millisecond", i) : xt("second", r) : xt("minute", n) : xt("hour", e);
}
function ie(t) {
  return typeof t > "u";
}
function tr(t) {
  return typeof t == "number";
}
function Zo(t) {
  return typeof t == "number" && t % 1 === 0;
}
function YT(t) {
  return typeof t == "string";
}
function ZT(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Qh() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Xh() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function JT(t) {
  return Array.isArray(t) ? t : [t];
}
function nd(t, e, n) {
  if (t.length !== 0)
    return t.reduce((r, i) => {
      const s = [e(i), i];
      return r && n(r[0], s[0]) === r[0] ? r : s;
    }, null)[1];
}
function QT(t, e) {
  return e.reduce((n, r) => (n[r] = t[r], n), {});
}
function Ur(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Pl(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new dt("Week settings must be an object");
  if (!Nt(t.firstDay, 1, 7) || !Nt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Nt(e, 1, 7)))
    throw new dt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Nt(t, e, n) {
  return Zo(t) && t >= e && t <= n;
}
function XT(t, e) {
  return t - e * Math.floor(t / e);
}
function $e(t, e = 2) {
  const n = t < 0;
  let r;
  return n ? r = "-" + ("" + -t).padStart(e, "0") : r = ("" + t).padStart(e, "0"), r;
}
function Sn(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Hn(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseFloat(t);
}
function vc(t) {
  if (!(ie(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function _c(t, e, n = !1) {
  const r = 10 ** e;
  return (n ? Math.trunc : Math.round)(t * r) / r;
}
function es(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Rr(t) {
  return es(t) ? 366 : 365;
}
function yo(t, e) {
  const n = XT(e - 1, 12) + 1, r = t + (e - n) / 12;
  return n === 2 ? es(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Jo(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function rd(t, e, n) {
  return -yc(gc(t, 1, e), n) + e - 1;
}
function Ui(t, e = 4, n = 1) {
  const r = rd(t, e, n), i = rd(t + 1, e, n);
  return (Rr(t) - r + i) / 7;
}
function Il(t) {
  return t > 99 ? t : t > ke.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function em(t, e, n, r = null) {
  const i = new Date(t), s = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (s.timeZone = r);
  const o = { timeZoneName: e, ...s }, a = new Intl.DateTimeFormat(n, o).formatToParts(i).find((u) => u.type.toLowerCase() === "timezonename");
  return a ? a.value : null;
}
function Qo(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const r = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function tm(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || Number.isNaN(e))
    throw new dt(`Invalid unit value ${t}`);
  return e;
}
function vo(t, e) {
  const n = {};
  for (const r in t)
    if (Ur(t, r)) {
      const i = t[r];
      if (i == null)
        continue;
      n[e(r)] = tm(i);
    }
  return n;
}
function Ni(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), r = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${$e(n, 2)}:${$e(r, 2)}`;
    case "narrow":
      return `${i}${n}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${i}${$e(n, 2)}${$e(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Xo(t) {
  return QT(t, ["hour", "minute", "second", "millisecond"]);
}
const eC = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], nm = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], tC = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function rm(t) {
  switch (t) {
    case "narrow":
      return [...tC];
    case "short":
      return [...nm];
    case "long":
      return [...eC];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const im = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], sm = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], nC = ["M", "T", "W", "T", "F", "S", "S"];
function om(t) {
  switch (t) {
    case "narrow":
      return [...nC];
    case "short":
      return [...sm];
    case "long":
      return [...im];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const am = ["AM", "PM"], rC = ["Before Christ", "Anno Domini"], iC = ["BC", "AD"], sC = ["B", "A"];
function lm(t) {
  switch (t) {
    case "narrow":
      return [...sC];
    case "short":
      return [...iC];
    case "long":
      return [...rC];
    default:
      return null;
  }
}
function oC(t) {
  return am[t.hour < 12 ? 0 : 1];
}
function aC(t, e) {
  return om(e)[t.weekday - 1];
}
function lC(t, e) {
  return rm(e)[t.month - 1];
}
function cC(t, e) {
  return lm(e)[t.year < 0 ? 0 : 1];
}
function uC(t, e, n = "always", r = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, s = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && s) {
    const p = t === "days";
    switch (e) {
      case 1:
        return p ? "tomorrow" : `next ${i[t][0]}`;
      case -1:
        return p ? "yesterday" : `last ${i[t][0]}`;
      case 0:
        return p ? "today" : `this ${i[t][0]}`;
    }
  }
  const o = Object.is(e, -0) || e < 0, a = Math.abs(e), u = a === 1, c = i[t], f = r ? u ? c[1] : c[2] || c[1] : u ? i[t][0] : t;
  return o ? `${a} ${f} ago` : `in ${a} ${f}`;
}
function id(t, e) {
  let n = "";
  for (const r of t)
    r.literal ? n += r.val : n += e(r.val);
  return n;
}
const fC = {
  D: mo,
  DD: Ch,
  DDD: xh,
  DDDD: Nh,
  t: Dh,
  tt: Ph,
  ttt: Ih,
  tttt: Rh,
  T: kh,
  TT: Mh,
  TTT: $h,
  TTTT: Lh,
  f: Fh,
  ff: Vh,
  fff: Uh,
  ffff: Bh,
  F: Wh,
  FF: jh,
  FFF: Hh,
  FFFF: qh
};
class Ye {
  static create(e, n = {}) {
    return new Ye(e, n);
  }
  static parseFormat(e) {
    let n = null, r = "", i = !1;
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e.charAt(o);
      a === "'" ? (r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), n = null, r = "", i = !i) : i || a === n ? r += a : (r.length > 0 && s.push({ literal: /^\s+$/.test(r), val: r }), r = a, n = a);
    }
    return r.length > 0 && s.push({ literal: i || /^\s+$/.test(r), val: r }), s;
  }
  static macroTokenToFormatOpts(e) {
    return fC[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  dtFormatter(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n });
  }
  formatDateTime(e, n) {
    return this.dtFormatter(e, n).format();
  }
  formatDateTimeParts(e, n) {
    return this.dtFormatter(e, n).formatToParts();
  }
  formatInterval(e, n) {
    return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, n) {
    return this.dtFormatter(e, n).resolvedOptions();
  }
  num(e, n = 0) {
    if (this.opts.forceSimple)
      return $e(e, n);
    const r = { ...this.opts };
    return n > 0 && (r.padTo = n), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, n) {
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", s = (y, b) => this.loc.extract(e, y, b), o = (y) => e.isOffsetFixed && e.offset === 0 && y.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, y.format) : "", a = () => r ? oC(e) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), u = (y, b) => r ? lC(e, y) : s(b ? { month: y } : { month: y, day: "numeric" }, "month"), c = (y, b) => r ? aC(e, y) : s(
      b ? { weekday: y } : { weekday: y, month: "long", day: "numeric" },
      "weekday"
    ), f = (y) => {
      const b = Ye.macroTokenToFormatOpts(y);
      return b ? this.formatWithSystemDefault(e, b) : y;
    }, p = (y) => r ? cC(e, y) : s({ era: y }, "era"), v = (y) => {
      switch (y) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return o({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return o({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return o({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return a();
        case "d":
          return i ? s({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return i ? s({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return c("short", !0);
        case "cccc":
          return c("long", !0);
        case "ccccc":
          return c("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return c("short", !1);
        case "EEEE":
          return c("long", !1);
        case "EEEEE":
          return c("narrow", !1);
        case "L":
          return i ? s({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return i ? s({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return u("short", !0);
        case "LLLL":
          return u("long", !0);
        case "LLLLL":
          return u("narrow", !0);
        case "M":
          return i ? s({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? s({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return u("short", !1);
        case "MMMM":
          return u("long", !1);
        case "MMMMM":
          return u("narrow", !1);
        case "y":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return i ? s({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return i ? s({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return p("short");
        case "GG":
          return p("long");
        case "GGGGG":
          return p("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return f(y);
      }
    };
    return id(Ye.parseFormat(n), v);
  }
  formatDurationFromString(e, n) {
    const r = (u) => {
      switch (u[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (u) => (c) => {
      const f = r(c);
      return f ? this.num(u.get(f), c.length) : c;
    }, s = Ye.parseFormat(n), o = s.reduce(
      (u, { literal: c, val: f }) => c ? u : u.concat(f),
      []
    ), a = e.shiftTo(...o.map(r).filter((u) => u));
    return id(s, i(a));
  }
}
const cm = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Qr(...t) {
  const e = t.reduce((n, r) => n + r.source, "");
  return RegExp(`^${e}$`);
}
function Xr(...t) {
  return (e) => t.reduce(
    ([n, r, i], s) => {
      const [o, a, u] = s(e, i);
      return [{ ...n, ...o }, a || r, u];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ei(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, r] of e) {
    const i = n.exec(t);
    if (i)
      return r(i);
  }
  return [null, null];
}
function um(...t) {
  return (e, n) => {
    const r = {};
    let i;
    for (i = 0; i < t.length; i++)
      r[t[i]] = Sn(e[n + i]);
    return [r, null, n + i];
  };
}
const fm = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, dC = `(?:${fm.source}?(?:\\[(${cm.source})\\])?)?`, bc = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, dm = RegExp(`${bc.source}${dC}`), Ec = RegExp(`(?:T${dm.source})?`), pC = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, hC = /(\d{4})-?W(\d\d)(?:-?(\d))?/, mC = /(\d{4})-?(\d{3})/, gC = um("weekYear", "weekNumber", "weekDay"), yC = um("year", "ordinal"), vC = /(\d{4})-(\d\d)-(\d\d)/, pm = RegExp(
  `${bc.source} ?(?:${fm.source}|(${cm.source}))?`
), _C = RegExp(`(?: ${pm.source})?`);
function kr(t, e, n) {
  const r = t[e];
  return ie(r) ? n : Sn(r);
}
function bC(t, e) {
  return [{
    year: kr(t, e),
    month: kr(t, e + 1, 1),
    day: kr(t, e + 2, 1)
  }, null, e + 3];
}
function ti(t, e) {
  return [{
    hours: kr(t, e, 0),
    minutes: kr(t, e + 1, 0),
    seconds: kr(t, e + 2, 0),
    milliseconds: vc(t[e + 3])
  }, null, e + 4];
}
function ts(t, e) {
  const n = !t[e] && !t[e + 1], r = Qo(t[e + 1], t[e + 2]), i = n ? null : it.instance(r);
  return [{}, i, e + 3];
}
function ns(t, e) {
  const n = t[e] ? ln.create(t[e]) : null;
  return [{}, n, e + 1];
}
const EC = RegExp(`^T?${bc.source}$`), wC = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function SC(t) {
  const [e, n, r, i, s, o, a, u, c] = t, f = e[0] === "-", p = u && u[0] === "-", v = (y, b = !1) => y !== void 0 && (b || y && f) ? -y : y;
  return [
    {
      years: v(Hn(n)),
      months: v(Hn(r)),
      weeks: v(Hn(i)),
      days: v(Hn(s)),
      hours: v(Hn(o)),
      minutes: v(Hn(a)),
      seconds: v(Hn(u), u === "-0"),
      milliseconds: v(vc(c), p)
    }
  ];
}
const OC = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function wc(t, e, n, r, i, s, o) {
  const a = {
    year: e.length === 2 ? Il(Sn(e)) : Sn(e),
    month: nm.indexOf(n) + 1,
    day: Sn(r),
    hour: Sn(i),
    minute: Sn(s)
  };
  return o && (a.second = Sn(o)), t && (a.weekday = t.length > 3 ? im.indexOf(t) + 1 : sm.indexOf(t) + 1), a;
}
const AC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function TC(t) {
  const [
    ,
    e,
    n,
    r,
    i,
    s,
    o,
    a,
    u,
    c,
    f,
    p
  ] = t, v = wc(e, i, r, n, s, o, a);
  let y;
  return u ? y = OC[u] : c ? y = 0 : y = Qo(f, p), [v, new it(y)];
}
function CC(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const xC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, NC = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, DC = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function sd(t) {
  const [, e, n, r, i, s, o, a] = t;
  return [wc(e, i, r, n, s, o, a), it.utcInstance];
}
function PC(t) {
  const [, e, n, r, i, s, o, a] = t;
  return [wc(e, a, n, r, i, s, o), it.utcInstance];
}
const IC = Qr(pC, Ec), RC = Qr(hC, Ec), kC = Qr(mC, Ec), MC = Qr(dm), hm = Xr(
  bC,
  ti,
  ts,
  ns
), $C = Xr(
  gC,
  ti,
  ts,
  ns
), LC = Xr(
  yC,
  ti,
  ts,
  ns
), FC = Xr(
  ti,
  ts,
  ns
);
function WC(t) {
  return ei(
    t,
    [IC, hm],
    [RC, $C],
    [kC, LC],
    [MC, FC]
  );
}
function VC(t) {
  return ei(CC(t), [AC, TC]);
}
function jC(t) {
  return ei(
    t,
    [xC, sd],
    [NC, sd],
    [DC, PC]
  );
}
function UC(t) {
  return ei(t, [wC, SC]);
}
const HC = Xr(ti);
function BC(t) {
  return ei(t, [EC, HC]);
}
const qC = Qr(vC, _C), KC = Qr(pm), GC = Xr(
  ti,
  ts,
  ns
);
function zC(t) {
  return ei(
    t,
    [qC, hm],
    [KC, GC]
  );
}
const od = "Invalid Duration", mm = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, YC = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...mm
}, Ct = 146097 / 400, Sr = 146097 / 4800, ZC = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Ct / 7,
    days: Ct,
    hours: Ct * 24,
    minutes: Ct * 24 * 60,
    seconds: Ct * 24 * 60 * 60,
    milliseconds: Ct * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Ct / 28,
    days: Ct / 4,
    hours: Ct * 24 / 4,
    minutes: Ct * 24 * 60 / 4,
    seconds: Ct * 24 * 60 * 60 / 4,
    milliseconds: Ct * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Sr / 7,
    days: Sr,
    hours: Sr * 24,
    minutes: Sr * 24 * 60,
    seconds: Sr * 24 * 60 * 60,
    milliseconds: Sr * 24 * 60 * 60 * 1e3
  },
  ...mm
}, Yn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], JC = Yn.slice(0).reverse();
function yn(t, e, n = !1) {
  const r = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new ve(r);
}
function gm(t, e) {
  let n = e.milliseconds ?? 0;
  for (const r of JC.slice(1))
    e[r] && (n += e[r] * t[r].milliseconds);
  return n;
}
function ad(t, e) {
  const n = gm(t, e) < 0 ? -1 : 1;
  Yn.reduceRight((r, i) => {
    if (ie(e[i]))
      return r;
    if (r) {
      const s = e[r] * n, o = t[i][r], a = Math.floor(s / o);
      e[i] += a * n, e[r] -= a * o * n;
    }
    return i;
  }, null), Yn.reduce((r, i) => {
    if (ie(e[i]))
      return r;
    if (r) {
      const s = e[r] % 1;
      e[r] -= s, e[i] += s * t[r][i];
    }
    return i;
  }, null);
}
function QC(t) {
  const e = {};
  for (const [n, r] of Object.entries(t))
    r !== 0 && (e[n] = r);
  return e;
}
class ve {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let r = n ? ZC : YC;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || we.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, n) {
    return ve.fromObject({ milliseconds: e }, n);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new dt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new ve({
      values: vo(e, ve.normalizeUnit),
      loc: we.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (tr(e))
      return ve.fromMillis(e);
    if (ve.isDuration(e))
      return e;
    if (typeof e == "object")
      return ve.fromObject(e);
    throw new dt(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, n) {
    const [r] = UC(e);
    return r ? ve.fromObject(r, n) : ve.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, n) {
    const [r] = BC(e);
    return r ? ve.fromObject(r, n) : ve.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new dt("need to specify a reason the Duration is invalid");
    const r = e instanceof Lt ? e : new Lt(e, n);
    if (ke.throwOnInvalid)
      throw new AT(r);
    return new ve({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n)
      throw new Th(e);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, n = {}) {
    const r = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? Ye.create(this.loc, r).formatDurationFromString(this, e) : od;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid)
      return od;
    const n = Yn.map((r) => {
      const i = this.values[r];
      return ie(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(i);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(n);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += _c(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, ne.fromMillis(n, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? gm(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const n = ve.fromDurationLike(e), r = {};
    for (const i of Yn)
      (Ur(n.values, i) || Ur(this.values, i)) && (r[i] = n.get(i) + this.get(i));
    return yn(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const n = ve.fromDurationLike(e);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const n = {};
    for (const r of Object.keys(this.values))
      n[r] = tm(e(this.values[r], r));
    return yn(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[ve.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const n = { ...this.values, ...vo(e, ve.normalizeUnit) };
    return yn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: r, matrix: i } = {}) {
    const o = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: r };
    return yn(this, o);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return ad(this.matrix, e), yn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = QC(this.normalize().shiftToAll().toObject());
    return yn(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((o) => ve.normalizeUnit(o));
    const n = {}, r = {}, i = this.toObject();
    let s;
    for (const o of Yn)
      if (e.indexOf(o) >= 0) {
        s = o;
        let a = 0;
        for (const c in r)
          a += this.matrix[c][o] * r[c], r[c] = 0;
        tr(i[o]) && (a += i[o]);
        const u = Math.trunc(a);
        n[o] = u, r[o] = (a * 1e3 - u * 1e3) / 1e3;
      } else
        tr(i[o]) && (r[o] = i[o]);
    for (const o in r)
      r[o] !== 0 && (n[s] += o === s ? r[o] : r[o] / this.matrix[s][o]);
    return ad(this.matrix, n), yn(this, { values: n }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return yn(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(r, i) {
      return r === void 0 || r === 0 ? i === void 0 || i === 0 : r === i;
    }
    for (const r of Yn)
      if (!n(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Or = "Invalid Interval";
function XC(t, e) {
  return !t || !t.isValid ? Ie.invalid("missing or invalid start") : !e || !e.isValid ? Ie.invalid("missing or invalid end") : e < t ? Ie.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Ie {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new dt("need to specify a reason the Interval is invalid");
    const r = e instanceof Lt ? e : new Lt(e, n);
    if (ke.throwOnInvalid)
      throw new OT(r);
    return new Ie({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const r = mi(e), i = mi(n), s = XC(r, i);
    return s ?? new Ie({
      start: r,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, n) {
    const r = ve.fromDurationLike(n), i = mi(e);
    return Ie.fromDateTimes(i, i.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const r = ve.fromDurationLike(n), i = mi(e);
    return Ie.fromDateTimes(i.minus(r), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, n) {
    const [r, i] = (e || "").split("/", 2);
    if (r && i) {
      let s, o;
      try {
        s = ne.fromISO(r, n), o = s.isValid;
      } catch {
        o = !1;
      }
      let a, u;
      try {
        a = ne.fromISO(i, n), u = a.isValid;
      } catch {
        u = !1;
      }
      if (o && u)
        return Ie.fromDateTimes(s, a);
      if (o) {
        const c = ve.fromISO(i, n);
        if (c.isValid)
          return Ie.after(s, c);
      } else if (u) {
        const c = ve.fromISO(r, n);
        if (c.isValid)
          return Ie.before(a, c);
      }
    }
    return Ie.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", n) {
    if (!this.isValid)
      return NaN;
    const r = this.start.startOf(e, n);
    let i;
    return n != null && n.useLocaleWeeks ? i = this.end.reconfigure({ locale: r.locale }) : i = this.end, i = i.startOf(e, n), Math.floor(i.diff(r, e).get(e)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: n } = {}) {
    return this.isValid ? Ie.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const n = e.map(mi).filter((o) => this.contains(o)).sort((o, a) => o.toMillis() - a.toMillis()), r = [];
    let { s: i } = this, s = 0;
    for (; i < this.e; ) {
      const o = n[s] || this.e, a = +o > +this.e ? this.e : o;
      r.push(Ie.fromDateTimes(i, a)), i = a, s += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const n = ve.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: r } = this, i = 1, s;
    const o = [];
    for (; r < this.e; ) {
      const a = this.start.plus(n.mapUnits((u) => u * i));
      s = +a > +this.e ? this.e : a, o.push(Ie.fromDateTimes(r, s)), r = s, i += 1;
    }
    return o;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const n = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return n >= r ? null : Ie.fromDateTimes(n, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const n = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return Ie.fromDateTimes(n, r);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [n, r] = e.sort((i, s) => i.s - s.s).reduce(
      ([i, s], o) => s ? s.overlaps(o) || s.abutsStart(o) ? [i, s.union(o)] : [i.concat([s]), o] : [i, o],
      [[], null]
    );
    return r && n.push(r), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let n = null, r = 0;
    const i = [], s = e.map((u) => [
      { time: u.s, type: "s" },
      { time: u.e, type: "e" }
    ]), o = Array.prototype.concat(...s), a = o.sort((u, c) => u.time - c.time);
    for (const u of a)
      r += u.type === "s" ? 1 : -1, r === 1 ? n = u.time : (n && +n != +u.time && i.push(Ie.fromDateTimes(n, u.time)), n = null);
    return Ie.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Ie.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Or;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = mo, n = {}) {
    return this.isValid ? Ye.create(this.s.loc.clone(n), e).formatInterval(this) : Or;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Or;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Or;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Or;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Or;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : ve.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return Ie.fromDateTimes(e(this.s), e(this.e));
  }
}
class Is {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = ke.defaultZone) {
    const n = ne.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return ln.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return On(e, ke.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || we.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || we.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || we.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || we.create(n, r, s)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null, outputCalendar: s = "gregory" } = {}) {
    return (i || we.create(n, r, s)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || we.create(n, r, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || we.create(n, r, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return we.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: n = null } = {}) {
    return we.create(n, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: Qh(), localeWeek: Xh() };
  }
}
function ld(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = n(e) - n(t);
  return Math.floor(ve.fromMillis(r).as("days"));
}
function ex(t, e, n) {
  const r = [
    ["years", (u, c) => c.year - u.year],
    ["quarters", (u, c) => c.quarter - u.quarter + (c.year - u.year) * 4],
    ["months", (u, c) => c.month - u.month + (c.year - u.year) * 12],
    [
      "weeks",
      (u, c) => {
        const f = ld(u, c);
        return (f - f % 7) / 7;
      }
    ],
    ["days", ld]
  ], i = {}, s = t;
  let o, a;
  for (const [u, c] of r)
    n.indexOf(u) >= 0 && (o = u, i[u] = c(t, e), a = s.plus(i), a > e ? (i[u]--, t = s.plus(i), t > e && (a = t, i[u]--, t = s.plus(i))) : t = a);
  return [t, i, a, o];
}
function tx(t, e, n, r) {
  let [i, s, o, a] = ex(t, e, n);
  const u = e - i, c = n.filter(
    (p) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(p) >= 0
  );
  c.length === 0 && (o < e && (o = i.plus({ [a]: 1 })), o !== i && (s[a] = (s[a] || 0) + u / (o - i)));
  const f = ve.fromObject(s, r);
  return c.length > 0 ? ve.fromMillis(u, r).shiftTo(...c).plus(f) : f;
}
const Sc = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, cd = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, nx = Sc.hanidec.replace(/[\[|\]]/g, "").split("");
function rx(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      if (t[n].search(Sc.hanidec) !== -1)
        e += nx.indexOf(t[n]);
      else
        for (const i in cd) {
          const [s, o] = cd[i];
          r >= s && r <= o && (e += r - s);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function kt({ numberingSystem: t }, e = "") {
  return new RegExp(`${Sc[t || "latn"]}${e}`);
}
const ix = "missing Intl.DateTimeFormat.formatToParts support";
function be(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(rx(n)) };
}
const sx = " ", ym = `[ ${sx}]`, vm = new RegExp(ym, "g");
function ox(t) {
  return t.replace(/\./g, "\\.?").replace(vm, ym);
}
function ud(t) {
  return t.replace(/\./g, "").replace(vm, " ").toLowerCase();
}
function Mt(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(ox).join("|")),
    deser: ([n]) => t.findIndex((r) => ud(n) === ud(r)) + e
  };
}
function fd(t, e) {
  return { regex: t, deser: ([, n, r]) => Qo(n, r), groups: e };
}
function Rs(t) {
  return { regex: t, deser: ([e]) => e };
}
function ax(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function lx(t, e) {
  const n = kt(e), r = kt(e, "{2}"), i = kt(e, "{3}"), s = kt(e, "{4}"), o = kt(e, "{6}"), a = kt(e, "{1,2}"), u = kt(e, "{1,3}"), c = kt(e, "{1,6}"), f = kt(e, "{1,9}"), p = kt(e, "{2,4}"), v = kt(e, "{4,6}"), y = (C) => ({ regex: RegExp(ax(C.val)), deser: ([T]) => T, literal: !0 }), E = ((C) => {
    if (t.literal)
      return y(C);
    switch (C.val) {
      case "G":
        return Mt(e.eras("short"), 0);
      case "GG":
        return Mt(e.eras("long"), 0);
      case "y":
        return be(c);
      case "yy":
        return be(p, Il);
      case "yyyy":
        return be(s);
      case "yyyyy":
        return be(v);
      case "yyyyyy":
        return be(o);
      case "M":
        return be(a);
      case "MM":
        return be(r);
      case "MMM":
        return Mt(e.months("short", !0), 1);
      case "MMMM":
        return Mt(e.months("long", !0), 1);
      case "L":
        return be(a);
      case "LL":
        return be(r);
      case "LLL":
        return Mt(e.months("short", !1), 1);
      case "LLLL":
        return Mt(e.months("long", !1), 1);
      case "d":
        return be(a);
      case "dd":
        return be(r);
      case "o":
        return be(u);
      case "ooo":
        return be(i);
      case "HH":
        return be(r);
      case "H":
        return be(a);
      case "hh":
        return be(r);
      case "h":
        return be(a);
      case "mm":
        return be(r);
      case "m":
        return be(a);
      case "q":
        return be(a);
      case "qq":
        return be(r);
      case "s":
        return be(a);
      case "ss":
        return be(r);
      case "S":
        return be(u);
      case "SSS":
        return be(i);
      case "u":
        return Rs(f);
      case "uu":
        return Rs(a);
      case "uuu":
        return be(n);
      case "a":
        return Mt(e.meridiems(), 0);
      case "kkkk":
        return be(s);
      case "kk":
        return be(p, Il);
      case "W":
        return be(a);
      case "WW":
        return be(r);
      case "E":
      case "c":
        return be(n);
      case "EEE":
        return Mt(e.weekdays("short", !1), 1);
      case "EEEE":
        return Mt(e.weekdays("long", !1), 1);
      case "ccc":
        return Mt(e.weekdays("short", !0), 1);
      case "cccc":
        return Mt(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return fd(new RegExp(`([+-]${a.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return fd(new RegExp(`([+-]${a.source})(${r.source})?`), 2);
      case "z":
        return Rs(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Rs(/[^\S\n\r]/);
      default:
        return y(C);
    }
  })(t) || {
    invalidReason: ix
  };
  return E.token = t, E;
}
const cx = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function ux(t, e, n) {
  const { type: r, value: i } = t;
  if (r === "literal") {
    const u = /^\s+$/.test(i);
    return {
      literal: !u,
      val: u ? " " : i
    };
  }
  const s = e[r];
  let o = r;
  r === "hour" && (e.hour12 != null ? o = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? o = "hour12" : o = "hour24" : o = n.hour12 ? "hour12" : "hour24");
  let a = cx[o];
  if (typeof a == "object" && (a = a[s]), a)
    return {
      literal: !1,
      val: a
    };
}
function fx(t) {
  return [`^${t.map((n) => n.regex).reduce((n, r) => `${n}(${r.source})`, "")}$`, t];
}
function dx(t, e, n) {
  const r = t.match(e);
  if (r) {
    const i = {};
    let s = 1;
    for (const o in n)
      if (Ur(n, o)) {
        const a = n[o], u = a.groups ? a.groups + 1 : 1;
        !a.literal && a.token && (i[a.token.val[0]] = a.deser(r.slice(s, s + u))), s += u;
      }
    return [r, i];
  } else
    return [r, {}];
}
function px(t) {
  const e = (s) => {
    switch (s) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, r;
  return ie(t.z) || (n = ln.create(t.z)), ie(t.Z) || (n || (n = new it(t.Z)), r = t.Z), ie(t.q) || (t.M = (t.q - 1) * 3 + 1), ie(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), ie(t.u) || (t.S = vc(t.u)), [Object.keys(t).reduce((s, o) => {
    const a = e(o);
    return a && (s[a] = t[o]), s;
  }, {}), n, r];
}
let za = null;
function hx() {
  return za || (za = ne.fromMillis(1555555555555)), za;
}
function mx(t, e) {
  if (t.literal)
    return t;
  const n = Ye.macroTokenToFormatOpts(t.val), r = Em(n, e);
  return r == null || r.includes(void 0) ? t : r;
}
function _m(t, e) {
  return Array.prototype.concat(...t.map((n) => mx(n, e)));
}
function bm(t, e, n) {
  const r = _m(Ye.parseFormat(n), t), i = r.map((o) => lx(o, t)), s = i.find((o) => o.invalidReason);
  if (s)
    return { input: e, tokens: r, invalidReason: s.invalidReason };
  {
    const [o, a] = fx(i), u = RegExp(o, "i"), [c, f] = dx(e, u, a), [p, v, y] = f ? px(f) : [null, null, void 0];
    if (Ur(f, "a") && Ur(f, "H"))
      throw new Cr(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: u, rawMatches: c, matches: f, result: p, zone: v, specificOffset: y };
  }
}
function gx(t, e, n) {
  const { result: r, zone: i, specificOffset: s, invalidReason: o } = bm(t, e, n);
  return [r, i, s, o];
}
function Em(t, e) {
  if (!t)
    return null;
  const r = Ye.create(e, t).dtFormatter(hx()), i = r.formatToParts(), s = r.resolvedOptions();
  return i.map((o) => ux(o, t, s));
}
const Ya = "Invalid DateTime", dd = 864e13;
function ks(t) {
  return new Lt("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Za(t) {
  return t.weekData === null && (t.weekData = go(t.c)), t.weekData;
}
function Ja(t) {
  return t.localWeekData === null && (t.localWeekData = go(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Bn(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new ne({ ...n, ...e, old: n });
}
function wm(t, e, n) {
  let r = t - e * 60 * 1e3;
  const i = n.offset(r);
  if (e === i)
    return [r, e];
  r -= (i - e) * 60 * 1e3;
  const s = n.offset(r);
  return i === s ? [r, i] : [t - Math.min(i, s) * 60 * 1e3, Math.max(i, s)];
}
function Ms(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function Js(t, e, n) {
  return wm(Jo(t), e, n);
}
function pd(t, e) {
  const n = t.o, r = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, s = {
    ...t.c,
    year: r,
    month: i,
    day: Math.min(t.c.day, yo(r, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, o = ve.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), a = Jo(s);
  let [u, c] = wm(a, n, t.zone);
  return o !== 0 && (u += o, c = t.zone.offset(u)), { ts: u, o: c };
}
function hi(t, e, n, r, i, s) {
  const { setZone: o, zone: a } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const u = e || a, c = ne.fromObject(t, {
      ...n,
      zone: u,
      specificOffset: s
    });
    return o ? c : c.setZone(a);
  } else
    return ne.invalid(
      new Lt("unparsable", `the input "${i}" can't be parsed as ${r}`)
    );
}
function $s(t, e, n = !0) {
  return t.isValid ? Ye.create(we.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Qa(t, e) {
  const n = t.c.year > 9999 || t.c.year < 0;
  let r = "";
  return n && t.c.year >= 0 && (r += "+"), r += $e(t.c.year, n ? 6 : 4), e ? (r += "-", r += $e(t.c.month), r += "-", r += $e(t.c.day)) : (r += $e(t.c.month), r += $e(t.c.day)), r;
}
function hd(t, e, n, r, i, s) {
  let o = $e(t.c.hour);
  return e ? (o += ":", o += $e(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (o += ":")) : o += $e(t.c.minute), (t.c.millisecond !== 0 || t.c.second !== 0 || !n) && (o += $e(t.c.second), (t.c.millisecond !== 0 || !r) && (o += ".", o += $e(t.c.millisecond, 3))), i && (t.isOffsetFixed && t.offset === 0 && !s ? o += "Z" : t.o < 0 ? (o += "-", o += $e(Math.trunc(-t.o / 60)), o += ":", o += $e(Math.trunc(-t.o % 60))) : (o += "+", o += $e(Math.trunc(t.o / 60)), o += ":", o += $e(Math.trunc(t.o % 60)))), s && (o += "[" + t.zone.ianaName + "]"), o;
}
const Sm = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, yx = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, vx = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Om = ["year", "month", "day", "hour", "minute", "second", "millisecond"], _x = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], bx = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ex(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e)
    throw new Th(t);
  return e;
}
function md(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return Ex(t);
  }
}
function gd(t, e) {
  const n = On(e.zone, ke.defaultZone), r = we.fromObject(e), i = ke.now();
  let s, o;
  if (ie(t.year))
    s = i;
  else {
    for (const c of Om)
      ie(t[c]) && (t[c] = Sm[c]);
    const a = Zh(t) || Jh(t);
    if (a)
      return ne.invalid(a);
    const u = n.offset(i);
    [s, o] = Js(t, u, n);
  }
  return new ne({ ts: s, zone: n, loc: r, o });
}
function yd(t, e, n) {
  const r = ie(n.round) ? !0 : n.round, i = (o, a) => (o = _c(o, r || n.calendary ? 0 : 2, !0), e.loc.clone(n).relFormatter(n).format(o, a)), s = (o) => n.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
  if (n.unit)
    return i(s(n.unit), n.unit);
  for (const o of n.units) {
    const a = s(o);
    if (Math.abs(a) >= 1)
      return i(a, o);
  }
  return i(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function vd(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
class ne {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || ke.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new Lt("invalid input") : null) || (n.isValid ? null : ks(n));
    this.ts = ie(e.ts) ? ke.now() : e.ts;
    let i = null, s = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, s] = [e.old.c, e.old.o];
      else {
        const a = n.offset(this.ts);
        i = Ms(this.ts, a), r = Number.isNaN(i.year) ? new Lt("invalid input") : null, i = r ? null : i, s = r ? null : a;
      }
    this._zone = n, this.loc = e.loc || we.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = s, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new ne({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, n] = vd(arguments), [r, i, s, o, a, u, c] = n;
    return gd({ year: r, month: i, day: s, hour: o, minute: a, second: u, millisecond: c }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, n] = vd(arguments), [r, i, s, o, a, u, c] = n;
    return e.zone = it.utcInstance, gd({ year: r, month: i, day: s, hour: o, minute: a, second: u, millisecond: c }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const r = ZT(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return ne.invalid("invalid input");
    const i = On(n.zone, ke.defaultZone);
    return i.isValid ? new ne({
      ts: r,
      zone: i,
      loc: we.fromObject(n)
    }) : ne.invalid(ks(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, n = {}) {
    if (tr(e))
      return e < -dd || e > dd ? ne.invalid("Timestamp out of range") : new ne({
        ts: e,
        zone: On(n.zone, ke.defaultZone),
        loc: we.fromObject(n)
      });
    throw new dt(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, n = {}) {
    if (tr(e))
      return new ne({
        ts: e * 1e3,
        zone: On(n.zone, ke.defaultZone),
        loc: we.fromObject(n)
      });
    throw new dt("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, n = {}) {
    e = e || {};
    const r = On(n.zone, ke.defaultZone);
    if (!r.isValid)
      return ne.invalid(ks(r));
    const i = we.fromObject(n), s = vo(e, md), { minDaysInFirstWeek: o, startOfWeek: a } = td(s, i), u = ke.now(), c = ie(n.specificOffset) ? r.offset(u) : n.specificOffset, f = !ie(s.ordinal), p = !ie(s.year), v = !ie(s.month) || !ie(s.day), y = p || v, b = s.weekYear || s.weekNumber;
    if ((y || f) && b)
      throw new Cr(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (v && f)
      throw new Cr("Can't mix ordinal dates with month/day");
    const E = b || s.weekday && !y;
    let C, T, q = Ms(u, c);
    E ? (C = _x, T = yx, q = go(q, o, a)) : f ? (C = bx, T = vx, q = Ga(q)) : (C = Om, T = Sm);
    let V = !1;
    for (const Y of C) {
      const X = s[Y];
      ie(X) ? V ? s[Y] = T[Y] : s[Y] = q[Y] : V = !0;
    }
    const W = E ? GT(s, o, a) : f ? zT(s) : Zh(s), G = W || Jh(s);
    if (G)
      return ne.invalid(G);
    const B = E ? Xf(s, o, a) : f ? ed(s) : s, [Q, z] = Js(B, c, r), F = new ne({
      ts: Q,
      zone: r,
      o: z,
      loc: i
    });
    return s.weekday && y && e.weekday !== F.weekday ? ne.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${s.weekday} and a date of ${F.toISO()}`
    ) : F;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, n = {}) {
    const [r, i] = WC(e);
    return hi(r, i, n, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, n = {}) {
    const [r, i] = VC(e);
    return hi(r, i, n, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, n = {}) {
    const [r, i] = jC(e);
    return hi(r, i, n, "HTTP", n);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, n, r = {}) {
    if (ie(e) || ie(n))
      throw new dt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: s = null } = r, o = we.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    }), [a, u, c, f] = gx(o, e, n);
    return f ? ne.invalid(f) : hi(a, u, r, `format ${n}`, e, c);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, r = {}) {
    return ne.fromFormat(e, n, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, n = {}) {
    const [r, i] = zC(e);
    return hi(r, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new dt("need to specify a reason the DateTime is invalid");
    const r = e instanceof Lt ? e : new Lt(e, n);
    if (ke.throwOnInvalid)
      throw new ST(r);
    return new ne({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, n = {}) {
    const r = Em(e, we.fromObject(n));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, n = {}) {
    return _m(Ye.parseFormat(e), we.fromObject(n)).map((i) => i.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Za(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Za(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Za(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? Ja(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Ja(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Ja(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ga(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Is.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Is.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Is.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Is.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, n = 6e4, r = Jo(this.c), i = this.zone.offset(r - e), s = this.zone.offset(r + e), o = this.zone.offset(r - i * n), a = this.zone.offset(r - s * n);
    if (o === a)
      return [this];
    const u = r - o * n, c = r - a * n, f = Ms(u, o), p = Ms(c, a);
    return f.hour === p.hour && f.minute === p.minute && f.second === p.second && f.millisecond === p.millisecond ? [Bn(this, { ts: u }), Bn(this, { ts: c })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return es(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return yo(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Rr(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ui(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ui(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: r, calendar: i } = Ye.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: r, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, n = {}) {
    return this.setZone(it.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(ke.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = On(e, ke.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || r) {
        const s = e.offset(this.ts), o = this.toObject();
        [i] = Js(o, s, e);
      }
      return Bn(this, { ts: i, zone: e });
    } else
      return ne.invalid(ks(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: r });
    return Bn(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const n = vo(e, md), { minDaysInFirstWeek: r, startOfWeek: i } = td(n, this.loc), s = !ie(n.weekYear) || !ie(n.weekNumber) || !ie(n.weekday), o = !ie(n.ordinal), a = !ie(n.year), u = !ie(n.month) || !ie(n.day), c = a || u, f = n.weekYear || n.weekNumber;
    if ((c || o) && f)
      throw new Cr(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && o)
      throw new Cr("Can't mix ordinal dates with month/day");
    let p;
    s ? p = Xf(
      { ...go(this.c, r, i), ...n },
      r,
      i
    ) : ie(n.ordinal) ? (p = { ...this.toObject(), ...n }, ie(n.day) && (p.day = Math.min(yo(p.year, p.month), p.day))) : p = ed({ ...Ga(this.c), ...n });
    const [v, y] = Js(p, this.o, this.zone);
    return Bn(this, { ts: v, o: y });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const n = ve.fromDurationLike(e);
    return Bn(this, pd(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const n = ve.fromDurationLike(e).negate();
    return Bn(this, pd(this, n));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid)
      return this;
    const r = {}, i = ve.normalizeUnit(e);
    switch (i) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (n) {
        const s = this.loc.getStartOfWeek(), { weekday: o } = this;
        o < s && (r.weekNumber = this.weekNumber - 1), r.weekday = s;
      } else
        r.weekday = 1;
    if (i === "quarters") {
      const s = Math.ceil(this.month / 3);
      r.month = (s - 1) * 3 + 1;
    }
    return this.set(r);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, n) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, n).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, n = {}) {
    return this.isValid ? Ye.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ya;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = mo, n = {}) {
    return this.isValid ? Ye.create(this.loc.clone(n), e).formatDateTime(this) : Ya;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? Ye.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: r = !1,
    includeOffset: i = !0,
    extendedZone: s = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const o = e === "extended";
    let a = Qa(this, o);
    return a += "T", a += hd(this, o, n, r, i, s), a;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Qa(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return $s(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: s = !1,
    format: o = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + hd(
      this,
      o === "extended",
      n,
      e,
      r,
      s
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return $s(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return $s(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Qa(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (r && (i += " "), n ? i += "z" : e && (i += "ZZ")), $s(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : Ya;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, n = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return ve.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, s = JT(n).map(ve.normalizeUnit), o = e.valueOf() > this.valueOf(), a = o ? this : e, u = o ? e : this, c = tx(a, u, s, i);
    return o ? c.negate() : c;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(ne.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? Ie.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, n, r) {
    if (!this.isValid)
      return !1;
    const i = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(n, r) <= i && i <= s.endOf(n, r);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const n = e.base || ne.fromObject({}, { zone: this.zone }), r = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], s = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, s = void 0), yd(n, this.plus(r), {
      ...e,
      numeric: "always",
      units: i,
      unit: s
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? yd(e.base || ne.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(ne.isDateTime))
      throw new dt("min requires all arguments be DateTimes");
    return nd(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(ne.isDateTime))
      throw new dt("max requires all arguments be DateTimes");
    return nd(e, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, n, r = {}) {
    const { locale: i = null, numberingSystem: s = null } = r, o = we.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return bm(o, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, r = {}) {
    return ne.fromFormatExplain(e, n, r);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return mo;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Ch;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return TT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return xh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Nh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Dh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ph;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Ih;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Rh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return kh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Mh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return $h;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Lh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Fh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Wh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Vh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return jh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return CT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Uh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Hh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Bh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return qh;
  }
}
function mi(t) {
  if (ne.isDateTime(t))
    return t;
  if (t && t.valueOf && tr(t.valueOf()))
    return ne.fromJSDate(t);
  if (t && typeof t == "object")
    return ne.fromObject(t);
  throw new dt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
const rs = qi({
  id: "filter",
  state: () => ({
    month: 1,
    year: 2e3
  }),
  actions: {
    setFilterPeriod(t, e, n) {
      this.month = t, this.year = e;
    }
  }
}), ni = qi({
  id: "product",
  state: () => ({
    products: [],
    isLoading: !0
  }),
  actions: {
    async fetchProducts() {
      try {
        const e = await new ko.KintoneRestAPIClient({
          baseUrl: "https://aqi-demo.cybozu.com",
          auth: { apiToken: "y60ItXXtrvmzw1jbXMoakjb33EEhtwDyuEwczwau" }
        }).record.getAllRecords({
          app: 1905
        });
        console.log({ records: e }), this.products = e, this.isLoading = !1;
      } catch (t) {
        console.error("Error fetching products:", t);
      }
    }
  },
  getters: {
    getProducts() {
      return this.products;
    }
  }
}), wx = new ko.KintoneRestAPIClient({
  baseUrl: "https://aqi-demo.cybozu.com",
  auth: {
    apiToken: "U45J2jhIxygLj0pu6DtiXyGzoR1BS4KnlPZmh5OI"
  }
}), Oc = qi({
  id: "receiving",
  state: () => ({
    records: [],
    isLoading: !0
  }),
  actions: {
    async fetchReceiving() {
      const t = rs(), e = ni(), n = t.month, r = t.year, i = e.products.map((u) => `"${u.Part_No.value}"`).join(","), s = ne.fromObject({
        year: r,
        month: n,
        day: 1
      }).toISODate(), o = ne.fromObject({
        year: r,
        month: n,
        day: 1
      }).endOf("month").toISODate(), a = `Receive_Date >= "${s}" and Receive_Date <= "${o}" and Part_No_0 in (${i})`;
      console.log({ condition: a });
      try {
        const u = await wx.record.getAllRecords({
          app: 1940,
          condition: a
        });
        console.log("Fetched receiving:", u), this.records = u, this.isLoading = !1, console.log(this.records, "receiving");
      } catch (u) {
        console.error("Error fetching receiving:", u);
      }
    }
  }
}), Sx = new ko.KintoneRestAPIClient({
  baseUrl: "https://aqi-demo.cybozu.com",
  auth: {
    apiToken: "j8Dyn5lPgH57SWWnz4bkdpWfLYstHqQMhKQHUODE"
  }
}), Am = qi({
  id: "production",
  state: () => ({
    records: [],
    isLoading: !0
  }),
  actions: {
    async fetchProduction() {
      const t = rs(), e = ni(), n = t.month, r = t.year, i = e.products.map((u) => `"${u.Part_No.value}"`).join(","), s = ne.fromObject({
        year: r,
        month: n,
        day: 1
      }).toISODate(), o = ne.fromObject({
        year: r,
        month: n,
        day: 1
      }).endOf("month").toISODate(), a = `Production_Date >= "${s}" and Production_Date <= "${o}" and Part_Number_0 in (${i})`;
      console.log({ condition: a });
      try {
        const u = await Sx.record.getAllRecords({
          app: 1958,
          condition: a
        });
        console.log("Fetched production:", u), this.records = u, this.isLoading = !1, console.log(this.records, "production");
      } catch (u) {
        console.error("Error fetching production:", u);
      }
    }
  }
}), Tm = qi({
  id: "report",
  state: () => ({
    reportList: [],
    isLoading: !0
  }),
  actions: {
    generateReport(t, e) {
      const n = ni(), r = Oc(), i = Am(), { products: s } = Kt(n), { records: o } = Kt(r), { records: a } = Kt(i);
      console.log(s.value, "productStore");
      const u = this.groupReceivingByPartNoAndSumQtyReceived(o.value) || [], c = this.groupProductionByPartNoAndSumQtyOk(a.value) || [], f = this.groupIn(c, u), p = this.generateInReference(f), v = s.value.map((y) => {
        const b = p.find((E) => E.partNo === y.Part_No.value);
        return b && console.log(b.in, "inQuantity"), {
          partNo: y.Part_No.value,
          partName: y.Part_Name.value,
          in: b ? b.in : [],
          totalIn: b ? b.in.map((E) => E.in).reduce((E, C) => E + C, 0) : 0
          // description: product.Description.value,
          // qtyReceived,
          // qtyOk,
        };
      });
      console.log({ reportList: v }), this.reportList = v;
    },
    groupReceivingByPartNoAndSumQtyReceived(t) {
      return [
        ...t.map((r) => {
          const i = r.Part_No_0.value, s = r.Receive_Date.value, a = ne.fromISO(s).toFormat("d"), u = parseFloat(r.Qty_Received_0.value);
          return {
            partNo: i,
            receivedDay: a,
            qtyReceived: u
          };
        }).reduce((r, i) => {
          const s = `${i.partNo}-${i.receivedDay}`, o = r.get(s) || Object.assign({}, i, {
            qtyReceived: 0
          });
          return o.qtyReceived += i.qtyReceived, r.set(s, o);
        }, /* @__PURE__ */ new Map()).values()
      ];
    },
    groupProductionByPartNoAndSumQtyOk(t) {
      return [
        ...t.map((r) => {
          const i = r.Part_Number_0.value, s = r.Production_Date.value, a = ne.fromISO(s).toFormat("d"), u = parseFloat(r.Qty_Ok.value);
          return {
            partNo: i,
            productionDay: a,
            qtyOk: u
          };
        }).reduce((r, i) => {
          const s = `${i.partNo}-${i.productionDay}`, o = r.get(s) || Object.assign({}, i, {
            qtyOk: 0
          });
          return o.qtyOk += i.qtyOk, r.set(s, o);
        }, /* @__PURE__ */ new Map()).values()
      ];
    },
    groupIn(t, e) {
      const n = t.map((s) => ({
        partNo: s.partNo,
        day: s.productionDay,
        in: s.qtyOk
      })), r = e.map((s) => ({
        partNo: s.partNo,
        day: s.receivedDay,
        in: s.qtyReceived
      }));
      return [
        ...[...n, ...r].reduce((s, o) => {
          const a = `${o.partNo}-${o.day}`, u = s.get(a) || Object.assign({}, o, {
            in: 0
          });
          return u.in += o.in, s.set(a, u);
        }, /* @__PURE__ */ new Map()).values()
      ];
    },
    generateInReference(t) {
      return [
        ...t.reduce((n, r) => {
          const i = `${r.partNo}`, s = n.get(i) || Object.assign({}, r, {
            in: []
          });
          return s.in.push({ day: r.day, in: r.in }), delete s.day, n.set(i, s);
        }, /* @__PURE__ */ new Map()).values()
      ];
    }
  },
  getters: {}
}), Ox = { class: "border rounded p-3 bg-white table-responsive" }, Ax = { key: 0 }, Tx = { class: "table table-striped table-bordered" }, Cx = /* @__PURE__ */ pe("tr", null, [
  /* @__PURE__ */ pe("th", {
    colspan: "38",
    class: "text-center"
  }, " Month ")
], -1), xx = /* @__PURE__ */ pe("th", null, "Part No", -1), Nx = /* @__PURE__ */ pe("th", null, "Part Name", -1), Dx = /* @__PURE__ */ pe("th", null, "Beginning Stock", -1), Px = /* @__PURE__ */ pe("th", null, "In/Out", -1), Ix = /* @__PURE__ */ pe("th", null, "Total In", -1), Rx = /* @__PURE__ */ pe("th", null, "Total Out", -1), kx = /* @__PURE__ */ pe("th", null, "Ending Stock", -1), Mx = { class: "table-hover" }, $x = { rowspan: "2" }, Lx = { rowspan: "2" }, Fx = /* @__PURE__ */ pe("td", { rowspan: "2" }, " 0 ", -1), Wx = /* @__PURE__ */ pe("td", null, "In", -1), Vx = { rowspan: "2" }, jx = /* @__PURE__ */ pe("td", { rowspan: "2" }, " 0 ", -1), Ux = /* @__PURE__ */ pe("td", { rowspan: "2" }, " 0 ", -1), Hx = { class: "table-hover" }, Bx = /* @__PURE__ */ pe("td", null, "Out", -1), qx = { key: 1 }, Kx = {
  __name: "DataTable",
  setup(t) {
    const e = ni(), n = Oc(), r = Tm(), i = rs(), s = Am();
    Kt(e), Kt(n);
    const { reportList: o } = Kt(r);
    Kt(s), i.$subscribe(async (u, c) => {
      console.log(u, "mutation filterStore"), console.log(c, "state filterStore"), await n.fetchReceiving(), await s.fetchProduction(), r.generateReport();
      const { records: f } = Kt(n), { records: p } = Kt(s);
      console.log({ receivingData: f, productionData: p });
    });
    function a(u, c) {
      const f = u.in.find((p) => (console.log({ dataIn: p }), p.day === c.toString()));
      return f ? f.in : "-";
    }
    return (u, c) => (Ht(), Bt("div", Ox, [
      Mi(o).length ? (Ht(), Bt("div", Ax, [
        pe("table", Tx, [
          pe("thead", null, [
            Cx,
            pe("tr", null, [
              xx,
              Nx,
              Dx,
              Px,
              (Ht(), Bt(ft, null, As(31, (f) => pe("th", { key: f }, yr(f), 1)), 64)),
              Ix,
              Rx,
              kx
            ])
          ]),
          pe("tbody", null, [
            (Ht(!0), Bt(ft, null, As(Mi(o), (f) => (Ht(), Bt(ft, {
              key: f.partNo
            }, [
              pe("tr", Mx, [
                pe("td", $x, yr(f.partNo), 1),
                pe("td", Lx, yr(f.partName), 1),
                Fx,
                Wx,
                (Ht(), Bt(ft, null, As(31, (p) => pe("td", { key: p }, yr(a(f, p)), 1)), 64)),
                pe("td", Vx, yr(f.totalIn), 1),
                jx,
                Ux
              ]),
              pe("tr", Hx, [
                Bx,
                (Ht(), Bt(ft, null, As(31, (p) => pe("td", { key: p }, yr("-"))), 64))
              ])
            ], 64))), 128))
          ])
        ])
      ])) : (Ht(), Bt("div", qx, " Loading... "))
    ]));
  }
}, Gx = { class: "card mb-3" }, zx = { class: "card-body" }, Yx = { class: "row" }, Zx = { class: "col-xs-6" }, Jx = /* @__PURE__ */ Op('<div class="row"><div class="col-xs-12 col-sm-6"><label class="col-xs-12">Month</label></div><div class="col-xs-12 col-sm-6"><label class="col-xs-12">Year</label></div></div>', 1), Qx = { class: "row" }, Xx = { class: "col-xs-12 col-sm-6" }, e1 = /* @__PURE__ */ Op('<option value="1"> January </option><option value="2"> February </option><option value="3"> March </option><option value="4"> April </option><option value="5"> May </option><option value="6"> June </option><option value="7"> July </option><option value="8"> August </option><option value="9"> September </option><option value="10"> October </option><option value="11"> November </option><option value="12"> December </option>', 12), t1 = [
  e1
], n1 = { class: "col-xs-12 col-sm-6" }, r1 = {
  __name: "FilterTable",
  setup(t) {
    const e = rs();
    ni(), Oc(), Tm();
    const { month: n, year: r } = Kt(e);
    return console.log(n.value, "selectedMonth"), console.log(r.value, "selectedYear"), (i, s) => (Ht(), Bt("div", Gx, [
      pe("div", zx, [
        pe("div", Yx, [
          pe("div", Zx, [
            Jx,
            pe("div", Qx, [
              pe("div", Xx, [
                Mu(pe("select", {
                  "onUpdate:modelValue": s[0] || (s[0] = (o) => De(n) ? n.value = o : null),
                  class: "form-select"
                }, t1, 512), [
                  [rw, Mi(n)]
                ])
              ]),
              pe("div", n1, [
                Mu(pe("input", {
                  "onUpdate:modelValue": s[1] || (s[1] = (o) => De(r) ? r.value = o : null),
                  class: "form-control",
                  type: "number",
                  min: "2000",
                  max: "3000"
                }, null, 512), [
                  [nw, Mi(r)]
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}, i1 = { class: "p-3 bg-light" }, s1 = {
  __name: "App",
  setup(t) {
    const e = ni(), n = rs(), r = ne.now().month, i = ne.now().year;
    return dp(async () => {
      await e.fetchProducts(), n.setFilterPeriod(r, i);
    }), (s, o) => (Ht(), Bt("div", i1, [
      Zt(r1),
      Zt(Kx)
    ]));
  }
};
var o1 = { exports: {} }, st = "top", bt = "bottom", Et = "right", ot = "left", ea = "auto", ri = [st, bt, Et, ot], rr = "start", Hr = "end", Cm = "clippingParents", Ac = "viewport", Tr = "popper", xm = "reference", Rl = /* @__PURE__ */ ri.reduce(function(t, e) {
  return t.concat([e + "-" + rr, e + "-" + Hr]);
}, []), Tc = /* @__PURE__ */ [].concat(ri, [ea]).reduce(function(t, e) {
  return t.concat([e, e + "-" + rr, e + "-" + Hr]);
}, []), Nm = "beforeRead", Dm = "read", Pm = "afterRead", Im = "beforeMain", Rm = "main", km = "afterMain", Mm = "beforeWrite", $m = "write", Lm = "afterWrite", Fm = [Nm, Dm, Pm, Im, Rm, km, Mm, $m, Lm];
function Qt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function wt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function ir(t) {
  var e = wt(t).Element;
  return t instanceof e || t instanceof Element;
}
function Pt(t) {
  var e = wt(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Cc(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = wt(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function a1(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, i = e.attributes[n] || {}, s = e.elements[n];
    !Pt(s) || !Qt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(o) {
      var a = i[o];
      a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
    }));
  });
}
function l1(t) {
  var e = t.state, n = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], s = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), a = o.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Pt(i) || !Qt(i) || (Object.assign(i.style, a), Object.keys(s).forEach(function(u) {
        i.removeAttribute(u);
      }));
    });
  };
}
const xc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: a1,
  effect: l1,
  requires: ["computeStyles"]
};
function Jt(t) {
  return t.split("-")[0];
}
var nr = Math.max, _o = Math.min, Br = Math.round;
function kl() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Wm() {
  return !/^((?!chrome|android).)*safari/i.test(kl());
}
function qr(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var r = t.getBoundingClientRect(), i = 1, s = 1;
  e && Pt(t) && (i = t.offsetWidth > 0 && Br(r.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && Br(r.height) / t.offsetHeight || 1);
  var o = ir(t) ? wt(t) : window, a = o.visualViewport, u = !Wm() && n, c = (r.left + (u && a ? a.offsetLeft : 0)) / i, f = (r.top + (u && a ? a.offsetTop : 0)) / s, p = r.width / i, v = r.height / s;
  return {
    width: p,
    height: v,
    top: f,
    right: c + p,
    bottom: f + v,
    left: c,
    x: c,
    y: f
  };
}
function Nc(t) {
  var e = qr(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: n,
    height: r
  };
}
function Vm(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (n && Cc(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function cn(t) {
  return wt(t).getComputedStyle(t);
}
function c1(t) {
  return ["table", "td", "th"].indexOf(Qt(t)) >= 0;
}
function In(t) {
  return ((ir(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function ta(t) {
  return Qt(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Cc(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    In(t)
  );
}
function _d(t) {
  return !Pt(t) || // https://github.com/popperjs/popper-core/issues/837
  cn(t).position === "fixed" ? null : t.offsetParent;
}
function u1(t) {
  var e = /firefox/i.test(kl()), n = /Trident/i.test(kl());
  if (n && Pt(t)) {
    var r = cn(t);
    if (r.position === "fixed")
      return null;
  }
  var i = ta(t);
  for (Cc(i) && (i = i.host); Pt(i) && ["html", "body"].indexOf(Qt(i)) < 0; ) {
    var s = cn(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function is(t) {
  for (var e = wt(t), n = _d(t); n && c1(n) && cn(n).position === "static"; )
    n = _d(n);
  return n && (Qt(n) === "html" || Qt(n) === "body" && cn(n).position === "static") ? e : n || u1(t) || e;
}
function Dc(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Di(t, e, n) {
  return nr(t, _o(e, n));
}
function f1(t, e, n) {
  var r = Di(t, e, n);
  return r > n ? n : r;
}
function jm() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Um(t) {
  return Object.assign({}, jm(), t);
}
function Hm(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var d1 = function(e, n) {
  return e = typeof e == "function" ? e(Object.assign({}, n.rects, {
    placement: n.placement
  })) : e, Um(typeof e != "number" ? e : Hm(e, ri));
};
function p1(t) {
  var e, n = t.state, r = t.name, i = t.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, a = Jt(n.placement), u = Dc(a), c = [ot, Et].indexOf(a) >= 0, f = c ? "height" : "width";
  if (!(!s || !o)) {
    var p = d1(i.padding, n), v = Nc(s), y = u === "y" ? st : ot, b = u === "y" ? bt : Et, E = n.rects.reference[f] + n.rects.reference[u] - o[u] - n.rects.popper[f], C = o[u] - n.rects.reference[u], T = is(s), q = T ? u === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, V = E / 2 - C / 2, W = p[y], G = q - v[f] - p[b], B = q / 2 - v[f] / 2 + V, Q = Di(W, B, G), z = u;
    n.modifiersData[r] = (e = {}, e[z] = Q, e.centerOffset = Q - B, e);
  }
}
function h1(t) {
  var e = t.state, n = t.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Vm(e.elements.popper, i) && (e.elements.arrow = i));
}
const Bm = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: p1,
  effect: h1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Kr(t) {
  return t.split("-")[1];
}
var m1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function g1(t, e) {
  var n = t.x, r = t.y, i = e.devicePixelRatio || 1;
  return {
    x: Br(n * i) / i || 0,
    y: Br(r * i) / i || 0
  };
}
function bd(t) {
  var e, n = t.popper, r = t.popperRect, i = t.placement, s = t.variation, o = t.offsets, a = t.position, u = t.gpuAcceleration, c = t.adaptive, f = t.roundOffsets, p = t.isFixed, v = o.x, y = v === void 0 ? 0 : v, b = o.y, E = b === void 0 ? 0 : b, C = typeof f == "function" ? f({
    x: y,
    y: E
  }) : {
    x: y,
    y: E
  };
  y = C.x, E = C.y;
  var T = o.hasOwnProperty("x"), q = o.hasOwnProperty("y"), V = ot, W = st, G = window;
  if (c) {
    var B = is(n), Q = "clientHeight", z = "clientWidth";
    if (B === wt(n) && (B = In(n), cn(B).position !== "static" && a === "absolute" && (Q = "scrollHeight", z = "scrollWidth")), B = B, i === st || (i === ot || i === Et) && s === Hr) {
      W = bt;
      var F = p && B === G && G.visualViewport ? G.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        B[Q]
      );
      E -= F - r.height, E *= u ? 1 : -1;
    }
    if (i === ot || (i === st || i === bt) && s === Hr) {
      V = Et;
      var Y = p && B === G && G.visualViewport ? G.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        B[z]
      );
      y -= Y - r.width, y *= u ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: a
  }, c && m1), le = f === !0 ? g1({
    x: y,
    y: E
  }, wt(n)) : {
    x: y,
    y: E
  };
  if (y = le.x, E = le.y, u) {
    var ce;
    return Object.assign({}, X, (ce = {}, ce[W] = q ? "0" : "", ce[V] = T ? "0" : "", ce.transform = (G.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + E + "px)" : "translate3d(" + y + "px, " + E + "px, 0)", ce));
  }
  return Object.assign({}, X, (e = {}, e[W] = q ? E + "px" : "", e[V] = T ? y + "px" : "", e.transform = "", e));
}
function y1(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, a = n.roundOffsets, u = a === void 0 ? !0 : a, c = {
    placement: Jt(e.placement),
    variation: Kr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, bd(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: u
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, bd(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const Pc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: y1,
  data: {}
};
var Ls = {
  passive: !0
};
function v1(t) {
  var e = t.state, n = t.instance, r = t.options, i = r.scroll, s = i === void 0 ? !0 : i, o = r.resize, a = o === void 0 ? !0 : o, u = wt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ls);
  }), a && u.addEventListener("resize", n.update, Ls), function() {
    s && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ls);
    }), a && u.removeEventListener("resize", n.update, Ls);
  };
}
const Ic = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: v1,
  data: {}
};
var _1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qs(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return _1[e];
  });
}
var b1 = {
  start: "end",
  end: "start"
};
function Ed(t) {
  return t.replace(/start|end/g, function(e) {
    return b1[e];
  });
}
function Rc(t) {
  var e = wt(t), n = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function kc(t) {
  return qr(In(t)).left + Rc(t).scrollLeft;
}
function E1(t, e) {
  var n = wt(t), r = In(t), i = n.visualViewport, s = r.clientWidth, o = r.clientHeight, a = 0, u = 0;
  if (i) {
    s = i.width, o = i.height;
    var c = Wm();
    (c || !c && e === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: a + kc(t),
    y: u
  };
}
function w1(t) {
  var e, n = In(t), r = Rc(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, s = nr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = nr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -r.scrollLeft + kc(t), u = -r.scrollTop;
  return cn(i || n).direction === "rtl" && (a += nr(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: a,
    y: u
  };
}
function Mc(t) {
  var e = cn(t), n = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function qm(t) {
  return ["html", "body", "#document"].indexOf(Qt(t)) >= 0 ? t.ownerDocument.body : Pt(t) && Mc(t) ? t : qm(ta(t));
}
function Pi(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = qm(t), i = r === ((n = t.ownerDocument) == null ? void 0 : n.body), s = wt(r), o = i ? [s].concat(s.visualViewport || [], Mc(r) ? r : []) : r, a = e.concat(o);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Pi(ta(o)))
  );
}
function Ml(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function S1(t, e) {
  var n = qr(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function wd(t, e, n) {
  return e === Ac ? Ml(E1(t, n)) : ir(e) ? S1(e, n) : Ml(w1(In(t)));
}
function O1(t) {
  var e = Pi(ta(t)), n = ["absolute", "fixed"].indexOf(cn(t).position) >= 0, r = n && Pt(t) ? is(t) : t;
  return ir(r) ? e.filter(function(i) {
    return ir(i) && Vm(i, r) && Qt(i) !== "body";
  }) : [];
}
function A1(t, e, n, r) {
  var i = e === "clippingParents" ? O1(t) : [].concat(e), s = [].concat(i, [n]), o = s[0], a = s.reduce(function(u, c) {
    var f = wd(t, c, r);
    return u.top = nr(f.top, u.top), u.right = _o(f.right, u.right), u.bottom = _o(f.bottom, u.bottom), u.left = nr(f.left, u.left), u;
  }, wd(t, o, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Km(t) {
  var e = t.reference, n = t.element, r = t.placement, i = r ? Jt(r) : null, s = r ? Kr(r) : null, o = e.x + e.width / 2 - n.width / 2, a = e.y + e.height / 2 - n.height / 2, u;
  switch (i) {
    case st:
      u = {
        x: o,
        y: e.y - n.height
      };
      break;
    case bt:
      u = {
        x: o,
        y: e.y + e.height
      };
      break;
    case Et:
      u = {
        x: e.x + e.width,
        y: a
      };
      break;
    case ot:
      u = {
        x: e.x - n.width,
        y: a
      };
      break;
    default:
      u = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? Dc(i) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (s) {
      case rr:
        u[c] = u[c] - (e[f] / 2 - n[f] / 2);
        break;
      case Hr:
        u[c] = u[c] + (e[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function Gr(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = r === void 0 ? t.placement : r, s = n.strategy, o = s === void 0 ? t.strategy : s, a = n.boundary, u = a === void 0 ? Cm : a, c = n.rootBoundary, f = c === void 0 ? Ac : c, p = n.elementContext, v = p === void 0 ? Tr : p, y = n.altBoundary, b = y === void 0 ? !1 : y, E = n.padding, C = E === void 0 ? 0 : E, T = Um(typeof C != "number" ? C : Hm(C, ri)), q = v === Tr ? xm : Tr, V = t.rects.popper, W = t.elements[b ? q : v], G = A1(ir(W) ? W : W.contextElement || In(t.elements.popper), u, f, o), B = qr(t.elements.reference), Q = Km({
    reference: B,
    element: V,
    strategy: "absolute",
    placement: i
  }), z = Ml(Object.assign({}, V, Q)), F = v === Tr ? z : B, Y = {
    top: G.top - F.top + T.top,
    bottom: F.bottom - G.bottom + T.bottom,
    left: G.left - F.left + T.left,
    right: F.right - G.right + T.right
  }, X = t.modifiersData.offset;
  if (v === Tr && X) {
    var le = X[i];
    Object.keys(Y).forEach(function(ce) {
      var Te = [Et, bt].indexOf(ce) >= 0 ? 1 : -1, Se = [st, bt].indexOf(ce) >= 0 ? "y" : "x";
      Y[ce] += le[Se] * Te;
    });
  }
  return Y;
}
function T1(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, i = n.boundary, s = n.rootBoundary, o = n.padding, a = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Tc : u, f = Kr(r), p = f ? a ? Rl : Rl.filter(function(b) {
    return Kr(b) === f;
  }) : ri, v = p.filter(function(b) {
    return c.indexOf(b) >= 0;
  });
  v.length === 0 && (v = p);
  var y = v.reduce(function(b, E) {
    return b[E] = Gr(t, {
      placement: E,
      boundary: i,
      rootBoundary: s,
      padding: o
    })[Jt(E)], b;
  }, {});
  return Object.keys(y).sort(function(b, E) {
    return y[b] - y[E];
  });
}
function C1(t) {
  if (Jt(t) === ea)
    return [];
  var e = Qs(t);
  return [Ed(t), e, Ed(e)];
}
function x1(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, o = n.altAxis, a = o === void 0 ? !0 : o, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, b = y === void 0 ? !0 : y, E = n.allowedAutoPlacements, C = e.options.placement, T = Jt(C), q = T === C, V = u || (q || !b ? [Qs(C)] : C1(C)), W = [C].concat(V).reduce(function(mt, Xe) {
      return mt.concat(Jt(Xe) === ea ? T1(e, {
        placement: Xe,
        boundary: f,
        rootBoundary: p,
        padding: c,
        flipVariations: b,
        allowedAutoPlacements: E
      }) : Xe);
    }, []), G = e.rects.reference, B = e.rects.popper, Q = /* @__PURE__ */ new Map(), z = !0, F = W[0], Y = 0; Y < W.length; Y++) {
      var X = W[Y], le = Jt(X), ce = Kr(X) === rr, Te = [st, bt].indexOf(le) >= 0, Se = Te ? "width" : "height", ee = Gr(e, {
        placement: X,
        boundary: f,
        rootBoundary: p,
        altBoundary: v,
        padding: c
      }), oe = Te ? ce ? Et : ot : ce ? bt : st;
      G[Se] > B[Se] && (oe = Qs(oe));
      var fe = Qs(oe), Re = [];
      if (s && Re.push(ee[le] <= 0), a && Re.push(ee[oe] <= 0, ee[fe] <= 0), Re.every(function(mt) {
        return mt;
      })) {
        F = X, z = !1;
        break;
      }
      Q.set(X, Re);
    }
    if (z)
      for (var Qe = b ? 3 : 1, qe = function(Xe) {
        var xe = W.find(function(O) {
          var U = Q.get(O);
          if (U)
            return U.slice(0, Xe).every(function(Oe) {
              return Oe;
            });
        });
        if (xe)
          return F = xe, "break";
      }, Pe = Qe; Pe > 0; Pe--) {
        var St = qe(Pe);
        if (St === "break")
          break;
      }
    e.placement !== F && (e.modifiersData[r]._skip = !0, e.placement = F, e.reset = !0);
  }
}
const Gm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: x1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sd(t, e, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - n.y,
    right: t.right - e.width + n.x,
    bottom: t.bottom - e.height + n.y,
    left: t.left - e.width - n.x
  };
}
function Od(t) {
  return [st, Et, bt, ot].some(function(e) {
    return t[e] >= 0;
  });
}
function N1(t) {
  var e = t.state, n = t.name, r = e.rects.reference, i = e.rects.popper, s = e.modifiersData.preventOverflow, o = Gr(e, {
    elementContext: "reference"
  }), a = Gr(e, {
    altBoundary: !0
  }), u = Sd(o, r), c = Sd(a, i, s), f = Od(u), p = Od(c);
  e.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: f,
    hasPopperEscaped: p
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": p
  });
}
const zm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: N1
};
function D1(t, e, n) {
  var r = Jt(t), i = [ot, st].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, e, {
    placement: t
  })) : n, o = s[0], a = s[1];
  return o = o || 0, a = (a || 0) * i, [ot, Et].indexOf(r) >= 0 ? {
    x: a,
    y: o
  } : {
    x: o,
    y: a
  };
}
function P1(t) {
  var e = t.state, n = t.options, r = t.name, i = n.offset, s = i === void 0 ? [0, 0] : i, o = Tc.reduce(function(f, p) {
    return f[p] = D1(p, e.rects, s), f;
  }, {}), a = o[e.placement], u = a.x, c = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = o;
}
const Ym = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: P1
};
function I1(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = Km({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const $c = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: I1,
  data: {}
};
function R1(t) {
  return t === "x" ? "y" : "x";
}
function k1(t) {
  var e = t.state, n = t.options, r = t.name, i = n.mainAxis, s = i === void 0 ? !0 : i, o = n.altAxis, a = o === void 0 ? !1 : o, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, v = n.tether, y = v === void 0 ? !0 : v, b = n.tetherOffset, E = b === void 0 ? 0 : b, C = Gr(e, {
    boundary: u,
    rootBoundary: c,
    padding: p,
    altBoundary: f
  }), T = Jt(e.placement), q = Kr(e.placement), V = !q, W = Dc(T), G = R1(W), B = e.modifiersData.popperOffsets, Q = e.rects.reference, z = e.rects.popper, F = typeof E == "function" ? E(Object.assign({}, e.rects, {
    placement: e.placement
  })) : E, Y = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), X = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, le = {
    x: 0,
    y: 0
  };
  if (B) {
    if (s) {
      var ce, Te = W === "y" ? st : ot, Se = W === "y" ? bt : Et, ee = W === "y" ? "height" : "width", oe = B[W], fe = oe + C[Te], Re = oe - C[Se], Qe = y ? -z[ee] / 2 : 0, qe = q === rr ? Q[ee] : z[ee], Pe = q === rr ? -z[ee] : -Q[ee], St = e.elements.arrow, mt = y && St ? Nc(St) : {
        width: 0,
        height: 0
      }, Xe = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : jm(), xe = Xe[Te], O = Xe[Se], U = Di(0, Q[ee], mt[ee]), Oe = V ? Q[ee] / 2 - Qe - U - xe - Y.mainAxis : qe - U - xe - Y.mainAxis, Ne = V ? -Q[ee] / 2 + Qe + U + O + Y.mainAxis : Pe + U + O + Y.mainAxis, x = e.elements.arrow && is(e.elements.arrow), We = x ? W === "y" ? x.clientTop || 0 : x.clientLeft || 0 : 0, m = (ce = X == null ? void 0 : X[W]) != null ? ce : 0, _ = oe + Oe - m - We, S = oe + Ne - m, D = Di(y ? _o(fe, _) : fe, oe, y ? nr(Re, S) : Re);
      B[W] = D, le[W] = D - oe;
    }
    if (a) {
      var P, R = W === "x" ? st : ot, j = W === "x" ? bt : Et, w = B[G], k = G === "y" ? "height" : "width", I = w + C[R], K = w - C[j], J = [st, ot].indexOf(T) !== -1, Z = (P = X == null ? void 0 : X[G]) != null ? P : 0, te = J ? I : w - Q[k] - z[k] - Z + Y.altAxis, ae = J ? w + Q[k] + z[k] - Z - Y.altAxis : K, ye = y && J ? f1(te, w, ae) : Di(y ? te : I, w, y ? ae : K);
      B[G] = ye, le[G] = ye - w;
    }
    e.modifiersData[r] = le;
  }
}
const Zm = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: k1,
  requiresIfExists: ["offset"]
};
function M1(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function $1(t) {
  return t === wt(t) || !Pt(t) ? Rc(t) : M1(t);
}
function L1(t) {
  var e = t.getBoundingClientRect(), n = Br(e.width) / t.offsetWidth || 1, r = Br(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function F1(t, e, n) {
  n === void 0 && (n = !1);
  var r = Pt(e), i = Pt(e) && L1(e), s = In(e), o = qr(t, i, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Qt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Mc(s)) && (a = $1(e)), Pt(e) ? (u = qr(e, !0), u.x += e.clientLeft, u.y += e.clientTop) : s && (u.x = kc(s))), {
    x: o.left + a.scrollLeft - u.x,
    y: o.top + a.scrollTop - u.y,
    width: o.width,
    height: o.height
  };
}
function W1(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(s) {
    e.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(a) {
      if (!n.has(a)) {
        var u = e.get(a);
        u && i(u);
      }
    }), r.push(s);
  }
  return t.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function V1(t) {
  var e = W1(t);
  return Fm.reduce(function(n, r) {
    return n.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function j1(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function U1(t) {
  var e = t.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Ad = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Td() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function na(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, i = e.defaultOptions, s = i === void 0 ? Ad : i;
  return function(a, u, c) {
    c === void 0 && (c = s);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ad, s),
      modifiersData: {},
      elements: {
        reference: a,
        popper: u
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, y = {
      state: f,
      setOptions: function(T) {
        var q = typeof T == "function" ? T(f.options) : T;
        E(), f.options = Object.assign({}, s, f.options, q), f.scrollParents = {
          reference: ir(a) ? Pi(a) : a.contextElement ? Pi(a.contextElement) : [],
          popper: Pi(u)
        };
        var V = V1(U1([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = V.filter(function(W) {
          return W.enabled;
        }), b(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var T = f.elements, q = T.reference, V = T.popper;
          if (Td(q, V)) {
            f.rects = {
              reference: F1(q, is(V), f.options.strategy === "fixed"),
              popper: Nc(V)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(Y) {
              return f.modifiersData[Y.name] = Object.assign({}, Y.data);
            });
            for (var W = 0; W < f.orderedModifiers.length; W++) {
              if (f.reset === !0) {
                f.reset = !1, W = -1;
                continue;
              }
              var G = f.orderedModifiers[W], B = G.fn, Q = G.options, z = Q === void 0 ? {} : Q, F = G.name;
              typeof B == "function" && (f = B({
                state: f,
                options: z,
                name: F,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: j1(function() {
        return new Promise(function(C) {
          y.forceUpdate(), C(f);
        });
      }),
      destroy: function() {
        E(), v = !0;
      }
    };
    if (!Td(a, u))
      return y;
    y.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function b() {
      f.orderedModifiers.forEach(function(C) {
        var T = C.name, q = C.options, V = q === void 0 ? {} : q, W = C.effect;
        if (typeof W == "function") {
          var G = W({
            state: f,
            name: T,
            instance: y,
            options: V
          }), B = function() {
          };
          p.push(G || B);
        }
      });
    }
    function E() {
      p.forEach(function(C) {
        return C();
      }), p = [];
    }
    return y;
  };
}
var H1 = /* @__PURE__ */ na(), B1 = [Ic, $c, Pc, xc], q1 = /* @__PURE__ */ na({
  defaultModifiers: B1
}), K1 = [Ic, $c, Pc, xc, Ym, Gm, Zm, Bm, zm], G1 = /* @__PURE__ */ na({
  defaultModifiers: K1
});
const z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: km,
  afterRead: Pm,
  afterWrite: Lm,
  applyStyles: xc,
  arrow: Bm,
  auto: ea,
  basePlacements: ri,
  beforeMain: Im,
  beforeRead: Nm,
  beforeWrite: Mm,
  bottom: bt,
  clippingParents: Cm,
  computeStyles: Pc,
  createPopper: G1,
  createPopperBase: H1,
  createPopperLite: q1,
  detectOverflow: Gr,
  end: Hr,
  eventListeners: Ic,
  flip: Gm,
  hide: zm,
  left: ot,
  main: Rm,
  modifierPhases: Fm,
  offset: Ym,
  placements: Tc,
  popper: Tr,
  popperGenerator: na,
  popperOffsets: $c,
  preventOverflow: Zm,
  read: Dm,
  reference: xm,
  right: Et,
  start: rr,
  top: st,
  variationPlacements: Rl,
  viewport: Ac,
  write: $m
}, Symbol.toStringTag, { value: "Module" })), Y1 = /* @__PURE__ */ kp(z1);
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t, e) {
  (function(n, r) {
    t.exports = r(Y1);
  })($, function(n) {
    function r(h) {
      const l = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
      if (h) {
        for (const d in h)
          if (d !== "default") {
            const g = Object.getOwnPropertyDescriptor(h, d);
            Object.defineProperty(l, d, g.get ? g : {
              enumerable: !0,
              get: () => h[d]
            });
          }
      }
      return l.default = h, Object.freeze(l);
    }
    const i = /* @__PURE__ */ r(n), s = /* @__PURE__ */ new Map(), o = {
      set(h, l, d) {
        s.has(h) || s.set(h, /* @__PURE__ */ new Map());
        const g = s.get(h);
        if (!g.has(l) && g.size !== 0) {
          console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);
          return;
        }
        g.set(l, d);
      },
      get(h, l) {
        return s.has(h) && s.get(h).get(l) || null;
      },
      remove(h, l) {
        if (!s.has(h))
          return;
        const d = s.get(h);
        d.delete(l), d.size === 0 && s.delete(h);
      }
    }, a = 1e6, u = 1e3, c = "transitionend", f = (h) => (h && window.CSS && window.CSS.escape && (h = h.replace(/#([^\s"#']+)/g, (l, d) => `#${CSS.escape(d)}`)), h), p = (h) => h == null ? `${h}` : Object.prototype.toString.call(h).match(/\s([a-z]+)/i)[1].toLowerCase(), v = (h) => {
      do
        h += Math.floor(Math.random() * a);
      while (document.getElementById(h));
      return h;
    }, y = (h) => {
      if (!h)
        return 0;
      let {
        transitionDuration: l,
        transitionDelay: d
      } = window.getComputedStyle(h);
      const g = Number.parseFloat(l), A = Number.parseFloat(d);
      return !g && !A ? 0 : (l = l.split(",")[0], d = d.split(",")[0], (Number.parseFloat(l) + Number.parseFloat(d)) * u);
    }, b = (h) => {
      h.dispatchEvent(new Event(c));
    }, E = (h) => !h || typeof h != "object" ? !1 : (typeof h.jquery < "u" && (h = h[0]), typeof h.nodeType < "u"), C = (h) => E(h) ? h.jquery ? h[0] : h : typeof h == "string" && h.length > 0 ? document.querySelector(f(h)) : null, T = (h) => {
      if (!E(h) || h.getClientRects().length === 0)
        return !1;
      const l = getComputedStyle(h).getPropertyValue("visibility") === "visible", d = h.closest("details:not([open])");
      if (!d)
        return l;
      if (d !== h) {
        const g = h.closest("summary");
        if (g && g.parentNode !== d || g === null)
          return !1;
      }
      return l;
    }, q = (h) => !h || h.nodeType !== Node.ELEMENT_NODE || h.classList.contains("disabled") ? !0 : typeof h.disabled < "u" ? h.disabled : h.hasAttribute("disabled") && h.getAttribute("disabled") !== "false", V = (h) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof h.getRootNode == "function") {
        const l = h.getRootNode();
        return l instanceof ShadowRoot ? l : null;
      }
      return h instanceof ShadowRoot ? h : h.parentNode ? V(h.parentNode) : null;
    }, W = () => {
    }, G = (h) => {
      h.offsetHeight;
    }, B = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Q = [], z = (h) => {
      document.readyState === "loading" ? (Q.length || document.addEventListener("DOMContentLoaded", () => {
        for (const l of Q)
          l();
      }), Q.push(h)) : h();
    }, F = () => document.documentElement.dir === "rtl", Y = (h) => {
      z(() => {
        const l = B();
        if (l) {
          const d = h.NAME, g = l.fn[d];
          l.fn[d] = h.jQueryInterface, l.fn[d].Constructor = h, l.fn[d].noConflict = () => (l.fn[d] = g, h.jQueryInterface);
        }
      });
    }, X = (h, l = [], d = h) => typeof h == "function" ? h(...l) : d, le = (h, l, d = !0) => {
      if (!d) {
        X(h);
        return;
      }
      const A = y(l) + 5;
      let L = !1;
      const M = ({
        target: ue
      }) => {
        ue === l && (L = !0, l.removeEventListener(c, M), X(h));
      };
      l.addEventListener(c, M), setTimeout(() => {
        L || b(l);
      }, A);
    }, ce = (h, l, d, g) => {
      const A = h.length;
      let L = h.indexOf(l);
      return L === -1 ? !d && g ? h[A - 1] : h[0] : (L += d ? 1 : -1, g && (L = (L + A) % A), h[Math.max(0, Math.min(L, A - 1))]);
    }, Te = /[^.]*(?=\..*)\.|.*/, Se = /\..*/, ee = /::\d+$/, oe = {};
    let fe = 1;
    const Re = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, Qe = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function qe(h, l) {
      return l && `${l}::${fe++}` || h.uidEvent || fe++;
    }
    function Pe(h) {
      const l = qe(h);
      return h.uidEvent = l, oe[l] = oe[l] || {}, oe[l];
    }
    function St(h, l) {
      return function d(g) {
        return We(g, {
          delegateTarget: h
        }), d.oneOff && x.off(h, g.type, l), l.apply(h, [g]);
      };
    }
    function mt(h, l, d) {
      return function g(A) {
        const L = h.querySelectorAll(l);
        for (let {
          target: M
        } = A; M && M !== this; M = M.parentNode)
          for (const ue of L)
            if (ue === M)
              return We(A, {
                delegateTarget: M
              }), g.oneOff && x.off(h, A.type, l, d), d.apply(M, [A]);
      };
    }
    function Xe(h, l, d = null) {
      return Object.values(h).find((g) => g.callable === l && g.delegationSelector === d);
    }
    function xe(h, l, d) {
      const g = typeof l == "string", A = g ? d : l || d;
      let L = Ne(h);
      return Qe.has(L) || (L = h), [g, A, L];
    }
    function O(h, l, d, g, A) {
      if (typeof l != "string" || !h)
        return;
      let [L, M, ue] = xe(l, d, g);
      l in Re && (M = ((T_) => function(gr) {
        if (!gr.relatedTarget || gr.relatedTarget !== gr.delegateTarget && !gr.delegateTarget.contains(gr.relatedTarget))
          return T_.call(this, gr);
      })(M));
      const at = Pe(h), Tt = at[ue] || (at[ue] = {}), Ve = Xe(Tt, M, L ? d : null);
      if (Ve) {
        Ve.oneOff = Ve.oneOff && A;
        return;
      }
      const Vt = qe(M, l.replace(Te, "")), Rt = L ? mt(h, d, M) : St(h, M);
      Rt.delegationSelector = L ? d : null, Rt.callable = M, Rt.oneOff = A, Rt.uidEvent = Vt, Tt[Vt] = Rt, h.addEventListener(ue, Rt, L);
    }
    function U(h, l, d, g, A) {
      const L = Xe(l[d], g, A);
      L && (h.removeEventListener(d, L, !!A), delete l[d][L.uidEvent]);
    }
    function Oe(h, l, d, g) {
      const A = l[d] || {};
      for (const [L, M] of Object.entries(A))
        L.includes(g) && U(h, l, d, M.callable, M.delegationSelector);
    }
    function Ne(h) {
      return h = h.replace(Se, ""), Re[h] || h;
    }
    const x = {
      on(h, l, d, g) {
        O(h, l, d, g, !1);
      },
      one(h, l, d, g) {
        O(h, l, d, g, !0);
      },
      off(h, l, d, g) {
        if (typeof l != "string" || !h)
          return;
        const [A, L, M] = xe(l, d, g), ue = M !== l, at = Pe(h), Tt = at[M] || {}, Ve = l.startsWith(".");
        if (typeof L < "u") {
          if (!Object.keys(Tt).length)
            return;
          U(h, at, M, L, A ? d : null);
          return;
        }
        if (Ve)
          for (const Vt of Object.keys(at))
            Oe(h, at, Vt, l.slice(1));
        for (const [Vt, Rt] of Object.entries(Tt)) {
          const vs = Vt.replace(ee, "");
          (!ue || l.includes(vs)) && U(h, at, M, Rt.callable, Rt.delegationSelector);
        }
      },
      trigger(h, l, d) {
        if (typeof l != "string" || !h)
          return null;
        const g = B(), A = Ne(l), L = l !== A;
        let M = null, ue = !0, at = !0, Tt = !1;
        L && g && (M = g.Event(l, d), g(h).trigger(M), ue = !M.isPropagationStopped(), at = !M.isImmediatePropagationStopped(), Tt = M.isDefaultPrevented());
        const Ve = We(new Event(l, {
          bubbles: ue,
          cancelable: !0
        }), d);
        return Tt && Ve.preventDefault(), at && h.dispatchEvent(Ve), Ve.defaultPrevented && M && M.preventDefault(), Ve;
      }
    };
    function We(h, l = {}) {
      for (const [d, g] of Object.entries(l))
        try {
          h[d] = g;
        } catch {
          Object.defineProperty(h, d, {
            configurable: !0,
            get() {
              return g;
            }
          });
        }
      return h;
    }
    function m(h) {
      if (h === "true")
        return !0;
      if (h === "false")
        return !1;
      if (h === Number(h).toString())
        return Number(h);
      if (h === "" || h === "null")
        return null;
      if (typeof h != "string")
        return h;
      try {
        return JSON.parse(decodeURIComponent(h));
      } catch {
        return h;
      }
    }
    function _(h) {
      return h.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
    }
    const S = {
      setDataAttribute(h, l, d) {
        h.setAttribute(`data-bs-${_(l)}`, d);
      },
      removeDataAttribute(h, l) {
        h.removeAttribute(`data-bs-${_(l)}`);
      },
      getDataAttributes(h) {
        if (!h)
          return {};
        const l = {}, d = Object.keys(h.dataset).filter((g) => g.startsWith("bs") && !g.startsWith("bsConfig"));
        for (const g of d) {
          let A = g.replace(/^bs/, "");
          A = A.charAt(0).toLowerCase() + A.slice(1, A.length), l[A] = m(h.dataset[g]);
        }
        return l;
      },
      getDataAttribute(h, l) {
        return m(h.getAttribute(`data-bs-${_(l)}`));
      }
    };
    class D {
      // Getters
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(l) {
        return l = this._mergeConfigObj(l), l = this._configAfterMerge(l), this._typeCheckConfig(l), l;
      }
      _configAfterMerge(l) {
        return l;
      }
      _mergeConfigObj(l, d) {
        const g = E(d) ? S.getDataAttribute(d, "config") : {};
        return {
          ...this.constructor.Default,
          ...typeof g == "object" ? g : {},
          ...E(d) ? S.getDataAttributes(d) : {},
          ...typeof l == "object" ? l : {}
        };
      }
      _typeCheckConfig(l, d = this.constructor.DefaultType) {
        for (const [g, A] of Object.entries(d)) {
          const L = l[g], M = E(L) ? "element" : p(L);
          if (!new RegExp(A).test(M))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${M}" but expected type "${A}".`);
        }
      }
    }
    const P = "5.3.2";
    class R extends D {
      constructor(l, d) {
        super(), l = C(l), l && (this._element = l, this._config = this._getConfig(d), o.set(this._element, this.constructor.DATA_KEY, this));
      }
      // Public
      dispose() {
        o.remove(this._element, this.constructor.DATA_KEY), x.off(this._element, this.constructor.EVENT_KEY);
        for (const l of Object.getOwnPropertyNames(this))
          this[l] = null;
      }
      _queueCallback(l, d, g = !0) {
        le(l, d, g);
      }
      _getConfig(l) {
        return l = this._mergeConfigObj(l, this._element), l = this._configAfterMerge(l), this._typeCheckConfig(l), l;
      }
      // Static
      static getInstance(l) {
        return o.get(C(l), this.DATA_KEY);
      }
      static getOrCreateInstance(l, d = {}) {
        return this.getInstance(l) || new this(l, typeof d == "object" ? d : null);
      }
      static get VERSION() {
        return P;
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(l) {
        return `${l}${this.EVENT_KEY}`;
      }
    }
    const j = (h) => {
      let l = h.getAttribute("data-bs-target");
      if (!l || l === "#") {
        let d = h.getAttribute("href");
        if (!d || !d.includes("#") && !d.startsWith("."))
          return null;
        d.includes("#") && !d.startsWith("#") && (d = `#${d.split("#")[1]}`), l = d && d !== "#" ? f(d.trim()) : null;
      }
      return l;
    }, w = {
      find(h, l = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(l, h));
      },
      findOne(h, l = document.documentElement) {
        return Element.prototype.querySelector.call(l, h);
      },
      children(h, l) {
        return [].concat(...h.children).filter((d) => d.matches(l));
      },
      parents(h, l) {
        const d = [];
        let g = h.parentNode.closest(l);
        for (; g; )
          d.push(g), g = g.parentNode.closest(l);
        return d;
      },
      prev(h, l) {
        let d = h.previousElementSibling;
        for (; d; ) {
          if (d.matches(l))
            return [d];
          d = d.previousElementSibling;
        }
        return [];
      },
      // TODO: this is now unused; remove later along with prev()
      next(h, l) {
        let d = h.nextElementSibling;
        for (; d; ) {
          if (d.matches(l))
            return [d];
          d = d.nextElementSibling;
        }
        return [];
      },
      focusableChildren(h) {
        const l = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((d) => `${d}:not([tabindex^="-"])`).join(",");
        return this.find(l, h).filter((d) => !q(d) && T(d));
      },
      getSelectorFromElement(h) {
        const l = j(h);
        return l && w.findOne(l) ? l : null;
      },
      getElementFromSelector(h) {
        const l = j(h);
        return l ? w.findOne(l) : null;
      },
      getMultipleElementsFromSelector(h) {
        const l = j(h);
        return l ? w.find(l) : [];
      }
    }, k = (h, l = "hide") => {
      const d = `click.dismiss${h.EVENT_KEY}`, g = h.NAME;
      x.on(document, d, `[data-bs-dismiss="${g}"]`, function(A) {
        if (["A", "AREA"].includes(this.tagName) && A.preventDefault(), q(this))
          return;
        const L = w.getElementFromSelector(this) || this.closest(`.${g}`);
        h.getOrCreateInstance(L)[l]();
      });
    }, I = "alert", J = ".bs.alert", Z = `close${J}`, te = `closed${J}`, ae = "fade", ye = "show";
    class Ee extends R {
      // Getters
      static get NAME() {
        return I;
      }
      // Public
      close() {
        if (x.trigger(this._element, Z).defaultPrevented)
          return;
        this._element.classList.remove(ye);
        const d = this._element.classList.contains(ae);
        this._queueCallback(() => this._destroyElement(), this._element, d);
      }
      // Private
      _destroyElement() {
        this._element.remove(), x.trigger(this._element, te), this.dispose();
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = Ee.getOrCreateInstance(this);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l](this);
          }
        });
      }
    }
    k(Ee, "close"), Y(Ee);
    const Me = "button", fn = ".bs.button", ss = ".data-api", Rn = "active", ii = '[data-bs-toggle="button"]', et = `click${fn}${ss}`;
    class Ke extends R {
      // Getters
      static get NAME() {
        return Me;
      }
      // Public
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(Rn));
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = Ke.getOrCreateInstance(this);
          l === "toggle" && d[l]();
        });
      }
    }
    x.on(document, et, ii, (h) => {
      h.preventDefault();
      const l = h.target.closest(ii);
      Ke.getOrCreateInstance(l).toggle();
    }), Y(Ke);
    const os = "swipe", lr = ".bs.swipe", Jm = `touchstart${lr}`, Qm = `touchmove${lr}`, Xm = `touchend${lr}`, eg = `pointerdown${lr}`, tg = `pointerup${lr}`, ng = "touch", rg = "pen", ig = "pointer-event", sg = 40, og = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    }, ag = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
    class as extends D {
      constructor(l, d) {
        super(), this._element = l, !(!l || !as.isSupported()) && (this._config = this._getConfig(d), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      // Getters
      static get Default() {
        return og;
      }
      static get DefaultType() {
        return ag;
      }
      static get NAME() {
        return os;
      }
      // Public
      dispose() {
        x.off(this._element, lr);
      }
      // Private
      _start(l) {
        if (!this._supportPointerEvents) {
          this._deltaX = l.touches[0].clientX;
          return;
        }
        this._eventIsPointerPenTouch(l) && (this._deltaX = l.clientX);
      }
      _end(l) {
        this._eventIsPointerPenTouch(l) && (this._deltaX = l.clientX - this._deltaX), this._handleSwipe(), X(this._config.endCallback);
      }
      _move(l) {
        this._deltaX = l.touches && l.touches.length > 1 ? 0 : l.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const l = Math.abs(this._deltaX);
        if (l <= sg)
          return;
        const d = l / this._deltaX;
        this._deltaX = 0, d && X(d > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (x.on(this._element, eg, (l) => this._start(l)), x.on(this._element, tg, (l) => this._end(l)), this._element.classList.add(ig)) : (x.on(this._element, Jm, (l) => this._start(l)), x.on(this._element, Qm, (l) => this._move(l)), x.on(this._element, Xm, (l) => this._end(l)));
      }
      _eventIsPointerPenTouch(l) {
        return this._supportPointerEvents && (l.pointerType === rg || l.pointerType === ng);
      }
      // Static
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const lg = "carousel", dn = ".bs.carousel", Lc = ".data-api", cg = "ArrowLeft", ug = "ArrowRight", fg = 500, si = "next", cr = "prev", ur = "left", ls = "right", dg = `slide${dn}`, ra = `slid${dn}`, pg = `keydown${dn}`, hg = `mouseenter${dn}`, mg = `mouseleave${dn}`, gg = `dragstart${dn}`, yg = `load${dn}${Lc}`, vg = `click${dn}${Lc}`, Fc = "carousel", cs = "active", _g = "slide", bg = "carousel-item-end", Eg = "carousel-item-start", wg = "carousel-item-next", Sg = "carousel-item-prev", Wc = ".active", Vc = ".carousel-item", Og = Wc + Vc, Ag = ".carousel-item img", Tg = ".carousel-indicators", Cg = "[data-bs-slide], [data-bs-slide-to]", xg = '[data-bs-ride="carousel"]', Ng = {
      [cg]: ls,
      [ug]: ur
    }, Dg = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    }, Pg = {
      interval: "(number|boolean)",
      // TODO:v6 remove boolean support
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
    class fr extends R {
      constructor(l, d) {
        super(l, d), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = w.findOne(Tg, this._element), this._addEventListeners(), this._config.ride === Fc && this.cycle();
      }
      // Getters
      static get Default() {
        return Dg;
      }
      static get DefaultType() {
        return Pg;
      }
      static get NAME() {
        return lg;
      }
      // Public
      next() {
        this._slide(si);
      }
      nextWhenVisible() {
        !document.hidden && T(this._element) && this.next();
      }
      prev() {
        this._slide(cr);
      }
      pause() {
        this._isSliding && b(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        if (this._config.ride) {
          if (this._isSliding) {
            x.one(this._element, ra, () => this.cycle());
            return;
          }
          this.cycle();
        }
      }
      to(l) {
        const d = this._getItems();
        if (l > d.length - 1 || l < 0)
          return;
        if (this._isSliding) {
          x.one(this._element, ra, () => this.to(l));
          return;
        }
        const g = this._getItemIndex(this._getActive());
        if (g === l)
          return;
        const A = l > g ? si : cr;
        this._slide(A, d[l]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      // Private
      _configAfterMerge(l) {
        return l.defaultInterval = l.interval, l;
      }
      _addEventListeners() {
        this._config.keyboard && x.on(this._element, pg, (l) => this._keydown(l)), this._config.pause === "hover" && (x.on(this._element, hg, () => this.pause()), x.on(this._element, mg, () => this._maybeEnableCycle())), this._config.touch && as.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const g of w.find(Ag, this._element))
          x.on(g, gg, (A) => A.preventDefault());
        const d = {
          leftCallback: () => this._slide(this._directionToOrder(ur)),
          rightCallback: () => this._slide(this._directionToOrder(ls)),
          endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), fg + this._config.interval));
          }
        };
        this._swipeHelper = new as(this._element, d);
      }
      _keydown(l) {
        if (/input|textarea/i.test(l.target.tagName))
          return;
        const d = Ng[l.key];
        d && (l.preventDefault(), this._slide(this._directionToOrder(d)));
      }
      _getItemIndex(l) {
        return this._getItems().indexOf(l);
      }
      _setActiveIndicatorElement(l) {
        if (!this._indicatorsElement)
          return;
        const d = w.findOne(Wc, this._indicatorsElement);
        d.classList.remove(cs), d.removeAttribute("aria-current");
        const g = w.findOne(`[data-bs-slide-to="${l}"]`, this._indicatorsElement);
        g && (g.classList.add(cs), g.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const l = this._activeElement || this._getActive();
        if (!l)
          return;
        const d = Number.parseInt(l.getAttribute("data-bs-interval"), 10);
        this._config.interval = d || this._config.defaultInterval;
      }
      _slide(l, d = null) {
        if (this._isSliding)
          return;
        const g = this._getActive(), A = l === si, L = d || ce(this._getItems(), g, A, this._config.wrap);
        if (L === g)
          return;
        const M = this._getItemIndex(L), ue = (vs) => x.trigger(this._element, vs, {
          relatedTarget: L,
          direction: this._orderToDirection(l),
          from: this._getItemIndex(g),
          to: M
        });
        if (ue(dg).defaultPrevented || !g || !L)
          return;
        const Tt = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(M), this._activeElement = L;
        const Ve = A ? Eg : bg, Vt = A ? wg : Sg;
        L.classList.add(Vt), G(L), g.classList.add(Ve), L.classList.add(Ve);
        const Rt = () => {
          L.classList.remove(Ve, Vt), L.classList.add(cs), g.classList.remove(cs, Vt, Ve), this._isSliding = !1, ue(ra);
        };
        this._queueCallback(Rt, g, this._isAnimated()), Tt && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains(_g);
      }
      _getActive() {
        return w.findOne(Og, this._element);
      }
      _getItems() {
        return w.find(Vc, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(l) {
        return F() ? l === ur ? cr : si : l === ur ? si : cr;
      }
      _orderToDirection(l) {
        return F() ? l === cr ? ur : ls : l === cr ? ls : ur;
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = fr.getOrCreateInstance(this, l);
          if (typeof l == "number") {
            d.to(l);
            return;
          }
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    x.on(document, vg, Cg, function(h) {
      const l = w.getElementFromSelector(this);
      if (!l || !l.classList.contains(Fc))
        return;
      h.preventDefault();
      const d = fr.getOrCreateInstance(l), g = this.getAttribute("data-bs-slide-to");
      if (g) {
        d.to(g), d._maybeEnableCycle();
        return;
      }
      if (S.getDataAttribute(this, "slide") === "next") {
        d.next(), d._maybeEnableCycle();
        return;
      }
      d.prev(), d._maybeEnableCycle();
    }), x.on(window, yg, () => {
      const h = w.find(xg);
      for (const l of h)
        fr.getOrCreateInstance(l);
    }), Y(fr);
    const Ig = "collapse", oi = ".bs.collapse", Rg = ".data-api", kg = `show${oi}`, Mg = `shown${oi}`, $g = `hide${oi}`, Lg = `hidden${oi}`, Fg = `click${oi}${Rg}`, ia = "show", dr = "collapse", us = "collapsing", Wg = "collapsed", Vg = `:scope .${dr} .${dr}`, jg = "collapse-horizontal", Ug = "width", Hg = "height", Bg = ".collapse.show, .collapse.collapsing", sa = '[data-bs-toggle="collapse"]', qg = {
      parent: null,
      toggle: !0
    }, Kg = {
      parent: "(null|element)",
      toggle: "boolean"
    };
    class pr extends R {
      constructor(l, d) {
        super(l, d), this._isTransitioning = !1, this._triggerArray = [];
        const g = w.find(sa);
        for (const A of g) {
          const L = w.getSelectorFromElement(A), M = w.find(L).filter((ue) => ue === this._element);
          L !== null && M.length && this._triggerArray.push(A);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      // Getters
      static get Default() {
        return qg;
      }
      static get DefaultType() {
        return Kg;
      }
      static get NAME() {
        return Ig;
      }
      // Public
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let l = [];
        if (this._config.parent && (l = this._getFirstLevelChildren(Bg).filter((ue) => ue !== this._element).map((ue) => pr.getOrCreateInstance(ue, {
          toggle: !1
        }))), l.length && l[0]._isTransitioning || x.trigger(this._element, kg).defaultPrevented)
          return;
        for (const ue of l)
          ue.hide();
        const g = this._getDimension();
        this._element.classList.remove(dr), this._element.classList.add(us), this._element.style[g] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const A = () => {
          this._isTransitioning = !1, this._element.classList.remove(us), this._element.classList.add(dr, ia), this._element.style[g] = "", x.trigger(this._element, Mg);
        }, M = `scroll${g[0].toUpperCase() + g.slice(1)}`;
        this._queueCallback(A, this._element, !0), this._element.style[g] = `${this._element[M]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || x.trigger(this._element, $g).defaultPrevented)
          return;
        const d = this._getDimension();
        this._element.style[d] = `${this._element.getBoundingClientRect()[d]}px`, G(this._element), this._element.classList.add(us), this._element.classList.remove(dr, ia);
        for (const A of this._triggerArray) {
          const L = w.getElementFromSelector(A);
          L && !this._isShown(L) && this._addAriaAndCollapsedClass([A], !1);
        }
        this._isTransitioning = !0;
        const g = () => {
          this._isTransitioning = !1, this._element.classList.remove(us), this._element.classList.add(dr), x.trigger(this._element, Lg);
        };
        this._element.style[d] = "", this._queueCallback(g, this._element, !0);
      }
      _isShown(l = this._element) {
        return l.classList.contains(ia);
      }
      // Private
      _configAfterMerge(l) {
        return l.toggle = !!l.toggle, l.parent = C(l.parent), l;
      }
      _getDimension() {
        return this._element.classList.contains(jg) ? Ug : Hg;
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const l = this._getFirstLevelChildren(sa);
        for (const d of l) {
          const g = w.getElementFromSelector(d);
          g && this._addAriaAndCollapsedClass([d], this._isShown(g));
        }
      }
      _getFirstLevelChildren(l) {
        const d = w.find(Vg, this._config.parent);
        return w.find(l, this._config.parent).filter((g) => !d.includes(g));
      }
      _addAriaAndCollapsedClass(l, d) {
        if (l.length)
          for (const g of l)
            g.classList.toggle(Wg, !d), g.setAttribute("aria-expanded", d);
      }
      // Static
      static jQueryInterface(l) {
        const d = {};
        return typeof l == "string" && /show|hide/.test(l) && (d.toggle = !1), this.each(function() {
          const g = pr.getOrCreateInstance(this, d);
          if (typeof l == "string") {
            if (typeof g[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            g[l]();
          }
        });
      }
    }
    x.on(document, Fg, sa, function(h) {
      (h.target.tagName === "A" || h.delegateTarget && h.delegateTarget.tagName === "A") && h.preventDefault();
      for (const l of w.getMultipleElementsFromSelector(this))
        pr.getOrCreateInstance(l, {
          toggle: !1
        }).toggle();
    }), Y(pr);
    const jc = "dropdown", kn = ".bs.dropdown", oa = ".data-api", Gg = "Escape", Uc = "Tab", zg = "ArrowUp", Hc = "ArrowDown", Yg = 2, Zg = `hide${kn}`, Jg = `hidden${kn}`, Qg = `show${kn}`, Xg = `shown${kn}`, Bc = `click${kn}${oa}`, qc = `keydown${kn}${oa}`, ey = `keyup${kn}${oa}`, hr = "show", ty = "dropup", ny = "dropend", ry = "dropstart", iy = "dropup-center", sy = "dropdown-center", Mn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', oy = `${Mn}.${hr}`, fs = ".dropdown-menu", ay = ".navbar", ly = ".navbar-nav", cy = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", uy = F() ? "top-end" : "top-start", fy = F() ? "top-start" : "top-end", dy = F() ? "bottom-end" : "bottom-start", py = F() ? "bottom-start" : "bottom-end", hy = F() ? "left-start" : "right-start", my = F() ? "right-start" : "left-start", gy = "top", yy = "bottom", vy = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    }, _y = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
    class It extends R {
      constructor(l, d) {
        super(l, d), this._popper = null, this._parent = this._element.parentNode, this._menu = w.next(this._element, fs)[0] || w.prev(this._element, fs)[0] || w.findOne(fs, this._parent), this._inNavbar = this._detectNavbar();
      }
      // Getters
      static get Default() {
        return vy;
      }
      static get DefaultType() {
        return _y;
      }
      static get NAME() {
        return jc;
      }
      // Public
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (q(this._element) || this._isShown())
          return;
        const l = {
          relatedTarget: this._element
        };
        if (!x.trigger(this._element, Qg, l).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(ly))
            for (const g of [].concat(...document.body.children))
              x.on(g, "mouseover", W);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(hr), this._element.classList.add(hr), x.trigger(this._element, Xg, l);
        }
      }
      hide() {
        if (q(this._element) || !this._isShown())
          return;
        const l = {
          relatedTarget: this._element
        };
        this._completeHide(l);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      // Private
      _completeHide(l) {
        if (!x.trigger(this._element, Zg, l).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const g of [].concat(...document.body.children))
              x.off(g, "mouseover", W);
          this._popper && this._popper.destroy(), this._menu.classList.remove(hr), this._element.classList.remove(hr), this._element.setAttribute("aria-expanded", "false"), S.removeDataAttribute(this._menu, "popper"), x.trigger(this._element, Jg, l);
        }
      }
      _getConfig(l) {
        if (l = super._getConfig(l), typeof l.reference == "object" && !E(l.reference) && typeof l.reference.getBoundingClientRect != "function")
          throw new TypeError(`${jc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return l;
      }
      _createPopper() {
        if (typeof i > "u")
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let l = this._element;
        this._config.reference === "parent" ? l = this._parent : E(this._config.reference) ? l = C(this._config.reference) : typeof this._config.reference == "object" && (l = this._config.reference);
        const d = this._getPopperConfig();
        this._popper = i.createPopper(l, this._menu, d);
      }
      _isShown() {
        return this._menu.classList.contains(hr);
      }
      _getPlacement() {
        const l = this._parent;
        if (l.classList.contains(ny))
          return hy;
        if (l.classList.contains(ry))
          return my;
        if (l.classList.contains(iy))
          return gy;
        if (l.classList.contains(sy))
          return yy;
        const d = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return l.classList.contains(ty) ? d ? fy : uy : d ? py : dy;
      }
      _detectNavbar() {
        return this._element.closest(ay) !== null;
      }
      _getOffset() {
        const {
          offset: l
        } = this._config;
        return typeof l == "string" ? l.split(",").map((d) => Number.parseInt(d, 10)) : typeof l == "function" ? (d) => l(d, this._element) : l;
      }
      _getPopperConfig() {
        const l = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || this._config.display === "static") && (S.setDataAttribute(this._menu, "popper", "static"), l.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), {
          ...l,
          ...X(this._config.popperConfig, [l])
        };
      }
      _selectMenuItem({
        key: l,
        target: d
      }) {
        const g = w.find(cy, this._menu).filter((A) => T(A));
        g.length && ce(g, d, l === Hc, !g.includes(d)).focus();
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = It.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
      static clearMenus(l) {
        if (l.button === Yg || l.type === "keyup" && l.key !== Uc)
          return;
        const d = w.find(oy);
        for (const g of d) {
          const A = It.getInstance(g);
          if (!A || A._config.autoClose === !1)
            continue;
          const L = l.composedPath(), M = L.includes(A._menu);
          if (L.includes(A._element) || A._config.autoClose === "inside" && !M || A._config.autoClose === "outside" && M || A._menu.contains(l.target) && (l.type === "keyup" && l.key === Uc || /input|select|option|textarea|form/i.test(l.target.tagName)))
            continue;
          const ue = {
            relatedTarget: A._element
          };
          l.type === "click" && (ue.clickEvent = l), A._completeHide(ue);
        }
      }
      static dataApiKeydownHandler(l) {
        const d = /input|textarea/i.test(l.target.tagName), g = l.key === Gg, A = [zg, Hc].includes(l.key);
        if (!A && !g || d && !g)
          return;
        l.preventDefault();
        const L = this.matches(Mn) ? this : w.prev(this, Mn)[0] || w.next(this, Mn)[0] || w.findOne(Mn, l.delegateTarget.parentNode), M = It.getOrCreateInstance(L);
        if (A) {
          l.stopPropagation(), M.show(), M._selectMenuItem(l);
          return;
        }
        M._isShown() && (l.stopPropagation(), M.hide(), L.focus());
      }
    }
    x.on(document, qc, Mn, It.dataApiKeydownHandler), x.on(document, qc, fs, It.dataApiKeydownHandler), x.on(document, Bc, It.clearMenus), x.on(document, ey, It.clearMenus), x.on(document, Bc, Mn, function(h) {
      h.preventDefault(), It.getOrCreateInstance(this).toggle();
    }), Y(It);
    const Kc = "backdrop", by = "fade", Gc = "show", zc = `mousedown.bs.${Kc}`, Ey = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      // if false, we use the backdrop helper without adding any element to the dom
      rootElement: "body"
      // give the choice to place backdrop under different elements
    }, wy = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
    class Yc extends D {
      constructor(l) {
        super(), this._config = this._getConfig(l), this._isAppended = !1, this._element = null;
      }
      // Getters
      static get Default() {
        return Ey;
      }
      static get DefaultType() {
        return wy;
      }
      static get NAME() {
        return Kc;
      }
      // Public
      show(l) {
        if (!this._config.isVisible) {
          X(l);
          return;
        }
        this._append();
        const d = this._getElement();
        this._config.isAnimated && G(d), d.classList.add(Gc), this._emulateAnimation(() => {
          X(l);
        });
      }
      hide(l) {
        if (!this._config.isVisible) {
          X(l);
          return;
        }
        this._getElement().classList.remove(Gc), this._emulateAnimation(() => {
          this.dispose(), X(l);
        });
      }
      dispose() {
        this._isAppended && (x.off(this._element, zc), this._element.remove(), this._isAppended = !1);
      }
      // Private
      _getElement() {
        if (!this._element) {
          const l = document.createElement("div");
          l.className = this._config.className, this._config.isAnimated && l.classList.add(by), this._element = l;
        }
        return this._element;
      }
      _configAfterMerge(l) {
        return l.rootElement = C(l.rootElement), l;
      }
      _append() {
        if (this._isAppended)
          return;
        const l = this._getElement();
        this._config.rootElement.append(l), x.on(l, zc, () => {
          X(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(l) {
        le(l, this._getElement(), this._config.isAnimated);
      }
    }
    const Sy = "focustrap", ds = ".bs.focustrap", Oy = `focusin${ds}`, Ay = `keydown.tab${ds}`, Ty = "Tab", Cy = "forward", Zc = "backward", xy = {
      autofocus: !0,
      trapElement: null
      // The element to trap focus inside of
    }, Ny = {
      autofocus: "boolean",
      trapElement: "element"
    };
    class Jc extends D {
      constructor(l) {
        super(), this._config = this._getConfig(l), this._isActive = !1, this._lastTabNavDirection = null;
      }
      // Getters
      static get Default() {
        return xy;
      }
      static get DefaultType() {
        return Ny;
      }
      static get NAME() {
        return Sy;
      }
      // Public
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), x.off(document, ds), x.on(document, Oy, (l) => this._handleFocusin(l)), x.on(document, Ay, (l) => this._handleKeydown(l)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, x.off(document, ds));
      }
      // Private
      _handleFocusin(l) {
        const {
          trapElement: d
        } = this._config;
        if (l.target === document || l.target === d || d.contains(l.target))
          return;
        const g = w.focusableChildren(d);
        g.length === 0 ? d.focus() : this._lastTabNavDirection === Zc ? g[g.length - 1].focus() : g[0].focus();
      }
      _handleKeydown(l) {
        l.key === Ty && (this._lastTabNavDirection = l.shiftKey ? Zc : Cy);
      }
    }
    const Qc = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Xc = ".sticky-top", ps = "padding-right", eu = "margin-right";
    class aa {
      constructor() {
        this._element = document.body;
      }
      // Public
      getWidth() {
        const l = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - l);
      }
      hide() {
        const l = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, ps, (d) => d + l), this._setElementAttributes(Qc, ps, (d) => d + l), this._setElementAttributes(Xc, eu, (d) => d - l);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ps), this._resetElementAttributes(Qc, ps), this._resetElementAttributes(Xc, eu);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      // Private
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(l, d, g) {
        const A = this.getWidth(), L = (M) => {
          if (M !== this._element && window.innerWidth > M.clientWidth + A)
            return;
          this._saveInitialAttribute(M, d);
          const ue = window.getComputedStyle(M).getPropertyValue(d);
          M.style.setProperty(d, `${g(Number.parseFloat(ue))}px`);
        };
        this._applyManipulationCallback(l, L);
      }
      _saveInitialAttribute(l, d) {
        const g = l.style.getPropertyValue(d);
        g && S.setDataAttribute(l, d, g);
      }
      _resetElementAttributes(l, d) {
        const g = (A) => {
          const L = S.getDataAttribute(A, d);
          if (L === null) {
            A.style.removeProperty(d);
            return;
          }
          S.removeDataAttribute(A, d), A.style.setProperty(d, L);
        };
        this._applyManipulationCallback(l, g);
      }
      _applyManipulationCallback(l, d) {
        if (E(l)) {
          d(l);
          return;
        }
        for (const g of w.find(l, this._element))
          d(g);
      }
    }
    const Dy = "modal", At = ".bs.modal", Py = ".data-api", Iy = "Escape", Ry = `hide${At}`, ky = `hidePrevented${At}`, tu = `hidden${At}`, nu = `show${At}`, My = `shown${At}`, $y = `resize${At}`, Ly = `click.dismiss${At}`, Fy = `mousedown.dismiss${At}`, Wy = `keydown.dismiss${At}`, Vy = `click${At}${Py}`, ru = "modal-open", jy = "fade", iu = "show", la = "modal-static", Uy = ".modal.show", Hy = ".modal-dialog", By = ".modal-body", qy = '[data-bs-toggle="modal"]', Ky = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    }, Gy = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
    class $n extends R {
      constructor(l, d) {
        super(l, d), this._dialog = w.findOne(Hy, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new aa(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return Ky;
      }
      static get DefaultType() {
        return Gy;
      }
      static get NAME() {
        return Dy;
      }
      // Public
      toggle(l) {
        return this._isShown ? this.hide() : this.show(l);
      }
      show(l) {
        this._isShown || this._isTransitioning || x.trigger(this._element, nu, {
          relatedTarget: l
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ru), this._adjustDialog(), this._backdrop.show(() => this._showElement(l)));
      }
      hide() {
        !this._isShown || this._isTransitioning || x.trigger(this._element, Ry).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(iu), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
      }
      dispose() {
        x.off(window, At), x.off(this._dialog, At), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _initializeBackDrop() {
        return new Yc({
          isVisible: !!this._config.backdrop,
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
      _initializeFocusTrap() {
        return new Jc({
          trapElement: this._element
        });
      }
      _showElement(l) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const d = w.findOne(By, this._dialog);
        d && (d.scrollTop = 0), G(this._element), this._element.classList.add(iu);
        const g = () => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, x.trigger(this._element, My, {
            relatedTarget: l
          });
        };
        this._queueCallback(g, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        x.on(this._element, Wy, (l) => {
          if (l.key === Iy) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            this._triggerBackdropTransition();
          }
        }), x.on(window, $y, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), x.on(this._element, Fy, (l) => {
          x.one(this._element, Ly, (d) => {
            if (!(this._element !== l.target || this._element !== d.target)) {
              if (this._config.backdrop === "static") {
                this._triggerBackdropTransition();
                return;
              }
              this._config.backdrop && this.hide();
            }
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(ru), this._resetAdjustments(), this._scrollBar.reset(), x.trigger(this._element, tu);
        });
      }
      _isAnimated() {
        return this._element.classList.contains(jy);
      }
      _triggerBackdropTransition() {
        if (x.trigger(this._element, ky).defaultPrevented)
          return;
        const d = this._element.scrollHeight > document.documentElement.clientHeight, g = this._element.style.overflowY;
        g === "hidden" || this._element.classList.contains(la) || (d || (this._element.style.overflowY = "hidden"), this._element.classList.add(la), this._queueCallback(() => {
          this._element.classList.remove(la), this._queueCallback(() => {
            this._element.style.overflowY = g;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      /**
       * The following methods are used to handle overflowing modals
       */
      _adjustDialog() {
        const l = this._element.scrollHeight > document.documentElement.clientHeight, d = this._scrollBar.getWidth(), g = d > 0;
        if (g && !l) {
          const A = F() ? "paddingLeft" : "paddingRight";
          this._element.style[A] = `${d}px`;
        }
        if (!g && l) {
          const A = F() ? "paddingRight" : "paddingLeft";
          this._element.style[A] = `${d}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      // Static
      static jQueryInterface(l, d) {
        return this.each(function() {
          const g = $n.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof g[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            g[l](d);
          }
        });
      }
    }
    x.on(document, Vy, qy, function(h) {
      const l = w.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && h.preventDefault(), x.one(l, nu, (A) => {
        A.defaultPrevented || x.one(l, tu, () => {
          T(this) && this.focus();
        });
      });
      const d = w.findOne(Uy);
      d && $n.getInstance(d).hide(), $n.getOrCreateInstance(l).toggle(this);
    }), k($n), Y($n);
    const zy = "offcanvas", en = ".bs.offcanvas", su = ".data-api", Yy = `load${en}${su}`, Zy = "Escape", ou = "show", au = "showing", lu = "hiding", Jy = "offcanvas-backdrop", cu = ".offcanvas.show", Qy = `show${en}`, Xy = `shown${en}`, ev = `hide${en}`, uu = `hidePrevented${en}`, fu = `hidden${en}`, tv = `resize${en}`, nv = `click${en}${su}`, rv = `keydown.dismiss${en}`, iv = '[data-bs-toggle="offcanvas"]', sv = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    }, ov = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
    class tn extends R {
      constructor(l, d) {
        super(l, d), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      // Getters
      static get Default() {
        return sv;
      }
      static get DefaultType() {
        return ov;
      }
      static get NAME() {
        return zy;
      }
      // Public
      toggle(l) {
        return this._isShown ? this.hide() : this.show(l);
      }
      show(l) {
        if (this._isShown || x.trigger(this._element, Qy, {
          relatedTarget: l
        }).defaultPrevented)
          return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new aa().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(au);
        const g = () => {
          (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ou), this._element.classList.remove(au), x.trigger(this._element, Xy, {
            relatedTarget: l
          });
        };
        this._queueCallback(g, this._element, !0);
      }
      hide() {
        if (!this._isShown || x.trigger(this._element, ev).defaultPrevented)
          return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(lu), this._backdrop.hide();
        const d = () => {
          this._element.classList.remove(ou, lu), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new aa().reset(), x.trigger(this._element, fu);
        };
        this._queueCallback(d, this._element, !0);
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      // Private
      _initializeBackDrop() {
        const l = () => {
          if (this._config.backdrop === "static") {
            x.trigger(this._element, uu);
            return;
          }
          this.hide();
        }, d = !!this._config.backdrop;
        return new Yc({
          className: Jy,
          isVisible: d,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: d ? l : null
        });
      }
      _initializeFocusTrap() {
        return new Jc({
          trapElement: this._element
        });
      }
      _addEventListeners() {
        x.on(this._element, rv, (l) => {
          if (l.key === Zy) {
            if (this._config.keyboard) {
              this.hide();
              return;
            }
            x.trigger(this._element, uu);
          }
        });
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = tn.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l](this);
          }
        });
      }
    }
    x.on(document, nv, iv, function(h) {
      const l = w.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && h.preventDefault(), q(this))
        return;
      x.one(l, fu, () => {
        T(this) && this.focus();
      });
      const d = w.findOne(cu);
      d && d !== l && tn.getInstance(d).hide(), tn.getOrCreateInstance(l).toggle(this);
    }), x.on(window, Yy, () => {
      for (const h of w.find(cu))
        tn.getOrCreateInstance(h).show();
    }), x.on(window, tv, () => {
      for (const h of w.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(h).position !== "fixed" && tn.getOrCreateInstance(h).hide();
    }), k(tn), Y(tn);
    const du = {
      // Global attributes allowed on any supplied element below.
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    }, av = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), lv = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, cv = (h, l) => {
      const d = h.nodeName.toLowerCase();
      return l.includes(d) ? av.has(d) ? !!lv.test(h.nodeValue) : !0 : l.filter((g) => g instanceof RegExp).some((g) => g.test(d));
    };
    function uv(h, l, d) {
      if (!h.length)
        return h;
      if (d && typeof d == "function")
        return d(h);
      const A = new window.DOMParser().parseFromString(h, "text/html"), L = [].concat(...A.body.querySelectorAll("*"));
      for (const M of L) {
        const ue = M.nodeName.toLowerCase();
        if (!Object.keys(l).includes(ue)) {
          M.remove();
          continue;
        }
        const at = [].concat(...M.attributes), Tt = [].concat(l["*"] || [], l[ue] || []);
        for (const Ve of at)
          cv(Ve, Tt) || M.removeAttribute(Ve.nodeName);
      }
      return A.body.innerHTML;
    }
    const fv = "TemplateFactory", dv = {
      allowList: du,
      content: {},
      // { selector : text ,  selector2 : text2 , }
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    }, pv = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    }, hv = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
    class mv extends D {
      constructor(l) {
        super(), this._config = this._getConfig(l);
      }
      // Getters
      static get Default() {
        return dv;
      }
      static get DefaultType() {
        return pv;
      }
      static get NAME() {
        return fv;
      }
      // Public
      getContent() {
        return Object.values(this._config.content).map((l) => this._resolvePossibleFunction(l)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(l) {
        return this._checkContent(l), this._config.content = {
          ...this._config.content,
          ...l
        }, this;
      }
      toHtml() {
        const l = document.createElement("div");
        l.innerHTML = this._maybeSanitize(this._config.template);
        for (const [A, L] of Object.entries(this._config.content))
          this._setContent(l, L, A);
        const d = l.children[0], g = this._resolvePossibleFunction(this._config.extraClass);
        return g && d.classList.add(...g.split(" ")), d;
      }
      // Private
      _typeCheckConfig(l) {
        super._typeCheckConfig(l), this._checkContent(l.content);
      }
      _checkContent(l) {
        for (const [d, g] of Object.entries(l))
          super._typeCheckConfig({
            selector: d,
            entry: g
          }, hv);
      }
      _setContent(l, d, g) {
        const A = w.findOne(g, l);
        if (A) {
          if (d = this._resolvePossibleFunction(d), !d) {
            A.remove();
            return;
          }
          if (E(d)) {
            this._putElementInTemplate(C(d), A);
            return;
          }
          if (this._config.html) {
            A.innerHTML = this._maybeSanitize(d);
            return;
          }
          A.textContent = d;
        }
      }
      _maybeSanitize(l) {
        return this._config.sanitize ? uv(l, this._config.allowList, this._config.sanitizeFn) : l;
      }
      _resolvePossibleFunction(l) {
        return X(l, [this]);
      }
      _putElementInTemplate(l, d) {
        if (this._config.html) {
          d.innerHTML = "", d.append(l);
          return;
        }
        d.textContent = l.textContent;
      }
    }
    const gv = "tooltip", yv = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ca = "fade", vv = "modal", hs = "show", _v = ".tooltip-inner", pu = `.${vv}`, hu = "hide.bs.modal", ai = "hover", ua = "focus", bv = "click", Ev = "manual", wv = "hide", Sv = "hidden", Ov = "show", Av = "shown", Tv = "inserted", Cv = "click", xv = "focusin", Nv = "focusout", Dv = "mouseenter", Pv = "mouseleave", Iv = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: F() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: F() ? "right" : "left"
    }, Rv = {
      allowList: du,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    }, kv = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
    class Ln extends R {
      constructor(l, d) {
        if (typeof i > "u")
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(l, d), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      // Getters
      static get Default() {
        return Rv;
      }
      static get DefaultType() {
        return kv;
      }
      static get NAME() {
        return gv;
      }
      // Public
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        if (this._isEnabled) {
          if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
            this._leave();
            return;
          }
          this._enter();
        }
      }
      dispose() {
        clearTimeout(this._timeout), x.off(this._element.closest(pu), hu, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled))
          return;
        const l = x.trigger(this._element, this.constructor.eventName(Ov)), g = (V(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (l.defaultPrevented || !g)
          return;
        this._disposePopper();
        const A = this._getTipElement();
        this._element.setAttribute("aria-describedby", A.getAttribute("id"));
        const {
          container: L
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (L.append(A), x.trigger(this._element, this.constructor.eventName(Tv))), this._popper = this._createPopper(A), A.classList.add(hs), "ontouchstart" in document.documentElement)
          for (const ue of [].concat(...document.body.children))
            x.on(ue, "mouseover", W);
        const M = () => {
          x.trigger(this._element, this.constructor.eventName(Av)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        };
        this._queueCallback(M, this.tip, this._isAnimated());
      }
      hide() {
        if (!this._isShown() || x.trigger(this._element, this.constructor.eventName(wv)).defaultPrevented)
          return;
        if (this._getTipElement().classList.remove(hs), "ontouchstart" in document.documentElement)
          for (const A of [].concat(...document.body.children))
            x.off(A, "mouseover", W);
        this._activeTrigger[bv] = !1, this._activeTrigger[ua] = !1, this._activeTrigger[ai] = !1, this._isHovered = null;
        const g = () => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), x.trigger(this._element, this.constructor.eventName(Sv)));
        };
        this._queueCallback(g, this.tip, this._isAnimated());
      }
      update() {
        this._popper && this._popper.update();
      }
      // Protected
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
      _createTipElement(l) {
        const d = this._getTemplateFactory(l).toHtml();
        if (!d)
          return null;
        d.classList.remove(ca, hs), d.classList.add(`bs-${this.constructor.NAME}-auto`);
        const g = v(this.constructor.NAME).toString();
        return d.setAttribute("id", g), this._isAnimated() && d.classList.add(ca), d;
      }
      setContent(l) {
        this._newContent = l, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(l) {
        return this._templateFactory ? this._templateFactory.changeContent(l) : this._templateFactory = new mv({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content: l,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory;
      }
      _getContentForTemplate() {
        return {
          [_v]: this._getTitle()
        };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      // Private
      _initializeOnDelegatedTarget(l) {
        return this.constructor.getOrCreateInstance(l.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ca);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(hs);
      }
      _createPopper(l) {
        const d = X(this._config.placement, [this, l, this._element]), g = Iv[d.toUpperCase()];
        return i.createPopper(this._element, l, this._getPopperConfig(g));
      }
      _getOffset() {
        const {
          offset: l
        } = this._config;
        return typeof l == "string" ? l.split(",").map((d) => Number.parseInt(d, 10)) : typeof l == "function" ? (d) => l(d, this._element) : l;
      }
      _resolvePossibleFunction(l) {
        return X(l, [this._element]);
      }
      _getPopperConfig(l) {
        const d = {
          placement: l,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (g) => {
              this._getTipElement().setAttribute("data-popper-placement", g.state.placement);
            }
          }]
        };
        return {
          ...d,
          ...X(this._config.popperConfig, [d])
        };
      }
      _setListeners() {
        const l = this._config.trigger.split(" ");
        for (const d of l)
          if (d === "click")
            x.on(this._element, this.constructor.eventName(Cv), this._config.selector, (g) => {
              this._initializeOnDelegatedTarget(g).toggle();
            });
          else if (d !== Ev) {
            const g = d === ai ? this.constructor.eventName(Dv) : this.constructor.eventName(xv), A = d === ai ? this.constructor.eventName(Pv) : this.constructor.eventName(Nv);
            x.on(this._element, g, this._config.selector, (L) => {
              const M = this._initializeOnDelegatedTarget(L);
              M._activeTrigger[L.type === "focusin" ? ua : ai] = !0, M._enter();
            }), x.on(this._element, A, this._config.selector, (L) => {
              const M = this._initializeOnDelegatedTarget(L);
              M._activeTrigger[L.type === "focusout" ? ua : ai] = M._element.contains(L.relatedTarget), M._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, x.on(this._element.closest(pu), hu, this._hideModalHandler);
      }
      _fixTitle() {
        const l = this._element.getAttribute("title");
        l && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", l), this._element.setAttribute("data-bs-original-title", l), this._element.removeAttribute("title"));
      }
      _enter() {
        if (this._isShown() || this._isHovered) {
          this._isHovered = !0;
          return;
        }
        this._isHovered = !0, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show);
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(l, d) {
        clearTimeout(this._timeout), this._timeout = setTimeout(l, d);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(l) {
        const d = S.getDataAttributes(this._element);
        for (const g of Object.keys(d))
          yv.has(g) && delete d[g];
        return l = {
          ...d,
          ...typeof l == "object" && l ? l : {}
        }, l = this._mergeConfigObj(l), l = this._configAfterMerge(l), this._typeCheckConfig(l), l;
      }
      _configAfterMerge(l) {
        return l.container = l.container === !1 ? document.body : C(l.container), typeof l.delay == "number" && (l.delay = {
          show: l.delay,
          hide: l.delay
        }), typeof l.title == "number" && (l.title = l.title.toString()), typeof l.content == "number" && (l.content = l.content.toString()), l;
      }
      _getDelegateConfig() {
        const l = {};
        for (const [d, g] of Object.entries(this._config))
          this.constructor.Default[d] !== g && (l[d] = g);
        return l.selector = !1, l.trigger = "manual", l;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = Ln.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    Y(Ln);
    const Mv = "popover", $v = ".popover-header", Lv = ".popover-body", Fv = {
      ...Ln.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }, Wv = {
      ...Ln.DefaultType,
      content: "(null|string|element|function)"
    };
    class ms extends Ln {
      // Getters
      static get Default() {
        return Fv;
      }
      static get DefaultType() {
        return Wv;
      }
      static get NAME() {
        return Mv;
      }
      // Overrides
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      // Private
      _getContentForTemplate() {
        return {
          [$v]: this._getTitle(),
          [Lv]: this._getContent()
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = ms.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    Y(ms);
    const Vv = "scrollspy", fa = ".bs.scrollspy", jv = ".data-api", Uv = `activate${fa}`, mu = `click${fa}`, Hv = `load${fa}${jv}`, Bv = "dropdown-item", mr = "active", qv = '[data-bs-spy="scroll"]', da = "[href]", Kv = ".nav, .list-group", gu = ".nav-link", Gv = `${gu}, .nav-item > ${gu}, .list-group-item`, zv = ".dropdown", Yv = ".dropdown-toggle", Zv = {
      offset: null,
      // TODO: v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1]
    }, Jv = {
      offset: "(number|null)",
      // TODO v6 @deprecated, keep it for backwards compatibility reasons
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
    class li extends R {
      constructor(l, d) {
        super(l, d), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
          visibleEntryTop: 0,
          parentScrollTop: 0
        }, this.refresh();
      }
      // Getters
      static get Default() {
        return Zv;
      }
      static get DefaultType() {
        return Jv;
      }
      static get NAME() {
        return Vv;
      }
      // Public
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const l of this._observableSections.values())
          this._observer.observe(l);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      // Private
      _configAfterMerge(l) {
        return l.target = C(l.target) || document.body, l.rootMargin = l.offset ? `${l.offset}px 0px -30%` : l.rootMargin, typeof l.threshold == "string" && (l.threshold = l.threshold.split(",").map((d) => Number.parseFloat(d))), l;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (x.off(this._config.target, mu), x.on(this._config.target, mu, da, (l) => {
          const d = this._observableSections.get(l.target.hash);
          if (d) {
            l.preventDefault();
            const g = this._rootElement || window, A = d.offsetTop - this._element.offsetTop;
            if (g.scrollTo) {
              g.scrollTo({
                top: A,
                behavior: "smooth"
              });
              return;
            }
            g.scrollTop = A;
          }
        }));
      }
      _getNewObserver() {
        const l = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((d) => this._observerCallback(d), l);
      }
      // The logic of selection
      _observerCallback(l) {
        const d = (M) => this._targetLinks.get(`#${M.target.id}`), g = (M) => {
          this._previousScrollData.visibleEntryTop = M.target.offsetTop, this._process(d(M));
        }, A = (this._rootElement || document.documentElement).scrollTop, L = A >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = A;
        for (const M of l) {
          if (!M.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(d(M));
            continue;
          }
          const ue = M.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (L && ue) {
            if (g(M), !A)
              return;
            continue;
          }
          !L && !ue && g(M);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const l = w.find(da, this._config.target);
        for (const d of l) {
          if (!d.hash || q(d))
            continue;
          const g = w.findOne(decodeURI(d.hash), this._element);
          T(g) && (this._targetLinks.set(decodeURI(d.hash), d), this._observableSections.set(d.hash, g));
        }
      }
      _process(l) {
        this._activeTarget !== l && (this._clearActiveClass(this._config.target), this._activeTarget = l, l.classList.add(mr), this._activateParents(l), x.trigger(this._element, Uv, {
          relatedTarget: l
        }));
      }
      _activateParents(l) {
        if (l.classList.contains(Bv)) {
          w.findOne(Yv, l.closest(zv)).classList.add(mr);
          return;
        }
        for (const d of w.parents(l, Kv))
          for (const g of w.prev(d, Gv))
            g.classList.add(mr);
      }
      _clearActiveClass(l) {
        l.classList.remove(mr);
        const d = w.find(`${da}.${mr}`, l);
        for (const g of d)
          g.classList.remove(mr);
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = li.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    x.on(window, Hv, () => {
      for (const h of w.find(qv))
        li.getOrCreateInstance(h);
    }), Y(li);
    const Qv = "tab", Fn = ".bs.tab", Xv = `hide${Fn}`, e_ = `hidden${Fn}`, t_ = `show${Fn}`, n_ = `shown${Fn}`, r_ = `click${Fn}`, i_ = `keydown${Fn}`, s_ = `load${Fn}`, o_ = "ArrowLeft", yu = "ArrowRight", a_ = "ArrowUp", vu = "ArrowDown", pa = "Home", _u = "End", Wn = "active", bu = "fade", ha = "show", l_ = "dropdown", Eu = ".dropdown-toggle", c_ = ".dropdown-menu", ma = `:not(${Eu})`, u_ = '.list-group, .nav, [role="tablist"]', f_ = ".nav-item, .list-group-item", d_ = `.nav-link${ma}, .list-group-item${ma}, [role="tab"]${ma}`, wu = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ga = `${d_}, ${wu}`, p_ = `.${Wn}[data-bs-toggle="tab"], .${Wn}[data-bs-toggle="pill"], .${Wn}[data-bs-toggle="list"]`;
    class Vn extends R {
      constructor(l) {
        super(l), this._parent = this._element.closest(u_), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), x.on(this._element, i_, (d) => this._keydown(d)));
      }
      // Getters
      static get NAME() {
        return Qv;
      }
      // Public
      show() {
        const l = this._element;
        if (this._elemIsActive(l))
          return;
        const d = this._getActiveElem(), g = d ? x.trigger(d, Xv, {
          relatedTarget: l
        }) : null;
        x.trigger(l, t_, {
          relatedTarget: d
        }).defaultPrevented || g && g.defaultPrevented || (this._deactivate(d, l), this._activate(l, d));
      }
      // Private
      _activate(l, d) {
        if (!l)
          return;
        l.classList.add(Wn), this._activate(w.getElementFromSelector(l));
        const g = () => {
          if (l.getAttribute("role") !== "tab") {
            l.classList.add(ha);
            return;
          }
          l.removeAttribute("tabindex"), l.setAttribute("aria-selected", !0), this._toggleDropDown(l, !0), x.trigger(l, n_, {
            relatedTarget: d
          });
        };
        this._queueCallback(g, l, l.classList.contains(bu));
      }
      _deactivate(l, d) {
        if (!l)
          return;
        l.classList.remove(Wn), l.blur(), this._deactivate(w.getElementFromSelector(l));
        const g = () => {
          if (l.getAttribute("role") !== "tab") {
            l.classList.remove(ha);
            return;
          }
          l.setAttribute("aria-selected", !1), l.setAttribute("tabindex", "-1"), this._toggleDropDown(l, !1), x.trigger(l, e_, {
            relatedTarget: d
          });
        };
        this._queueCallback(g, l, l.classList.contains(bu));
      }
      _keydown(l) {
        if (![o_, yu, a_, vu, pa, _u].includes(l.key))
          return;
        l.stopPropagation(), l.preventDefault();
        const d = this._getChildren().filter((A) => !q(A));
        let g;
        if ([pa, _u].includes(l.key))
          g = d[l.key === pa ? 0 : d.length - 1];
        else {
          const A = [yu, vu].includes(l.key);
          g = ce(d, l.target, A, !0);
        }
        g && (g.focus({
          preventScroll: !0
        }), Vn.getOrCreateInstance(g).show());
      }
      _getChildren() {
        return w.find(ga, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((l) => this._elemIsActive(l)) || null;
      }
      _setInitialAttributes(l, d) {
        this._setAttributeIfNotExists(l, "role", "tablist");
        for (const g of d)
          this._setInitialAttributesOnChild(g);
      }
      _setInitialAttributesOnChild(l) {
        l = this._getInnerElement(l);
        const d = this._elemIsActive(l), g = this._getOuterElement(l);
        l.setAttribute("aria-selected", d), g !== l && this._setAttributeIfNotExists(g, "role", "presentation"), d || l.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(l, "role", "tab"), this._setInitialAttributesOnTargetPanel(l);
      }
      _setInitialAttributesOnTargetPanel(l) {
        const d = w.getElementFromSelector(l);
        d && (this._setAttributeIfNotExists(d, "role", "tabpanel"), l.id && this._setAttributeIfNotExists(d, "aria-labelledby", `${l.id}`));
      }
      _toggleDropDown(l, d) {
        const g = this._getOuterElement(l);
        if (!g.classList.contains(l_))
          return;
        const A = (L, M) => {
          const ue = w.findOne(L, g);
          ue && ue.classList.toggle(M, d);
        };
        A(Eu, Wn), A(c_, ha), g.setAttribute("aria-expanded", d);
      }
      _setAttributeIfNotExists(l, d, g) {
        l.hasAttribute(d) || l.setAttribute(d, g);
      }
      _elemIsActive(l) {
        return l.classList.contains(Wn);
      }
      // Try to get the inner element (usually the .nav-link)
      _getInnerElement(l) {
        return l.matches(ga) ? l : w.findOne(ga, l);
      }
      // Try to get the outer element (usually the .nav-item)
      _getOuterElement(l) {
        return l.closest(f_) || l;
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = Vn.getOrCreateInstance(this);
          if (typeof l == "string") {
            if (d[l] === void 0 || l.startsWith("_") || l === "constructor")
              throw new TypeError(`No method named "${l}"`);
            d[l]();
          }
        });
      }
    }
    x.on(document, r_, wu, function(h) {
      ["A", "AREA"].includes(this.tagName) && h.preventDefault(), !q(this) && Vn.getOrCreateInstance(this).show();
    }), x.on(window, s_, () => {
      for (const h of w.find(p_))
        Vn.getOrCreateInstance(h);
    }), Y(Vn);
    const h_ = "toast", pn = ".bs.toast", m_ = `mouseover${pn}`, g_ = `mouseout${pn}`, y_ = `focusin${pn}`, v_ = `focusout${pn}`, __ = `hide${pn}`, b_ = `hidden${pn}`, E_ = `show${pn}`, w_ = `shown${pn}`, S_ = "fade", Su = "hide", gs = "show", ys = "showing", O_ = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    }, A_ = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
    class ci extends R {
      constructor(l, d) {
        super(l, d), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      // Getters
      static get Default() {
        return A_;
      }
      static get DefaultType() {
        return O_;
      }
      static get NAME() {
        return h_;
      }
      // Public
      show() {
        if (x.trigger(this._element, E_).defaultPrevented)
          return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(S_);
        const d = () => {
          this._element.classList.remove(ys), x.trigger(this._element, w_), this._maybeScheduleHide();
        };
        this._element.classList.remove(Su), G(this._element), this._element.classList.add(gs, ys), this._queueCallback(d, this._element, this._config.animation);
      }
      hide() {
        if (!this.isShown() || x.trigger(this._element, __).defaultPrevented)
          return;
        const d = () => {
          this._element.classList.add(Su), this._element.classList.remove(ys, gs), x.trigger(this._element, b_);
        };
        this._element.classList.add(ys), this._queueCallback(d, this._element, this._config.animation);
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(gs), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(gs);
      }
      // Private
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(l, d) {
        switch (l.type) {
          case "mouseover":
          case "mouseout": {
            this._hasMouseInteraction = d;
            break;
          }
          case "focusin":
          case "focusout": {
            this._hasKeyboardInteraction = d;
            break;
          }
        }
        if (d) {
          this._clearTimeout();
          return;
        }
        const g = l.relatedTarget;
        this._element === g || this._element.contains(g) || this._maybeScheduleHide();
      }
      _setListeners() {
        x.on(this._element, m_, (l) => this._onInteraction(l, !0)), x.on(this._element, g_, (l) => this._onInteraction(l, !1)), x.on(this._element, y_, (l) => this._onInteraction(l, !0)), x.on(this._element, v_, (l) => this._onInteraction(l, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      // Static
      static jQueryInterface(l) {
        return this.each(function() {
          const d = ci.getOrCreateInstance(this, l);
          if (typeof l == "string") {
            if (typeof d[l] > "u")
              throw new TypeError(`No method named "${l}"`);
            d[l](this);
          }
        });
      }
    }
    return k(ci), Y(ci), {
      Alert: Ee,
      Button: Ke,
      Carousel: fr,
      Collapse: pr,
      Dropdown: It,
      Modal: $n,
      Offcanvas: tn,
      Popover: ms,
      ScrollSpy: li,
      Tab: Vn,
      Toast: ci,
      Tooltip: Ln
    };
  });
})(o1);
try {
  const t = () => {
    const n = uw(), r = ow(s1);
    r.use(n), r.mount("#app");
  }, e = [6480610];
  typeof kintone < "u" ? kintone.events.on("app.record.index.show", (n) => (!n.viewId || !e.includes(Number(n.viewId)) || t(), n)) : (t(), console.log("kintone view not run"));
} catch {
}
