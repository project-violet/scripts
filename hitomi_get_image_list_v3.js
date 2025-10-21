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
case 1787:
case 627:
case 1275:
case 3981:
case 831:
case 2001:
case 3182:
case 933:
case 3286:
case 2138:
case 1638:
case 3178:
case 957:
case 592:
case 3601:
case 1405:
case 640:
case 1853:
case 337:
case 580:
case 2776:
case 3027:
case 257:
case 3592:
case 3885:
case 296:
case 3764:
case 1078:
case 1876:
case 3513:
case 2228:
case 2759:
case 353:
case 2863:
case 1500:
case 2313:
case 302:
case 2577:
case 1292:
case 1957:
case 3311:
case 988:
case 2696:
case 429:
case 2609:
case 515:
case 3110:
case 1328:
case 1219:
case 2967:
case 1213:
case 3646:
case 123:
case 3575:
case 4069:
case 770:
case 860:
case 3096:
case 2375:
case 1004:
case 2430:
case 262:
case 1586:
case 1748:
case 112:
case 3898:
case 2046:
case 2989:
case 2535:
case 2983:
case 3965:
case 2462:
case 288:
case 1382:
case 1433:
case 755:
case 684:
case 2092:
case 2474:
case 3795:
case 3466:
case 967:
case 1980:
case 4050:
case 3434:
case 203:
case 3042:
case 2019:
case 2204:
case 267:
case 3525:
case 2114:
case 2797:
case 1614:
case 2325:
case 801:
case 1600:
case 363:
case 1246:
case 3613:
case 3747:
case 3994:
case 279:
case 1832:
case 3396:
case 54:
case 483:
case 1906:
case 1912:
case 2677:
case 2850:
case 2760:
case 491:
case 3788:
case 952:
case 2346:
case 1999:
case 1750:
case 3303:
case 3637:
case 2408:
case 1471:
case 332:
case 2726:
case 3238:
case 2186:
case 1686:
case 252:
case 3011:
case 1417:
case 3675:
case 2037:
case 979:
case 2278:
case 1135:
case 613:
case 2635:
case 1506:
case 2996:
case 1055:
case 605:
case 1349:
case 2291:
case 1512:
case 1343:
case 596:
case 1167:
case 3083:
case 280:
case 1593:
case 3762:
case 2909:
case 1599:
case 1498:
case 3184:
case 3724:
case 2823:
case 2451:
case 3280:
case 1729:
case 2689:
case 3067:
case 2683:
case 1485:
case 588:
case 795:
case 1454:
case 966:
case 1002:
case 3681:
case 1580:
case 562:
case 306:
case 3090:
case 915:
case 824:
case 3102:
case 3206:
case 2249:
case 1391:
case 3116:
case 2243:
case 4029:
case 2690:
case 1190:
case 266:
case 1541:
case 3293:
case 2807:
case 3426:
case 2977:
case 3149:
case 2112:
case 944:
case 1557:
case 2911:
case 1731:
case 2199:
case 1699:
case 2193:
case 1693:
case 1144:
case 567:
case 503:
case 3460:
case 1355:
case 635:
case 3389:
case 3432:
case 2935:
case 3383:
case 2589:
case 3044:
case 2488:
case 789:
case 2815:
case 2365:
case 4073:
case 1820:
case 887:
case 1680:
case 2720:
case 1265:
case 1866:
case 2879:
case 1316:
case 155:
case 741:
case 4015:
case 297:
case 3992:
case 2495:
case 3257:
case 2340:
case 3839:
case 336:
case 1641:
case 3833:
case 2141:
case 2942:
case 2734:
case 579:
case 3390:
case 1437:
case 3031:
case 3218:
case 3329:
case 3323:
case 1324:
case 611:
case 2615:
case 769:
case 1221:
case 1570:
case 1744:
case 3894:
case 704:
case 2631:
case 1008:
case 2950:
case 647:
case 199:
case 587:
case 1330:
case 330:
case 1893:
case 2352:
case 3015:
case 2712:
case 3552:
case 3671:
case 3270:
case 519:
case 2262:
case 2679:
case 1666:
case 2673:
case 2741:
case 3174:
case 361:
case 1841:
case 1156:
case 558:
case 1620:
case 3079:
case 2780:
case 2120:
case 3400:
case 143:
case 1945:
case 2224:
case 3056:
case 201:
case 3414:
case 2033:
case 449:
case 777:
case 3768:
case 2305:
case 1789:
case 1129:
case 1446:
case 1783:
case 1308:
case 2410:
case 406:
case 1062:
case 1030:
case 300:
case 2515:
case 2948:
case 3784:
case 3865:
case 2052:
case 3755:
case 3162:
case 3023:
case 998:
case 3961:
case 1857:
case 3029:
case 862:
case 3652:
case 718:
case 2371:
case 2867:
case 3379:
case 1566:
case 2579:
case 3373:
case 3840:
case 1953:
case 590:
case 4083:
case 3539:
case 2607:
case 3954:
case 1107:
case 2339:
case 286:
case 9:
case 2482:
case 351:
case 2021:
case 2890:
case 3702:
case 2963:
case 2118:
case 3881:
case 4067:
case 2208:
case 3621:
case 1401:
case 642:
case 3480:
case 1364:
case 1966:
case 2973:
case 1742:
case 1553:
case 10:
case 550:
case 474:
case 287:
case 3892:
case 1261:
case 2700:
case 1697:
case 391:
case 2197:
case 2956:
case 3813:
case 1576:
case 1095:
case 609:
case 3369:
case 177:
case 1800:
case 3819:
case 3363:
case 2251:
case 84:
case 31:
case 1645:
case 664:
case 3441:
case 1920:
case 856:
case 1047:
case 4011:
case 2587:
case 4077:
case 2491:
case 987:
case 1088:
case 919:
case 501:
case 1886:
case 3598:
case 799:
case 1072:
case 2222:
case 2443:
case 338:
case 2126:
case 1626:
case 3412:
case 2449:
case 258:
case 2877:
case 66:
case 463:
case 3728:
case 3561:
case 3259:
case 1632:
case 3253:
case 1254:
case 3837:
case 1777:
case 628:
case 2160:
case 1660:
case 219:
case 224:
case 1659:
case 2288:
case 560:
case 2153:
case 3801:
case 3825:
case 1347:
case 3164:
case 2669:
case 1481:
case 3087:
case 1163:
case 1676:
case 402:
case 3260:
case 1597:
case 3685:
case 866:
case 598:
case 4003:
case 1918:
case 13:
case 924:
case 2054:
case 639:
case 3069:
case 990:
case 3698:
case 2061:
case 2929:
case 22:
case 268:
case 721:
case 2295:
case 3457:
case 134:
case 1388:
case 968:
case 1532:
case 3661:
case 65:
case 1709:
case 586:
case 2550:
case 646:
case 1465:
case 575:
case 1703:
case 3710:
case 531:
case 4027:
case 3846:
case 1796:
case 3151:
case 1560:
case 892:
case 3297:
case 2809:
case 2484:
case 308:
case 92:
case 3391:
case 1116:
case 692:
case 2616:
case 1925:
case 1901:
case 1212:
case 2140:
case 1206:
case 2487:
case 410:
case 1640:
case 2602:
case 1293:
case 1299:
case 3541:
case 527:
case 3190:
case 85:
case 3818:
case 3002:
case 2181:
case 2705:
case 2469:
case 2568:
case 4030:
case 3368:
case 737:
case 2463:
case 205:
case 2982:
case 680:
case 753:
case 106:
case 4062:
case 2978:
case 2057:
case 702:
case 2655:
case 1155:
case 2684:
case 948:
case 3723:
case 854:
case 3461:
case 2824:
case 666:
case 2862:
case 248:
case 2448:
case 2312:
case 3349:
case 3506:
case 3870:
case 370:
case 2904:
case 1730:
case 476:
case 2393:
case 2910:
case 3498:
case 1241:
case 3593:
case 1762:
case 485:
case 1946:
case 2830:
case 1089:
case 499:
case 2502:
case 1992:
case 3834:
case 1257:
case 3302:
case 1191:
case 355:
case 828:
case 235:
case 3866:
case 193:
case 77:
case 1913:
case 2267:
case 1445:
case 3641:
case 181:
case 2080:
case 136:
case 1497:
case 3091:
case 1581:
case 2668:
case 1168:
case 873:
case 971:
case 2289:
case 2808:
case 3715:
case 3355:
case 3384:
case 1460:
case 3281:
case 1975:
case 2006:
case 926:
case 2099:
case 1565:
case 2093:
case 1383:
case 443:
case 1389:
case 1432:
case 3606:
case 2194:
case 513:
case 1143:
case 3612:
case 2290:
case 1367:
case 2928:
case 3693:
case 3699:
case 2955:
case 3586:
case 378:
case 2984:
case 312:
case 240:
case 1096:
case 1009:
case 3010:
case 1003:
case 43:
case 633:
case 1335:
case 1311:
case 3196:
case 1751:
case 3292:
case 227:
case 3957:
case 102:
case 1214:
case 4022:
case 1377:
case 2528:
case 3213:
case 2429:
case 1646:
case 2146:
case 3219:
case 2423:
case 940:
case 1110:
case 3109:
case 1537:
case 2836:
case 1027:
case 1940:
case 3859:
case 3763:
case 3769:
case 137:
case 459:
case 3514:
case 2785:
case 2864:
case 1601:
case 2314:
case 434:
case 1519:
case 1418:
case 2300:
case 3876:
case 1342:
case 3237:
case 1854:
case 3078:
case 706:
case 688:
case 1764:
case 1286:
case 2682:
case 1722:
case 3275:
case 1981:
case 1178:
case 2678:
case 2175:
case 3417:
case 1675:
case 1077:
case 3471:
case 3135:
case 894:
case 4047:
case 3201:
case 2415:
case 2888:
case 3111:
case 2504:
case 1396:
case 749:
case 4095:
case 3906:
case 1303:
case 1637:
case 3993:
case 3999:
case 2872:
case 1035:
case 1788:
case 2628:
case 2847:
case 652:
case 1525:
case 1501:
case 1692:
case 317:
case 3941:
case 1420:
case 2113:
case 89:
case 213:
case 922:
case 107:
case 28:
case 2968:
case 3845:
case 3433:
case 913:
case 2338:
case 2014:
case 2456:
case 3382:
case 222:
case 793:
case 2578:
case 781:
case 2473:
case 736:
case 1466:
case 1188:
case 1561:
case 264:
case 3150:
case 511:
case 2828:
case 2263:
case 417:
case 369:
case 2672:
case 2551:
case 1172:
case 2269:
case 3285:
case 3660:
case 1499:
case 1493:
case 2444:
case 304:
case 3735:
case 687:
case 547:
case 3626:
case 1412:
case 964:
case 1348:
case 209:
case 59:
case 2287:
case 3920:
case 3047:
case 3298:
case 3645:
case 11:
case 26:
case 2097:
case 761:
case 871:
case 3322:
case 2248:
case 619:
case 1195:
case 2695:
case 1387:
case 1892:
case 3934:
case 273:
case 2719:
case 3742:
case 2045:
case 928:
case 489:
case 2359:
case 3966:
case 1147:
case 3364:
case 2647:
case 2376:
case 3576:
case 3095:
case 183:
case 377:
case 2792:
case 1554:
case 3697:
case 191:
case 1933:
case 1350:
case 3703:
case 1710:
case 2962:
case 3465:
case 3970:
case 2804:
case 254:
case 2161:
case 2746:
case 334:
case 3388:
case 2483:
case 3532:
case 108:
case 2360:
case 4082:
case 1151:
case 359:
case 2930:
case 1846:
case 2467:
case 1245:
case 624:
case 2198:
case 1698:
case 1457:
case 3051:
case 954:
case 2924:
case 318:
case 33:
case 25:
case 2490:
case 3838:
case 3395:
case 690:
case 1905:
case 3440:
case 2076:
case 4004:
case 2878:
case 412:
case 751:
case 2622:
case 1122:
case 1782:
case 2547:
case 1801:
case 1825:
case 1164:
case 542:
case 3653:
case 1232:
case 423:
case 62:
case 2636:
case 3022:
case 2185:
case 1260:
case 1685:
case 95:
case 2154:
case 2397:
case 1087:
case 3163:
case 129:
case 2442:
case 3518:
case 3419:
case 2223:
case 813:
case 3945:
case 29:
case 2868:
case 2318:
case 911:
case 3413:
case 509:
case 2758:
case 2034:
case 343:
case 1079:
case 920:
case 1073:
case 3074:
case 247:
case 783:
case 1414:
case 4049:
case 791:
case 3173:
case 2891:
case 3179:
case 2020:
case 71:
case 99:
case 1791:
case 3156:
case 2133:
case 564:
case 2849:
case 3812:
case 1894:
case 2435:
case 3806:
case 3570:
case 1552:
case 2171:
case 1671:
case 3960:
case 1486:
case 1015:
case 601:
case 738:
case 1749:
case 3475:
case 3330:
case 2117:
case 573:
case 1323:
case 1031:
case 2608:
case 884:
case 3926:
case 3520:
case 1881:
case 3618:
case 2922:
case 2121:
case 2105:
case 2781:
case 1605:
case 3953:
case 2802:
case 1840:
case 3534:
case 3959:
case 2936:
case 385:
case 2366:
case 3566:
case 2574:
case 2740:
case 470:
case 3976:
case 3217:
case 4055:
case 3271:
case 1985:
case 151:
case 1539:
case 4084:
case 3107:
case 1234:
case 3670:
case 1023:
case 1266:
case 2279:
case 1162:
case 2951:
case 1517:
case 2630:
case 1130:
case 310:
case 3239:
case 3024:
case 242:
case 3233:
case 321:
case 1220:
case 3308:
case 1998:
case 3123:
case 3783:
case 3129:
case 3446:
case 631:
case 4016:
case 1124:
case 1865:
case 100:
case 4002:
case 1013:
case 4032:
case 1745:
case 1019:
case 2980:
case 3578:
case 756:
case 3968:
case 797:
case 38:
case 1474:
case 1092:
case 1527:
case 2538:
case 2439:
case 3456:
case 322:
case 2433:
case 3582:
case 241:
case 4060:
case 3209:
case 3203:
case 2941:
case 3119:
case 941:
case 2600:
case 3113:
case 2246:
case 1100:
case 1797:
case 632:
case 1325:
case 1301:
case 3847:
case 3991:
case 1204:
case 167:
case 3192:
case 217:
case 1503:
case 555:
case 3510:
case 2999:
case 1509:
case 2310:
case 1944:
case 67:
case 4045:
case 1346:
case 1732:
case 1850:
case 1677:
case 3086:
case 3943:
case 2304:
case 1596:
case 2832:
case 2906:
case 2135:
case 663:
case 46:
case 1037:
case 3431:
case 2417:
case 1282:
case 1726:
case 989:
case 428:
case 152:
case 766:
case 876:
case 3822:
case 3235:
case 1887:
case 3682:
case 602:
case 1001:
case 1138:
case 3407:
case 2638:
case 1627:
case 1319:
case 1759:
case 1869:
case 1753:
case 3300:
case 196:
case 2853:
case 3211:
case 1776:
case 157:
case 3754:
case 295:
case 3038:
case 3916:
case 2219:
case 3242:
case 1967:
case 2213:
case 3761:
case 327:
case 2292:
case 2957:
case 792:
case 1577:
case 3798:
case 1462:
case 188:
case 4059:
case 1535:
case 162:
case 821:
case 278:
case 2748:
case 212:
case 3955:
case 923:
case 1430:
case 1644:
case 2144:
case 326:
case 1199:
case 1193:
case 4020:
case 2693:
case 3717:
case 2606:
case 2612:
case 1112:
case 411:
case 3450:
case 681:
case 541:
case 3093:
case 1365:
case 636:
case 3099:
case 49:
case 693:
case 1488:
case 144:
case 4034:
case 2043:
case 2049:
case 3808:
case 2715:
case 2986:
case 869:
case 3006:
case 1472:
case 2680:
case 2265:
case 1720:
case 1180:
case 80:
case 3158:
case 3283:
case 955:
case 625:
case 1255:
case 767:
case 3267:
case 1590:
case 1734:
case 2900:
case 1856:
case 2773:
case 1766:
case 197:
case 589:
case 2068:
case 1340:
case 3502:
case 3516:
case 371:
case 2866:
case 2316:
case 606:
case 1909:
case 1903:
case 788:
case 2167:
case 4018:
case 3830:
case 818:
case 762:
case 2055:
case 3752:
case 872:
case 3862:
case 2512:
case 3549:
case 348:
case 2343:
case 1394:
case 270:
case 2870:
case 1996:
case 2461:
case 2183:
case 1683:
case 1268:
case 1829:
case 192:
case 3684:
case 3655:
case 1718:
case 1358:
case 4070:
case 796:
case 1464:
case 3380:
case 512:
case 916:
case 3463:
case 3181:
case 2818:
case 2002:
case 3705:
case 3469:
case 757:
case 3982:
case 2485:
case 2016:
case 2938:
case 2454:
case 166:
case 2541:
case 1807:
case 3341:
case 2190:
case 2391:
case 3602:
case 3487:
case 1515:
case 651:
case 405:
case 3624:
case 53:
case 3496:
case 2030:
case 1404:
case 910:
case 3855:
case 3508:
case 3070:
case 2789:
case 921:
case 2129:
case 1629:
case 2446:
case 2123:
case 823:
case 160:
case 3630:
case 1274:
case 1317:
case 1867:
case 3152:
case 768:
case 2233:
case 1371:
case 2024:
case 2767:
case 72:
case 2670:
case 1170:
case 3279:
case 1531:
case 3273:
case 782:
case 2374:
case 1969:
case 600:
case 1021:
case 1005:
case 2217:
case 1890:
case 1963:
case 3740:
case 3427:
case 2976:
case 175:
case 1607:
case 2271:
case 3936:
case 559:
case 2953:
case 3802:
case 3018:
case 276:
case 3816:
case 1573:
case 2566:
case 1579:
case 1478:
case 285:
case 895:
case 2401:
case 2425:
case 1987:
case 976:
case 3121:
case 3781:
case 985:
case 1208:
case 572:
case 518:
case 1118:
case 724:
case 2618:
case 1:
case 719:
case 2205:
case 2926:
case 661:
case 1615:
case 889:
case 1529:
case 3608:
case 4041:
case 2893:
case 3207:
case 1712:
case 471:
case 1706:
case 1844:
case 1799:
case 2131:
case 1631:
case 3843:
case 3562:
case 4080:
case 1793:
case 2008:
case 1950:
case 2806:
case 3988:
case 577:
case 2252:
case 3133:
case 2997:
case 2841:
case 311:
case 3139:
case 1656:
case 1507:
case 1230:
case 2179:
case 3891:
case 3020:
case 3947:
case 1679:
case 2666:
case 426:
case 1741:
case 1673:
case 1166:
case 817:
case 504:
case 630:
case 1321:
case 3995:
case 347:
case 4006:
case 2492:
case 1224:
case 1039:
case 2880:
case 1033:
case 243:
case 3223:
case 2419:
case 2518:
case 3442:
case 3868:
case 787:
case 3066:
case 2620:
case 1120:
case 3397:
case 2597:
case 1669:
case 2169:
case 1663:
case 3664:
case 3250:
case 1288:
case 124:
case 3636:
case 1159:
case 7:
case 2653:
case 510:
case 1687:
case 3595:
case 2440:
case 3076:
case 2727:
case 2187:
case 1402:
case 865:
case 3622:
case 3053:
case 3490:
case 23:
case 3059:
case 3345:
case 816:
case 2051:
case 870:
case 1295:
case 1648:
case 168:
case 3924:
case 934:
case 2148:
case 3326:
case 1929:
case 959:
case 1803:
case 585:
case 3810:
case 1484:
case 3930:
case 190:
case 2372:
case 2796:
case 3651:
case 3572:
case 1247:
case 3962:
case 2703:
case 3483:
case 1896:
case 918:
case 2532:
case 3804:
case 3489:
case 354:
case 3588:
case 2970:
case 3332:
case 2800:
case 3974:
case 1842:
case 1468:
case 2697:
case 1714:
case 1354:
case 1197:
case 638:
case 1385:
case 701:
case 2742:
case 2553:
case 3359:
case 3713:
case 599:
case 2458:
case 373:
case 1979:
case 2364:
case 3647:
case 2814:
case 90:
case 2322:
case 3248:
case 328:
case 3097:
case 3522:
case 3695:
case 1587:
case 2920:
case 2047:
case 1145:
case 36:
case 614:
case 3060:
case 1786:
case 1126:
case 1915:
case 158:
case 1449:
case 1548:
case 3287:
case 3775:
case 683:
case 543:
case 1398:
case 969:
case 3032:
case 2088:
case 3444:
case 3672:
case 3828:
case 2351:
case 3263:
case 2777:
case 904:
case 1160:
case 2660:
case 1811:
case 413:
case 61:
case 364:
case 1361:
case 1132:
case 1650:
case 3737:
case 356:
case 281:
case 2839:
case 1080:
case 3058:
case 3734:
case 2390:
case 81:
case 1267:
case 2445:
case 3942:
case 3590:
case 2919:
case 1691:
case 171:
case 722:
case 574:
case 1502:
case 2540:
case 2992:
case 78:
case 2774:
case 1283:
case 713:
case 1289:
case 1158:
case 3720:
case 3180:
case 532:
case 883:
case 993:
case 3255:
case 4071:
case 891:
case 2383:
case 3488:
case 344:
case 3589:
case 507:
case 2389:
case 2432:
case 3365:
case 1099:
case 3815:
case 1093:
case 2565:
case 249:
case 3094:
case 2975:
case 57:
case 1006:
case 4039:
case 2460:
case 401:
case 655:
case 2937:
case 949:
case 3193:
case 126:
case 3199:
case 3567:
case 1290:
case 2367:
case 2143:
case 2426:
case 838:
case 225:
case 2149:
case 1194:
case 1357:
case 3202:
case 2694:
case 3690:
case 1244:
case 3807:
case 1341:
case 366:
case 1140:
case 2206:
case 1487:
case 2640:
case 1602:
case 2102:
case 3081:
case 2116:
case 845:
case 3249:
case 2212:
case 206:
case 1380:
case 3436:
case 2821:
case 3718:
case 2090:
case 3358:
case 2453:
case 1982:
case 4052:
case 1721:
case 1568:
case 1469:
case 2681:
case 829:
case 3927:
case 1463:
case 3683:
case 4:
case 665:
case 1655:
case 2155:
case 808:
case 2184:
case 1684:
case 3829:
case 2946:
case 537:
case 2089:
case 2083:
case 2344:
case 1910:
case 2241:
case 3065:
case 1399:
case 2762:
case 2594:
case 1306:
case 4021:
case 553:
case 740:
case 3996:
case 1448:
case 1549:
case 486:
case 1312:
case 1543:
case 1431:
case 2077:
case 3186:
case 352:
case 3282:
case 232:
case 974:
case 617:
case 1175:
case 1227:
case 3346:
case 3732:
case 1872:
case 2128:
case 932:
case 274:
case 2788:
case 2546:
case 1628:
case 2303:
case 3408:
case 3509:
case 3503:
case 2396:
case 2994:
case 2772:
case 3075:
case 1943:
case 3850:
case 641:
case 3677:
case 581:
case 2613:
case 2619:
case 3642:
case 3210:
case 1209:
case 2747:
case 2420:
case 1296:
case 419:
case 3204:
case 367:
case 2692:
case 3301:
case 1847:
case 3325:
case 1991:
case 3114:
case 2501:
case 1473:
case 2466:
case 27:
case 3019:
case 2042:
case 303:
case 1895:
case 1338:
case 1582:
case 963:
case 735:
case 771:
case 458:
case 122:
case 861:
case 3474:
case 3092:
case 3527:
case 2327:
case 3535:
case 902:
case 3046:
case 2335:
case 388:
case 3848:
case 1798:
case 3375:
case 695:
case 1386:
case 4085:
case 506:
case 1610:
case 3337:
case 3603:
case 3609:
case 1429:
case 424:
case 1528:
case 1761:
case 2200:
case 1423:
case 3577:
case 2377:
case 2311:
case 2751:
case 3511:
case 127:
case 2854:
case 2885:
case 396:
case 3990:
case 2418:
case 3542:
case 1300:
case 3753:
case 3228:
case 3319:
case 2736:
case 3863:
case 253:
case 612:
case 678:
case 1864:
case 1916:
case 2601:
case 1754:
case 1211:
case 2027:
case 2940:
case 1902:
case 3392:
case 4061:
case 3887:
case 42:
case 623:
case 937:
case 2178:
case 2981:
case 3627:
case 3138:
case 2286:
case 953:
case 1682:
case 3001:
case 1651:
case 1572:
case 2704:
case 390:
case 457:
case 208:
case 1810:
case 1489:
case 1588:
case 2661:
case 1161:
case 1746:
case 1332:
case 1483:
case 63:
case 2350:
case 3098:
case 2710:
case 496:
case 1326:
case 4001:
case 3648:
case 368:
case 382:
case 1198:
case 1467:
case 908:
case 2245:
case 3061:
case 3054:
case 2226:
case 1622:
case 3085:
case 2782:
case 2921:
case 2063:
case 659:
case 1882:
case 2778:
case 929:
case 634:
case 3176:
case 2087:
case 3272:
case 2260:
case 1701:
case 672:
case 3907:
case 2654:
case 1154:
case 945:
case 3153:
case 2136:
case 1636:
case 3159:
case 1547:
case 1250:
case 2801:
case 1664:
case 2164:
case 2837:
case 1026:
case 2276:
case 467:
case 1672:
case 1269:
case 561:
case 3877:
case 3931:
case 3361:
case 2253:
case 214:
case 3811:
case 3236:
case 2188:
case 109:
case 3835:
case 2406:
case 3786:
case 3126:
case 3449:
case 3548:
case 3443:
case 825:
case 238:
case 403:
case 4013:
case 4019:
case 3398:
case 2493:
case 2195:
case 669:
case 1695:
case 2387:
case 720:
case 1248:
case 711:
case 21:
case 3145:
case 4037:
case 881:
case 2441:
case 3385:
case 3354:
case 2933:
case 3197:
case 1376:
case 479:
case 2363:
case 3468:
case 4075:
case 2813:
case 283:
case 2369:
case 3973:
case 2147:
case 2480:
case 1536:
case 1713:
case 2892:
case 3700:
case 387:
case 530:
case 1719:
case 1359:
case 1121:
case 2605:
case 2007:
case 3:
case 2881:
case 3118:
case 2716:
case 251:
case 3482:
case 2954:
case 3607:
case 2539:
case 3556:
case 331:
case 3963:
case 3478:
case 2373:
case 1366:
case 508:
case 1802:
case 1018:
case 3371:
case 415:
case 1152:
case 2652:
case 3757:
case 3274:
case 2130:
case 3317:
case 1273:
case 466:
case 2266:
case 900:
case 2331:
case 2961:
case 2234:
case 3170:
case 2023:
case 3404:
case 2315:
case 802:
case 2755:
case 3515:
case 2865:
case 754:
case 3629:
case 1409:
case 1884:
case 676:
case 545:
case 1403:
case 3410:
case 2998:
case 1995:
case 2505:
case 2521:
case 863:
case 1868:
case 1318:
case 1229:
case 2400:
case 514:
case 807:
case 2174:
case 1674:
case 3230:
case 3656:
case 2791:
case 3507:
case 261:
case 1133:
case 2633:
case 111:
case 728:
case 2270:
case 87:
case 3673:
case 3166:
case 3706:
case 497:
case 1530:
case 350:
case 1972:
case 230:
case 3352:
case 2486:
case 2015:
case 2894:
case 1370:
case 1562:
case 3793:
case 591:
case 456:
case 3615:
case 3017:
case 51:
case 930:
case 1608:
case 2323:
case 3523:
case 764:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761069601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,];
var gg_b = "1761069601/";

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
