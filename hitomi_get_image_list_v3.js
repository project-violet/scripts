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
case 1252:
case 3524:
case 1521:
case 2813:
case 767:
case 2674:
case 3974:
case 1149:
case 3915:
case 76:
case 3566:
case 856:
case 2615:
case 3259:
case 2016:
case 2419:
case 1726:
case 965:
case 2:
case 3758:
case 1040:
case 3821:
case 3761:
case 2508:
case 3739:
case 4072:
case 3165:
case 394:
case 1764:
case 3238:
case 52:
case 2242:
case 1326:
case 2265:
case 2587:
case 1130:
case 2514:
case 779:
case 751:
case 2794:
case 527:
case 3625:
case 2896:
case 2925:
case 2388:
case 3763:
case 2159:
case 2470:
case 2811:
case 198:
case 1182:
case 3740:
case 1058:
case 1937:
case 2176:
case 3026:
case 3429:
case 3080:
case 1973:
case 1039:
case 491:
case 2093:
case 1332:
case 165:
case 1456:
case 1352:
case 3428:
case 2911:
case 3240:
case 1837:
case 837:
case 2030:
case 481:
case 3472:
case 664:
case 1957:
case 1038:
case 3188:
case 1395:
case 2497:
case 3052:
case 2207:
case 2161:
case 2139:
case 3537:
case 57:
case 3923:
case 900:
case 1150:
case 2158:
case 3338:
case 2389:
case 869:
case 3696:
case 2825:
case 2404:
case 2418:
case 2342:
case 330:
case 2621:
case 53:
case 3921:
case 3258:
case 3194:
case 2049:
case 1795:
case 1410:
case 4029:
case 2163:
case 384:
case 3571:
case 2789:
case 2802:
case 963:
case 1280:
case 3738:
case 3647:
case 3107:
case 988:
case 1574:
case 409:
case 100:
case 2913:
case 653:
case 3815:
case 1232:
case 1116:
case 3776:
case 2339:
case 2763:
case 3896:
case 3925:
case 3794:
case 3707:
case 3514:
case 353:
case 3587:
case 220:
case 2189:
case 3242:
case 3575:
case 1511:
case 249:
case 195:
case 1152:
case 3093:
case 946:
case 1673:
case 2064:
case 1887:
case 1716:
case 2429:
case 1814:
case 706:
case 3811:
case 1249:
case 1875:
case 2740:
case 79:
case 1909:
case 1282:
case 3091:
case 3674:
case 3813:
case 670:
case 51:
case 2602:
case 983:
case 364:
case 3902:
case 2363:
case 3847:
case 2739:
case 492:
case 3508:
case 1230:
case 1391:
case 146:
case 426:
case 2758:
case 995:
case 1513:
case 3016:
case 801:
case 457:
case 1750:
case 3288:
case 482:
case 2239:
case 1730:
case 2261:
case 2107:
case 2738:
case 284:
case 3802:
case 1666:
case 3163:
case 3365:
case 1624:
case 1250:
case 2194:
case 844:
case 2258:
case 2921:
case 985:
case 2776:
case 1502:
case 3600:
case 1065:
case 787:
case 2613:
case 1042:
case 1382:
case 1657:
case 1525:
case 1486:
case 694:
case 2472:
case 2376:
case 3911:
case 1975:
case 1749:
case 2611:
case 2428:
case 4019:
case 2095:
case 193:
case 1914:
case 544:
case 2696:
case 3825:
case 3294:
case 3158:
case 2573:
case 3082:
case 2263:
case 1401:
case 1180:
case 2923:
case 3742:
case 436:
case 258:
case 1164:
case 2359:
case 3139:
case 3161:
case 3765:
case 3937:
case 1740:
case 398:
case 2748:
case 2814:
case 994:
case 4067:
case 1429:
case 4010:
case 2596:
case 781:
case 3039:
case 3332:
case 2088:
case 586:
case 1823:
case 120:
case 3422:
case 3130:
case 2350:
case 1557:
case 3380:
case 1625:
case 2393:
case 1032:
case 1339:
case 2791:
case 1259:
case 3405:
case 3824:
case 3726:
case 872:
case 2513:
case 246:
case 1758:
case 1821:
case 2391:
case 2230:
case 1761:
case 685:
case 1363:
case 3866:
case 886:
case 1602:
case 1238:
case 709:
case 2348:
case 2412:
case 1524:
case 2007:
case 1340:
case 1276:
case 4079:
case 2282:
case 2909:
case 3609:
case 3149:
case 1566:
case 1915:
case 2671:
case 2349:
case 1613:
case 2042:
case 2809:
case 4078:
case 2502:
case 1874:
case 3116:
case 811:
case 970:
case 3232:
case 2908:
case 1776:
case 130:
case 1194:
case 545:
case 1258:
case 668:
case 3191:
case 3924:
case 2624:
case 3226:
case 3467:
case 3795:
case 683:
case 3515:
case 896:
case 184:
case 762:
case 1738:
case 1107:
case 1647:
case 2403:
case 1239:
case 2730:
case 695:
case 3574:
case 1188:
case 80:
case 1359:
case 479:
case 2164:
case 2180:
case 1263:
case 2330:
case 3076:
case 3150:
case 2291:
case 716:
case 451:
case 1338:
case 1573:
case 1696:
case 511:
case 2248:
case 3059:
case 4005:
case 3456:
case 2420:
case 3687:
case 984:
case 2132:
case 2216:
case 363:
case 522:
case 2975:
case 3837:
case 1611:
case 388:
case 1472:
case 285:
case 596:
case 2089:
case 2525:
case 2657:
case 1394:
case 782:
case 419:
case 2764:
case 164:
case 110:
case 4086:
case 2780:
case 559:
case 1508:
case 2040:
case 663:
case 1419:
case 1016:
case 2295:
case 776:
case 2405:
case 1307:
case 1048:
case 2971:
case 1615:
case 3671:
case 3282:
case 3094:
case 3808:
case 4001:
case 48:
case 3412:
case 3348:
case 2252:
case 3088:
case 265:
case 1093:
case 9:
case 3152:
case 2039:
case 3673:
case 859:
case 910:
case 3887:
case 1050:
case 1811:
case 2182:
case 298:
case 2523:
case 1470:
case 1159:
case 3791:
case 3393:
case 1925:
case 654:
case 1896:
case 2364:
case 2478:
case 1794:
case 2130:
case 1514:
case 736:
case 2326:
case 531:
case 600:
case 1575:
case 1825:
case 1389:
case 3330:
case 3291:
case 2150:
case 155:
case 3401:
case 812:
case 1742:
case 3164:
case 1139:
case 1207:
case 1765:
case 3657:
case 2957:
case 2038:
case 3486:
case 3525:
case 566:
case 1030:
case 2675:
case 3132:
case 393:
case 3420:
case 263:
case 2456:
case 3914:
case 452:
case 3908:
case 2148:
case 2116:
case 49:
case 2232:
case 2871:
case 254:
case 512:
case 1600:
case 2752:
case 3065:
case 955:
case 3349:
case 548:
case 1288:
case 3293:
case 3730:
case 1947:
case 792:
case 1509:
case 2515:
case 3666:
case 75:
case 1789:
case 2226:
case 1365:
case 1163:
case 2795:
case 726:
case 3624:
case 1049:
case 1621:
case 1418:
case 1700:
case 3682:
case 2499:
case 1215:
case 2096:
case 990:
case 2588:
case 1976:
case 3539:
case 3558:
case 315:
case 1485:
case 2652:
case 3880:
case 876:
case 124:
case 1689:
case 444:
case 1938:
case 3630:
case 1861:
case 2930:
case 1839:
case 675:
case 2893:
case 1125:
case 1858:
case 2011:
case 3724:
case 882:
case 2695:
case 3995:
case 623:
case 635:
case 1863:
case 3445:
case 3000:
case 3462:
case 1665:
case 3324:
case 499:
case 1723:
case 1102:
case 1642:
case 2013:
case 2308:
case 576:
case 225:
case 1469:
case 1066:
case 4027:
case 1431:
case 2594:
case 771:
case 3273:
case 3757:
case 2507:
case 759:
case 2816:
case 3237:
case 2949:
case 3109:
case 328:
case 1315:
case 1113:
case 3371:
case 721:
case 3773:
case 908:
case 1374:
case 275:
case 592:
case 1451:
case 350:
case 2542:
case 2849:
case 2275:
case 748:
case 3108:
case 3454:
case 2287:
case 2916:
case 1694:
case 618:
case 1963:
case 3691:
case 2124:
case 2991:
case 712:
case 1223:
case 180:
case 1147:
case 1607:
case 401:
case 2830:
case 1961:
case 625:
case 1688:
case 2993:
case 174:
case 826:
case 3224:
case 2950:
case 85:
case 3650:
case 2441:
case 673:
case 2626:
case 1552:
case 3895:
case 108:
case 3187:
case 235:
case 313:
case 3932:
case 2498:
case 4045:
case 3114:
case 2208:
case 3538:
case 1200:
case 2882:
case 2709:
case 3175:
case 3373:
case 3771:
case 2589:
case 1595:
case 934:
case 1453:
case 1942:
case 160:
case 3013:
case 2540:
case 469:
case 1807:
case 1548:
case 2324:
case 1225:
case 2366:
case 1894:
case 1008:
case 2445:
case 2021:
case 228:
case 1115:
case 3171:
case 437:
case 4041:
case 3816:
case 1174:
case 3787:
case 3848:
case 3714:
case 2273:
case 3594:
case 2757:
case 903:
case 2563:
case 2434:
case 325:
case 241:
case 3047:
case 477:
case 1713:
case 1311:
case 3708:
case 2561:
case 1676:
case 3588:
case 3096:
case 3982:
case 2357:
case 3137:
case 103:
case 3695:
case 1087:
case 2724:
case 786:
case 3011:
case 3893:
case 2630:
case 342:
case 3930:
case 1638:
case 2864:
case 1989:
case 628:
case 1658:
case 591:
case 3441:
case 3626:
case 796:
case 2224:
case 2650:
case 1582:
case 1702:
case 1123:
case 1325:
case 2427:
case 2693:
case 3993:
case 1661:
case 2576:
case 641:
case 3830:
case 1213:
case 3157:
case 2337:
case 147:
case 3025:
case 2771:
case 2538:
case 2175:
case 2373:
case 3208:
case 1530:
case 335:
case 3632:
case 213:
case 42:
case 14:
case 891:
case 2108:
case 2648:
case 3214:
case 278:
case 1211:
case 1100:
case 1640:
case 250:
case 905:
case 375:
case 1481:
case 2773:
case 2257:
case 745:
case 3443:
case 615:
case 3166:
case 816:
case 94:
case 707:
case 3991:
case 3124:
case 2074:
case 947:
case 1725:
case 2015:
case 1296:
case 1009:
case 1406:
case 1121:
case 421:
case 1563:
case 806:
case 717:
case 1757:
case 1273:
case 3024:
case 2115:
case 2313:
case 128:
case 1649:
case 448:
case 2711:
case 1237:
case 3840:
case 1462:
case 597:
case 915:
case 4090:
case 2807:
case 2548:
case 412:
case 789:
case 1540:
case 59:
case 3102:
case 3642:
case 390:
case 3723:
case 3938:
case 2492:
case 1864:
case 3057:
case 2638:
case 3861:
case 928:
case 506:
case 3125:
case 4051:
case 466:
case 3858:
case 1724:
case 2087:
case 203:
case 1826:
case 2455:
case 3564:
case 3215:
case 3274:
case 1561:
case 1558:
case 2311:
case 852:
case 1952:
case 115:
case 24:
case 113:
case 3774:
case 431:
case 887:
case 3715:
case 3490:
case 1771:
case 3595:
case 1852:
case 88:
case 2435:
case 138:
case 614:
case 3939:
case 1576:
case 2661:
case 950:
case 205:
case 744:
case 3688:
case 1693:
case 2325:
case 2123:
case 1427:
case 1266:
case 374:
case 2702:
case 2889:
case 3073:
case 3859:
case 3552:
case 1926:
case 904:
case 819:
case 308:
case 2658:
case 3037:
case 3958:
case 2994:
case 4033:
case 587:
case 1015:
case 2302:
case 2725:
case 3071:
case 334:
case 3963:
case 2663:
case 2549:
case 2842:
case 913:
case 2865:
case 4085:
case 2907:
case 799:
case 3607:
case 3147:
case 104:
case 3113:
case 1773:
case 2481:
case 3374:
case 150:
case 178:
case 459:
case 2211:
case 1737:
case 3940:
case 1454:
case 1616:
case 303:
case 3014:
case 3659:
case 2959:
case 1850:
case 2858:
case 3075:
case 2125:
case 2323:
case 925:
case 1893:
case 3888:
case 2532:
case 1930:
case 2861:
case 3747:
case 422:
case 4081:
case 2057:
case 3492:
case 2938:
case 3638:
case 224:
case 2689:
case 973:
case 3550:
case 411:
case 1314:
case 133:
case 1387:
case 2485:
case 727:
case 3713:
case 680:
case 2477:
case 3311:
case 3676:
case 2274:
case 2580:
case 1499:
case 2215:
case 2564:
case 118:
case 4006:
case 2840:
case 3313:
case 1816:
case 173:
case 1507:
case 2024:
case 1848:
case 2066:
case 2431:
case 674:
case 445:
case 1047:
case 3591:
case 3942:
case 360:
case 314:
case 2723:
case 4035:
case 3548:
case 3965:
case 567:
case 3347:
case 40:
case 2863:
case 3907:
case 1443:
case 2147:
case 2607:
case 935:
case 1166:
case 3842:
case 2223:
case 3302:
case 234:
case 2071:
case 3725:
case 840:
case 2694:
case 3009:
case 3406:
case 1287:
case 1916:
case 123:
case 1214:
case 1948:
case 3211:
case 3640:
case 1849:
case 3481:
case 1309:
case 1460:
case 3213:
case 690:
case 3435:
case 2595:
case 2490:
case 77:
case 1589:
case 2715:
case 1025:
case 2111:
case 1709:
case 1208:
case 3530:
case 540:
case 1498:
case 1632:
case 135:
case 3658:
case 2958:
case 486:
case 975:
case 2196:
case 3444:
case 2552:
case 1441:
case 2838:
case 2073:
case 274:
case 3325:
case 3889:
case 2688:
case 3988:
case 2961:
case 1830:
case 2939:
case 472:
case 3639:
case 2381:
case 2503:
case 3368:
case 2783:
case 27:
case 1471:
case 3233:
case 3510:
case 3285:
case 415:
case 3567:
case 2169:
case 4023:
case 3351:
case 3753:
case 2735:
case 555:
case 1068:
case 602:
case 2084:
case 2306:
case 2402:
case 2017:
case 344:
case 1727:
case 2060:
case 1867:
case 3054:
case 3619:
case 1810:
case 2846:
case 2744:
case 1090:
case 2586:
case 4000:
case 1978:
case 1262:
case 2970:
case 62:
case 3192:
case 399:
case 1053:
case 1922:
case 855:
case 780:
case 2177:
case 1473:
case 3231:
case 23:
case 3768:
case 2501:
case 2185:
case 1234:
case 121:
case 441:
case 966:
case 3579:
case 1936:
case 2335:
case 2133:
case 3155:
case 3353:
case 1199:
case 3929:
case 2041:
case 2629:
case 3972:
case 317:
case 3268:
case 1734:
case 5:
case 1836:
case 202:
case 3135:
case 1457:
case 3578:
case 1686:
case 404:
case 3829:
case 31:
case 1254:
case 1620:
case 1956:
case 3522:
case 564:
case 3377:
case 2411:
case 478:
case 2190:
case 3928:
case 450:
case 3536:
case 1979:
case 853:
case 2870:
case 67:
case 4074:
case 1601:
case 1141:
case 2904:
case 3144:
case 3604:
case 2496:
case 2099:
case 2392:
case 1762:
case 1822:
case 2997:
case 1085:
case 677:
case 3423:
case 931:
case 1077:
case 1069:
case 1031:
case 63:
case 724:
case 301:
case 1143:
case 2447:
case 3421:
case 2946:
case 810:
case 864:
case 971:
case 2244:
case 2918:
case 2819:
case 1910:
case 1424:
case 3369:
case 2151:
case 553:
case 3400:
case 3733:
case 131:
case 2283:
case 22:
case 1160:
case 2413:
case 3253:
case 2235:
case 1184:
case 3777:
case 256:
case 3505:
case 227:
case 1341:
case 107:
case 3520:
case 2556:
case 2192:
case 369:
case 1083:
case 3098:
case 3970:
case 2670:
case 911:
case 870:
case 3804:
case 584:
case 1820:
case 3041:
case 337:
case 2929:
case 1597:
case 1044:
case 2828:
case 922:
case 3133:
case 1636:
case 530:
case 2579:
case 601:
case 996:
case 1398:
case 425:
case 2390:
case 1886:
case 1717:
case 2269:
case 1504:
case 1784:
case 3177:
case 2753:
case 2277:
case 3735:
case 1546:
case 3131:
case 90:
case 2285:
case 2510:
case 377:
case 2567:
case 3255:
case 1006:
case 2233:
case 1384:
case 907:
case 2415:
case 1299:
case 2790:
case 3783:
case 2474:
case 2368:
case 558:
case 3503:
case 945:
case 3818:
case 196:
case 4011:
case 1605:
case 1343:
case 1741:
case 705:
case 244:
case 830:
case 1803:
case 1081:
case 442:
case 122:
case 1241:
case 1667:
case 3244:
case 703:
case 2618:
case 3918:
case 3946:
case 186:
case 894:
case 1903:
case 172:
case 3447:
case 943:
case 1519:
case 327:
case 2505:
case 1812:
case 356:
case 699:
case 3235:
case 3283:
case 1298:
case 549:
case 32:
case 1408:
case 2400:
case 2733:
case 4025:
case 2331:
case 1799:
case 2290:
case 2928:
case 3628:
case 972:
case 1475:
case 3411:
case 594:
case 1414:
case 1920:
case 423:
case 21:
case 2385:
case 1487:
case 1399:
case 1217:
case 4002:
case 2731:
case 2769:
case 1284:
case 2135:
case 2333:
case 2578:
case 3355:
case 1092:
case 3281:
case 986:
case 302:
case 1570:
case 217:
case 3672:
case 475:
case 2268:
case 289:
case 714:
case 3997:
case 2697:
case 1243:
case 3206:
case 1055:
case 3392:
case 3904:
case 3099:
case 2144:
case 2604:
case 132:
case 1679:
case 2504:
case 1269:
case 2717:
case 2886:
case 1390:
case 704:
case 1768:
case 1872:
case 2398:
case 1579:
case 2636:
case 672:
case 3199:
case 1828:
case 2597:
case 2820:
case 944:
case 778:
case 3262:
case 2678:
case 1670:
case 3879:
case 20:
case 3572:
case 3528:
case 2035:
case 312:
case 2743:
case 207:
case 2341:
case 3068:
case 2081:
case 4057:
case 3727:
case 3810:
case 2741:
case 1054:
case 2605:
case 2145:
case 2343:
case 3905:
case 366:
case 296:
case 2162:
case 632:
case 1368:
case 1474:
case 1415:
case 2317:
case 211:
case 738:
case 1567:
case 3354:
case 1285:
case 1351:
case 2518:
case 1277:
case 1753:
case 1290:
case 1331:
case 1062:
case 1733:
case 1400:
case 989:
case 2408:
case 1045:
case 2298:
case 2154:
case 3334:
case 1777:
case 3184:
case 1253:
case 1505:
case 2812:
case 607:
case 3362:
case 4073:
case 846:
case 474:
case 3466:
case 1034:
case 272:
case 3345:
case 3143:
case 3603:
case 2903:
case 1106:
case 408:
case 1421:
case 917:
case 3910:
case 2667:
case 2610:
case 2679:
case 232:
case 1536:
case 3745:
case 3141:
case 1144:
case 434:
case 3762:
case 3033:
case 2055:
case 3878:
case 611:
case 1697:
case 480:
case 3077:
case 1268:
case 1972:
case 117:
case 371:
case 3457:
case 2092:
case 741:
case 1333:
case 2284:
case 2260:
case 1731:
case 3686:
case 1769:
case 2217:
case 1385:
case 1183:
case 3620:
case 11:
case 243:
case 2414:
case 2656:
case 901:
case 359:
case 696:
case 1928:
case 1251:
case 93:
case 1818:
case 1744:
case 266:
case 3162:
case 396:
case 659:
case 1846:
case 4075:
case 3343:
case 4014:
case 2905:
case 4087:
case 2810:
case 403:
case 3741:
case 2727:
case 937:
case 1292:
case 1306:
case 1084:
case 563:
case 671:
case 322:
case 3081:
case 2068:
case 1735:
case 854:
case 3546:
case 1169:
case 3518:
case 1131:
case 2354:
case 3134:
case 3912:
case 1043:
case 3384:
case 1255:
case 3317:
case 3299:
case 3360:
case 17:
case 1783:
case 1381:
case 2856:
case 3597:
case 1629:
case 1041:
case 2199:
case 248:
case 1335:
case 1781:
case 863:
case 1501:
case 2234:
case 1383:
case 1185:
case 13:
case 3398:
case 775:
case 3784:
case 2473:
case 1520:
case 3341:
case 307:
case 1897:
case 554:
case 212:
case 3035:
case 1344:
case 460:
case 2572:
case 3083:
case 2879:
case 2245:
case 4008:
case 1970:
case 1706:
case 2327:
case 977:
case 1804:
case 2077:
case 2529:
case 1997:
case 3243:
case 2822:
case 1392:
case 1496:
case 1904:
case 927:
case 3901:
case 2979:
case 2745:
case 332:
case 1190:
case 773:
case 259:
case 3475:
case 3414:
case 2956:
case 2620:
case 343:
case 2198:
case 3260:
case 3986:
case 3217:
case 898:
case 3399:
case 3092:
case 3284:
case 2836:
case 1281:
case 271:
case 1672:
case 2734:
case 447:
case 3519:
case 612:
case 156:
case 2184:
case 2117:
case 1413:
case 733:
case 3154:
case 12:
case 3298:
case 2334:
case 231:
case 718:
case 3408:
case 2805:
case 3667:
case 2910:
case 2967:
case 3610:
case 3241:
case 1244:
case 1946:
case 902:
case 2345:
case 2603:
case 1447:
case 3903:
case 405:
case 2227:
case 2069:
case 2466:
case 2031:
case 742:
case 1792:
case 2362:
case 1977:
case 1853:
case 835:
case 3356:
case 2136:
case 700:
case 2320:
case 3452:
case 1985:
case 2004:
case 1933:
case 940:
case 3553:
case 575:
case 3028:
case 3710:
case 2841:
case 1459:
case 3205:
case 1692:
case 3827:
case 494:
case 2583:
case 2301:
case 3072:
case 25:
case 3379:
case 2122:
case 292:
case 362:
case 420:
case 535:
case 449:
case 2581:
case 3779:
case 4032:
case 2701:
case 316:
case 3962:
case 3278:
case 2720:
case 788:
case 3756:
case 875:
case 2449:
case 2018:
case 1851:
case 1868:
case 3934:
case 1772:
case 2634:
case 261:
case 823:
case 3112:
case 4064:
case 2506:
case 2884:
case 1969:
case 2817:
case 4080:
case 2654:
case 825:
case 3256:
case 2312:
case 2984:
case 1562:
case 1869:
case 2960:
case 2917:
case 3834:
case 65:
case 381:
case 692:
case 470:
case 96:
case 236:
case 458:
case 3305:
case 2943:
case 3722:
case 1606:
case 151:
case 2491:
case 3279:
case 3845:
case 1463:
case 1534:
case 2110:
case 2201:
case 3101:
case 3641:
case 3210:
case 3426:
case 3029:
case 842:
case 3322:
case 139:
case 525:
case 276:
case 1104:
case 1644:
case 2493:
case 1197:
case 1461:
case 282:
case 1439:
case 2203:
case 3464:
case 2555:
case 484:
case 2627:
case 3480:
case 2712:
case 167:
case 818:
case 3186:
case 1877:
case 309:
case 1953:
case 833:
case 3432:
case 3120:
case 16:
case 1990:
case 1078:
case 2962:
case 216:
case 3662:
case 2278:
case 1560:
case 538:
case 3701:
case 2568:
case 3581:
case 3303:
case 3645:
case 1270:
case 2945:
case 1346:
case 513:
case 2551:
case 1465:
case 2367:
case 2310:
case 1797:
case 3860:
case 785:
case 1631:
case 3786:
case 3884:
case 361:
case 2112:
case 1003:
case 2934:
case 4093:
case 3634:
case 804:
case 3046:
case 2756:
case 2854:
case 3898:
case 18:
case 1129:
case 1883:
case 1001:
case 4091:
case 1633:
case 3999:
case 838:
case 3386:
case 3004:
case 187:
case 3212:
case 813:
case 392:
case 681:
case 2379:
case 3583:
case 35:
case 1304:
case 2827:
case 2590:
case 1489:
case 410:
case 464:
case 4016:
case 2495:
case 1020:
case 3841:
case 2767:
case 357:
case 1844:
case 2028:
case 1746:
case 326:
case 3535:
case 3627:
case 3555:
case 2378:
case 1892:
case 2464:
case 2533:
case 3493:
case 1944:
case 2577:
case 4049:
case 1246:
case 3179:
case 2705:
case 2210:
case 2641:
case 2101:
case 2585:
case 3941:
case 2029:
case 616:
case 3899:
case 1690:
case 2120:
case 2432:
case 19:
case 2698:
case 1983:
case 815:
case 3156:
case 2336:
case 1935:
case 2186:
case 197:
case 2736:
case 2834:
case 3960:
case 795:
case 2660:
case 828:
case 3286:
case 3984:
case 3312:
case 3448:
case 768:
case 3416:
case 3220:
case 2954:
case 1651:
case 3167:
case 3110:
case 3491:
case 1770:
case 1494:
case 2862:
case 1906:
case 2569:
case 2531:
case 1319:
case 1012:
case 2643:
case 952:
case 99:
case 3229:
case 3010:
case 1756:
case 2543:
case 4058:
case 962:
case 498:
case 3851:
case 3772:
case 1934:
case 1112:
case 191:
case 1236:
case 1222:
case 2797:
case 1310:
case 3554:
case 1367:
case 2442:
case 1551:
case 340:
case 54:
case 329:
case 1779:
case 1945:
case 652:
case 3119:
case 2584:
case 4040:
case 991:
case 2844:
case 2718:
case 730:
case 2020:
case 1495:
case 805:
case 1205:
case 3459:
case 2992:
case 1590:
case 2086:
case 2489:
case 2304:
case 1827:
case 1072:
case 2598:
case 784:
case 162:
case 1379:
case 3328:
case 3853:
case 2677:
case 84:
case 1356:
case 3985:
case 287:
case 2541:
case 1699:
case 2955:
case 3655:
case 3933:
case 2001:
case 2883:
case 4063:
case 2129:
case 28:
case 3022:
case 2172:
case 297:
case 1186:
case 3877:
case 2935:
case 252:
case 1698:
case 36:
case 1120:
case 3683:
case 29:
case 454:
case 2690:
case 2128:
case 3990:
case 2855:
case 3078:
case 3833:
case 1267:
case 1101:
case 1641:
case 1705:
case 2246:
case 339:
case 3104:
case 2218:
case 3439:
case 3036:
case 3461:
case 1464:
case 1378:
case 2599:
case 1722:
case 2407:
case 2012:
case 687:
case 2319:
case 2204:
case 3118:
case 1531:
case 2906:
case 1862:
case 814:
case 2494:
case 3146:
case 909:
case 351:
case 3534:
case 68:
case 3463:
case 488:
case 3951:
case 3729:
case 4059:
case 1256:
case 3562:
case 619:
case 503:
case 1660:
case 3869:
case 3272:
case 2668:
case 1834:
case 181:
case 2981:
case 3545:
case 1736:
case 1703:
case 1430:
case 1122:
case 1583:
case 808:
case 3489:
case 3304:
case 2438:
case 2170:
case 3020:
case 3219:
case 3397:
case 3718:
case 961:
case 1535:
case 1178:
case 3001:
case 3129:
case 1898:
case 2372:
case 2476:
case 651:
case 3955:
case 1004:
case 2985:
case 3541:
case 387:
case 3685:
case 1212:
case 534:
case 3677:
case 3835:
case 2328:
case 1544:
case 1817:
case 3669:
case 3631:
case 1884:
case 3881:
case 926:
case 161:
case 4088:
case 1634:
case 2772:
case 495:
case 2010:
case 880:
case 755:
case 1701:
case 66:
case 1645:
case 1581:
case 229:
case 3346:
case 3318:
case 3797:
case 3465:
case 667:
case 1843:
case 2534:
case 1201:
case 1110:
case 251:
case 1491:
case 3906:
case 2606:
case 2118:
case 1943:
case 3407:
case 753:
case 2681:
case 976:
case 2272:
case 1286:
case 2869:
case 2005:
case 1312:
case 1448:
case 524:
case 493:
case 1019:
case 2228:
case 2951:
case 3651:
case 306:
case 2078:
case 1592:
case 3855:
case 2833:
case 3690:
case 2990:
case 3128:
case 1899:
case 39:
case 2683:
case 352:
case 1070:
case 936:
case 1156:
case 3935:
case 2877:
case 3653:
case 267:
case 4065:
case 2022:
case 1712:
case 1627:
case 3892:
case 1203:
case 182:
case 3488:
case 710:
case 764:
case 3218:
case 2104:
case 2644:
case 2458:
case 824:
case 176:
case 239:
case 7:
case 3719:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766710801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,];
var gg_b = "1766710801/";

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
