// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 1534:
case 1205:
case 606:
case 319:
case 3357:
case 2895:
case 1229:
case 3883:
case 4082:
case 2192:
case 2179:
case 1168:
case 2585:
case 3467:
case 3830:
case 3114:
case 1136:
case 2035:
case 4064:
case 2905:
case 3703:
case 1173:
case 2866:
case 915:
case 1695:
case 2385:
case 863:
case 3393:
case 3051:
case 976:
case 875:
case 3237:
case 157:
case 2954:
case 3090:
case 3813:
case 3619:
case 4012:
case 2363:
case 1400:
case 12:
case 1190:
case 2578:
case 3243:
case 3949:
case 3184:
case 3386:
case 962:
case 3752:
case 1424:
case 2497:
case 29:
case 2563:
case 3570:
case 4039:
case 275:
case 3632:
case 3162:
case 1745:
case 792:
case 3906:
case 2315:
case 3068:
case 216:
case 3865:
case 2812:
case 3584:
case 591:
case 1833:
case 2072:
case 1639:
case 3688:
case 381:
case 469:
case 3894:
case 245:
case 2676:
case 2242:
case 3920:
case 1880:
case 1724:
case 2928:
case 2839:
case 256:
case 1426:
case 420:
case 2753:
case 1612:
case 1390:
case 2507:
case 661:
case 3170:
case 1461:
case 3627:
case 1287:
case 2931:
case 1942:
case 946:
case 598:
case 1536:
case 2882:
case 3514:
case 1568:
case 192:
case 3618:
case 935:
case 474:
case 2592:
case 1373:
case 2771:
case 1256:
case 3222:
case 370:
case 3314:
case 1368:
case 4038:
case 923:
case 98:
case 1682:
case 2379:
case 2392:
case 955:
case 1458:
case 2956:
case 2817:
case 3714:
case 1736:
case 3045:
case 2077:
case 1656:
case 1768:
case 2302:
case 559:
case 2571:
case 1640:
case 1264:
case 2779:
case 182:
case 588:
case 2247:
case 379:
case 3218:
case 2982:
case 1158:
case 2210:
case 2856:
case 350:
case 815:
case 4054:
case 1617:
case 2485:
case 2502:
case 539:
case 876:
case 975:
case 3622:
case 1773:
case 2964:
case 1434:
case 2091:
case 2353:
case 364:
case 1559:
case 1126:
case 2050:
case 2642:
case 1631:
case 2276:
case 1161:
case 2046:
case 1300:
case 2597:
case 2463:
case 1524:
case 429:
case 3288:
case 581:
case 3227:
case 2553:
case 1842:
case 2831:
case 276:
case 2280:
case 2478:
case 3762:
case 1687:
case 3058:
case 215:
case 3855:
case 1469:
case 2828:
case 3152:
case 3486:
case 1324:
case 2009:
case 1212:
case 3352:
case 2274:
case 4087:
case 2197:
case 235:
case 3996:
case 100:
case 2044:
case 2715:
case 3219:
case 3913:
case 16:
case 1526:
case 3941:
case 3552:
case 255:
case 3770:
case 1100:
case 3806:
case 28:
case 1490:
case 4028:
case 922:
case 747:
case 2153:
case 1221:
case 3000:
case 1734:
case 3716:
case 3303:
case 2171:
case 945:
case 1473:
case 4017:
case 1654:
case 1266:
case 936:
case 1238:
case 3289:
case 3983:
case 2492:
case 4056:
case 3503:
case 1468:
case 3167:
case 3059:
case 2102:
case 3414:
case 1295:
case 2938:
case 2829:
case 2008:
case 177:
case 503:
case 97:
case 3867:
case 1279:
case 1973:
case 2764:
case 380:
case 2556:
case 1747:
case 3483:
case 2495:
case 1671:
case 2236:
case 421:
case 2992:
case 589:
case 1123:
case 1602:
case 2782:
case 2517:
case 2438:
case 2340:
case 3914:
case 1006:
case 558:
case 60:
case 2466:
case 152:
case 2043:
case 2871:
case 3023:
case 3504:
case 21:
case 3496:
case 3235:
case 405:
case 2531:
case 3320:
case 2387:
case 1697:
case 2251:
case 3413:
case 2528:
case 3106:
case 1776:
case 2290:
case 3555:
case 1800:
case 2037:
case 712:
case 3962:
case 3304:
case 371:
case 3298:
case 967:
case 428:
case 1474:
case 2712:
case 797:
case 9:
case 126:
case 1780:
case 1824:
case 1951:
case 3984:
case 634:
case 2897:
case 3355:
case 1990:
case 2081:
case 1207:
case 3155:
case 2022:
case 285:
case 1480:
case 614:
case 3349:
case 2661:
case 2412:
case 1142:
case 2131:
case 1433:
case 1845:
case 341:
case 3970:
case 25:
case 1774:
case 2963:
case 3104:
case 732:
case 1861:
case 173:
case 3306:
case 3713:
case 3549:
case 3741:
case 165:
case 2645:
case 3986:
case 3120:
case 3796:
case 2658:
case 85:
case 2140:
case 726:
case 986:
case 2156:
case 3957:
case 2721:
case 1020:
case 348:
case 3299:
case 743:
case 3272:
case 3646:
case 227:
case 1055:
case 518:
case 2795:
case 3783:
case 1004:
case 1523:
case 2329:
case 1447:
case 1934:
case 3916:
case 2117:
case 3650:
case 94:
case 2027:
case 713:
case 142:
case 2634:
case 1094:
case 895:
case 3601:
case 2538:
case 3857:
case 3383:
case 2395:
case 2754:
case 3330:
case 3209:
case 766:
case 91:
case 2366:
case 1110:
case 3250:
case 3816:
case 2:
case 2456:
case 4092:
case 3672:
case 3699:
case 1723:
case 3530:
case 2321:
case 2885:
case 2088:
case 318:
case 772:
case 406:
case 3870:
case 3313:
case 541:
case 4007:
case 3341:
case 2487:
case 3952:
case 108:
case 1574:
case 295:
case 153:
case 1869:
case 3455:
case 3277:
case 3194:
case 3886:
case 3541:
case 867:
case 3749:
case 2428:
case 1663:
case 644:
case 1133:
case 2112:
case 3404:
case 8:
case 2878:
case 3596:
case 2018:
case 311:
case 1961:
case 331:
case 3704:
case 1030:
case 3862:
case 1333:
case 1742:
case 2731:
case 2728:
case 3635:
case 2259:
case 2953:
case 674:
case 3394:
case 3208:
case 3196:
case 24:
case 1890:
case 166:
case 1607:
case 904:
case 787:
case 701:
case 2512:
case 1924:
case 4015:
case 571:
case 4078:
case 927:
case 3698:
case 742:
case 3594:
case 3406:
case 2564:
case 2636:
case 1271:
case 95:
case 1547:
case 2121:
case 2668:
case 390:
case 1013:
case 3967:
case 2166:
case 2032:
case 494:
case 620:
case 2364:
case 2429:
case 1836:
case 708:
case 1347:
case 3130:
case 3074:
case 578:
case 1510:
case 2673:
case 461:
case 2879:
case 172:
case 599:
case 2019:
case 3668:
case 3382:
case 4057:
case 744:
case 1614:
case 238:
case 941:
case 2967:
case 902:
case 290:
case 3740:
case 1944:
case 1189:
case 1437:
case 3717:
case 1375:
case 672:
case 3405:
case 2130:
case 1318:
case 3364:
case 1267:
case 3019:
case 3195:
case 2183:
case 2244:
case 2660:
case 289:
case 851:
case 1481:
case 3454:
case 1722:
case 4093:
case 3224:
case 3312:
case 3731:
case 4070:
case 386:
case 3539:
case 596:
case 231:
case 2704:
case 890:
case 3651:
case 2394:
case 838:
case 2635:
case 51:
case 1119:
case 3259:
case 1327:
case 613:
case 2720:
case 2884:
case 1662:
case 3200:
case 1021:
case 2406:
case 1908:
case 1132:
case 2141:
case 1411:
case 1443:
case 4062:
case 437:
case 1711:
case 55:
case 720:
case 3226:
case 2341:
case 1743:
case 1332:
case 2870:
case 2706:
case 3261:
case 37:
case 395:
case 2565:
case 3487:
case 1188:
case 1532:
case 2886:
case 1670:
case 625:
case 53:
case 2455:
case 2277:
case 3245:
case 2194:
case 769:
case 2596:
case 3815:
case 653:
case 1064:
case 3112:
case 3431:
case 3538:
case 1422:
case 3754:
case 2383:
case 601:
case 1991:
case 1616:
case 3164:
case 1899:
case 1872:
case 2225:
case 3521:
case 1946:
case 2448:
case 3417:
case 1175:
case 3258:
case 3440:
case 2583:
case 811:
case 1737:
case 2816:
case 504:
case 2291:
case 2893:
case 3885:
case 1039:
case 218:
case 367:
case 971:
case 527:
case 2672:
case 2699:
case 2246:
case 3321:
case 2625:
case 1581:
case 1337:
case 841:
case 3658:
case 493:
case 1999:
case 400:
case 1972:
case 931:
case 2201:
case 1850:
case 1216:
case 3482:
case 3721:
case 1603:
case 327:
case 1537:
case 1122:
case 3795:
case 2783:
case 3354:
case 1381:
case 2646:
case 2993:
case 3985:
case 1028:
case 1809:
case 5:
case 951:
case 1031:
case 754:
case 2730:
case 1257:
case 1475:
case 612:
case 1418:
case 2148:
case 3305:
case 848:
case 903:
case 1511:
case 3128:
case 202:
case 2494:
case 385:
case 938:
case 3963:
case 3269:
case 1877:
case 3412:
case 3131:
case 2765:
case 1311:
case 477:
case 1343:
case 3978:
case 1652:
case 33:
case 665:
case 2796:
case 729:
case 673:
case 1788:
case 3739:
case 3531:
case 2608:
case 154:
case 31:
case 2235:
case 1998:
case 3907:
case 3290:
case 3624:
case 2555:
case 2962:
case 3037:
case 1143:
case 2413:
case 447:
case 396:
case 3528:
case 2465:
case 3712:
case 2520:
case 1029:
case 2298:
case 918:
case 1005:
case 1262:
case 3081:
case 1054:
case 878:
case 2149:
case 1775:
case 3317:
case 280:
case 2430:
case 3556:
case 3129:
case 4003:
case 129:
case 1718:
case 2867:
case 3764:
case 1181:
case 3154:
case 2483:
case 3495:
case 3236:
case 299:
case 2548:
case 3517:
case 911:
case 2260:
case 3466:
case 3871:
case 1489:
case 2914:
case 1137:
case 871:
case 1701:
case 1460:
case 1525:
case 2681:
case 924:
case 2930:
case 1346:
case 2000:
case 2716:
case 2289:
case 981:
case 1325:
case 1309:
case 2503:
case 2024:
case 249:
case 2757:
case 2414:
case 1989:
case 3008:
case 3805:
case 1550:
case 2059:
case 1799:
case 3623:
case 335:
case 2786:
case 2849:
case 693:
case 497:
case 1002:
case 2913:
case 346:
case 2941:
case 988:
case 1377:
case 3044:
case 355:
case 1296:
case 2770:
case 810:
case 3763:
case 516:
case 2806:
case 705:
case 1071:
case 939:
case 4004:
case 1843:
case 1241:
case 2232:
case 59:
case 1577:
case 563:
case 323:
case 38:
case 412:
case 1508:
case 432:
case 2994:
case 1604:
case 545:
case 2820:
case 264:
case 3887:
case 1927:
case 919:
case 3912:
case 291:
case 3046:
case 3597:
case 3463:
case 1177:
case 1620:
case 3478:
case 184:
case 2762:
case 1294:
case 4006:
case 2227:
case 3831:
case 3280:
case 376:
case 1988:
case 3939:
case 3233:
case 2486:
case 315:
case 3397:
case 1798:
case 121:
case 3302:
case 2848:
case 2045:
case 3077:
case 279:
case 105:
case 2275:
case 298:
case 3485:
case 2493:
case 1191:
case 250:
case 1150:
case 3840:
case 362:
case 1918:
case 2061:
case 1760:
case 2103:
case 3964:
case 3371:
case 2675:
case 1491:
case 288:
case 2618:
case 3882:
case 2514:
case 1922:
case 2948:
case 1446:
case 692:
case 259:
case 1063:
case 3579:
case 3592:
case 3771:
case 4030:
case 3702:
case 562:
case 2767:
case 413:
case 3864:
case 1875:
case 3940:
case 1818:
case 3307:
case 4041:
case 2688:
case 859:
case 281:
case 1477:
case 2362:
case 1708:
case 1255:
case 2584:
case 3812:
case 3099:
case 3242:
case 2920:
case 1827:
case 224:
case 2894:
case 345:
case 1398:
case 1204:
case 2955:
case 3633:
case 839:
case 1888:
case 3928:
case 3839:
case 1085:
case 3753:
case 3001:
case 3931:
case 3680:
case 2170:
case 4065:
case 194:
case 870:
case 2627:
case 546:
case 998:
case 2619:
case 840:
case 2073:
case 401:
case 2586:
case 1832:
case 2949:
case 3674:
case 4094:
case 62:
case 3515:
case 2896:
case 3578:
case 1198:
case 2570:
case 2386:
case 1819:
case 363:
case 2752:
case 1911:
case 2068:
case 555:
case 2036:
case 2906:
case 1777:
case 3192:
case 3179:
case 991:
case 637:
case 2516:
case 408:
case 219:
case 2883:
case 2830:
case 1007:
case 2281:
case 2114:
case 1444:
case 433:
case 1372:
case 2467:
case 2593:
case 1301:
case 3866:
case 3471:
case 1683:
case 3035:
case 1746:
case 3838:
case 3929:
case 3223:
case 3905:
case 2316:
case 2237:
case 1750:
case 3954:
case 3821:
case 1981:
case 3385:
case 2393:
case 1599:
case 2051:
case 1313:
case 67:
case 2519:
case 2743:
case 789:
case 1870:
case 3176:
case 333:
case 2977:
case 758:
case 929:
case 1420:
case 308:
case 3926:
case 1886:
case 2532:
case 1541:
case 2127:
case 3663:
case 2319:
case 3180:
case 790:
case 1455:
case 353:
case 3869:
case 565:
case 1404:
case 1596:
case 325:
case 960:
case 3961:
case 244:
case 573:
case 2252:
case 3133:
case 4035:
case 2064:
case 90:
case 3442:
case 1601:
case 3094:
case 2589:
case 1383:
case 2781:
case 1080:
case 1903:
case 751:
case 954:
case 2872:
case 1225:
case 2899:
case 1033:
case 1330:
case 2118:
case 301:
case 2693:
case 1448:
case 387:
case 4060:
case 844:
case 1076:
case 416:
case 667:
case 1816:
case 2657:
case 1291:
case 1893:
case 2039:
case 2203:
case 2909:
case 49:
case 731:
case 3958:
case 512:
case 1699:
case 1672:
case 1530:
case 3547:
case 2518:
case 532:
case 2575:
case 711:
case 3271:
case 2614:
case 138:
case 269:
case 3041:
case 1967:
case 436:
case 3679:
case 874:
case 2189:
case 3310:
case 2437:
case 3836:
case 1814:
case 3347:
case 1074:
case 3868:
case 1660:
case 1244:
case 189:
case 2481:
case 220:
case 543:
case 869:
case 1165:
case 1704:
case 274:
case 1208:
case 1394:
case 2095:
case 3083:
case 2898:
case 2119:
case 3380:
case 3607:
case 3851:
case 151:
case 313:
case 2038:
case 3376:
case 2835:
case 1594:
case 422:
case 2527:
case 1141:
case 3959:
case 3253:
case 2066:
case 2132:
case 2411:
case 3580:
case 2788:
case 1608:
case 254:
case 1235:
case 3776:
case 343:
case 2143:
case 2284:
case 4077:
case 1441:
case 2111:
case 3733:
case 2029:
case 1298:
case 171:
case 2935:
case 1304:
case 748:
case 2005:
case 3474:
case 2262:
case 3207:
case 3780:
case 1984:
case 2727:
case 2419:
case 1348:
case 2844:
case 2718:
case 3747:
case 3973:
case 4046:
case 332:
case 4050:
case 854:
case 1483:
case 2322:
case 4091:
case 2214:
case 3671:
case 3123:
case 199:
case 4025:
case 3968:
case 2489:
case 2137:
case 2522:
case 3710:
case 1625:
case 2846:
case 2789:
case 2337:
case 1609:
case 3410:
case 4044:
case 3285:
case 2999:
case 501:
case 3020:
case 2891:
case 974:
case 435:
case 2087:
case 1201:
case 771:
case 148:
case 542:
case 3055:
case 2603:
case 3858:
case 2537:
case 2381:
case 1783:
case 1272:
case 1299:
case 312:
case 2028:
case 604:
case 627:
case 2031:
case 3523:
case 2418:
case 1916:
case 3480:
case 2543:
case 2427:
case 2719:
case 65:
case 102:
case 1852:
case 508:
case 1494:
case 3278:
case 3774:
case 2877:
case 799:
case 1713:
case 920:
case 63:
case 525:
case 1741:
case 365:
case 3476:
case 3861:
case 1306:
case 373:
case 2056:
case 3969:
case 2488:
case 1120:
case 1677:
case 780:
case 2508:
case 906:
case 805:
case 710:
case 3980:
case 164:
case 3559:
case 2927:
case 3126:
case 2655:
case 3524:
case 3933:
case 3239:
case 1288:
case 3628:
case 191:
case 2177:
case 3976:
case 1804:
case 284:
case 1762:
case 3145:
case 615:
case 1227:
case 2988:
case 3324:
case 3500:
case 3469:
case 1855:
case 676:
case 1367:
case 2499:
case 2472:
case 1848:
case 1045:
case 496:
case 1714:
case 3910:
case 2344:
case 347:
case 2822:
case 205:
case 1457:
case 41:
case 3640:
case 3264:
case 382:
case 3052:
case 2648:
case 662:
case 821:
case 150:
case 2975:
case 884:
case 3434:
case 2918:
case 517:
case 1103:
case 45:
case 2701:
case 2460:
case 537:
case 3473:
case 2525:
case 2346:
case 1930:
case 3558:
case 1716:
case 3823:
case 1289:
case 3238:
case 2391:
case 1793:
case 485:
case 4022:
case 3266:
case 2053:
case 3605:
case 1637:
case 557:
case 43:
case 149:
case 2097:
case 1757:
case 2230:
case 2546:
case 2881:
case 764:
case 1414:
case 3436:
case 2144:
case 3295:
case 961:
case 110:
case 3468:
case 1059:
case 1167:
case 2799:
case 3561:
case 2498:
case 646:
case 1913:
case 1219:
case 36:
case 3159:
case 1941:
case 3345:
case 300:
case 798:
case 3100:
case 3974:
case 3361:
case 1552:
case 68:
case 404:
case 779:
case 3326:
case 1232:
case 1484:
case 3451:
case 2577:
case 3545:
case 1370:
case 1619:
case 56:
case 3400:
case 1073:
case 739:
case 500:
case 1586:
case 1243:
case 1949:
case 1184:
case 4027:
case 2198:
case 309:
case 1570:
case 2641:
case 759:
case 1386:
case 2079:
case 3424:
case 2911:
case 1865:
case 2943:
case 675:
case 2249:
case 3014:
case 1036:
case 3745:
case 788:
case 3874:
case 2777:
case 1906:
case 663:
case 2725:
case 2709:
case 3534:
case 3758:
case 1357:
case 1883:
case 3923:
case 1281:
case 3254:
case 3062:
case 337:
case 1114:
case 2444:
case 206:
case 1593:
case 2301:
case 3173:
case 1703:
case 4018:
case 3695:
case 2683:
case 2746:
case 3334:
case 1316:
case 357:
case 2981:
case 2791:
case 984:
case 707:
case 2491:
case 3568:
case 1618:
case 2450:
case 1514:
case 1948:
case 159:
case 3810:
case 3256:
case 2360:
case 3373:
case 2172:
case 2199:
case 1767:
case 3682:
case 2078:
case 317:
case 2744:
case 2015:
case 268:
case 3458:
case 1069:
case 3573:
case 44:
case 2409:
case 2560:
case 1688:
case 3639:
case 181:
case 3590:
case 2477:
case 2255:
case 645:
case 1920:
case 1452:
case 3724:
case 2827:
case 1894:
case 2398:
case 636:
case 1562:
case 3612:
case 4019:
case 3426:
case 261:
case 2085:
case 1384:
case 3351:
case 3287:
case 2220:
case 2598:
case 1904:
case 1034:
case 294:
case 3016:
case 3461:
case 2551:
case 1812:
case 2833:
case 2228:
case 1099:
case 490:
case 2639:
case 1307:
case 3708:
case 1178:
case 1797:
case 3204:
case 3398:
case 2169:
case 1242:
case 1676:
case 2880:
case 607:
case 1987:
case 156:
case 1839:
case 3888:
case 2093:
case 2426:
case 2612:
case 1633:
case 1507:
case 2876:
case 3598:
case 3335:
case 2016:
case 3694:
case 4074:
case 2942:
case 1931:
case 3220:
case 3922:
case 1882:
case 96:
case 2240:
case 2664:
case 3491:
case 292:
case 900:
case 1185:
case 1647:
case 3360:
case 775:
case 1771:
case 431:
case 2373:
case 2070:
case 2134:
case 763:
case 3063:
case 3875:
case 3078:
case 2336:
case 3015:
case 528:
case 3818:
case 3172:
case 2368:
case 3199:
case 2682:
case 1864:
case 451:
case 2573:
case 670:
case 1379:
case 2458:
case 3248:
case 2666:
case 2229:
case 3725:
case 640:
case 2638:
case 1179:
case 3709:
case 1192:
case 4010:
case 3399:
case 2168:
case 306:
case 3372:
case 2621:
case 883:
case 2254:
case 3007:
case 756:
case 3937:
case 2136:
case 2062:
case 237:
case 1929:
case 1838:
case 2173:
case 411:
case 745:
case 1385:
case 3599:
case 3750:
case 257:
case 1954:
case 837:
case 1363:
case 2761:
case 2569:
case 283:
case 22:
case 2400:
case 1515:
case 3206:
case 3665:
case 4080:
case 1578:
case 2726:
case 1453:
case 3079:
case 3819:
case 163:
case 209:
case 2369:
case 3198:
case 3613:
case 1563:
case 1497:
case 3641:
case 2014:
case 2874:
case 3408:
case 1107:
case 3777:
case 2459:
case 4076:
case 3943:
case 3696:
case 2124:
case 3606:
case 2769:
case 2561:
case 448:
case 3498:
case 135:
case 200:
case 293:
case 3002:
case 26:
case 2159:
case 2067:
case 3932:
case 3649:
case 2361:
case 1763:
case 3577:
case 123:
case 3919:
case 917:
case 3213:
case 2451:
case 3346:
case 506:
case 2558:
case 3460:
case 441:
case 2629:
case 3053:
case 2605:
case 402:
case 2823:
case 3097:
case 2358:
case 3230:
case 3546:
case 610:
case 649:
case 1966:
case 3772:
case 3591:
case 1623:
case 2436:
case 3989:
case 1829:
case 3144:
case 1938:
case 2295:
case 277:
case 1008:
case 1805:
case 3550:
case 1817:
case 3344:
case 1077:
case 247:
case 1302:
case 2768:
case 2656:
case 3499:
case 3472:
case 4023:
case 983:
case 1571:
case 3109:
case 630:
case 2640:
case 282:
case 755:
case 2158:
case 305:
case 746:
case 1856:
case 3150:
case 1502:
case 3401:
case 735:
case 568:
case 2773:
case 471:
case 3975:
case 1840:
case 2434:
case 3146:
case 882:
case 2980:
case 1353:
case 2559:
case 1887:
case 2790:
case 2631:
case 1642:
case 3735:
case 2300:
case 3655:
case 2239:
case 2359:
case 1553:
case 594:
case 1831:
case 2842:
case 1280:
case 3177:
case 1397:
case 115:
case 478:
case 2500:
case 321:
case 3988:
case 2324:
case 2212:
case 2215:
case 2278:
case 185:
case 641:
case 3511:
case 1128:
case 4000:
case 2142:
case 2433:
case 1626:
case 897:
case 2048:
case 15:
case 1963:
case 602:
case 3877:
case 1978:
case 2476:
case 972:
case 1915:
case 273:
case 4059:
case 3311:
case 410:
case 2826:
case 1645:
case 1187:
case 812:
case 2969:
case 2263:
case 4024:
case 3270:
case 1658:
case 3293:
case 3999:
case 3581:
case 1738:
case 3337:
case 3850:
case 1505:
case 1234:
case 1156:
case 2323:
case 1482:
case 2020:
case 1985:
case 3825:
case 3028:
case 3809:
case 2055:
case 3603:
case 127:
case 3537:
case 2858:
case 796:
case 3257:
case 873:
case 1329:
case 3475:
case 1117:
case 104:
case 966:
case 71:
case 865:
case 3901:
case 1802:
case 73:
case 2973:
case 491:
case 3775:
case 843:
case 3844:
case 2747:
case 1154:
case 3181:
case 464:
case 3322:
case 2049:
case 933:
case 232:
case 1268:
case 520:
case 360:
case 4058:
case 925:
case 1782:
case 3667:
case 1421:
case 1438:
case 2936:
case 1340:
case 2710:
case 2968:
case 1011:
case 1043:
case 953:
case 1739:
case 3788:
case 704:
case 1531:
case 1387:
case 3284:
case 1251:
case 3143:
case 1528:
case 430:
case 196:
case 3111:
case 1907:
case 942:
case 2776:
case 2800:
case 1624:
case 3935:
case 3005:
case 2653:
case 334:
case 2474:
case 2733:
case 852:
case 450:
case 671:
case 1600:
case 2951:
case 3727:
case 3054:
case 4026:
case 767:
case 2030:
case 2174:
case 1651:
case 3684:
case 2900:
case 374:
case 459:
case 1224:
case 1312:
case 1731:
case 1690:
case 2742:
case 7:
case 997:
case 2380:
case 3119:
case 554:
case 3327:
case 488:
case 3898:
case 1997:
case 2890:
case 3388:
case 2607:
case 872:
case 2533:
case 2851:
case 1512:
case 439:
case 3132:
case 3527:
case 2253:
case 3411:
case 3443:
case 2580:
case 1089:
case 3835:
case 912:
case 3908:
case 2271:
case 1668:
case 1756:
case 2423:
case 2096:
case 1382:
case 3944:
case 2310:
case 529:
case 369:
case 1902:
case 2013:
case 2873:
case 481:
case 2868:
case 1364:
case 1971:
case 3375:
case 3318:
case 965:
case 658:
case 3481:
case 3267:
case 1879:
case 1892:
case 272:
case 50:
case 1019:
case 808:
case 242:
case 3616:
case 2094:
case 3950:
case 3589:
case 1754:
case 2147:
case 2685:
case 833:
case 4073:
case 3946:
case 201:
case 3118:
case 1729:
case 3175:
case 1705:
case 1164:
case 3872:
case 3899:
case 74:
case 4036:
case 1440:
case 618:
case 2110:
case 825:
case 2834:
case 1456:
case 1182:
case 786:
case 1321:
case 2723:
case 1885:
case 3039:
case 3909:
case 3686:
case 887:
case 3977:
case 2176:
case 3519:
case 514:
case 3743:
case 3332:
case 419:
case 842:
case 3188:
case 2615:
case 1261:
case 17:
case 2574:
case 195:
case 253:
case 3127:
case 3532:
case 1428:
case 3319:
case 2180:
case 3252:
case 1112:
case 1431:
case 1878:
case 1018:
case 344:
case 1815:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759737601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,];
var gg_b = "1759737601/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
