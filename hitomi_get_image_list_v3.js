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
case 3130:
case 796:
case 1772:
case 1787:
case 1171:
case 1900:
case 1769:
case 3476:
case 2315:
case 3060:
case 621:
case 957:
case 2369:
case 3147:
case 1715:
case 2780:
case 3549:
case 2907:
case 960:
case 1516:
case 2468:
case 577:
case 3703:
case 1935:
case 3940:
case 3586:
case 962:
case 644:
case 2817:
case 3563:
case 3183:
case 282:
case 1461:
case 3125:
case 3833:
case 3693:
case 3293:
case 174:
case 566:
case 273:
case 2971:
case 2100:
case 979:
case 1509:
case 1262:
case 3056:
case 135:
case 329:
case 72:
case 1810:
case 2885:
case 356:
case 318:
case 2823:
case 2135:
case 2155:
case 1279:
case 1145:
case 948:
case 1592:
case 372:
case 879:
case 3545:
case 2624:
case 3221:
case 2432:
case 3791:
case 4082:
case 862:
case 3677:
case 3277:
case 2794:
case 3109:
case 3746:
case 1719:
case 773:
case 2043:
case 3282:
case 2631:
case 2651:
case 2251:
case 2891:
case 3254:
case 1836:
case 1765:
case 1856:
case 1296:
case 3234:
case 1696:
case 848:
case 3336:
case 1525:
case 626:
case 4054:
case 2319:
case 22:
case 2484:
case 1163:
case 1583:
case 3481:
case 2418:
case 1186:
case 296:
case 1411:
case 2159:
case 1675:
case 69:
case 2139:
case 3499:
case 1149:
case 3398:
case 1638:
case 1898:
case 1258:
case 3402:
case 1658:
case 561:
case 2557:
case 2889:
case 3129:
case 3360:
case 2069:
case 3571:
case 1212:
case 1612:
case 1473:
case 3789:
case 2540:
case 2986:
case 2204:
case 2604:
case 3527:
case 1530:
case 3201:
case 2160:
case 3673:
case 2329:
case 3273:
case 2580:
case 520:
case 560:
case 4073:
case 1936:
case 1401:
case 3106:
case 3749:
case 1716:
case 2428:
case 4011:
case 781:
case 1839:
case 1699:
case 2214:
case 3475:
case 2849:
case 3611:
case 2288:
case 1572:
case 1729:
case 1074:
case 1202:
case 1602:
case 327:
case 821:
case 861:
case 1569:
case 1189:
case 1191:
case 3441:
case 1222:
case 1543:
case 3078:
case 2444:
case 1434:
case 2553:
case 3496:
case 3119:
case 2533:
case 2863:
case 844:
case 3517:
case 1792:
case 3035:
case 790:
case 2470:
case 2886:
case 3126:
case 3763:
case 2408:
case 2392:
case 4042:
case 3642:
case 579:
case 3786:
case 255:
case 2025:
case 253:
case 3165:
case 3585:
case 3378:
case 1878:
case 3462:
case 944:
case 622:
case 1695:
case 1295:
case 1766:
case 3479:
case 2807:
case 290:
case 178:
case 2664:
case 3707:
case 3745:
case 112:
case 2325:
case 866:
case 826:
case 1519:
case 755:
case 3591:
case 1493:
case 3300:
case 3143:
case 1800:
case 648:
case 3771:
case 2029:
case 393:
case 1820:
case 1357:
case 1910:
case 3697:
case 3857:
case 3589:
case 2347:
case 1750:
case 110:
case 3172:
case 89:
case 2813:
case 3567:
case 657:
case 2917:
case 961:
case 292:
case 3039:
case 2016:
case 1103:
case 1340:
case 3840:
case 2871:
case 2737:
case 1374:
case 620:
case 3953:
case 1063:
case 1987:
case 2479:
case 3807:
case 1972:
case 1086:
case 390:
case 214:
case 2462:
case 115:
case 113:
case 1969:
case 3110:
case 2980:
case 1825:
case 3009:
case 2300:
case 2143:
case 1556:
case 3594:
case 597:
case 3092:
case 1735:
case 3264:
case 623:
case 4064:
case 3383:
case 2745:
case 625:
case 2727:
case 1668:
case 3740:
case 1313:
case 2771:
case 293:
case 2837:
case 999:
case 2857:
case 3774:
case 3347:
case 1805:
case 3305:
case 194:
case 1371:
case 2874:
case 3737:
case 1720:
case 2115:
case 1560:
case 2953:
case 3827:
case 3350:
case 1327:
case 3330:
case 2039:
case 2059:
case 3016:
case 750:
case 2840:
case 2713:
case 771:
case 2503:
case 1739:
case 1013:
case 1829:
case 3329:
case 3160:
case 2673:
case 3580:
case 2020:
case 795:
case 2412:
case 793:
case 3991:
case 2994:
case 227:
case 2438:
case 987:
case 1965:
case 3030:
case 3050:
case 4088:
case 2359:
case 1926:
case 1816:
case 3316:
case 2211:
case 3688:
case 308:
case 1363:
case 1906:
case 2055:
case 252:
case 2035:
case 525:
case 565:
case 3886:
case 1684:
case 1284:
case 468:
case 1386:
case 428:
case 2441:
case 14:
case 419:
case 3136:
case 3553:
case 2496:
case 2119:
case 3533:
case 1431:
case 355:
case 3025:
case 353:
case 3989:
case 1510:
case 3309:
case 1892:
case 3066:
case 1652:
case 3408:
case 3392:
case 1232:
case 3083:
case 3967:
case 2786:
case 2791:
case 997:
case 1865:
case 2677:
case 3043:
case 2282:
case 2507:
case 2545:
case 3326:
case 3624:
case 3224:
case 2221:
case 2621:
case 1017:
case 1208:
case 1555:
case 863:
case 823:
case 889:
case 1270:
case 865:
case 1670:
case 718:
case 2481:
case 772:
case 3251:
case 2254:
case 2634:
case 304:
case 2336:
case 1929:
case 1244:
case 1819:
case 3846:
case 2422:
case 36:
case 32:
case 2010:
case 785:
case 783:
case 4031:
case 1909:
case 2398:
case 3648:
case 3015:
case 3889:
case 770:
case 3867:
case 3159:
case 441:
case 2116:
case 1228:
case 3986:
case 100:
case 3963:
case 3204:
case 1806:
case 2527:
case 687:
case 3087:
case 251:
case 2360:
case 2571:
case 1174:
case 2476:
case 1925:
case 1815:
case 1089:
case 2150:
case 1067:
case 1966:
case 1303:
case 2549:
case 3372:
case 751:
case 3468:
case 2703:
case 1887:
case 3387:
case 1539:
case 1869:
case 1157:
case 3120:
case 2147:
case 2105:
case 2693:
case 2293:
case 2853:
case 375:
case 373:
case 2785:
case 2974:
case 1710:
case 1843:
case 3026:
case 2166:
case 2586:
case 3817:
case 897:
case 382:
case 391:
case 132:
case 256:
case 218:
case 65:
case 43:
case 3753:
case 1947:
case 1091:
case 2036:
case 184:
case 283:
case 269:
case 285:
case 1046:
case 963:
case 1385:
case 2937:
case 923:
case 965:
case 2957:
case 3885:
case 3969:
case 2565:
case 2878:
case 943:
case 945:
case 2725:
case 190:
case 3972:
case 2783:
case 1845:
case 509:
case 3307:
case 2123:
case 2835:
case 81:
case 2855:
case 2295:
case 138:
case 3063:
case 212:
case 2117:
case 639:
case 426:
case 1664:
case 3735:
case 278:
case 2800:
case 459:
case 3536:
case 3825:
case 2519:
case 3133:
case 3915:
case 394:
case 3598:
case 1305:
case 49:
case 3805:
case 1774:
case 2337:
case 1985:
case 477:
case 2357:
case 3313:
case 4068:
case 210:
case 3268:
case 2730:
case 2340:
case 2103:
case 4090:
case 331:
case 192:
case 181:
case 3327:
case 3690:
case 1827:
case 837:
case 2506:
case 1917:
case 3830:
case 907:
case 2747:
case 3943:
case 1737:
case 1757:
case 1871:
case 1047:
case 1991:
case 1005:
case 3829:
case 2515:
case 1428:
case 2716:
case 2572:
case 1614:
case 421:
case 3349:
case 3926:
case 2299:
case 1030:
case 2569:
case 2202:
case 2602:
case 3448:
case 1198:
case 2074:
case 2729:
case 3451:
case 2454:
case 91:
case 2434:
case 1444:
case 2543:
case 1156:
case 2191:
case 3284:
case 843:
case 1470:
case 845:
case 3007:
case 539:
case 3045:
case 2281:
case 3218:
case 3618:
case 2792:
case 1863:
case 4084:
case 1967:
case 4052:
case 336:
case 609:
case 2421:
case 186:
case 712:
case 1083:
case 4032:
case 3632:
case 1066:
case 3809:
case 2477:
case 1309:
case 1025:
case 2482:
case 61:
case 3555:
case 2959:
case 2939:
case 1452:
case 216:
case 3017:
case 2442:
case 462:
case 1949:
case 1224:
case 3916:
case 1043:
case 3865:
case 1365:
case 2053:
case 909:
case 2241:
case 12:
case 1319:
case 3346:
case 3929:
case 2525:
case 3244:
case 203:
case 104:
case 2696:
case 2765:
case 1891:
case 1231:
case 2566:
case 2186:
case 545:
case 3270:
case 2726:
case 2583:
case 839:
case 448:
case 507:
case 3367:
case 2675:
case 2275:
case 2411:
case 3488:
case 1537:
case 1248:
case 2258:
case 2505:
case 2547:
case 4:
case 457:
case 1574:
case 2212:
case 1069:
case 3798:
case 2860:
case 1306:
case 1963:
case 460:
case 1604:
case 300:
case 1072:
case 1986:
case 1803:
case 3140:
case 3966:
case 3067:
case 3983:
case 3815:
case 3174:
case 747:
case 2171:
case 2978:
case 2715:
case 1369:
case 1120:
case 3869:
case 3157:
case 2113:
case 2935:
case 3559:
case 3887:
case 1006:
case 398:
case 180:
case 3872:
case 2516:
case 1945:
case 191:
case 645:
case 1026:
case 3843:
case 1343:
case 175:
case 2353:
case 703:
case 1885:
case 2743:
case 3385:
case 2810:
case 3046:
case 1019:
case 2662:
case 2262:
case 384:
case 134:
case 2094:
case 1733:
case 3947:
case 48:
case 2509:
case 1753:
case 2592:
case 3323:
case 2279:
case 1135:
case 809:
case 2089:
case 2925:
case 1098:
case 3787:
case 2303:
case 3772:
case 170:
case 3127:
case 817:
case 2983:
case 3113:
case 3935:
case 3955:
case 1703:
case 298:
case 230:
case 3516:
case 1549:
case 1147:
case 3715:
case 2137:
case 2843:
case 497:
case 1693:
case 1293:
case 1125:
case 232:
case 1563:
case 2317:
case 619:
case 2930:
case 1495:
case 3145:
case 1717:
case 4079:
case 3279:
case 83:
case 1957:
case 3920:
case 3810:
case 2385:
case 185:
case 129:
case 335:
case 4062:
case 183:
case 90:
case 3662:
case 1056:
case 3262:
case 284:
case 1036:
case 3094:
case 924:
case 964:
case 2905:
case 1682:
case 1282:
case 1109:
case 1746:
case 2865:
case 2736:
case 1277:
case 3053:
case 542:
case 2555:
case 3959:
case 3939:
case 2535:
case 2208:
case 316:
case 2608:
case 358:
case 732:
case 1192:
case 1221:
case 946:
case 2916:
case 864:
case 3186:
case 1481:
case 80:
case 2270:
case 3163:
case 2670:
case 3726:
case 3641:
case 1422:
case 93:
case 2346:
case 3525:
case 2244:
case 2819:
case 1634:
case 3296:
case 1234:
case 3696:
case 3394:
case 1356:
case 489:
case 425:
case 3765:
case 4041:
case 784:
case 2391:
case 917:
case 3258:
case 3898:
case 3658:
case 1398:
case 3238:
case 2909:
case 3547:
case 2003:
case 2992:
case 3149:
case 3706:
case 2367:
case 1513:
case 3675:
case 2414:
case 3411:
case 2488:
case 798:
case 151:
case 1601:
case 1201:
case 3550:
case 730:
case 3473:
case 540:
case 3212:
case 3612:
case 1571:
case 2798:
case 1360:
case 1129:
case 2013:
case 1106:
case 1749:
case 1503:
case 499:
case 794:
case 3057:
case 1273:
case 2829:
case 3515:
case 2919:
case 3569:
case 3189:
case 1438:
case 3602:
case 2448:
case 3572:
case 3040:
case 1611:
case 150:
case 2349:
case 3699:
case 3859:
case 3839:
case 731:
case 2684:
case 2007:
case 3281:
case 3681:
case 2218:
case 788:
case 524:
case 2906:
case 819:
case 2431:
case 715:
case 713:
case 3434:
case 3960:
case 3146:
case 1496:
case 868:
case 2194:
case 646:
case 3543:
case 3222:
case 24:
case 1441:
case 3998:
case 354:
case 2809:
case 2510:
case 1165:
case 706:
case 2424:
case 1242:
case 2252:
case 2892:
case 2652:
case 1763:
case 2972:
case 2086:
case 4095:
case 3783:
case 1479:
case 3835:
case 3695:
case 3295:
case 3855:
case 1335:
case 928:
case 288:
case 2969:
case 3565:
case 2700:
case 3878:
case 1378:
case 74:
case 2536:
case 1300:
case 2556:
case 1591:
case 546:
case 3519:
case 2915:
case 2153:
case 1546:
case 312:
case 1745:
case 3117:
case 206:
case 1707:
case 2883:
case 942:
case 664:
case 624:
case 1661:
case 2313:
case 171:
case 1172:
case 2668:
case 310:
case 2268:
case 3730:
case 641:
case 2805:
case 1697:
case 1297:
case 1169:
case 1320:
case 3337:
case 1589:
case 3820:
case 3357:
case 193:
case 1953:
case 2180:
case 3747:
case 3676:
case 487:
case 1874:
case 1840:
case 3103:
case 3340:
case 1059:
case 231:
case 701:
case 2830:
case 638:
case 3893:
case 1393:
case 3400:
case 3233:
case 1077:
case 586:
case 1976:
case 4053:
case 975:
case 555:
case 1518:
case 2483:
case 416:
case 1021:
case 2466:
case 991:
case 2542:
case 2195:
case 1879:
case 508:
case 1034:
case 78:
case 323:
case 2285:
case 2685:
case 1610:
case 4080:
case 2176:
case 447:
case 1440:
case 3075:
case 2203:
case 2430:
case 980:
case 2028:
case 3514:
case 260:
case 2511:
case 220:
case 1995:
case 3420:
case 1437:
case 1298:
case 1698:
case 3338:
case 2289:
case 2199:
case 3704:
case 3439:
case 1114:
case 411:
case 1568:
case 2328:
case 760:
case 720:
case 1590:
case 1660:
case 1260:
case 757:
case 3312:
case 880:
case 1093:
case 3731:
case 3751:
case 608:
case 2754:
case 3877:
case 2409:
case 882:
case 1377:
case 2734:
case 474:
case 37:
case 779:
case 3882:
case 1382:
case 1770:
case 3152:
case 1321:
case 3132:
case 2988:
case 722:
case 2308:
case 653:
case 2370:
case 655:
case 3079:
case 2181:
case 3118:
case 3184:
case 834:
case 2691:
case 2851:
case 2291:
case 2122:
case 435:
case 1656:
case 3834:
case 1354:
case 3396:
case 1334:
case 3854:
case 2777:
case 3294:
case 1636:
case 1236:
case 433:
case 3694:
case 2646:
case 3973:
case 4094:
case 92:
case 96:
case 1841:
case 2782:
case 2263:
case 2663:
case 2904:
case 908:
case 1881:
case 2384:
case 2686:
case 2286:
case 1131:
case 1912:
case 1151:
case 890:
case 2196:
case 3144:
case 3456:
case 11:
case 2948:
case 953:
case 1938:
case 604:
case 2332:
case 1718:
case 226:
case 573:
case 3842:
case 66:
case 478:
case 1975:
case 62:
case 1784:
case 2068:
case 2406:
case 3714:
case 2711:
case 3873:
case 1373:
case 1941:
case 580:
case 29:
case 2112:
case 1996:
case 3460:
case 3934:
case 2773:
case 3076:
case 2138:
case 3982:
case 2158:
case 3302:
case 387:
case 137:
case 3977:
case 881:
case 1659:
case 2175:
case 1259:
case 3399:
case 1239:
case 1639:
case 2814:
case 2249:
case 2924:
case 2888:
case 2487:
case 1790:
case 2368:
case 1979:
case 2613:
case 3548:
case 3257:
case 1620:
case 3237:
case 3637:
case 777:
case 2671:
case 680:
case 3376:
case 2415:
case 3674:
case 107:
case 3993:
case 4074:
case 3002:
case 4040:
case 2390:
case 2627:
case 992:
case 981:
case 3099:
case 1768:
case 261:
case 1528:
case 3240:
case 1011:
case 3395:
case 1635:
case 1655:
case 504:
case 2607:
case 990:
case 673:
case 675:
case 2245:
case 3524:
case 2084:
case 56:
case 3022:
case 3410:
case 143:
case 2162:
case 2582:
case 244:
case 682:
case 454:
case 1544:
case 2443:
case 3551:
case 1433:
case 1453:
case 3861:
case 2032:
case 853:
case 855:
case 726:
case 766:
case 299:
case 2548:
case 2657:
case 995:
case 2897:
case 2257:
case 670:
case 993:
case 1647:
case 1247:
case 551:
case 3487:
case 4013:
case 3368:
case 1868:
case 140:
case 1575:
case 3213:
case 1890:
case 1650:
case 2504:
case 3227:
case 2099:
case 3501:
case 361:
case 321:
case 1014:
case 401:
case 4027:
case 3271:
case 1512:
case 850:
case 2002:
case 787:
case 2022:
case 876:
case 2410:
case 344:
case 852:
case 3577:
case 3761:
case 4045:
case 3607:
case 3207:
case 2081:
case 2524:
case 3018:
case 3521:
case 1795:
case 1266:
case 436:
case 1364:
case 669:
case 685:
case 683:
case 1683:
case 1625:
case 656:
case 1541:
case 2531:
case 2322:
case 1446:
case 3196:
case 3593:
case 2456:
case 952:
case 3263:
case 2170:
case 2901:
case 2095:
case 2381:
case 3318:
case 3742:
case 583:
case 585:
case 529:
case 569:
case 1818:
case 1884:
case 976:
case 488:
case 3384:
case 3686:
case 3286:
case 406:
case 1064:
case 1832:
case 1121:
case 1292:
case 1852:
case 3332:
case 1781:
case 326:
case 359:
case 3465:
case 1562:
case 1182:
case 2873:
case 494:
case 1629:
case 1944:
case 39:
case 1702:
case 377:
case 2934:
case 2954:
case 1799:
case 895:
case 1970:
case 893:
case 1101:
case 1908:
case 4049:
case 2399:
case 3814:
case 3249:
case 950:
case 1216:
case 431:
case 2811:
case 2921:
case 2076:
case 3138:
case 2982:
case 2302:
case 2498:
case 927:
case 3267:
case 3199:
case 1449:
case 2704:
case 1111:
case 1932:
case 1952:
case 4089:
case 2358:
case 3102:
case 3289:
case 3689:
case 1173:
case 1738:
case 1758:
case 2312:
case 2748:
case 3429:
case 1576:
case 593:
case 595:
case 1918:
case 1984:
case 430:
case 1304:
case 951:
case 2801:
case 3914:
case 3824:
case 1324:
case 2152:
case 2911:
case 2821:
case 1808:
case 1142:
case 3308:
case 2731:
case 2751:
case 1265:
case 3754:
case 3409:
case 3734:
case 1796:
case 1741:
case 3291:
case 3122:
case 872:
case 4046:
case 2854:
case 2294:
case 3246:
case 3344:
case 484:
case 1619:
case 723:
case 763:
case 13:
case 3782:
case 765:
case 2341:
case 38:
case 4091:
case 1870:
case 829:
case 1486:
case 3370:
case 2724:
case 2079:
case 514:
case 3721:
case 3181:
case 2118:
case 3561:
case 1463:
case 2184:
case 2564:
case 1161:
case 4017:
case 614:
case 3466:
case 1990:
case 3217:
case 322:
case 2253:
case 2233:
case 2633:
case 1762:
case 797:
case 77:
case 1243:
case 3793:
case 164:
case 552:
case 2362:
case 265:
case 2478:
case 576:
case 263:
case 985:
case 929:
case 2997:
case 3685:
case 10:
case 983:
case 1445:
case 3223:
case 1407:
case 3623:
case 4023:
case 2435:
case 348:
case 695:
case 4003:
case 2190:
case 2075:
case 567:
case 3603:
case 3203:
case 3430:
case 2058:
case 1048:
case 1615:
case 3573:
case 2680:
case 550:
case 1471:
case 1502:
case 357:
case 851:
case 1197:
case 1269:
case 3447:
case 2420:
case 2012:
case 3028:
case 2514:
case 3511:
case 360:
case 1004:
case 1599:
case 1687:
case 1613:
case 3575:
case 3868:
case 1368:
case 2790:
case 1487:
case 2962:
case 1469:
case 2620:
case 4047:
case 2397:
case 4005:
case 737:
case 2876:
case 2480:
case 3512:
case 1671:
case 1271:
case 2528:
case 121:
case 3403:
case 1627:
case 3630:
case 3230:
case 3250:
case 3890:
case 1521:
case 505:
case 3423:
case 1179:
case 2655:
case 2895:
case 2235:
case 2508:
case 328:
case 368:
case 1761:
case 71:
case 144:
case 1162:
case 2678:
case 243:
case 949:
case 3485:
case 4025:
case 1534:
case 2453:
case 453:
case 2600:
case 516:
case 3225:
case 3625:
case 2544:
case 2570:
case 3683:
case 4066:
case 3266:
case 3364:
case 978:
case 486:
case 3417:
case 4083:
case 1032:
case 342:
case 1384:
case 849:
case 1286:
case 3818:
case 533:
case 1318:
case 2732:
case 2752:
case 1263:
case 1904:
case 3491:
case 1593:
case 2494:
case 3446:
case 1419:
case 743:
case 2822:
case 878:
case 3209:
case 812:
case 3579:
case 2975:
case 1426:
case 603:
case 166:
case 2342:
case 605:
case 3781:
case 3852:
case 3692:
case 1332:
case 1352:
case 3064:
case 574:
case 3970:
case 2104:
case 3799:
case 2996:
case 1931:
case 3702:
case 1951:
case 2941:
case 3629:
case 2373:
case 3944:
case 2802:
case 237:
case 1158:
case 511:
case 3489:
case 3388:
case 3616:
case 1649:
case 1814:
case 1249:
case 3467:
case 492:
case 1924:
case 1175:
case 3908:
case 1597:
case 317:
case 3712:
case 1848:
case 1102:
case 2858:
case 3952:
case 1701:
case 3111:
case 3932:
case 3449:
case 1267:
case 2875:
case 2728:
case 480:
case 3206:
case 3606:
case 3304:
case 4006:
case 3984:
case 3828:
case 3576:
case 1429:
case 2922:
case 2812:
case 510:
case 2660:
case 3741:
case 2744:
case 473:
case 1409:
case 1734:
case 3665:
case 2902:
case 2093:
case 4026:
case 2999:
case 3808:
case 3626:
case 3226:
case 2770:
case 3324:
case 1914:
case 1824:
case 3463:
case 1181:
case 549:
case 1721:
case 835:
case 3870:
case 1782:
case 18:
case 3844:
case 434:
case 209:
case 1646:
case 1344:
case 2636:
case 1777:
case 2236:
case 2656:
case 1122:
case 3351:
case 3331:
case 1691:
case 1851:
case 1425:
case 2976:
case 3522:
case 4043:
case 974:
case 816:
case 162:
case 3990:
case 1008:
case 2584:
case 649:
case 2164:
case 2021:
case 1483:
case 3968:
case 2552:
case 1195:
case 803:
case 805:
case 1070:
case 935:
case 2210:
case 30:
case 2610:
case 1685:
case 404:
case 2034:
case 364:
case 2862:
case 46:
case 678:
case 3471:
case 1:
case 3615:
case 2474:
case 1176:
case 847:
case 1603:
case 3427:
case 1430:
case 2995:
case 2001:
case 3004:
case 4072:
case 1511:
case 120:
case 1028:
case 4087:
case 3413:
case 2457:
case 4069:
case 2437:
case 3269:
case 1405:
case 3502:
case 615:
case 613:
case 2779:
case 3164:
case 2024:
case 3976:
case 2243:
case 3082:
case 2522:
case 536:
case 802:
case 3077:
case 688:
case 3393:
case 1233:
case 1253:
case 1893:
case 3210:
case 3610:
case 1041:
case 73:
case 123:
case 165:
case 189:
case 125:
case 3054:
case 3034:
case 2031:
case 4010:
case 2968:
case 3532:
case 3552:
case 1455:
case 2445:
case 3879:
case 694:
case 1961:
case 1190:
case 1680:
case 2048:
case 2615:
case 501:
case 1420:
case 3437:
case 2669:
case 631:
case 2502:
case 2599:
case 3995:
case 2287:
case 998:
case 2687:
case 2672:
case 930:
case 2111:
case 3568:
case 3188:
case 3114:
case 1704:
case 1439:
case 1375:
case 2348:
case 1358:
case 3838:
case 3298:
case 3698:
case 1338:
case 2576:
case 4060:
case 1312:
case 2738:
case 3660:
case 3260:
case 898:
case 3301:
case 1801:
case 3590:
case 2206:
case 2304:
case 2984:
case 900:
case 2808:
case 2142:
case 1911:
case 1132:
case 2626:
case 2226:
case 2324:
case 3382:
case 17:
case 1882:
case 2796:
case 1877:
case 832:
case 2665:
case 3902:
case 3093:
case 1731:
case 1341:
case 3841:
case 309:
case 1973:
case 429:
case 1694:
case 3236:
case 1062:
case 3256:
case 1834:
case 2331:
case 588:
case 456:
case 1184:
case 1564:
case 418:
case 513:
case 1118:
case 1079:
case 472:
case 2870:
case 2486:
case 602:
case 1456:
case 414:
case 2446:
case 3151:
case 3131:
case 3912:
case 2884:
case 2818:
case 1381:
case 584:
case 728:
case 3752:
case 3342:
case 3718:
case 2781:
case 2852:
case 2292:
case 2121:
case 3061:
case 2562:
case 2182:
case 3958:
case 2609:
case 806:
case 1934:
case 530:
case 3097:
case 3941:
case 2629:
case 1788:
case 2970:
case 3104:
case 894:
case 1128:
case 1921:
case 3311:
case 2314:
case 2216:
case 4039:
case 1399:
case 3899:
case 3259:
case 831:
case 3148:
case 337:
case 1076:
case 600:
case 2558:
case 2605:
case 2647:
case 994:
case 3620:
case 3220:
case 2776:
case 1637:
case 1657:
case 1897:
case 1548:
case 2575:
case 3979:
case 2868:
case 3011:
case 1240:
case 1640:
case 3528:
case 1099:
case 3768:
case 2890:
case 2650:
case 931:
case 801:
case 1993:
case 1274:
case 630:
case 3480:
case 915:
case 2485:
case 1524:
case 4055:
case 84:
case 1764:
case 3655:
case 476:
case 988:
case 3635:
case 3570:
case 3042:
case 2683:
case 2266:
case 242:
case 2596:
case 1551:
case 1531:
case 15:
case 4000:
case 2225:
case 836:
case 3544:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746943201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,];
var gg_b = "1746943201/";

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
