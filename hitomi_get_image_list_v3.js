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
case 2974:
case 2849:
case 3939:
case 976:
case 926:
case 3543:
case 2429:
case 3763:
case 95:
case 967:
case 3020:
case 1497:
case 3263:
case 3377:
case 1510:
case 2655:
case 472:
case 2362:
case 2673:
case 1625:
case 1092:
case 913:
case 2377:
case 2020:
case 1050:
case 2809:
case 950:
case 1758:
case 1379:
case 2512:
case 3457:
case 366:
case 2090:
case 1807:
case 1945:
case 2541:
case 2616:
case 3131:
case 3982:
case 181:
case 377:
case 479:
case 833:
case 1937:
case 2261:
case 4070:
case 118:
case 2524:
case 3090:
case 266:
case 2499:
case 3261:
case 3052:
case 1014:
case 509:
case 1118:
case 2131:
case 3165:
case 3506:
case 2247:
case 1039:
case 2992:
case 3080:
case 2766:
case 3288:
case 2266:
case 807:
case 3207:
case 3136:
case 2950:
case 2489:
case 1638:
case 3707:
case 1685:
case 595:
case 2165:
case 3235:
case 478:
case 3676:
case 428:
case 3489:
case 1898:
case 2707:
case 3611:
case 2207:
case 2602:
case 3950:
case 3266:
case 3572:
case 2788:
case 1709:
case 2858:
case 1828:
case 961:
case 234:
case 1863:
case 2005:
case 315:
case 658:
case 3317:
case 485:
case 3037:
case 1600:
case 3613:
case 3045:
case 1082:
case 3922:
case 1408:
case 3432:
case 3005:
case 1640:
case 2584:
case 3858:
case 1570:
case 2922:
case 2045:
case 1952:
case 4054:
case 3914:
case 1749:
case 817:
case 109:
case 3284:
case 1491:
case 1509:
case 236:
case 1843:
case 1468:
case 1139:
case 2036:
case 2784:
case 581:
case 2180:
case 1660:
case 2065:
case 1549:
case 1803:
case 1486:
case 863:
case 1395:
case 3475:
case 1769:
case 749:
case 1269:
case 3810:
case 3453:
case 3206:
case 3137:
case 742:
case 2547:
case 3706:
case 1444:
case 2918:
case 1182:
case 1931:
case 2662:
case 2373:
case 2267:
case 2535:
case 298:
case 2246:
case 2677:
case 3588:
case 2772:
case 3918:
case 458:
case 2706:
case 251:
case 780:
case 84:
case 2206:
case 2588:
case 3772:
case 1812:
case 3566:
case 3272:
case 1421:
case 844:
case 1404:
case 2451:
case 3246:
case 1936:
case 3224:
case 2212:
case 2617:
case 622:
case 2712:
case 3701:
case 36:
case 2561:
case 459:
case 2241:
case 2978:
case 3456:
case 2741:
case 2313:
case 260:
case 1254:
case 4049:
case 3712:
case 264:
case 2120:
case 3617:
case 2201:
case 2224:
case 3033:
case 2724:
case 3741:
case 360:
case 2456:
case 1192:
case 1300:
case 2870:
case 956:
case 3376:
case 1496:
case 3031:
case 2203:
case 1385:
case 343:
case 3342:
case 2703:
case 974:
case 2294:
case 3563:
case 2794:
case 243:
case 2342:
case 3703:
case 2031:
case 1710:
case 679:
case 1558:
case 2243:
case 920:
case 108:
case 3794:
case 2563:
case 2528:
case 1939:
case 425:
case 2092:
case 859:
case 2625:
case 1673:
case 1655:
case 2510:
case 2050:
case 1809:
case 2258:
case 1020:
case 1377:
case 3459:
case 3510:
case 4046:
case 505:
case 1974:
case 2459:
case 2980:
case 1594:
case 551:
case 1429:
case 3258:
case 3758:
case 1133:
case 2866:
case 776:
case 1457:
case 3379:
case 3360:
case 726:
case 1524:
case 3695:
case 75:
case 2835:
case 767:
case 536:
case 4084:
case 2118:
case 1982:
case 2014:
case 2847:
case 127:
case 1090:
case 2807:
case 1798:
case 2360:
case 2888:
case 3334:
case 2379:
case 3905:
case 3847:
case 1052:
case 281:
case 1761:
case 3118:
case 1541:
case 3835:
case 1616:
case 2945:
case 4043:
case 2178:
case 2430:
case 387:
case 1506:
case 646:
case 2685:
case 1080:
case 1136:
case 1602:
case 1707:
case 2898:
case 1747:
case 1992:
case 1642:
case 4094:
case 2039:
case 1247:
case 1567:
case 1235:
case 3430:
case 1735:
case 1676:
case 607:
case 2464:
case 1489:
case 3898:
case 1611:
case 1546:
case 1266:
case 1572:
case 219:
case 1766:
case 3709:
case 1584:
case 2640:
case 212:
case 3209:
case 2990:
case 3863:
case 2408:
case 891:
case 4001:
case 2952:
case 2569:
case 130:
case 3082:
case 1922:
case 2828:
case 56:
case 134:
case 2863:
case 557:
case 3640:
case 312:
case 2209:
case 3990:
case 4041:
case 1858:
case 3570:
case 3249:
case 2600:
case 13:
case 44:
case 3749:
case 1914:
case 599:
case 2660:
case 2679:
case 309:
case 1784:
case 942:
case 1371:
case 1036:
case 663:
case 3509:
case 2078:
case 2269:
case 2270:
case 3468:
case 2486:
case 3423:
case 2174:
case 2803:
case 1065:
case 980:
case 446:
case 2843:
case 689:
case 3933:
case 209:
case 3174:
case 3549:
case 993:
case 2139:
case 2468:
case 2423:
case 3395:
case 878:
case 737:
case 1453:
case 3078:
case 828:
case 3269:
case 1137:
case 4063:
case 885:
case 1706:
case 4028:
case 3182:
case 1145:
case 2841:
case 644:
case 2493:
case 1451:
case 1507:
case 202:
case 2404:
case 64:
case 682:
case 105:
case 1588:
case 1662:
case 1373:
case 3841:
case 3493:
case 2931:
case 1918:
case 745:
case 1547:
case 640:
case 1772:
case 2801:
case 1566:
case 3812:
case 949:
case 1272:
case 3421:
case 3404:
case 302:
case 1246:
case 198:
case 948:
case 3340:
case 1724:
case 1201:
case 53:
case 1120:
case 164:
case 199:
case 2300:
case 16:
case 2192:
case 3806:
case 72:
case 1456:
case 3254:
case 3754:
case 1212:
case 1617:
case 2936:
case 1033:
case 3846:
case 1598:
case 160:
case 1741:
case 2965:
case 1561:
case 770:
case 720:
case 3426:
case 3300:
case 4007:
case 2018:
case 2210:
case 1376:
case 143:
case 433:
case 829:
case 688:
case 395:
case 1563:
case 208:
case 2558:
case 3114:
case 1703:
case 4066:
case 1415:
case 1869:
case 2496:
case 1302:
case 4035:
case 1190:
case 2884:
case 3619:
case 1794:
case 1294:
case 4047:
case 810:
case 3324:
case 1482:
case 1144:
case 3437:
case 1560:
case 1999:
case 835:
case 1649:
case 2032:
case 853:
case 3825:
case 2341:
case 2213:
case 3312:
case 2324:
case 1193:
case 3213:
case 3341:
case 3713:
case 3927:
case 1087:
case 2825:
case 814:
case 1121:
case 1700:
case 1008:
case 3405:
case 1200:
case 3562:
case 2895:
case 3276:
case 3480:
case 1285:
case 261:
case 934:
case 3242:
case 847:
case 3647:
case 3997:
case 93:
case 1439:
case 3666:
case 1168:
case 1123:
case 1064:
case 3711:
case 2175:
case 2702:
case 3211:
case 548:
case 2202:
case 2647:
case 2959:
case 2997:
case 2742:
case 3089:
case 1310:
case 2276:
case 787:
case 2562:
case 2635:
case 2776:
case 3607:
case 3202:
case 1238:
case 186:
case 2343:
case 2711:
case 719:
case 3702:
case 2577:
case 3688:
case 1474:
case 313:
case 718:
case 638:
case 3517:
case 2115:
case 1422:
case 226:
case 3698:
case 3384:
case 2838:
case 2987:
case 2490:
case 3216:
case 483:
case 25:
case 3661:
case 267:
case 1842:
case 841:
case 2908:
case 2271:
case 326:
case 2384:
case 3838:
case 1802:
case 376:
case 3452:
case 1414:
case 549:
case 3908:
case 469:
case 2099:
case 494:
case 2057:
case 4034:
case 1295:
case 2216:
case 1795:
case 1027:
case 3987:
case 1225:
case 2800:
case 2773:
case 2755:
case 2029:
case 1658:
case 2346:
case 3840:
case 1183:
case 3273:
case 3029:
case 1450:
case 3800:
case 2306:
case 1126:
case 1492:
case 977:
case 3628:
case 2840:
case 3930:
case 69:
case 2573:
case 2347:
case 2921:
case 3603:
case 3157:
case 303:
case 3944:
case 3879:
case 3694:
case 2834:
case 960:
case 694:
case 690:
case 964:
case 2199:
case 999:
case 1081:
case 3347:
case 1127:
case 3573:
case 148:
case 438:
case 4038:
case 3993:
case 683:
case 2944:
case 2694:
case 2860:
case 2624:
case 3571:
case 256:
case 1654:
case 1877:
case 3923:
case 22:
case 1159:
case 2129:
case 370:
case 3641:
case 3516:
case 3991:
case 2612:
case 2968:
case 2571:
case 1953:
case 270:
case 2641:
case 1595:
case 2991:
case 3433:
case 220:
case 3129:
case 1349:
case 37:
case 865:
case 3262:
case 3667:
case 3576:
case 936:
case 2502:
case 3646:
case 193:
case 2762:
case 1004:
case 1187:
case 2051:
case 3132:
case 18:
case 3981:
case 804:
case 1021:
case 1108:
case 2328:
case 80:
case 2777:
case 1915:
case 2996:
case 1358:
case 3502:
case 1068:
case 1760:
case 1779:
case 3465:
case 2398:
case 2053:
case 1164:
case 998:
case 1091:
case 2513:
case 873:
case 2361:
case 149:
case 4095:
case 709:
case 2465:
case 2819:
case 3926:
case 1234:
case 3361:
case 1500:
case 816:
case 1445:
case 734:
case 3048:
case 1324:
case 57:
case 3579:
case 1437:
case 52:
case 3649:
case 2008:
case 4017:
case 524:
case 2121:
case 2700:
case 73:
case 2087:
case 2104:
case 1151:
case 2855:
case 2560:
case 40:
case 3534:
case 520:
case 653:
case 3609:
case 570:
case 3193:
case 3855:
case 1713:
case 3087:
case 3104:
case 3008:
case 3121:
case 3700:
case 2649:
case 610:
case 1032:
case 1405:
case 730:
case 2957:
case 1562:
case 3816:
case 3191:
case 1776:
case 2310:
case 912:
case 1742:
case 473:
case 1480:
case 423:
case 1959:
case 1997:
case 1242:
case 1577:
case 3123:
case 1711:
case 3871:
case 2238:
case 2738:
case 1211:
case 2030:
case 2785:
case 161:
case 503:
case 1089:
case 3310:
case 3929:
case 2191:
case 1153:
case 3738:
case 3030:
case 2871:
case 2123:
case 3474:
case 1394:
case 531:
case 2414:
case 1771:
case 2802:
case 3811:
case 1384:
case 1948:
case 1271:
case 3422:
case 2027:
case 150:
case 1716:
case 1216:
case 3842:
case 1057:
case 2181:
case 1885:
case 1838:
case 2422:
case 3802:
case 2196:
case 2811:
case 1452:
case 3414:
case 537:
case 3181:
case 1908:
case 15:
case 167:
case 3932:
case 1490:
case 3295:
case 727:
case 3369:
case 3027:
case 3225:
case 4077:
case 3097:
case 2989:
case 1964:
case 4062:
case 3658:
case 1840:
case 2126:
case 3989:
case 1273:
case 1367:
case 896:
case 3813:
case 465:
case 1800:
case 2725:
case 2097:
case 2225:
case 545:
case 981:
case 1663:
case 3492:
case 2658:
case 3610:
case 3951:
case 4011:
case 883:
case 1603:
case 131:
case 1860:
case 792:
case 561:
case 1944:
case 3719:
case 1879:
case 2418:
case 3081:
case 1347:
case 894:
case 1573:
case 1335:
case 1904:
case 2610:
case 2951:
case 1015:
case 2096:
case 3418:
case 2219:
case 3309:
case 2026:
case 3083:
case 1968:
case 1717:
case 1217:
case 3159:
case 3197:
case 760:
case 2349:
case 908:
case 2595:
case 2083:
case 3026:
case 2877:
case 1986:
case 2654:
case 4013:
case 764:
case 799:
case 2309:
case 1433:
case 757:
case 2862:
case 12:
case 2197:
case 2108:
case 435:
case 453:
case 8:
case 1051:
case 1262:
case 1762:
case 60:
case 380:
case 2538:
case 2358:
case 1511:
case 604:
case 2093:
case 393:
case 1363:
case 1672:
case 284:
case 1277:
case 3187:
case 280:
case 751:
case 342:
case 600:
case 1132:
case 38:
case 414:
case 3108:
case 41:
case 2044:
case 384:
case 3093:
case 705:
case 3760:
case 2086:
case 3023:
case 55:
case 736:
case 567:
case 1465:
case 3779:
case 616:
case 526:
case 4071:
case 1436:
case 349:
case 554:
case 447:
case 673:
case 2164:
case 3478:
case 2956:
case 2540:
case 1398:
case 1684:
case 3130:
case 3734:
case 2779:
case 2279:
case 2760:
case 2023:
case 249:
case 513:
case 1513:
case 406:
case 2091:
case 3565:
case 3106:
case 1687:
case 3245:
case 1440:
case 2167:
case 2146:
case 2850:
case 2413:
case 3356:
case 1820:
case 2172:
case 2705:
case 2205:
case 1383:
case 3167:
case 1578:
case 2745:
case 585:
case 2737:
case 1049:
case 2106:
case 2237:
case 941:
case 3172:
case 2356:
case 3146:
case 3413:
case 333:
case 3088:
case 1963:
case 3442:
case 827:
case 355:
case 877:
case 1485:
case 618:
case 3476:
case 2315:
case 1396:
case 1630:
case 2402:
case 2035:
case 3689:
case 301:
case 2814:
case 2047:
case 495:
case 2184:
case 4018:
case 152:
case 2007:
case 2476:
case 255:
case 2280:
case 2780:
case 1274:
case 1381:
case 3047:
case 3814:
case 2689:
case 2411:
case 681:
case 3035:
case 1391:
case 3471:
case 246:
case 1222:
case 3839:
case 2699:
case 307:
case 2949:
case 409:
case 914:
case 2874:
case 2103:
case 91:
case 871:
case 1323:
case 2290:
case 3416:
case 3909:
case 2790:
case 2353:
case 3752:
case 3061:
case 3699:
case 3657:
case 3949:
case 1110:
case 2471:
case 346:
case 4078:
case 3290:
case 2416:
case 619:
case 910:
case 3375:
case 3533:
case 2909:
case 739:
case 1386:
case 3194:
case 2473:
case 1907:
case 3124:
case 3063:
case 1988:
case 2112:
case 3720:
case 1425:
case 732:
case 522:
case 572:
case 83:
case 1966:
case 2028:
case 2101:
case 2720:
case 2124:
case 1250:
case 3455:
case 1393:
case 1750:
case 3473:
case 1518:
case 2882:
case 1935:
case 3141:
case 2531:
case 834:
case 1659:
case 1697:
case 947:
case 487:
case 90:
case 389:
case 3520:
case 2198:
case 3615:
case 1364:
case 3231:
case 2615:
case 2043:
case 3198:
case 1330:
case 1972:
case 289:
case 363:
case 768:
case 3161:
case 217:
case 1218:
case 2731:
case 3389:
case 836:
case 2552:
case 1522:
case 2041:
case 2233:
case 4082:
case 2590:
case 282:
case 2656:
case 2733:
case 602:
case 3163:
case 2012:
case 3001:
case 3969:
case 3041:
case 412:
case 973:
case 1514:
case 3332:
case 923:
case 2417:
case 34:
case 2001:
case 597:
case 1054:
case 240:
case 1158:
case 7:
case 3656:
case 382:
case 2046:
case 1693:
case 86:
case 857:
case 375:
case 3580:
case 2072:
case 1359:
case 1621:
case 3477:
case 1539:
case 2651:
case 3072:
case 591:
case 3046:
case 860:
case 4050:
case 3651:
case 3067:
case 3910:
case 3329:
case 1149:
case 2006:
case 79:
case 3545:
case 3537:
case 1460:
case 3765:
case 1479:
case 3399:
case 3357:
case 2954:
case 2166:
case 3653:
case 288:
case 3084:
case 769:
case 794:
case 2765:
case 211:
case 2399:
case 1434:
case 1941:
case 1278:
case 1691:
case 2545:
case 3818:
case 2675:
case 2736:
case 783:
case 695:
case 2084:
case 1912:
case 4014:
case 3505:
case 1668:
case 464:
case 397:
case 1565:
case 1106:
case 1237:
case 2049:
case 1632:
case 1737:
case 3608:
case 1745:
case 3282:
case 3687:
case 2578:
case 582:
case 938:
case 3440:
case 1536:
case 3009:
case 2998:
case 3820:
case 544:
case 2326:
case 3383:
case 2782:
case 1167:
case 540:
case 2608:
case 3961:
case 297:
case 3049:
case 1205:
case 3400:
case 2820:
case 259:
case 3998:
case 3648:
case 460:
case 1850:
case 1146:
case 1442:
case 1088:
case 1780:
case 133:
case 443:
case 1280:
case 881:
case 155:
case 4031:
case 3396:
case 1476:
case 1007:
case 252:
case 1184:
case 2890:
case 2169:
case 2170:
case 1822:
case 2774:
case 3739:
case 101:
case 2381:
case 3239:
case 2274:
case 3890:
case 2630:
case 1315:
case 2396:
case 517:
case 3381:
case 3774:
case 1814:
case 2739:
case 3438:
case 492:
case 3169:
case 1402:
case 3627:
case 4036:
case 932:
case 3722:
case 1839:
case 819:
case 706:
case 3880:
case 2386:
case 1143:
case 2495:
case 1416:
case 3714:
case 1874:
case 1699:
case 1061:
case 2722:
case 621:
case 2627:
case 1353:
case 1098:
case 1375:
case 1533:
case 3495:
case 2368:
case 2323:
case 1194:
case 2880:
case 2058:
case 634:
case 258:
case 1124:
case 1101:
case 1063:
case 2966:
case 1028:
case 451:
case 2154:
case 1220:
case 2659:
case 2697:
case 2947:
case 405:
case 2304:
case 1531:
case 2425:
case 2988:
case 1455:
case 753:
case 3393:
case 498:
case 2845:
case 3304:
case 3935:
case 3659:
case 2837:
case 3321:
case 3947:
case 525:
case 716:
case 2972:
case 636:
case 2946:
case 228:
case 1615:
case 3836:
case 2010:
case 2218:
case 3681:
case 3419:
case 3865:
case 3946:
case 328:
case 3550:
case 773:
case 3696:
case 2836:
case 723:
case 3972:
case 1094:
case 501:
case 2906:
case 1003:
case 533:
case 2419:
case 2865:
case 9:
case 555:
case 3967:
case 415:
case 2514:
case 70:
case 3984:
case 1024:
case 4045:
case 2158:
case 140:
case 704:
case 2054:
case 3626:
case 698:
case 1001:
case 1128:
case 1041:
case 3387:
case 651:
case 1969:
case 2522:
case 1332:
case 700:
case 3054:
case 2626:
case 285:
case 3683:
case 3158:
case 1733:
case 182:
case 605:
case 1233:
case 272:
case 3693:
case 3109:
case 175:
case 99:
case 2644:
case 1580:
case 1477:
case 3621:
case 3359:
case 1006:
case 2903:
case 3539:
case 3994:
case 3644:
case 3833:
case 2943:
case 322:
case 2109:
case 1046:
case 664:
case 66:
case 1910:
case 983:
case 2397:
case 2070:
case 1545:
case 3831:
case 2069:
case 2941:
case 466:
case 1399:
case 1357:
case 895:
case 3479:
case 2623:
case 3686:
case 329:
case 1188:
case 379:
case 2912:
case 1236:
case 1084:
case 546:
case 3434:
case 2479:
case 1147:
case 2831:
case 3069:
case 3327:
case 962:
case 3778:
case 2582:
case 3070:
case 188:
case 279:
case 507:
case 3668:
case 3623:
case 2686:
case 1954:
case 229:
case 1911:
case 480:
case 946:
case 2515:
case 2620:
case 214:
case 758:
case 3117:
case 1942:
case 3463:
case 4044:
case 21:
case 1259:
case 1797:
case 2808:
case 2229:
case 2055:
case 2729:
case 2117:
case 253:
case 314:
case 907:
case 48:
case 442:
case 1902:
case 4004:
case 3055:
case 4093:
case 1458:
case 3887:
case 791:
case 2985:
case 3808:
case 31:
case 2498:
case 3757:
case 3652:
case 4023:
case 2900:
case 686:
case 2461:
case 1119:
case 1583:
case 4091:
case 3071:
case 2830:
case 2299:
case 2257:
case 4086:
case 2365:
case 2757:
case 1378:
case 1227:
case 1622:
case 1727:
case 2016:
case 590:
case 2071:
case 1526:
case 3461:
case 1160:
case 3011:
case 2002:
case 3331:
case 2789:
case 3551:
case 1674:
case 2466:
case 1899:
case 813:
case 1085:
case 3925:
case 448:
case 138:
case 1730:
case 241:
case 3680:
case 1134:
case 1521:
case 2042:
case 1639:
case 3466:
case 2551:
case 876:
case 568:
case 1973:
case 3827:
case 2076:
case 2331:
case 1504:
case 2637:
case 3897:
case 3859:
case 2645:
case 1409:
case 2995:
case 2013:
case 1916:
case 1971:
case 1248:
case 2333:
case 1748:
case 3605:
case 1568:
case 3177:
case 1682:
case 1287:
case 2162:
case 3645:
case 3995:
case 3013:
case 797:
case 1787:
case 3637:
case 2897:
case 5:
case 2859:
case 1000:
case 1708:
case 3732:
case 1586:
case 1449:
case 196:
case 3575:
case 3333:
case 1322:
case 3484:
case 1791:
case 3176:
case 190:
case 803:
case 1185:
case 3142:
case 2532:
case 1768:
case 1917:
case 1060:
case 1079:
case 1223:
case 2275:
case 2390:
case 1548:
case 2636:
case 2775:
case 3111:
case 2102:
case 539:
case 3532:
case 3352:
case 3881:
case 1508:
case 2484:
case 4027:
case 2896:
case 3775:
case 1469:
case 2111:
case 1815:
case 3390:
case 1138:
case 169:
case 1034:
case 194:
case 1140:
case 1856:
case 870:
case 2467:
case 820:
case 1244:
case 3883:
case 265:
case 532:
case 3251:
case 82:
case 2919:
case 2077:
case 1793:
case 1293:
case 2062:
case 2251:
case 3446:
case 1704:
case 1392:
case 3472:
case 1221:
case 1100:
case 1125:
case 3337:
case 963:
case 2412:
case 20:
case 3599:
case 3401:
case 3424:
case 4048:
case 1851:
case 300:
case 596:
case 3345:
case 2173:
case 3756:
case 3633:
case 2893:
case 3256:
case 3960:
case 3017:
case 1283:
case 845:
case 3979:
case 3844:
case 200:
case 1527:
case 3804:
case 2424:
case 989:
case 3412:
case 30:
case 2599:
case 2401:
case 680:
case 3821:
case 3934:
case 304:
case 2979:
case 2844:
case 917:
case 2960:
case 1726:
case 4008:
case 693:
case 2633:
case 3441:
case 4087:
case 2886:
case 3823:
case 778:
case 837:
case 1977:
case 323:
case 373:
case 1019:
case 3380:
case 2403:
case 2215:
case 1296:
case 168:
case 2715:
case 1618:
case 538:
case 2529:
case 2631:
case 3116:
case 1962:
case 3443:
case 1597:
case 2494:
case 1339:
case 3715:
case 1875:
case 1410:
case 1853:
case 273:
case 2380:
case 3886:
case 1281:
case 1374:
case 1195:
case 649:
case 3631:
case 2891:
case 940:
case 486:
case 4030:
case 3529:
case 3596:
case 1848:
case 153:
case 1117:
case 445:
case 3692:
case 3259:
case 2832:
case 1463:
case 3942:
case 565:
case 1985:
case 3976:
case 110:
case 1620:
case 332:
case 1515:
case 2596:
case 1055:
case 1729:
case 3458:
case 1229:
case 3581:
case 2759:
case 2025:
case 2797:
case 11:
case 2913:
case 2727:
case 661:
case 1016:
case 2227:
case 1799:
case 1299:
case 339:
case 3119:
case 3583:
case 2526:
case 1940:
case 1690:
case 1556:
case 1900:
case 4053:
case 886:
case 3378:
case 3622:
case 4075:
case 3727:
case 707:
case 1830:
case 3526:
case 239:
case 2119:
case 3544:
case 2134:
case 3179:
case 676:
case 431:
case 3160:
case 1011:
case 654:
case 2038:
case 2504:
case 1331:
case 516:
case 65:
case 1407:
case 2318:
case 3857:
case 1488:
case 3674:
case 1925:
case 2521:
case 2264:
case 3038:
case 3730:
case 1002:
case 2764:
case 2160:
case 1680:
case 650:
case 2857:
case 573:
case 2674:
case 3318:
case 1289:
case 3504:
case 504:
case 1897:
case 1859:
case 1162:
case 3409:
case 952:
case 470:
case 3971:
case 3748:
case 3040:
case 2449:
case 1013:
case 1995:
case 2591:
case 2409:
case 1637:
case 3000:
case 1232:
case 3208:
case 474:
case 42:
case 1553:
case 1575:
case 1333:
case 500:
case 2248:
case 396:
case 972:
case 2587:
case 2508:
case 3060:
case 3723:
case 3268:
case 4057:
case 2034:
case 3548:
case 2470:
case 1896:
case 2469:
case 1665:
case 1532:
case 454:
case 547:
case 1352:
case 3508:
case 290:
case 2678:
case 3815:
case 2548:
case 1753:
case 1390:
case 1275:
case 45:
case 2223:
case 467:
case 2079:
case 369:
case 2060:
case 2768:
case 3786:
case 2723:
case 3140:
case 624:
case 674:
case 2350:
case 3564:
case 3244:
case 1919:
case 1406:
case 2221:
case 2392:
case 514:
case 62:
case 1062:
case 1826:
case 2244:
case 510:
case 2564:
case 3293:
case 2856:
case 3530:
case 1446:
case 1589:
case 979:
case 3721:
case 535:
case 1337:
case 893:
case 3125:
case 3382:
case 1424:
case 100:
case 880:
case 74:
case 1633:
case 3783:
case 1017:
case 1960:
case 1979:
case 1844:
case 2226:
case 1173:
case 2382:
case 3454:
case 1821:
case 2283:
case 2783:
case 3726:
case 2:
case 1893:
case 3977:
case 1380:
case 368:
case 2853:
case 2410:
case 3296:
case 1171:
case 2875:
case 1443:
case 3962:
case 2195:
case 1116:
case 2781:
case 3559:
case 3597:
case 1715:
case 116:
case 3875:
case 2796:
case 1215:
case 3410:
case 2296:
case 3281:
case 1494:
case 2339:
case 2597:
case 637:
case 3195:
case 1631:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754398802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,];
var gg_b = "1754398802/";

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
