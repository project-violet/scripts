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
case 878:
case 3806:
case 1261:
case 3308:
case 1677:
case 477:
case 1013:
case 375:
case 2597:
case 3809:
case 3959:
case 500:
case 2200:
case 2190:
case 1863:
case 3559:
case 1706:
case 3940:
case 3360:
case 1245:
case 767:
case 2268:
case 849:
case 42:
case 974:
case 4064:
case 3289:
case 3070:
case 2880:
case 1709:
case 3476:
case 84:
case 429:
case 2438:
case 388:
case 1176:
case 603:
case 569:
case 207:
case 2407:
case 3545:
case 3341:
case 319:
case 1384:
case 2205:
case 885:
case 1034:
case 890:
case 1589:
case 3961:
case 2432:
case 2111:
case 236:
case 2750:
case 3646:
case 3365:
case 2764:
case 2195:
case 320:
case 3945:
case 3075:
case 3131:
case 1240:
case 1431:
case 1112:
case 2711:
case 197:
case 2149:
case 3999:
case 3812:
case 379:
case 1831:
case 3319:
case 2934:
case 3996:
case 3068:
case 3320:
case 1712:
case 70:
case 3611:
case 470:
case 2623:
case 2089:
case 845:
case 1233:
case 2270:
case 189:
case 269:
case 3879:
case 4024:
case 3378:
case 3876:
case 3394:
case 2795:
case 3062:
case 2838:
case 2228:
case 3914:
case 1638:
case 348:
case 2957:
case 536:
case 2807:
case 908:
case 3624:
case 1463:
case 709:
case 565:
case 857:
case 3921:
case 3163:
case 3690:
case 1847:
case 425:
case 2913:
case 2647:
case 1299:
case 4011:
case 18:
case 327:
case 1109:
case 2275:
case 4095:
case 1097:
case 3521:
case 621:
case 3933:
case 2155:
case 804:
case 2477:
case 200:
case 37:
case 498:
case 2790:
case 1106:
case 3747:
case 4021:
case 2799:
case 3911:
case 3875:
case 3614:
case 1857:
case 2657:
case 1100:
case 97:
case 333:
case 3462:
case 2931:
case 683:
case 622:
case 1538:
case 308:
case 1290:
case 167:
case 785:
case 790:
case 3315:
case 3468:
case 1775:
case 2714:
case 2634:
case 1834:
case 2145:
case 2489:
case 259:
case 927:
case 749:
case 555:
case 2276:
case 867:
case 3590:
case 3238:
case 3828:
case 2547:
case 2159:
case 3326:
case 3207:
case 468:
case 1373:
case 3329:
case 1211:
case 3713:
case 3870:
case 2721:
case 948:
case 3633:
case 3524:
case 3232:
case 3822:
case 1295:
case 2218:
case 3006:
case 979:
case 2077:
case 2613:
case 29:
case 2212:
case 1497:
case 3310:
case 3009:
case 2367:
case 595:
case 3621:
case 2733:
case 704:
case 2343:
case 3285:
case 540:
case 2963:
case 2756:
case 2697:
case 3640:
case 1980:
case 1187:
case 884:
case 280:
case 3487:
case 1977:
case 626:
case 757:
case 2133:
case 3955:
case 1122:
case 809:
case 3470:
case 988:
case 3656:
case 718:
case 1580:
case 1264:
case 1250:
case 1047:
case 4045:
case 10:
case 3645:
case 2196:
case 1700:
case 3079:
case 109:
case 587:
case 3550:
case 2388:
case 4056:
case 80:
case 2038:
case 247:
case 3369:
case 745:
case 1985:
case 559:
case 3475:
case 3012:
case 1303:
case 599:
case 1175:
case 2209:
case 3157:
case 1031:
case 531:
case 3800:
case 4040:
case 3546:
case 2206:
case 3661:
case 975:
case 3277:
case 1255:
case 264:
case 2128:
case 3859:
case 505:
case 1563:
case 20:
case 3090:
case 128:
case 3352:
case 2047:
case 2122:
case 1133:
case 448:
case 2977:
case 2170:
case 155:
case 3906:
case 3358:
case 968:
case 3433:
case 3024:
case 2980:
case 180:
case 2577:
case 3304:
case 1121:
case 2249:
case 3421:
case 3840:
case 2897:
case 3861:
case 1327:
case 2762:
case 3786:
case 895:
case 700:
case 2457:
case 2381:
case 47:
case 398:
case 3414:
case 3789:
case 924:
case 544:
case 2031:
case 1114:
case 1199:
case 2686:
case 3662:
case 1761:
case 3499:
case 2985:
case 1007:
case 147:
case 358:
case 427:
case 3011:
case 1032:
case 1196:
case 855:
case 1714:
case 3189:
case 3445:
case 4028:
case 3398:
case 3579:
case 2532:
case 159:
case 1489:
case 2168:
case 1145:
case 4022:
case 3392:
case 4070:
case 2507:
case 3912:
case 3899:
case 765:
case 3186:
case 3247:
case 2100:
case 4087:
case 1796:
case 3675:
case 2938:
case 89:
case 584:
case 3976:
case 1335:
case 2932:
case 3461:
case 199:
case 1923:
case 377:
case 1212:
case 754:
case 1613:
case 2813:
case 1947:
case 420:
case 3231:
case 2770:
case 3440:
case 2722:
case 831:
case 1218:
case 2295:
case 3055:
case 2728:
case 899:
case 3687:
case 4075:
case 1156:
case 859:
case 2373:
case 1330:
case 2105:
case 1080:
case 3622:
case 50:
case 1276:
case 736:
case 3628:
case 1159:
case 2787:
case 1086:
case 2718:
case 3450:
case 3464:
case 218:
case 3676:
case 549:
case 832:
case 755:
case 1957:
case 1164:
case 1228:
case 1838:
case 728:
case 1339:
case 3045:
case 2632:
case 289:
case 1623:
case 1089:
case 3446:
case 800:
case 204:
case 3738:
case 795:
case 1149:
case 297:
case 3213:
case 3575:
case 2831:
case 3449:
case 3177:
case 3970:
case 1790:
case 1477:
case 100:
case 3257:
case 2214:
case 1275:
case 764:
case 977:
case 2097:
case 550:
case 132:
case 585:
case 3059:
case 590:
case 2463:
case 28:
case 16:
case 2299:
case 1647:
case 3528:
case 2847:
case 3890:
case 3180:
case 2296:
case 747:
case 54:
case 1480:
case 3522:
case 3234:
case 3824:
case 3383:
case 1124:
case 290:
case 408:
case 165:
case 787:
case 3301:
case 1268:
case 2245:
case 58:
case 894:
case 1880:
case 433:
case 2680:
case 1262:
case 545:
case 612:
case 2706:
case 759:
case 925:
case 1997:
case 24:
case 3777:
case 3490:
case 2013:
case 3021:
case 414:
case 1200:
case 3780:
case 1597:
case 3609:
case 2261:
case 3606:
case 998:
case 250:
case 2685:
case 3014:
case 3500:
case 2112:
case 504:
case 4009:
case 3348:
case 154:
case 2118:
case 1195:
case 79:
case 3411:
case 194:
case 3132:
case 1205:
case 3568:
case 518:
case 1111:
case 1432:
case 2589:
case 2034:
case 2423:
case 1749:
case 3107:
case 3900:
case 3562:
case 2586:
case 3864:
case 2259:
case 3138:
case 1407:
case 3099:
case 368:
case 3714:
case 44:
case 829:
case 2511:
case 606:
case 1398:
case 1445:
case 1189:
case 1579:
case 96:
case 3523:
case 3145:
case 3489:
case 233:
case 2462:
case 1050:
case 387:
case 1899:
case 1912:
case 2699:
case 12:
case 485:
case 1247:
case 490:
case 3657:
case 3085:
case 1512:
case 724:
case 1675:
case 2734:
case 3335:
case 399:
case 214:
case 2391:
case 2595:
case 3923:
case 681:
case 331:
case 2911:
case 177:
case 3799:
case 3212:
case 39:
case 478:
case 2197:
case 3947:
case 3140:
case 3613:
case 1821:
case 2621:
case 2009:
case 2924:
case 3218:
case 110:
case 1687:
case 340:
case 768:
case 2713:
case 2405:
case 2232:
case 2822:
case 1622:
case 3080:
case 2870:
case 1670:
case 2524:
case 1833:
case 82:
case 4034:
case 1459:
case 35:
case 2207:
case 969:
case 2238:
case 3547:
case 2828:
case 3159:
case 489:
case 994:
case 3563:
case 858:
case 1859:
case 2659:
case 817:
case 2422:
case 1358:
case 2797:
case 907:
case 1906:
case 3740:
case 1024:
case 2470:
case 418:
case 630:
case 380:
case 3121:
case 404:
case 1304:
case 3343:
case 1421:
case 1509:
case 3756:
case 1840:
case 1861:
case 1786:
case 2018:
case 2546:
case 1095:
case 364:
case 2012:
case 514:
case 198:
case 2344:
case 2157:
case 2549:
case 2950:
case 1600:
case 2800:
case 3209:
case 3886:
case 2949:
case 2862:
case 3199:
case 3761:
case 965:
case 3007:
case 1499:
case 274:
case 48:
case 533:
case 1496:
case 1845:
case 1668:
case 2366:
case 2868:
case 3382:
case 2079:
case 508:
case 3196:
case 1505:
case 3268:
case 2556:
case 3880:
case 947:
case 2022:
case 1033:
case 2289:
case 2070:
case 21:
case 2286:
case 2940:
case 515:
case 2360:
case 444:
case 964:
case 1021:
case 1609:
case 3597:
case 1780:
case 2809:
case 57:
case 2959:
case 1606:
case 2308:
case 2337:
case 124:
case 2655:
case 1905:
case 1342:
case 3885:
case 2075:
case 2649:
case 710:
case 980:
case 1297:
case 995:
case 824:
case 3764:
case 3750:
case 2418:
case 601:
case 1348:
case 2365:
case 1846:
case 354:
case 219:
case 2341:
case 1132:
case 1411:
case 1096:
case 2545:
case 686:
case 3432:
case 336:
case 548:
case 4063:
case 1850:
case 1562:
case 1107:
case 1138:
case 2664:
case 3407:
case 3353:
case 288:
case 1450:
case 2062:
case 519:
case 3086:
case 2876:
case 1464:
case 3150:
case 3807:
case 3838:
case 248:
case 3164:
case 2611:
case 3339:
case 1811:
case 2068:
case 4047:
case 2596:
case 770:
case 369:
case 2879:
case 3089:
case 3623:
case 3270:
case 588:
case 99:
case 2316:
case 2818:
case 2695:
case 1446:
case 3287:
case 1707:
case 3149:
case 3485:
case 460:
case 3711:
case 1449:
case 2723:
case 3631:
case 279:
case 940:
case 1732:
case 3155:
case 2406:
case 1177:
case 2933:
case 1455:
case 1257:
case 484:
case 1928:
case 3275:
case 1040:
case 2325:
case 332:
case 409:
case 1059:
case 227:
case 725:
case 959:
case 623:
case 1528:
case 3913:
case 3647:
case 758:
case 1180:
case 1987:
case 1522:
case 2624:
case 1824:
case 2213:
case 1812:
case 397:
case 3779:
case 1319:
case 3221:
case 1723:
case 1000:
case 2446:
case 651:
case 1818:
case 1316:
case 2895:
case 2618:
case 3776:
case 3712:
case 1596:
case 2811:
case 1731:
case 3233:
case 3632:
case 389:
case 1876:
case 1394:
case 905:
case 827:
case 148:
case 1914:
case 2975:
case 1599:
case 357:
case 3296:
case 447:
case 2234:
case 2824:
case 1624:
case 2056:
case 2522:
case 4032:
case 1921:
case 662:
case 3847:
case 2890:
case 3299:
case 2928:
case 3214:
case 464:
case 2257:
case 3097:
case 2040:
case 1409:
case 1933:
case 2177:
case 1406:
case 17:
case 1747:
case 3106:
case 2455:
case 6:
case 1308:
case 2606:
case 1806:
case 1763:
case 2905:
case 4085:
case 1655:
case 224:
case 431:
case 714:
case 1540:
case 2780:
case 2609:
case 499:
case 1940:
case 3706:
case 888:
case 3447:
case 1028:
case 2490:
case 2777:
case 385:
case 2505:
case 2383:
case 2424:
case 1070:
case 1289:
case 1022:
case 1556:
case 3709:
case 819:
case 3680:
case 635:
case 1664:
case 1476:
case 3259:
case 2107:
case 2900:
case 2562:
case 2850:
case 188:
case 81:
case 1545:
case 666:
case 2411:
case 3179:
case 2132:
case 45:
case 119:
case 1341:
case 3384:
case 349:
case 2846:
case 3989:
case 1365:
case 3118:
case 378:
case 2014:
case 440:
case 3685:
case 2342:
case 2297:
case 960:
case 3240:
case 2500:
case 3112:
case 1649:
case 1640:
case 2840:
case 2509:
case 3897:
case 3249:
case 978:
case 2421:
case 779:
case 3980:
case 360:
case 1487:
case 1555:
case 1805:
case 3122:
case 748:
case 4086:
case 2906:
case 3580:
case 1422:
case 2859:
case 874:
case 3250:
case 2352:
case 949:
case 529:
case 727:
case 225:
case 1366:
case 2668:
case 2845:
case 46:
case 2011:
case 309:
case 1079:
case 985:
case 2263:
case 1564:
case 990:
case 613:
case 3686:
case 1862:
case 2662:
case 217:
case 174:
case 2499:
case 1369:
case 298:
case 400:
case 3585:
case 3303:
case 1964:
case 950:
case 3031:
case 1950:
case 1549:
case 1157:
case 2095:
case 634:
case 3762:
case 1661:
case 696:
case 1277:
case 3255:
case 1595:
case 114:
case 3932:
case 2461:
case 2675:
case 1614:
case 2512:
case 3907:
case 3100:
case 1734:
case 525:
case 2576:
case 2064:
case 1462:
case 108:
case 22:
case 1699:
case 2912:
case 3162:
case 2186:
case 1468:
case 1315:
case 2374:
case 1757:
case 1511:
case 71:
case 98:
case 808:
case 1828:
case 1590:
case 989:
case 3373:
case 1713:
case 1524:
case 2833:
case 2670:
case 1870:
case 3105:
case 2456:
case 570:
case 1924:
case 3295:
case 997:
case 1887:
case 692:
case 1197:
case 1990:
case 454:
case 720:
case 2440:
case 1310:
case 3722:
case 3497:
case 1621:
case 2231:
case 461:
case 3244:
case 1281:
case 1602:
case 876:
case 2952:
case 941:
case 3067:
case 2010:
case 2425:
case 1637:
case 1717:
case 1355:
case 1551:
case 771:
case 2029:
case 2282:
case 1801:
case 3266:
case 2601:
case 3030:
case 1951:
case 665:
case 2558:
case 763:
case 342:
case 1654:
case 3269:
case 4084:
case 2860:
case 1193:
case 2552:
case 3684:
case 3439:
case 3742:
case 636:
case 1074:
case 386:
case 452:
case 1092:
case 3748:
case 2494:
case 1364:
case 1569:
case 3903:
case 3981:
case 3385:
case 2642:
case 3503:
case 1842:
case 2784:
case 1544:
case 1349:
case 2419:
case 3171:
case 3035:
case 1346:
case 2648:
case 1848:
case 3251:
case 1591:
case 1616:
case 3027:
case 2816:
case 2998:
case 3148:
case 1442:
case 2671:
case 1871:
case 1739:
case 1619:
case 3210:
case 153:
case 1153:
case 3088:
case 2592:
case 1678:
case 2376:
case 2878:
case 1694:
case 3307:
case 3836:
case 3226:
case 503:
case 116:
case 1672:
case 1311:
case 2872:
case 3229:
case 669:
case 1515:
case 2598:
case 1620:
case 3771:
case 2820:
case 2184:
case 346:
case 3332:
case 66:
case 3893:
case 906:
case 3417:
case 1052:
case 1390:
case 1526:
case 632:
case 413:
case 1401:
case 3573:
case 3215:
case 1058:
case 600:
case 2408:
case 1929:
case 3973:
case 434:
case 1926:
case 3043:
case 496:
case 1510:
case 2825:
case 3774:
case 1042:
case 2571:
case 2444:
case 1519:
case 1994:
case 3225:
case 3835:
case 2181:
case 1691:
case 2891:
case 1048:
case 3792:
case 1972:
case 699:
case 982:
case 543:
case 1572:
case 2698:
case 2466:
case 306:
case 1735:
case 1916:
case 1182:
case 283:
case 2692:
case 1892:
case 1594:
case 2293:
case 2469:
case 1399:
case 435:
case 2239:
case 2829:
case 1001:
case 1458:
case 2322:
case 2370:
case 871:
case 65:
case 3278:
case 1925:
case 3152:
case 863:
case 2236:
case 2328:
case 1730:
case 2773:
case 1404:
case 1143:
case 3867:
case 640:
case 3216:
case 2451:
case 680:
case 2983:
case 4081:
case 330:
case 2851:
case 1954:
case 1804:
case 1167:
case 901:
case 2025:
case 2410:
case 3758:
case 302:
case 628:
case 1359:
case 986:
case 2426:
case 1852:
case 716:
case 2305:
case 226:
case 1356:
case 753:
case 2173:
case 2362:
case 1727:
case 1492:
case 647:
case 2078:
case 2094:
case 2869:
case 1669:
case 2942:
case 3254:
case 3192:
case 2217:
case 3584:
case 2781:
case 2415:
case 1474:
case 2020:
case 3882:
case 3198:
case 3389:
case 2491:
case 1788:
case 2016:
case 664:
case 2548:
case 3827:
case 3237:
case 1071:
case 2542:
case 1782:
case 1135:
case 2844:
case 3681:
case 2300:
case 3473:
case 1501:
case 1583:
case 2743:
case 1173:
case 2908:
case 3129:
case 2858:
case 126:
case 2356:
case 2359:
case 3126:
case 446:
case 2852:
case 2560:
case 1426:
case 2554:
case 1253:
case 2167:
case 3917:
case 3242:
case 2340:
case 4027:
case 2537:
case 660:
case 2508:
case 1851:
case 2651:
case 1983:
case 2644:
case 1844:
case 3881:
case 2135:
case 3766:
case 2071:
case 1300:
case 9:
case 1019:
case 684:
case 1016:
case 2788:
case 1491:
case 396:
case 211:
case 4043:
case 3191:
case 2345:
case 3201:
case 3744:
case 1781:
case 3283:
case 2541:
case 826:
case 1072:
case 3115:
case 423:
case 935:
case 143:
case 1362:
case 313:
case 3791:
case 2578:
case 1293:
case 667:
case 2892:
case 1692:
case 122:
case 263:
case 4030:
case 3536:
case 1469:
case 1466:
case 2520:
case 1815:
case 1698:
case 3539:
case 1041:
case 962:
case 2182:
case 93:
case 644:
case 1065:
case 4067:
case 2691:
case 2920:
case 2127:
case 2972:
case 361:
case 3481:
case 1375:
case 3936:
case 1571:
case 511:
case 2042:
case 3715:
case 3144:
case 2994:
case 1037:
case 4035:
case 1008:
case 1451:
case 1387:
case 3313:
case 401:
case 3993:
case 2610:
case 1810:
case 2321:
case 352:
case 2626:
case 1328:
case 1826:
case 1236:
case 1060:
case 1054:
case 822:
case 2001:
case 3873:
case 2333:
case 605:
case 2767:
case 2458:
case 1820:
case 2620:
case 2273:
case 216:
case 3639:
case 2672:
case 1441:
case 3484:
case 952:
case 391:
case 3719:
case 4093:
case 2991:
case 3141:
case 339:
case 1184:
case 657:
case 3935:
case 1376:
case 1894:
case 2678:
case 1592:
case 253:
case 3636:
case 3772:
case 430:
case 1044:
case 1671:
case 697:
case 3535:
case 1267:
case 3331:
case 2619:
case 1992:
case 1819:
case 1816:
case 1318:
case 2616:
case 821:
case 3794:
case 1998:
case 2915:
case 351:
case 992:
case 2736:
case 1402:
case 2004:
case 2625:
case 2510:
case 3102:
case 961:
case 272:
case 2793:
case 1408:
case 121:
case 3108:
case 2929:
case 4036:
case 3298:
case 2483:
case 3725:
case 2058:
case 3693:
case 3967:
case 2390:
case 4039:
case 3708:
case 3363:
case 2193:
case 3943:
case 956:
case 1854:
case 2951:
case 335:
case 1601:
case 2801:
case 1029:
case 1683:
case 437:
case 783:
case 1558:
case 1837:
case 1227:
case 2608:
case 650:
case 2551:
case 3754:
case 3760:
case 1952:
case 3125:
case 572:
case 1802:
case 2203:
case 1504:
case 996:
case 481:
case 934:
case 2665:
case 1865:
case 1648:
case 2346:
case 678:
case 2966:
case 2753:
case 3982:
case 3116:
case 593:
case 3741:
case 2471:
case 276:
case 1419:
case 3988:
case 1478:
case 1494:
case 516:
case 3588:
case 3252:
case 138:
case 3194:
case 2566:
case 1015:
case 1420:
case 3582:
case 2098:
case 1472:
case 553:
case 3884:
case 1841:
case 3120:
case 3258:
case 2139:
case 3172:
case 3293:
case 1791:
case 383:
case 3692:
case 1536:
case 3469:
case 237:
case 852:
case 3674:
case 3466:
case 412:
case 1539:
case 173:
case 3065:
case 614:
case 281:
case 1939:
case 1936:
case 3375:
case 1715:
case 2798:
case 1357:
case 892:
case 3571:
case 2225:
case 476:
case 2216:
case 3008:
case 861:
case 873:
case 3451:
case 3387:
case 1726:
case 1729:
case 3002:
case 1993:
case 1667:
case 1593:
case 2294:
case 2152:
case 152:
case 4074:
case 2017:
case 3054:
case 2220:
case 3239:
case 502:
case 3322:
case 3501:
case 3429:
case 856:
case 3658:
case 453:
case 1129:
case 1126:
case 202:
case 1517:
case 3426:
case 3652:
case 1643:
case 3604:
case 1242:
case 3025:
case 3410:
case 1397:
case 2467:
case 2265:
case 230:
case 896:
case 3983:
case 3844:
case 2202:
case 3542:
case 1803:
case 1953:
case 2435:
case 472:
case 3019:
case 581:
case 3016:
case 2827:
case 3548:
case 2237:
case 4004:
case 241:
case 2984:
case 134:
case 1191:
case 4052:
case 3020:
case 73:
case 3703:
case 2882:
case 1201:
case 3866:
case 1682:
case 3781:
case 1744:
case 2174:
case 2198:
case 2389:
case 3948:
case 537:
case 3078:
case 3094:
case 3362:
case 343:
case 674:
case 113:
case 1553:
case 1708:
case 1737:
case 242:
case 61:
case 3026:
case 1617:
case 3860:
case 3552:
case 3854:
case 2269:
case 471:
case 2030:
case 1702:
case 582:
case 943:
case 463:
case 2380:
case 3558:
case 3227:
case 3837:
case 3958:
case 3808:
case 3306:
case 2377:
case 4042:
case 3802:
case 2244:
case 1125:
case 3952:
case 2701:
case 3504:
case 4048:
case 3309:
case 2067:
case 675:
case 3425:
case 773:
case 3416:
case 3865:
case 3091:
case 1982:
case 1741:
case 2581:
case 2385:
case 1204:
case 3419:
case 3478:
case 688:
case 1588:
case 1765:
case 2748:
case 338:
case 1252:
case 2903:
case 1653:
case 1582:
case 3015:
case 2684:
case 3841:
case 3472:
case 2439:
case 1172:
case 1258:
case 3066:
case 3230:
case 3820:
case 191:
case 2839:
case 1323:
case 1719:
case 139:
case 2332:
case 3376:
case 3878:
case 1935:
case 648:
case 1716:
case 1636:
case 2307:
case 862:
case 2453:
case 1081:
case 679:
case 3671:
case 3267:
case 1535:
case 501:
case 2142:
case 3819:
case 3992:
case 1331:
case 3816:
case 3465:
case 1778:
case 3998:
case 1165:
case 151:
case 3402:
case 1567:
case 3825:
case 796:
case 411:
case 851:
case 67:
case 3408:
case 3051:
case 1930:
case 2973:
case 4071:
case 321:
case 2573:
case 839:
case 891:
case 1725:
case 1160:
case 2893:
case 1693:
case 162:
case 3460:
case 1347:
case 3591:
case 2794:
case 1027:
case 3616:
case 3736:
case 1148:
case 3915:
case 3739:
case 2772:
case 2081:
case 1142:
case 393:
case 2535:
case 1088:
case 3153:
case 353:
case 2716:
case 426:
case 3678:
case 882:
case 1338:
case 2636:
case 1836:
case 1839:
case 3311:
case 316:
case 2639:
case 2484:
case 291:
case 1771:
case 3273:
case 3515:
case 146:
case 239:
case 2141:
case 702:
case 182:
case 2154:
case 2693:
case 1893:
case 3117:
case 2347:
case 3526:
case 3052:
case 4020:
case 963:
case 846:
case 3529:
case 1573:
case 2530:
case 3401:
case 971:
case 3324:
case 4078:
case 1101:
case 3793:
case 372:
case 2137:
case 1043:
case 3926:
case 5:
case 3510:
case 911:
case 1783:
case 3281:
case 1244:
case 1067:
case 4065:
case 3608:
case 3637:
case 2760:
case 3717:
case 3551:
case 2754:
case 3883:
case 886:
case 562:
case 2702:
case 1266:
case 737:
case 53:
case 142:
case 1493:
case 1269:
case 3654:
case 3660:
case 3193:
case 2617:
case 2943:
case 1439:
case 4054:
case 2884:
case 3641:
case 1684:
case 3074:
case 3098:
case 2258:
case 186:
case 2120:
case 668:
case 3350:
case 3092:
case 3364:
case 842:
case 2653:
case 3944:
case 1981:
case 2194:
case 2119:
case 1385:
case 2741:
case 551:
case 1171:
case 4008:
case 2988:
case 2527:
case 3346:
case 4002:
case 3753:
case 2116:
case 1265:
case 592:
case 976:
case 3804:
case 3502:
case 1843:
case 3340:
case 1467:
case 102:
case 746:
case 670:
case 3554:
case 3902:
case 3284:
case 2473:
case 1430:
case 3858:
case 3356:
case 3937:
case 3130:
case 3492:
case 3727:
case 1386:
case 2688:
case 658:
case 1888:
case 1192:
case 1254:
case 802:
case 1036:
case 617:
case 2744:
case 3345:
case 2682:
case 1882:
case 3666:
case 3498:
case 625:
case 256:
case 912:
case 723:
case 1198:
case 2115:
case 1174:
case 311:
case 1237:
case 830:
case 2627:
case 3788:
case 234:
case 2766:
case 3782:
case 1603:
case 3071:
case 3644:
case 573:
case 3135:
case 4051:
case 561:
case 3042:
case 1798:
case 1774:
case 2715:
case 972:
case 1835:
case 3978:
case 2635:
case 4010:
case 1427:
case 3516:
case 273:
case 261:
case 181:
case 2084:
case 3898:
case 513:
case 2166:
case 3916:
case 3892:
case 1488:
case 363:
case 2791:
case 3399:
case 4029:
case 137:
case 3188:
case 2536:
case 1158:
case 1220:
case 1830:
case 3767:
case 3333:
case 916:
case 837:
case 1278:
case 3925:
case 1017:
case 4015:
case 3404:
case 701:
case 1104:
case 3321:
case 1219:
case 2667:
case 1867:
case 3610:
case 2151:
case 993:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761026401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,];
var gg_b = "1761026401/";

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
