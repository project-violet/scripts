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
case 2866:
case 3114:
case 3484:
case 1039:
case 1218:
case 3218:
case 4068:
case 1114:
case 3147:
case 2386:
case 3790:
case 2674:
case 2068:
case 756:
case 2155:
case 2785:
case 3908:
case 2273:
case 1807:
case 3696:
case 3382:
case 1585:
case 1349:
case 2065:
case 6:
case 1696:
case 1382:
case 2590:
case 688:
case 2344:
case 3807:
case 1588:
case 3679:
case 4034:
case 911:
case 3862:
case 1446:
case 948:
case 1827:
case 2540:
case 2394:
case 1241:
case 1925:
case 3003:
case 559:
case 133:
case 3376:
case 1740:
case 1496:
case 3496:
case 3740:
case 1376:
case 1513:
case 1003:
case 3925:
case 3646:
case 2453:
case 3399:
case 763:
case 1928:
case 1479:
case 2492:
case 2689:
case 1775:
case 3830:
case 1684:
case 104:
case 1830:
case 3775:
case 2578:
case 1197:
case 1778:
case 199:
case 3414:
case 2791:
case 3773:
case 3754:
case 3184:
case 2290:
case 1447:
case 1939:
case 3939:
case 3447:
case 2316:
case 2554:
case 2573:
case 83:
case 2759:
case 2189:
case 13:
case 3288:
case 1754:
case 1773:
case 3312:
case 3923:
case 3146:
case 3518:
case 2715:
case 2965:
case 2802:
case 941:
case 1008:
case 975:
case 918:
case 2867:
case 3515:
case 2718:
case 681:
case 3005:
case 1923:
case 770:
case 3028:
case 1196:
case 961:
case 2783:
case 1179:
case 1903:
case 285:
case 2822:
case 1028:
case 2275:
case 3497:
case 1377:
case 1614:
case 3541:
case 2350:
case 3647:
case 3826:
case 1826:
case 4063:
case 194:
case 797:
case 1647:
case 3614:
case 1541:
case 1497:
case 894:
case 2097:
case 68:
case 3992:
case 214:
case 1529:
case 94:
case 2524:
case 1992:
case 480:
case 3533:
case 2881:
case 972:
case 2733:
case 2425:
case 419:
case 1663:
case 2946:
case 1058:
case 2123:
case 2269:
case 3168:
case 1055:
case 4014:
case 913:
case 2405:
case 1871:
case 926:
case 1238:
case 1856:
case 1942:
case 2709:
case 1989:
case 1704:
case 3235:
case 96:
case 3704:
case 3989:
case 219:
case 3856:
case 3871:
case 3509:
case 2320:
case 91:
case 3092:
case 1233:
case 1360:
case 2639:
case 1634:
case 3880:
case 907:
case 1880:
case 3634:
case 4079:
case 1092:
case 3233:
case 679:
case 2898:
case 1668:
case 2811:
case 1074:
case 963:
case 2128:
case 338:
case 1163:
case 2224:
case 469:
case 1665:
case 886:
case 1229:
case 3301:
case 3074:
case 444:
case 2623:
case 768:
case 2125:
case 2046:
case 1321:
case 464:
case 2735:
case 3857:
case 3955:
case 1955:
case 3535:
case 1332:
case 2105:
case 3958:
case 1468:
case 2204:
case 1538:
case 943:
case 2870:
case 4084:
case 1209:
case 956:
case 2914:
case 237:
case 1919:
case 3434:
case 674:
case 1042:
case 2848:
case 2947:
case 3042:
case 1564:
case 4046:
case 264:
case 1434:
case 1769:
case 2845:
case 2764:
case 2336:
case 24:
case 1319:
case 2677:
case 1804:
case 2257:
case 500:
case 1186:
case 3593:
case 2571:
case 1416:
case 3416:
case 1593:
case 3270:
case 2347:
case 2936:
case 2020:
case 3771:
case 2793:
case 4037:
case 852:
case 980:
case 272:
case 1144:
case 2752:
case 2182:
case 3355:
case 640:
case 785:
case 1245:
case 152:
case 3932:
case 3552:
case 352:
case 1487:
case 1355:
case 528:
case 3144:
case 1248:
case 2176:
case 1581:
case 101:
case 642:
case 150:
case 898:
case 4000:
case 3194:
case 2151:
case 982:
case 2781:
case 46:
case 270:
case 3298:
case 3687:
case 2199:
case 398:
case 1295:
case 350:
case 3581:
case 301:
case 2061:
case 1543:
case 502:
case 2397:
case 67:
case 2743:
case 3616:
case 1172:
case 1211:
case 1616:
case 3172:
case 2477:
case 470:
case 26:
case 3824:
case 1710:
case 3869:
case 207:
case 1116:
case 3672:
case 590:
case 3545:
case 21:
case 2748:
case 1342:
case 2384:
case 122:
case 1252:
case 1545:
case 2864:
case 3116:
case 1672:
case 2920:
case 2036:
case 1869:
case 2745:
case 3417:
case 2699:
case 3187:
case 3757:
case 1694:
case 2346:
case 2449:
case 2112:
case 4036:
case 3032:
case 1570:
case 1032:
case 2676:
case 2838:
case 3021:
case 1187:
case 1417:
case 41:
case 2711:
case 191:
case 577:
case 1374:
case 3243:
case 376:
case 1617:
case 808:
case 3644:
case 2476:
case 891:
case 3001:
case 876:
case 2396:
case 1644:
case 308:
case 3617:
case 2961:
case 1243:
case 391:
case 3686:
case 1060:
case 3281:
case 1595:
case 320:
case 3780:
case 3150:
case 2177:
case 1598:
case 1780:
case 1150:
case 820:
case 949:
case 964:
case 3472:
case 1281:
case 1392:
case 3060:
case 1686:
case 3636:
case 448:
case 825:
case 3878:
case 1977:
case 3730:
case 334:
case 125:
case 1222:
case 749:
case 1875:
case 3875:
case 737:
case 3222:
case 325:
case 657:
case 1730:
case 3977:
case 3100:
case 834:
case 1231:
case 367:
case 1636:
case 566:
case 2072:
case 2530:
case 3051:
case 2094:
case 1727:
case 1161:
case 103:
case 3303:
case 1303:
case 2401:
case 248:
case 3099:
case 3727:
case 2813:
case 3137:
case 2368:
case 2885:
case 2507:
case 3912:
case 3890:
case 3323:
case 1762:
case 606:
case 2206:
case 2601:
case 2432:
case 1707:
case 268:
case 2562:
case 678:
case 615:
case 3707:
case 1082:
case 2888:
case 1049:
case 3762:
case 1202:
case 553:
case 1566:
case 2660:
case 1339:
case 2766:
case 2916:
case 89:
case 3339:
case 769:
case 3436:
case 468:
case 339:
case 3202:
case 19:
case 3620:
case 719:
case 441:
case 1400:
case 1726:
case 2160:
case 3077:
case 2972:
case 665:
case 2994:
case 1461:
case 2230:
case 3951:
case 893:
case 3522:
case 3976:
case 193:
case 627:
case 3637:
case 155:
case 2883:
case 393:
case 1522:
case 4050:
case 3999:
case 2101:
case 1328:
case 3461:
case 218:
case 275:
case 2722:
case 2917:
case 3502:
case 4016:
case 2132:
case 261:
case 3012:
case 3266:
case 2087:
case 3437:
case 3567:
case 3949:
case 3308:
case 3982:
case 1982:
case 2944:
case 985:
case 1308:
case 2121:
case 1949:
case 1567:
case 1437:
case 523:
case 1661:
case 645:
case 780:
case 1502:
case 30:
case 3706:
case 2891:
case 3854:
case 3600:
case 317:
case 1136:
case 3136:
case 2262:
case 1600:
case 714:
case 2207:
case 1873:
case 2986:
case 817:
case 10:
case 3043:
case 2980:
case 1700:
case 3329:
case 1201:
case 3201:
case 3998:
case 1897:
case 2324:
case 328:
case 1043:
case 496:
case 552:
case 1127:
case 300:
case 296:
case 661:
case 3761:
case 4010:
case 1081:
case 227:
case 1107:
case 4056:
case 265:
case 102:
case 3970:
case 1052:
case 3107:
case 675:
case 2467:
case 3162:
case 2631:
case 1737:
case 1847:
case 3948:
case 1221:
case 3406:
case 1720:
case 2166:
case 3232:
case 501:
case 1232:
case 1814:
case 550:
case 3945:
case 2056:
case 3626:
case 1309:
case 3221:
case 1948:
case 2304:
case 3430:
case 3943:
case 3560:
case 3095:
case 2892:
case 415:
case 3126:
case 1126:
case 1095:
case 1560:
case 2666:
case 1943:
case 2261:
case 3981:
case 1896:
case 390:
case 206:
case 2131:
case 3011:
case 3662:
case 358:
case 3501:
case 2200:
case 1879:
case 1662:
case 1011:
case 890:
case 858:
case 190:
case 2701:
case 215:
case 1981:
case 2122:
case 1607:
case 1338:
case 3521:
case 1407:
case 2732:
case 3627:
case 2057:
case 1532:
case 1462:
case 3462:
case 3532:
case 3070:
case 2102:
case 9:
case 611:
case 3338:
case 3884:
case 2536:
case 2237:
case 1045:
case 1993:
case 1364:
case 576:
case 2971:
case 591:
case 3045:
case 257:
case 508:
case 1048:
case 4057:
case 2448:
case 4062:
case 1680:
case 2906:
case 4007:
case 3156:
case 289:
case 2445:
case 3171:
case 2193:
case 1902:
case 1388:
case 32:
case 1865:
case 534:
case 2152:
case 2782:
case 3717:
case 1967:
case 788:
case 3457:
case 1582:
case 567:
case 366:
case 2611:
case 2216:
case 1385:
case 3549:
case 1868:
case 3967:
case 2007:
case 3744:
case 525:
case 3865:
case 3388:
case 12:
case 2517:
case 3902:
case 3931:
case 2250:
case 2776:
case 663:
case 1551:
case 2803:
case 895:
case 1922:
case 2411:
case 3794:
case 353:
case 346:
case 195:
case 2751:
case 2181:
case 1657:
case 2799:
case 3657:
case 395:
case 1794:
case 3576:
case 3922:
case 484:
case 853:
case 3277:
case 2594:
case 3110:
case 2926:
case 2030:
case 2495:
case 61:
case 607:
case 1772:
case 2498:
case 410:
case 1480:
case 15:
case 2217:
case 3966:
case 1456:
case 555:
case 626:
case 2006:
case 2148:
case 27:
case 3282:
case 1610:
case 1471:
case 2373:
case 2354:
case 2516:
case 3471:
case 2244:
case 1391:
case 2493:
case 1282:
case 66:
case 3359:
case 3716:
case 2643:
case 3456:
case 35:
case 2145:
case 781:
case 3787:
case 3157:
case 1512:
case 242:
case 2712:
case 2452:
case 613:
case 2962:
case 3067:
case 2170:
case 2681:
case 1787:
case 3002:
case 47:
case 4006:
case 260:
case 2111:
case 316:
case 240:
case 105:
case 672:
case 2828:
case 816:
case 2652:
case 1863:
case 305:
case 116:
case 3383:
case 2272:
case 3251:
case 462:
case 2443:
case 2294:
case 823:
case 2693:
case 697:
case 123:
case 3671:
case 2195:
case 440:
case 1671:
case 1750:
case 323:
case 1577:
case 2198:
case 2550:
case 854:
case 274:
case 2078:
case 637:
case 4040:
case 649:
case 3225:
case 3941:
case 3124:
case 2075:
case 2876:
case 4075:
case 2851:
case 1894:
case 474:
case 2899:
case 2327:
case 2635:
case 3503:
case 3983:
case 2040:
case 283:
case 1844:
case 1523:
case 2882:
case 1088:
case 3915:
case 910:
case 1765:
case 2090:
case 715:
case 1768:
case 1817:
case 1085:
case 2568:
case 3765:
case 3088:
case 1915:
case 2438:
case 706:
case 3844:
case 3366:
case 359:
case 3734:
case 2973:
case 3208:
case 2109:
case 669:
case 3104:
case 859:
case 1208:
case 3886:
case 1991:
case 2534:
case 2739:
case 1366:
case 97:
case 1041:
case 2326:
case 1424:
case 3424:
case 2609:
case 1604:
case 835:
case 3331:
case 1083:
case 53:
case 1913:
case 135:
case 3763:
case 599:
case 960:
case 727:
case 1525:
case 2563:
case 2940:
case 3083:
case 2433:
case 824:
case 594:
case 3505:
case 771:
case 2135:
case 1302:
case 3015:
case 1508:
case 2990:
case 2234:
case 1239:
case 1367:
case 829:
case 1018:
case 940:
case 1985:
case 3508:
case 796:
case 1887:
case 1015:
case 3302:
case 48:
case 962:
case 1505:
case 4073:
case 4054:
case 2409:
case 3169:
case 1404:
case 3091:
case 1059:
case 2306:
case 2629:
case 3816:
case 1223:
case 3009:
case 3519:
case 1393:
case 2491:
case 3473:
case 3454:
case 1964:
case 2969:
case 2719:
case 3964:
case 1454:
case 2371:
case 3820:
case 1714:
case 2004:
case 1009:
case 2514:
case 996:
case 2683:
case 762:
case 3837:
case 2415:
case 2755:
case 2185:
case 3558:
case 3352:
case 1242:
case 3935:
case 1935:
case 132:
case 685:
case 1558:
case 3938:
case 971:
case 1033:
case 2618:
case 1140:
case 760:
case 830:
case 281:
case 3140:
case 3033:
case 2483:
case 2113:
case 130:
case 742:
case 2615:
case 1800:
case 2279:
case 3178:
case 1253:
case 1274:
case 3343:
case 3797:
case 1175:
case 2310:
case 1673:
case 3673:
case 3654:
case 2296:
case 2691:
case 1797:
case 3274:
case 2441:
case 3253:
case 77:
case 2597:
case 3154:
case 3784:
case 3173:
case 3348:
case 3542:
case 1836:
case 3255:
case 2069:
case 3678:
case 1255:
case 3345:
case 187:
case 3064:
case 1542:
case 887:
case 1675:
case 2159:
case 2789:
case 1173:
case 1784:
case 1909:
case 2742:
case 2832:
case 906:
case 2214:
case 1219:
case 1038:
case 3490:
case 3746:
case 1370:
case 773:
case 3035:
case 2357:
case 2247:
case 1746:
case 3370:
case 1490:
case 978:
case 4069:
case 2118:
case 2297:
case 2688:
case 1933:
case 1440:
case 1796:
case 3553:
case 3311:
case 2596:
case 2183:
case 2774:
case 1311:
case 3690:
case 2685:
case 1553:
case 3933:
case 2:
case 2579:
case 3395:
case 1475:
case 1592:
case 1398:
case 3929:
case 2792:
case 488:
case 2860:
case 957:
case 2141:
case 1929:
case 3398:
case 436:
case 1395:
case 127:
case 2162:
case 3402:
case 724:
case 865:
case 2107:
case 1622:
case 165:
case 56:
case 3467:
case 1467:
case 1537:
case 365:
case 2052:
case 3622:
case 735:
case 4093:
case 1631:
case 327:
case 2221:
case 3056:
case 2626:
case 513:
case 1166:
case 2093:
case 2945:
case 2814:
case 1980:
case 2201:
case 451:
case 3324:
case 3010:
case 2130:
case 572:
case 3500:
case 2426:
case 617:
case 2995:
case 1602:
case 2127:
case 896:
case 2333:
case 1561:
case 1667:
case 371:
case 4043:
case 2761:
case 145:
case 396:
case 171:
case 3561:
case 3431:
case 428:
case 845:
case 871:
case 2407:
case 1732:
case 477:
case 3167:
case 3721:
case 2462:
case 3102:
case 4048:
case 3057:
case 1102:
case 2846:
case 1167:
case 492:
case 2630:
case 1536:
case 556:
case 357:
case 2993:
case 3971:
case 2736:
case 1369:
case 2045:
case 857:
case 3237:
case 277:
case 754:
case 1889:
case 3536:
case 2884:
case 4070:
case 1956:
case 3466:
case 3666:
case 221:
case 759:
case 1910:
case 3760:
case 1760:
case 2126:
case 3910:
case 3892:
case 69:
case 563:
case 3080:
case 1261:
case 2095:
case 3701:
case 806:
case 2896:
case 378:
case 315:
case 4095:
case 3200:
case 1131:
case 3874:
case 2011:
case 2662:
case 258:
case 1874:
case 507:
case 815:
case 878:
case 2981:
case 1122:
case 1803:
case 1250:
case 810:
case 3594:
case 1776:
case 2551:
case 110:
case 3027:
case 2657:
case 2313:
case 1751:
case 1670:
case 1181:
case 3751:
case 3670:
case 3181:
case 246:
case 2794:
case 3411:
case 1027:
case 873:
case 310:
case 173:
case 1340:
case 3648:
case 1495:
case 787:
case 184:
case 453:
case 1926:
case 446:
case 1030:
case 884:
case 1645:
case 3498:
case 1378:
case 959:
case 3645:
case 568:
case 3030:
case 495:
case 2480:
case 2110:
case 384:
case 1648:
case 511:
case 2680:
case 1448:
case 2786:
case 1698:
case 3287:
case 3448:
case 889:
case 2066:
case 466:
case 2212:
case 3586:
case 1193:
case 2834:
case 2744:
case 3007:
case 1152:
case 3062:
case 1390:
case 1544:
case 3470:
case 691:
case 4066:
case 266:
case 2967:
case 2549:
case 2385:
case 2457:
case 2717:
case 1470:
case 1062:
case 3390:
case 3544:
case 3823:
case 3749:
case 3152:
case 1007:
case 3825:
case 140:
case 732:
case 3272:
case 1481:
case 3927:
case 1828:
case 929:
case 205:
case 3652:
case 2022:
case 1652:
case 2863:
case 3828:
case 1927:
case 216:
case 3481:
case 423:
case 3111:
case 862:
case 1825:
case 3198:
case 2341:
case 1026:
case 1693:
case 416:
case 4031:
case 2750:
case 2671:
case 2276:
case 561:
case 2410:
case 1550:
case 4022:
case 3294:
case 2656:
case 3443:
case 3026:
case 405:
case 2251:
case 2577:
case 1198:
case 87:
case 2716:
case 3145:
case 541:
case 3493:
case 2471:
case 1373:
case 3244:
case 1354:
case 1516:
case 4002:
case 37:
case 3006:
case 3148:
case 3516:
case 3373:
case 2391:
case 2966:
case 935:
case 3907:
case 3170:
case 0:
case 3681:
case 842:
case 360:
case 601:
case 142:
case 1712:
case 3962:
case 2318:
case 2067:
case 45:
case 3452:
case 1805:
case 3712:
case 860:
case 342:
case 2315:
case 160:
case 1681:
case 1286:
case 1907:
case 924:
case 3808:
case 3438:
case 2765:
case 2523:
case 3307:
case 1882:
case 1435:
case 790:
case 1090:
case 1362:
case 3090:
case 3565:
case 2817:
case 2085:
case 3882:
case 1568:
case 3849:
case 1438:
case 4085:
case 3739:
case 2959:
case 2886:
case 1973:
case 1109:
case 3109:
case 3954:
case 1534:
case 179:
case 721:
case 4088:
case 259:
case 1330:
case 2124:
case 3075:
case 254:
case 1664:
case 2669:
case 874:
case 2225:
case 3664:
case 2228:
case 3129:
case 1075:
case 3330:
case 374:
case 3263:
case 2983:
case 3040:
case 1703:
case 3133:
case 2013:
case 1851:
case 2503:
case 3899:
case 1899:
case 1327:
case 1635:
case 3703:
case 1040:
case 3876:
case 454:
case 2302:
case 751:
case 2018:
case 1812:
case 3705:
case 1234:
case 3234:
case 916:
case 2985:
case 1138:
case 2505:
case 3708:
case 2887:
case 2015:
case 1268:
case 88:
case 3164:
case 1409:
case 2816:
case 4015:
case 1306:
case 1073:
case 2091:
case 3073:
case 3054:
case 2624:
case 3306:
case 38:
case 2223:
case 3409:
case 4018:
case 2041:
case 1326:
case 1978:
case 3877:
case 1429:
case 3429:
case 1975:
case 2604:
case 1609:
case 3326:
case 435:
case 3433:
case 3940:
case 2528:
case 235:
case 1728:
case 224:
case 1725:
case 1563:
case 1940:
case 3113:
case 4029:
case 2140:
case 1618:
case 3618:
case 181:
case 2381:
case 902:
case 2253:
case 2274:
case 3441:
case 2800:
case 1279:
case 3691:
case 699:
case 3024:
case 2673:
case 1296:
case 2178:
case 1597:
case 2343:
case 2747:
case 3004:
case 432:
case 3356:
case 3514:
case 1246:
case 928:
case 1547:
case 3459:
case 2393:
case 2820:
case 1491:
case 3371:
case 2964:
case 3969:
case 1356:
case 1514:
case 2938:
case 1415:
case 1755:
case 1683:
case 3418:
case 2555:
case 3188:
case 3758:
case 951:
case 514:
case 1188:
case 1758:
case 900:
case 2190:
case 3185:
case 3415:
case 705:
case 2440:
case 3801:
case 836:
case 1688:
case 3413:
case 549:
case 3774:
case 136:
case 72:
case 3753:
case 3183:
case 3685:
case 1685:
case 2779:
case 1183:
case 537:
case 3596:
case 336:
case 1774:
case 8:
case 2311:
case 1413:
case 3297:
case 1:
case 1579:
case 1801:
case 188:
case 2574:
case 992:
case 2592:
case 1792:
case 3141:
case 609:
case 2398:
case 1860:
case 1141:
case 3792:
case 3380:
case 3159:
case 2258:
case 3904:
case 3789:
case 4035:
case 1191:
case 3742:
case 2345:
case 1069:
case 2678:
case 3584:
case 2836:
case 287:
case 4038:
case 3069:
case 2255:
case 2784:
case 1742:
case 2675:
case 1159:
case 1789:
case 2219:
case 3488:
case 3546:
case 487:
case 1214:
case 1115:
case 1357:
case 1485:
case 3247:
case 1613:
case 3821:
case 2746:
case 3613:
case 569:
case 3357:
case 2035:
case 3214:
case 544:
case 958:
case 4064:
case 2640:
case 795:
case 1488:
case 1118:
case 579:
case 3474:
case 2827:
case 2399:
case 233:
case 2740:
case 2003:
case 2376:
case 2513:
case 2479:
case 3963:
case 1713:
case 2283:
case 3372:
case 4003:
case 939:
case 1689:
case 3578:
case 2775:
case 99:
case 3689:
case 204:
case 947:
case 3642:
case 2830:
case 3575:
case 2778:
case 1372:
case 687:
case 433:
case 3492:
case 2147:
case 1866:
case 583:
case 3442:
case 4023:
case 2484:
case 2114:
case 3866:
case 1442:
case 1119:
case 1489:
case 1386:
case 2215:
case 1317:
case 2679:
case 1785:
case 903:
case 2905:
case 1674:
case 3065:
case 3788:
case 776:
case 1254:
case 3590:
case 3344:
case 2807:
case 2696:
case 409:
case 1590:
case 3273:
case 2908:
case 2349:
case 1158:
case 791:
case 3674:
case 2446:
case 2790:
case 3785:
case 708:
case 4039:
case 3068:
case 494:
case 1063:
case 3822:
case 3275:
case 3174:
case 3655:
case 3278:
case 1174:
case 3831:
case 2028:
case 58:
case 2583:
case 3240:
case 2377:
case 3741:
case 1192:
case 2213:
case 4028:
case 2826:
case 294:
case 3619:
case 1240:
case 3759:
case 2697:
case 2288:
case 3419:
case 4008:
case 2447:
case 2939:
case 1934:
case 2591:
case 1290:
case 3573:
case 3316:
case 1316:
case 3290:
case 1573:
case 4005:
case 3934:
case 2285:
case 2754:
case 2184:
case 3791:
case 1759:
case 2515:
case 1968:
case 2005:
case 43:
case 499:
case 750:
case 3387:
case 701:
case 630:
case 3455:
case 1965:
case 3715:
case 2518:
case 2312:
case 1458:
case 3968:
case 798:
case 1867:
case 1718:
case 2058:
case 755:
case 182:
case 635:
case 2663:
case 882:
case 1337:
case 1269:
case 2168:
case 2055:
case 3625:
case 3946:
case 1405:
case 382:
case 1628:
case 2019:
case 581:
case 2509:
case 2989:
case 3047:
case 2942:
case 319:
case 1709:
case 3984:
case 1047:
case 2235:
case 3014:
case 1320:
case 2134:
case 114:
case 2724:
case 717:
case 1843:
case 1524:
case 2529:
case 1300:
case 3843:
case 3524:
case 314:
case 2992:
case 2810:
case 880:
case 231:
case 3361:
case 629:
case 3608:
case 1425:
case 1608:
case 3103:
case 3428:
case 1735:
case 2958:
case 3204:
case 1046:
case 1423:
case 1108:
case 3870:
case 908:
case 3603:
case 2535:
case 2332:
case 976:
case 1603:
case 1738:
case 4042:
case 3423:
case 2209:
case 3108:
case 703:
case 2857:
case 3735:
case 3845:
case 734:
case 2919:
case 1914:
case 3764:
case 137:
case 3336:
case 3947:
case 3439:
case 5:
case 2089:
case 1084:
case 2042:
case 2564:
case 164:
case 1439:
case 3848:
case 1947:
case 849:
case 337:
case 149:
case 1845:
case 725:
case 2233:
case 1997:
case 844:
case 3898:
case 144:
case 869:
case 747:
case 1639:
case 3639:
case 739:
case 659:
case 2880:
case 344:
case 369:
case 2053:
case 3125:
case 2668:
case 3096:
case 4092:
case 2301:
case 1128:
case 1403:
case 2665:
case 3128:
case 2229:
case 3403:
case 1176:
case 1280:
case 2581:
case 2298:
case 3833:
case 298:
case 1833:
case 1199:
case 370:
case 1061:
case 1612:
case 3176:
case 36:
case 1397:
case 2543:
case 2960:
case 3510:
case 126:
case 2211:
case 401:
case 3743:
case 326:
case 527:
case 86:
case 1000:
case 799:
case 2450:
case 16:
case 571:
case 2650:
case 794:
case 2756:
case 2186:
case 2270:
case 84:
case 2416:
case 1257:
case 897:
case 1347:
case 2593:
case 596:
case 1793:
case 3314:
case 2144:
case 2921:
case 605:
case 1037:
case 2932:
case 616:
case 3182:
case 3412:
case 2617:
case 3499:
case 1711:
case 291:
case 666:
case 2374:
case 2353:
case 1451:
case 420:
case 2001:
case 208:
case 1476:
case 557:
case 1210:
case 143:
case 62:
case 1961:
case 3451:
case 2243:
case 276:
case 856:
case 843:
case 3379:
case 3798:
case 3580:
case 2472:
case 1795:
case 2780:
case 709:
case 2598:
case 1900:
case 1580:
case 2281:
case 408:
case 2686:
case 4001:
case 220:
case 1798:
case 81:
case 3036:
case 3864:
case 3745:
case 2548:
case 2342:
case 578:
case 1384:
case 807:
case 2389:
case 11:
case 3748:
case 2545:
case 222:
case 3384:
case 4021:
case 2252:
case 1864:
case 695:
case 2694:
case 938:
case 1346:
case 3770:
case 422:
case 863:
case 3676:
case 2444:
case 2293:
case 3838:
case 1937:
case 3557:
case 1449:
case 3449:
case 1557:
case 2032:
case 3112:
case 363:
case 1676:
case 3699:
case 2757:
case 3835:
case 1256:
case 1770:
case 1651:
case 646:
case 1507:
case 2762:
case 933:
case 868:
case 1017:
case 1885:
case 168:
case 1562:
case 1206:
case 49:
case 3365:
case 3888:
case 1365:
case 3601:
case 2049:
case 3562:
case 3432:
case 2082:
case 3885:
case 3017:
case 3507:
case 2890:
case 239:
case 2566:
case 3086:
case 4049:
case 2202:
case 621:
case 2120:
case 1334:
case 3916:
case 1916:
case 29:
case 247:
case 2100:
case 4076:
case 1950:
case 2875:
case 4051:
case 909:
case 225:
case 2222:
case 2730:
case 3950:
case 2636:
case 2878:
case 3813:
case 434:
case 1621:
case 589:
case 3401:
case 1527:
case 3632:
case 2840:
case 2161:
case 2076:
case 1632:
case 111:
case 1401:
case 3527:
case 3094:
case 692:
case 425:
case 1813:
case 3621:
case 848:
case 811:
case 161:
case 1132:
case 417:
case 3818:
case 1917:
case 3767:
case 3121:
case 861:
case 1815:
case 2949:
case 3815:
case 2437:
case 600:
case 731:
case 1944:
case 1121:
case 3917:
case 1818:
case 2266:
case 2661:
case 3132:
case 361:
case 3986:
case 1891:
case 628:
case 3859:
case 4012:
case 3506:
case 1506:
case 1262:
case 1016:
case 20:
case 1859:
case 2873:
case 994:
case 3891:
case 455:
case 2400:
case 560:
case 999:
case 2726:
case 1227:
case 493:
case 2620:
case 2999:
case 1230:
case 2637:
case 2325:
case 293:
case 255:
case 1883:
case 2976:
case 2522:
case 875:
case 3230:
case 175:
case 602:
case 1722:
case 1101:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759838402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,];
var gg_b = "1759838402/";

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
