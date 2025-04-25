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
var o = 1;
switch (g) {
case 23:
case 3602:
case 167:
case 1615:
case 3448:
case 53:
case 3391:
case 2689:
case 2660:
case 3059:
case 356:
case 1076:
case 787:
case 2404:
case 2769:
case 2856:
case 1183:
case 523:
case 1019:
case 2818:
case 1332:
case 865:
case 739:
case 3037:
case 3078:
case 223:
case 958:
case 4:
case 3655:
case 3962:
case 1446:
case 3983:
case 2135:
case 3871:
case 2900:
case 3343:
case 1707:
case 1033:
case 3734:
case 3207:
case 200:
case 1724:
case 1812:
case 3553:
case 3849:
case 1830:
case 431:
case 1203:
case 3820:
case 1004:
case 272:
case 2476:
case 572:
case 264:
case 3529:
case 519:
case 3994:
case 927:
case 3517:
case 2966:
case 745:
case 2295:
case 1644:
case 2046:
case 2897:
case 2326:
case 1194:
case 3852:
case 844:
case 1292:
case 1580:
case 105:
case 539:
case 2936:
case 239:
case 3679:
case 2561:
case 2482:
case 2507:
case 1618:
case 646:
case 2126:
case 1656:
case 3764:
case 2796:
case 3231:
case 3616:
case 427:
case 1874:
case 411:
case 301:
case 1889:
case 3075:
case 587:
case 2928:
case 2815:
case 3770:
case 2229:
case 4022:
case 1383:
case 1270:
case 3001:
case 1132:
case 1147:
case 3486:
case 2844:
case 3693:
case 1731:
case 671:
case 3721:
case 1454:
case 1264:
case 2713:
case 4043:
case 1063:
case 3947:
case 184:
case 1806:
case 3641:
case 21:
case 3150:
case 9:
case 2630:
case 772:
case 2612:
case 2757:
case 3066:
case 2589:
case 3502:
case 777:
case 157:
case 535:
case 109:
case 1581:
case 1252:
case 235:
case 2574:
case 3212:
case 968:
case 1249:
case 1205:
case 1388:
case 3771:
case 378:
case 2869:
case 2880:
case 2718:
case 4048:
case 3230:
case 3698:
case 3803:
case 1730:
case 3720:
case 282:
case 1035:
case 613:
case 1494:
case 1111:
case 99:
case 3834:
case 2506:
case 1824:
case 1185:
case 3911:
case 2062:
case 692:
case 3749:
case 3705:
case 249:
case 2119:
case 554:
case 3617:
case 3629:
case 3752:
case 1951:
case 3640:
case 74:
case 4051:
case 2468:
case 2258:
case 3151:
case 4090:
case 2631:
case 2959:
case 3190:
case 62:
case 3099:
case 441:
case 3584:
case 49:
case 1669:
case 2607:
case 2438:
case 2477:
case 2661:
case 2010:
case 1760:
case 2333:
case 2182:
case 3558:
case 4009:
case 4045:
case 2715:
case 3109:
case 3145:
case 2327:
case 324:
case 2896:
case 2032:
case 869:
case 1831:
case 3073:
case 3821:
case 2304:
case 1914:
case 174:
case 2813:
case 2839:
case 591:
case 1038:
case 3593:
case 3450:
case 3289:
case 130:
case 54:
case 3114:
case 3491:
case 3988:
case 4014:
case 2975:
case 3036:
case 2624:
case 3892:
case 973:
case 1154:
case 1986:
case 3443:
case 515:
case 749:
case 162:
case 1447:
case 4086:
case 3954:
case 3094:
case 2066:
case 3589:
case 1716:
case 1400:
case 3574:
case 1895:
case 843:
case 266:
case 724:
case 1670:
case 2946:
case 566:
case 3104:
case 2771:
case 290:
case 590:
case 2698:
case 2172:
case 2555:
case 905:
case 1904:
case 1779:
case 680:
case 3880:
case 2148:
case 3241:
case 1919:
case 1256:
case 2345:
case 1087:
case 2025:
case 1741:
case 1218:
case 3942:
case 665:
case 183:
case 3133:
case 2985:
case 3937:
case 3382:
case 1927:
case 1142:
case 1301:
case 349:
case 2705:
case 4027:
case 3923:
case 3127:
case 1692:
case 1367:
case 1137:
case 354:
case 2752:
case 4076:
case 3176:
case 984:
case 3258:
case 3468:
case 1621:
case 1793:
case 3216:
case 3631:
case 3959:
case 2640:
case 1976:
case 1571:
case 1359:
case 1473:
case 2099:
case 1603:
case 3438:
case 2579:
case 1755:
case 1428:
case 3607:
case 158:
case 2109:
case 1436:
case 3715:
case 3901:
case 377:
case 3967:
case 1043:
case 4063:
case 3010:
case 484:
case 3163:
case 1244:
case 3182:
case 1101:
case 3032:
case 1342:
case 3319:
case 524:
case 1022:
case 940:
case 2864:
case 3781:
case 871:
case 1982:
case 3327:
case 3047:
case 1378:
case 1963:
case 1175:
case 3304:
case 1281:
case 3813:
case 1499:
case 2708:
case 897:
case 2289:
case 2260:
case 391:
case 3744:
case 2114:
case 2491:
case 1215:
case 3839:
case 659:
case 1829:
case 127:
case 3202:
case 3624:
case 195:
case 1549:
case 1505:
case 405:
case 315:
case 2186:
case 2954:
case 3689:
case 33:
case 2602:
case 1570:
case 1399:
case 1858:
case 701:
case 2059:
case 1816:
case 323:
case 3085:
case 2078:
case 1100:
case 2703:
case 1879:
case 122:
case 288:
case 3780:
case 1935:
case 670:
case 90:
case 3818:
case 2023:
case 892:
case 2343:
case 808:
case 1125:
case 2655:
case 2983:
case 3135:
case 428:
case 2187:
case 3365:
case 4035:
case 3168:
case 1048:
case 2490:
case 962:
case 300:
case 1072:
case 655:
case 410:
case 1459:
case 1968:
case 1592:
case 3606:
case 753:
case 173:
case 66:
case 372:
case 829:
case 409:
case 3966:
case 1893:
case 1608:
case 319:
case 3419:
case 2517:
case 364:
case 2529:
case 930:
case 1478:
case 1166:
case 2852:
case 3433:
case 457:
case 1926:
case 1855:
case 788:
case 1257:
case 462:
case 1366:
case 2409:
case 3507:
case 2445:
case 3463:
case 3561:
case 3482:
case 1798:
case 3368:
case 4038:
case 4077:
case 3973:
case 909:
case 3138:
case 3177:
case 881:
case 1014:
case 1213:
case 3240:
case 1239:
case 3815:
case 1173:
case 387:
case 1802:
case 474:
case 176:
case 957:
case 3088:
case 2067:
case 345:
case 2486:
case 1717:
case 326:
case 1300:
case 816:
case 1652:
case 3739:
case 2001:
case 1296:
case 1740:
case 3713:
case 2947:
case 2693:
case 1009:
case 3335:
case 4065:
case 2387:
case 3999:
case 2414:
case 2191:
case 3298:
case 3630:
case 3524:
case 82:
case 1475:
case 141:
case 1649:
case 1605:
case 928:
case 253:
case 750:
case 2344:
case 492:
case 2156:
case 1626:
case 828:
case 1862:
case 2984:
case 2118:
case 3636:
case 2704:
case 102:
case 436:
case 134:
case 303:
case 413:
case 2237:
case 2278:
case 92:
case 3308:
case 198:
case 2835:
case 3887:
case 3403:
case 3501:
case 721:
case 3673:
case 3567:
case 2480:
case 2259:
case 1306:
case 2916:
case 2958:
case 717:
case 916:
case 1407:
case 1582:
case 1665:
case 3246:
case 3434:
case 2610:
case 1424:
case 429:
case 351:
case 2993:
case 1894:
case 3575:
case 3152:
case 2588:
case 809:
case 4052:
case 699:
case 2776:
case 2647:
case 981:
case 2941:
case 3105:
case 4049:
case 1069:
case 1080:
case 2727:
case 1920:
case 78:
case 3930:
case 1949:
case 1905:
case 673:
case 1711:
case 237:
case 1248:
case 16:
case 3912:
case 1360:
case 1272:
case 1130:
case 2733:
case 2007:
case 4020:
case 537:
case 3029:
case 2838:
case 2877:
case 521:
case 3349:
case 1174:
case 3960:
case 3709:
case 929:
case 2031:
case 2763:
case 1160:
case 1330:
case 481:
case 1214:
case 3470:
case 3352:
case 1504:
case 1286:
case 3600:
case 1519:
case 3786:
case 3542:
case 575:
case 2585:
case 3578:
case 1106:
case 1527:
case 3098:
case 1754:
case 913:
case 1668:
case 3421:
case 42:
case 1533:
case 641:
case 394:
case 789:
case 1847:
case 3714:
case 338:
case 1209:
case 3666:
case 2318:
case 1788:
case 416:
case 433:
case 3371:
case 4008:
case 742:
case 2201:
case 169:
case 2865:
case 925:
case 747:
case 946:
case 2313:
case 1903:
case 3536:
case 2030:
case 1107:
case 1161:
case 760:
case 3041:
case 1331:
case 3103:
case 4003:
case 3907:
case 3872:
case 2180:
case 3961:
case 3848:
case 1762:
case 3667:
case 3392:
case 2357:
case 3471:
case 2995:
case 704:
case 1846:
case 3528:
case 1682:
case 1577:
case 1538:
case 2266:
case 997:
case 3093:
case 2456:
case 3294:
case 2418:
case 3016:
case 2510:
case 3058:
case 867:
case 1794:
case 3420:
case 1412:
case 279:
case 3449:
case 3405:
case 2547:
case 361:
case 3599:
case 3262:
case 3452:
case 2833:
case 3924:
case 2200:
case 2768:
case 1018:
case 593:
case 1056:
case 4034:
case 3364:
case 3079:
case 2827:
case 3134:
case 77:
case 1885:
case 2654:
case 1124:
case 15:
case 504:
case 3809:
case 1222:
case 4070:
case 3170:
case 3232:
case 204:
case 232:
case 1964:
case 2777:
case 2646:
case 884:
case 3334:
case 4064:
case 3210:
case 560:
case 1535:
case 1250:
case 1489:
case 1291:
case 260:
case 1474:
case 852:
case 3500:
case 2006:
case 2998:
case 2481:
case 2562:
case 3192:
case 2685:
case 4092:
case 2157:
case 144:
case 1627:
case 2953:
case 1619:
case 695:
case 3642:
case 57:
case 285:
case 3750:
case 3886:
case 1992:
case 3791:
case 793:
case 585:
case 2236:
case 2611:
case 943:
case 2594:
case 1888:
case 2089:
case 2060:
case 2113:
case 3566:
case 2917:
case 107:
case 1361:
case 1131:
case 4021:
case 2765:
case 3121:
case 627:
case 2074:
case 1921:
case 2273:
case 497:
case 1458:
case 1268:
case 46:
case 1969:
case 2321:
case 1416:
case 2787:
case 1020:
case 3804:
case 3030:
case 3313:
case 455:
case 4069:
case 3339:
case 4080:
case 610:
case 1005:
case 2848:
case 1329:
case 2907:
case 2103:
case 2601:
case 2392:
case 3357:
case 2093:
case 3456:
case 899:
case 1645:
case 1195:
case 609:
case 2528:
case 548:
case 1353:
case 1479:
case 2420:
case 1398:
case 1859:
case 1766:
case 969:
case 2058:
case 261:
case 3688:
case 1522:
case 2675:
case 2851:
case 2405:
case 379:
case 434:
case 1071:
case 628:
case 402:
case 312:
case 498:
case 3497:
case 2084:
case 2452:
case 2262:
case 3827:
case 2079:
case 3768:
case 1842:
case 1591:
case 1550:
case 108:
case 1235:
case 116:
case 1996:
case 2845:
case 2170:
case 1773:
case 1008:
case 2334:
case 2210:
case 396:
case 3646:
case 1801:
case 3738:
case 1265:
case 902:
case 1672:
case 934:
case 2525:
case 3415:
case 998:
case 1402:
case 3562:
case 970:
case 3583:
case 89:
case 2500:
case 2408:
case 96:
case 4057:
case 3157:
case 2055:
case 3611:
case 37:
case 1226:
case 2886:
case 1153:
case 2750:
case 2623:
case 2791:
case 3444:
case 1238:
case 1277:
case 2002:
case 2121:
case 1651:
case 1939:
case 3765:
case 1875:
case 2743:
case 1140:
case 3917:
case 3089:
case 3060:
case 181:
case 3380:
case 3139:
case 2722:
case 2659:
case 2931:
case 3273:
case 1117:
case 2303:
case 2814:
case 3118:
case 2211:
case 2636:
case 2748:
case 3024:
case 1800:
case 45:
case 518:
case 2772:
case 3344:
case 1918:
case 3242:
case 1956:
case 3835:
case 1219:
case 503:
case 1227:
case 3979:
case 3237:
case 3278:
case 2285:
case 3259:
case 640:
case 3469:
case 2567:
case 3958:
case 2403:
case 1158:
case 1116:
case 1509:
case 2434:
case 1643:
case 2095:
case 738:
case 2751:
case 1355:
case 2790:
case 389:
case 794:
case 551:
case 342:
case 3647:
case 3776:
case 3993:
case 907:
case 3632:
case 1759:
case 1866:
case 1622:
case 3588:
case 2152:
case 3381:
case 1778:
case 1737:
case 3941:
case 1742:
case 3719:
case 2149:
case 3733:
case 1691:
case 1723:
case 520:
case 3315:
case 1141:
case 337:
case 3061:
case 2288:
case 3181:
case 3275:
case 811:
case 321:
case 459:
case 3838:
case 3877:
case 2349:
case 1915:
case 2040:
case 3782:
case 2745:
case 3115:
case 827:
case 3031:
case 407:
case 1873:
case 317:
case 2254:
case 3496:
case 2053:
case 1393:
case 1572:
case 350:
case 2625:
case 444:
case 2600:
case 1092:
case 1836:
case 3397:
case 3826:
case 2470:
case 38:
case 2537:
case 375:
case 2786:
case 2542:
case 2891:
case 2523:
case 1316:
case 2421:
case 3511:
case 858:
case 652:
case 2098:
case 965:
case 2822:
case 3694:
case 3356:
case 594:
case 3318:
case 2666:
case 1453:
case 294:
case 886:
case 3144:
case 1282:
case 4044:
case 2714:
case 2108:
case 1070:
case 506:
case 3865:
case 1775:
case 206:
case 3457:
case 2843:
case 751:
case 2044:
case 196:
case 2324:
case 3867:
case 2243:
case 1196:
case 1646:
case 1777:
case 3455:
case 3728:
case 1863:
case 316:
case 104:
case 2222:
case 3773:
case 1562:
case 918:
case 780:
case 2474:
case 3587:
case 2489:
case 2250:
case 3198:
case 160:
case 32:
case 147:
case 3402:
case 1726:
case 1236:
case 17:
case 663:
case 3395:
case 2992:
case 2633:
case 2568:
case 839:
case 920:
case 1157:
case 559:
case 1380:
case 2921:
case 1369:
case 1074:
case 887:
case 1139:
case 4029:
case 3129:
case 1273:
case 1940:
case 3117:
case 3913:
case 4017:
case 2081:
case 2131:
case 3277:
case 3238:
case 2361:
case 1929:
case 1228:
case 3939:
case 3651:
case 2015:
case 1594:
case 3875:
case 2307:
case 381:
case 4040:
case 1060:
case 1089:
case 1180:
case 1012:
case 3329:
case 3317:
case 3700:
case 1735:
case 3969:
case 690:
case 2526:
case 3020:
case 800:
case 2107:
case 1313:
case 1456:
case 1266:
case 666:
case 1418:
case 3609:
case 3353:
case 2682:
case 4095:
case 2663:
case 3479:
case 2538:
case 2577:
case 3484:
case 2846:
case 451:
case 329:
case 1357:
case 994:
case 938:
case 2412:
case 179:
case 2565:
case 2430:
case 906:
case 1510:
case 3859:
case 83:
case 2794:
case 3441:
case 1827:
case 392:
case 2124:
case 1654:
case 1396:
case 2018:
case 1225:
case 3591:
case 55:
case 3235:
case 1819:
case 1200:
case 403:
case 1833:
case 265:
case 2934:
case 3823:
case 744:
case 1546:
case 2330:
case 2189:
case 3498:
case 3981:
case 2214:
case 1782:
case 891:
case 3021:
case 1115:
case 3341:
case 1031:
case 4002:
case 3873:
case 1181:
case 1275:
case 3767:
case 121:
case 1877:
case 397:
case 948:
case 2174:
case 2286:
case 325:
case 2057:
case 798:
case 346:
case 815:
case 3836:
case 1955:
case 734:
case 2504:
case 1683:
case 3687:
case 2635:
case 770:
case 3393:
case 150:
case 3316:
case 2668:
case 76:
case 1511:
case 2754:
case 1413:
case 3440:
case 653:
case 2106:
case 1439:
case 1585:
case 3429:
case 2527:
case 755:
case 3417:
case 2519:
case 3384:
case 3070:
case 514:
case 3775:
case 569:
case 2788:
case 2810:
case 371:
case 1267:
case 1694:
case 2209:
case 2832:
case 2847:
case 3263:
case 3590:
case 3551:
case 3064:
case 3184:
case 1242:
case 3918:
case 4084:
case 502:
case 3219:
case 1835:
case 3956:
case 298:
case 202:
case 1704:
case 1237:
case 234:
case 2626:
case 2883:
case 1156:
case 1118:
case 1984:
case 2862:
case 3800:
case 1024:
case 688:
case 3233:
case 882:
case 4079:
case 1344:
case 3034:
case 3179:
case 1223:
case 2582:
case 2251:
case 2677:
case 2746:
case 3509:
case 1916:
case 1958:
case 3276:
case 1647:
case 142:
case 1776:
case 3866:
case 714:
case 1197:
case 3622:
case 1610:
case 2424:
case 2665:
case 2952:
case 189:
case 448:
case 3997:
case 4093:
case 1007:
case 2272:
case 2389:
case 3691:
case 56:
case 3723:
case 3650:
case 1315:
case 2905:
case 2949:
case 3141:
case 2248:
case 137:
case 1061:
case 2711:
case 1727:
case 555:
case 3737:
case 3003:
case 2112:
case 3742:
case 2374:
case 2069:
case 255:
case 1719:
case 1745:
case 1974:
case 2873:
case 2102:
case 2341:
case 3013:
case 3160:
case 3330:
case 4089:
case 687:
case 2981:
case 1320:
case 3214:
case 1029:
case 297:
case 2701:
case 4074:
case 3039:
case 3174:
case 597:
case 1989:
case 2836:
case 3504:
case 3057:
case 246:
case 3286:
case 225:
case 2092:
case 1600:
case 3635:
case 2687:
case 1625:
case 2572:
case 47:
case 1254:
case 1464:
case 2548:
case 485:
case 460:
case 2440:
case 912:
case 2899:
case 2358:
case 3431:
case 447:
case 1523:
case 1421:
case 1906:
case 1786:
case 1850:
case 3519:
case 61:
case 993:
case 3106:
case 2944:
case 3810:
case 106:
case 3576:
case 743:
case 194:
case 3847:
case 2263:
case 2282:
case 645:
case 1822:
case 626:
case 1666:
case 3908:
case 3832:
case 302:
case 412:
case 2227:
case 1285:
case 103:
case 1171:
case 1308:
case 947:
case 746:
case 398:
case 725:
case 1772:
case 2495:
case 370:
case 493:
case 623:
case 904:
case 3407:
case 2545:
case 2509:
case 932:
case 3251:
case 2158:
case 3461:
case 3582:
case 3746:
case 3290:
case 3563:
case 1403:
case 3306:
case 2866:
case 151:
case 2759:
case 771:
case 543:
case 1152:
case 3894:
case 1575:
case 866:
case 243:
case 664:
case 2514:
case 3665:
case 2193:
case 1434:
case 3424:
case 2141:
case 3248:
case 672:
case 2302:
case 3360:
case 3272:
case 2742:
case 4012:
case 3112:
case 3080:
case 3069:
case 2586:
case 355:
case 985:
case 890:
case 1699:
case 2778:
case 3785:
case 2801:
case 3970:
case 2728:
case 1334:
case 3243:
case 1210:
case 1845:
case 2008:
case 2996:
case 233:
case 729:
case 216:
case 3964:
case 677:
case 853:
case 48:
case 2736:
case 2402:
case 3250:
case 3535:
case 52:
case 3460:
case 3489:
case 2198:
case 708:
case 2395:
case 2153:
case 3992:
case 3633:
case 615:
case 450:
case 2226:
case 3854:
case 1192:
case 1637:
case 713:
case 736:
case 937:
case 64:
case 2913:
case 2117:
case 421:
case 801:
case 1814:
case 3406:
case 1722:
case 3921:
case 3732:
case 1659:
case 3888:
case 1566:
case 942:
case 1743:
case 3307:
case 1002:
case 3131:
case 2238:
case 2277:
case 2939:
case 3015:
case 1103:
case 380:
case 1907:
case 2049:
case 1961:
case 950:
case 1848:
case 3526:
case 2020:
case 4007:
case 2340:
case 72:
case 1536:
case 3161:
case 2268:
case 3331:
case 4061:
case 2725:
case 2416:
case 1321:
case 2353:
case 1528:
case 2195:
case 3663:
case 921:
case 489:
case 148:
case 1093:
case 1392:
case 1667:
case 529:
case 2484:
case 3097:
case 3846:
case 917:
case 229:
case 716:
case 1851:
case 3412:
case 1890:
case 1405:
case 1449:
case 781:
case 2766:
case 2859:
case 1016:
case 1058:
case 654:
case 3430:
case 3565:
case 2398:
case 98:
case 2235:
case 3056:
case 208:
case 2550:
case 508:
case 649:
case 1283:
case 1599:
case 682:
case 888:
case 1452:
case 1370:
case 3811:
case 213:
case 236:
case 3934:
case 1438:
case 3755:
case 2518:
case 2556:
case 3571:
case 453:
case 2680:
case 3473:
case 875:
case 3603:
case 2208:
case 2945:
case 1319:
case 1327:
case 3982:
case 3963:
case 3436:
case 1715:
case 2065:
case 3702:
case 956:
case 1426:
case 1333:
case 1163:
case 386:
case 2789:
case 1010:
case 3323:
case 3244:
case 230:
case 1975:
case 14:
case 3215:
case 530:
case 327:
case 1202:
case 2038:
case 2077:
case 821:
case 3552:
case 1304:
case 3281:
case 2188:
case 3499:
case 3840:
case 401:
case 2831:
case 3505:
case 2447:
case 262:
case 3549:
case 115:
case 1512:
case 562:
case 2706:
case 2432:
case 2154:
case 1624:
case 728:
case 2986:
case 395:
case 2026:
case 1465:
case 2346:
case 1255:
case 3400:
case 648:
case 842:
case 1574:
case 509:
case 3297:
case 2483:
case 209:
case 3670:
case 2581:
case 2462:
case 2696:
case 3664:
case 557:
case 1094:
case 3425:
case 3716:
case 1560:
case 1435:
case 1293:
case 210:
case 3779:
case 510:
case 1880:
case 1756:
case 2068:
case 1241:
case 3375:
case 1104:
case 2388:
case 2972:
case 2861:
case 2249:
case 2712:
case 1062:
case 4042:
case 3142:
case 1119:
case 1083:
case 488:
case 2657:
case 3:
case 1127:
case 4037:
case 3933:
case 3692:
case 2271:
case 2824:
case 1506:
case 3256:
case 3919:
case 3087:
case 3741:
case 2111:
case 528:
case 2730:
case 1133:
case 1937:
case 182:
case 3927:
case 4023:
case 1258:
case 1468:
case 730:
case 3793:
case 1959:
case 1631:
case 1216:
case 774:
case 3159:
case 3508:
case 1176:
case 3136:
case 2618:
case 1507:
case 2656:
case 368:
case 2394:
case 1126:
case 1463:
case 1253:
case 1054:
case 1561:
case 885:
case 3798:
case 3401:
case 3926:
case 3503:
case 3671:
case 463:
case 3257:
case 3086:
case 205:
case 1815:
case 1928:
case 187:
case 1229:
case 4073:
case 2889:
case 1177:
case 3128:
case 740:
case 2874:
case 3014:
case 966:
case 1796:
case 1240:
case 2082:
case 3740:
case 284:
case 3296:
case 2063:
case 2110:
case 2731:
case 3325:
case 3009:
case 2922:
case 1165:
case 3717:
case 832:
case 638:
case 3300:
case 2147:
case 126:
case 424:
case 1844:
case 3652:
case 2383:
case 2362:
case 2697:
case 2132:
case 2270:
case 552:
case 2991:
case 3475:
case 341:
case 3605:
case 3649:
case 39:
case 3620:
case 1630:
case 11:
case 3570:
case 2076:
case 2681:
case 3795:
case 1660:
case 1689:
case 924:
case 267:
case 540:
case 3564:
case 893:
case 2234:
case 2707:
case 3125:
case 2761:
case 3884:
case 4025:
case 1135:
case 2446:
case 1085:
case 618:
case 123:
case 3100:
case 3879:
case 2183:
case 1856:
case 3935:
case 1769:
case 2162:
case 2332:
case 2557:
case 3459:
case 3280:
case 3269:
case 3373:
case 1606:
case 2203:
case 373:
case 490:
case 1476:
case 1168:
case 2812:
case 3048:
case 1338:
case 478:
case 3328:
case 963:
case 2513:
case 1046:
case 651:
case 1433:
case 2644:
case 3442:
case 3893:
case 3608:
case 1427:
case 466:
case 3437:
case 2485:
case 1679:
case 2798:
case 568:
case 2136:
case 3618:
case 1409:
case 2366:
case 3656:
case 3394:
case 3292:
case 305:
case 3580:
case 2257:
case 415:
case 650:
case 2926:
case 101:
case 576:
case 1770:
case 491:
case 2213:
case 1616:
case 44:
case 2128:
case 3874:
case 3221:
case 621:
case 1808:
case 1693:
case 954:
case 2325:
case 1721:
case 2009:
case 3454:
case 3264:
case 1947:
case 3063:
case 799:
case 384:
case 2296:
case 2965:
case 1122:
case 2652:
case 2729:
case 3270:
case 4032:
case 3697:
case 1910:
case 3147:
case 1486:
case 2717:
case 2605:
case 29:
case 773:
case 541:
case 2475:
case 3991:
case 982:
case 241:
case 3950:
case 1641:
case 3806:
case 675:
case 68:
case 2620:
case 1414:
case 2858:
case 2816:
case 156:
case 1059:
case 776:
case 977:
case 2399:
case 861:
case 1602:
case 2090:
case 2564:
case 2051:
case 1655:
case 3761:
case 2884:
case 1962:
case 1598:
case 2125:
case 1187:
case 1983:
case 3234:
case 482:
case 768:
case 1023:
case 1224:
case 3033:
case 449:
case 3019:
case 188:
case 3332:
case 522:
case 222:
case 273:
case 79:
case 3203:
case 3004:
case 1820:
case 637:
case 2280:
case 741:
case 2459:
case 2841:
case 1734:
case 3724:
case 1451:
case 1261:
case 2328:
case 1805:
case 1849:
case 599:
case 2521:
case 299:
case 848:
case 642:
case 3411:
case 3539:
case 94:
case 1994:
case 1517:
case 2608:
case 923:
case 3518:
case 2091:
case 258:
case 1351:
case 1579:
case 41:
case 1390:
case 2755:
case 558:
case 1099:
case 1584:
case 647:
case 2898:
case 731:
case 3680:
case 2473:
case 3669:
case 660:
case 2337:
case 2378:
case 2167:
case 3385:
case 426:
case 124:
case 2101:
case 696:
case 2022:
case 3945:
case 3909:
case 3774:
case 1516:
case 3789:
case 2043:
case 894:
case 2323:
case 586:
case 3065:
case 1145:
case 604:
case 1870:
case 1028:
case 3077:
case 3038:
case 227:
case 2829:
case 1450:
case 964:
case 1372:
case 1260:
case 330:
case 1988:
case 1491:
case 527:
case 1708:
case 511:
case 2281:
case 4088:
case 2840:
case 374:
case 211:
case 439:
case 1422:
case 7:
case 3432:
case 1186:
case 2505:
case 2549:
case 67:
case 900:
case 1954:
case 1036:
case 3346:
case 783:
case 4054:
case 3154:
case 2634:
case 1443:
case 295:
case 3410:
case 972:
case 1946:
case 3483:
case 309:
case 2670:
case 419:
case 2297:
case 3462:
case 166:
case 2758:
case 3146:
case 987:
case 2716:
case 4046:
case 1066:
case 3354:
case 3515:
case 2664:
case 178:
case 758:
case 1148:
case 939:
case 1230:
case 1555:
case 1172:
case 2904:
case 3220:
case 2784:
case 3205:
case 531:
case 3388:
case 472:
case 2375:
case 3972:
case 3807:
case 1771:
case 190:
case 2:
case 4085:
case 2137:
case 3271:
case 423:
case 2933:
case 3185:
case 2367:
case 2692:
case 3712:
case 91:
case 1705:
case 1749:
case 1720:
case 2087:
case 3035:
case 328:
case 3111:
case 2218:
case 4011:
case 2976:
case 3613:
case 679:
case 2621:
case 1151:
case 43:
case 1190:
case 1617:
case 2159:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745564402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,];
var gg_b = "1745564402/";

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
