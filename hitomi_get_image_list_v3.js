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
case 443:
case 2748:
case 2665:
case 2978:
case 2997:
case 2622:
case 362:
case 3980:
case 1466:
case 1710:
case 2230:
case 1482:
case 3647:
case 2592:
case 1733:
case 2213:
case 308:
case 2182:
case 4020:
case 2511:
case 176:
case 1858:
case 1239:
case 2166:
case 3951:
case 2719:
case 2047:
case 1347:
case 2147:
case 504:
case 3540:
case 1439:
case 132:
case 3122:
case 212:
case 1958:
case 1030:
case 202:
case 3065:
case 1929:
case 3666:
case 2897:
case 1282:
case 193:
case 423:
case 268:
case 2039:
case 1266:
case 4008:
case 482:
case 2139:
case 3864:
case 301:
case 396:
case 2012:
case 2962:
case 3826:
case 1312:
case 725:
case 2112:
case 311:
case 1751:
case 3236:
case 3369:
case 2283:
case 1834:
case 2191:
case 1391:
case 997:
case 2789:
case 3933:
case 2091:
case 3624:
case 3885:
case 3057:
case 1677:
case 3160:
case 990:
case 3157:
case 2567:
case 819:
case 700:
case 1035:
case 710:
case 687:
case 1135:
case 556:
case 2335:
case 3545:
case 3594:
case 3323:
case 3184:
case 3469:
case 3298:
case 1212:
case 1500:
case 2124:
case 4062:
case 2024:
case 2732:
case 1593:
case 980:
case 3307:
case 3269:
case 3477:
case 3810:
case 2383:
case 4025:
case 1083:
case 3763:
case 2546:
case 2771:
case 1669:
case 4086:
case 779:
case 870:
case 3612:
case 1934:
case 2701:
case 3729:
case 2862:
case 1715:
case 1623:
case 3926:
case 1570:
case 690:
case 3223:
case 987:
case 3407:
case 3833:
case 2886:
case 2321:
case 1852:
case 1121:
case 3843:
case 3250:
case 3267:
case 1650:
case 2294:
case 1388:
case 3070:
case 1774:
case 460:
case 2598:
case 1944:
case 3100:
case 1704:
case 996:
case 901:
case 1488:
case 467:
case 791:
case 2507:
case 550:
case 2536:
case 7:
case 716:
case 2628:
case 2421:
case 397:
case 2972:
case 2742:
case 374:
case 3281:
case 3379:
case 781:
case 2670:
case 3367:
case 2754:
case 986:
case 3209:
case 3481:
case 3688:
case 3350:
case 2787:
case 3703:
case 1145:
case 1288:
case 1094:
case 1045:
case 1584:
case 3773:
case 1679:
case 4031:
case 2761:
case 3128:
case 3943:
case 1952:
case 380:
case 3028:
case 2802:
case 1895:
case 601:
case 883:
case 611:
case 3279:
case 3381:
case 2693:
case 2149:
case 3513:
case 959:
case 2049:
case 3292:
case 918:
case 424:
case 1611:
case 194:
case 908:
case 1890:
case 3211:
case 72:
case 2256:
case 1927:
case 3795:
case 1040:
case 1140:
case 2340:
case 3355:
case 170:
case 2006:
case 503:
case 2018:
case 2968:
case 1306:
case 2037:
case 3392:
case 2796:
case 3874:
case 2999:
case 1156:
case 1056:
case 3311:
case 3752:
case 608:
case 45:
case 1743:
case 3637:
case 2456:
case 184:
case 1990:
case 3411:
case 74:
case 3606:
case 1655:
case 3175:
case 249:
case 1514:
case 1827:
case 2717:
case 1218:
case 3804:
case 444:
case 1237:
case 666:
case 225:
case 955:
case 4028:
case 1850:
case 3131:
case 3031:
case 4059:
case 2296:
case 1776:
case 1541:
case 217:
case 1652:
case 1718:
case 1706:
case 521:
case 2238:
case 210:
case 2534:
case 200:
case 2828:
case 3002:
case 2740:
case 1881:
case 2970:
case 3988:
case 2672:
case 1343:
case 105:
case 115:
case 235:
case 4093:
case 2959:
case 1562:
case 1809:
case 77:
case 4000:
case 2756:
case 541:
case 2631:
case 3888:
case 1981:
case 966:
case 1196:
case 655:
case 2870:
case 1586:
case 3792:
case 279:
case 127:
case 531:
case 1138:
case 2893:
case 1017:
case 2338:
case 1950:
case 2800:
case 863:
case 1695:
case 120:
case 360:
case 1846:
case 3452:
case 245:
case 4070:
case 4075:
case 826:
case 1788:
case 2287:
case 528:
case 3290:
case 1811:
case 3709:
case 1690:
case 3918:
case 643:
case 2721:
case 3779:
case 3153:
case 3053:
case 1142:
case 3949:
case 633:
case 2563:
case 3746:
case 4005:
case 982:
case 1474:
case 3273:
case 1304:
case 1520:
case 2004:
case 836:
case 3849:
case 2668:
case 3876:
case 2461:
case 3390:
case 1274:
case 2745:
case 2794:
case 702:
case 1154:
case 324:
case 3781:
case 2242:
case 3199:
case 623:
case 846:
case 768:
case 1508:
case 1855:
case 3227:
case 548:
case 1161:
case 2653:
case 1911:
case 3837:
case 729:
case 163:
case 2620:
case 1599:
case 820:
case 2389:
case 1189:
case 1464:
case 1791:
case 1089:
case 3116:
case 624:
case 3769:
case 2051:
case 3108:
case 22:
case 3008:
case 1663:
case 2151:
case 2865:
case 2080:
case 3078:
case 815:
case 3229:
case 1215:
case 3258:
case 2164:
case 2489:
case 4022:
case 2064:
case 3542:
case 254:
case 3429:
case 924:
case 739:
case 418:
case 1171:
case 459:
case 3458:
case 3651:
case 3736:
case 23:
case 11:
case 2783:
case 634:
case 10:
case 552:
case 333:
case 1132:
case 775:
case 1032:
case 3664:
case 3798:
case 288:
case 3947:
case 1568:
case 837:
case 3329:
case 2965:
case 2015:
case 392:
case 2922:
case 2678:
case 2697:
case 2471:
case 4014:
case 569:
case 3358:
case 3680:
case 3538:
case 3685:
case 1226:
case 486:
case 1836:
case 2957:
case 1807:
case 3234:
case 1433:
case 2419:
case 1634:
case 2984:
case 1048:
case 2348:
case 1285:
case 1119:
case 355:
case 1019:
case 2:
case 216:
case 291:
case 3912:
case 667:
case 1782:
case 2033:
case 1877:
case 1410:
case 2133:
case 1898:
case 1333:
case 3086:
case 3812:
case 2026:
case 1869:
case 1210:
case 3334:
case 1998:
case 4084:
case 960:
case 2595:
case 2544:
case 2185:
case 2085:
case 2857:
case 1907:
case 1739:
case 2860:
case 2219:
case 585:
case 967:
case 496:
case 126:
case 411:
case 3041:
case 1572:
case 2884:
case 3434:
case 1233:
case 14:
case 3420:
case 1432:
case 2568:
case 1115:
case 3129:
case 1015:
case 689:
case 1697:
case 1471:
case 2101:
case 1922:
case 3058:
case 3158:
case 2553:
case 719:
case 1371:
case 3913:
case 1616:
case 999:
case 3163:
case 1814:
case 3689:
case 614:
case 1783:
case 3504:
case 313:
case 3320:
case 2032:
case 3416:
case 989:
case 3397:
case 1080:
case 3408:
case 2658:
case 2451:
case 2380:
case 2629:
case 1503:
case 1735:
case 879:
case 3757:
case 2364:
case 1201:
case 263:
case 914:
case 777:
case 428:
case 904:
case 198:
case 36:
case 2189:
case 2464:
case 794:
case 2089:
case 1051:
case 3308:
case 3497:
case 2351:
case 12:
case 371:
case 699:
case 845:
case 1573:
case 3225:
case 1857:
case 2907:
case 2936:
case 1860:
case 1219:
case 3835:
case 2485:
case 665:
case 431:
case 3262:
case 956:
case 1662:
case 2823:
case 1884:
case 2233:
case 2572:
case 357:
case 1625:
case 1713:
case 1026:
case 3765:
case 181:
case 3648:
case 1126:
case 2210:
case 2502:
case 3034:
case 3722:
case 1730:
case 853:
case 2998:
case 1595:
case 2747:
case 1248:
case 574:
case 3543:
case 2766:
case 1552:
case 116:
case 1:
case 3362:
case 236:
case 1641:
case 191:
case 2782:
case 378:
case 1033:
case 965:
case 3386:
case 2333:
case 2410:
case 2898:
case 3935:
case 580:
case 2836:
case 1110:
case 2634:
case 246:
case 2148:
case 2285:
case 1348:
case 2967:
case 2138:
case 1893:
case 2950:
case 596:
case 1496:
case 501:
case 2117:
case 2695:
case 220:
case 145:
case 82:
case 1143:
case 3705:
case 678:
case 215:
case 1043:
case 3152:
case 2562:
case 2809:
case 1756:
case 4079:
case 2096:
case 1870:
case 2586:
case 227:
case 957:
case 4046:
case 3533:
case 4050:
case 1238:
case 2909:
case 2737:
case 3526:
case 3302:
case 247:
case 3472:
case 1534:
case 100:
case 1828:
case 854:
case 3095:
case 3144:
case 650:
case 2881:
case 3617:
case 888:
case 495:
case 2243:
case 657:
case 2850:
case 84:
case 3331:
case 2867:
case 1296:
case 2979:
case 978:
case 3402:
case 237:
case 117:
case 107:
case 365:
case 2652:
case 1242:
case 3399:
case 3253:
case 1454:
case 742:
case 3840:
case 2992:
case 671:
case 562:
case 469:
case 2855:
case 793:
case 3551:
case 903:
case 2161:
case 3073:
case 2911:
case 2061:
case 2578:
case 2597:
case 3580:
case 1975:
case 2087:
case 3003:
case 1461:
case 3090:
case 508:
case 2274:
case 2187:
case 3499:
case 732:
case 452:
case 3564:
case 4055:
case 3661:
case 304:
case 2042:
case 3353:
case 2142:
case 613:
case 4092:
case 96:
case 776:
case 3127:
case 3027:
case 3793:
case 153:
case 2474:
case 1699:
case 1261:
case 3940:
case 1174:
case 1287:
case 3770:
case 3368:
case 2811:
case 3453:
case 1254:
case 1442:
case 3856:
case 2955:
case 783:
case 1805:
case 3359:
case 1494:
case 3293:
case 3200:
case 3512:
case 726:
case 395:
case 1802:
case 2844:
case 2895:
case 465:
case 3799:
case 1600:
case 3081:
case 3996:
case 2557:
case 1754:
case 3050:
case 3167:
case 1670:
case 3917:
case 1831:
case 2145:
case 3459:
case 2194:
case 1394:
case 3270:
case 2094:
case 2045:
case 3621:
case 4044:
case 2584:
case 3470:
case 931:
case 2681:
case 3838:
case 2488:
case 1507:
case 3228:
case 736:
case 3146:
case 1628:
case 1421:
case 3046:
case 812:
case 3753:
case 802:
case 1902:
case 3645:
case 3009:
case 3109:
case 941:
case 3896:
case 2388:
case 2774:
case 2650:
case 1294:
case 1245:
case 746:
case 284:
case 2990:
case 1456:
case 1853:
case 3405:
case 582:
case 3640:
case 2514:
case 2218:
case 523:
case 2206:
case 1717:
case 139:
case 3192:
case 219:
case 3092:
case 3582:
case 258:
case 414:
case 70:
case 3011:
case 3111:
case 71:
case 2056:
case 2973:
case 2743:
case 3305:
case 3475:
case 3566:
case 4003:
case 4090:
case 2040:
case 2522:
case 3155:
case 98:
case 861:
case 3055:
case 270:
case 2873:
case 1106:
case 2318:
case 1037:
case 2306:
case 2476:
case 3861:
case 2349:
case 499:
case 1605:
case 129:
case 1049:
case 2437:
case 3656:
case 3887:
case 938:
case 2803:
case 1953:
case 3942:
case 1176:
case 2890:
case 2418:
case 2406:
case 4073:
case 3854:
case 1256:
case 369:
case 3205:
case 3539:
case 592:
case 46:
case 3971:
case 2113:
case 2963:
case 3741:
case 2282:
case 3465:
case 3576:
case 3932:
case 168:
case 2447:
case 39:
case 764:
case 1139:
case 2339:
case 652:
case 1047:
case 1147:
case 2347:
case 2785:
case 3214:
case 3901:
case 1413:
case 1555:
case 112:
case 232:
case 2958:
case 2030:
case 3537:
case 2929:
case 1592:
case 1213:
case 3786:
case 1082:
case 413:
case 3762:
case 1511:
case 1916:
case 1066:
case 2858:
case 3725:
case 2239:
case 1908:
case 3801:
case 969:
case 2505:
case 1166:
case 1748:
case 2247:
case 2863:
case 1978:
case 1997:
case 2575:
case 2710:
case 4058:
case 222:
case 1230:
case 3222:
case 38:
case 4029:
case 283:
case 1820:
case 348:
case 2482:
case 3257:
case 1684:
case 3819:
case 720:
case 1509:
case 3588:
case 3284:
case 3177:
case 1660:
case 1657:
case 2500:
case 715:
case 705:
case 2593:
case 3720:
case 2183:
case 17:
case 2083:
case 3007:
case 1546:
case 2291:
case 3848:
case 1941:
case 1579:
case 4034:
case 567:
case 985:
case 3357:
case 1335:
case 730:
case 747:
case 1841:
case 3948:
case 341:
case 2780:
case 3778:
case 1962:
case 2528:
case 3919:
case 3169:
case 1925:
case 2834:
case 1986:
case 2607:
case 2391:
case 3460:
case 1789:
case 3457:
case 740:
case 695:
case 2887:
case 2942:
case 3611:
case 3406:
case 3376:
case 588:
case 693:
case 1513:
case 1292:
case 377:
case 886:
case 2772:
case 54:
case 269:
case 2539:
case 1211:
case 2854:
case 976:
case 2731:
case 4061:
case 1744:
case 3040:
case 1795:
case 873:
case 632:
case 554:
case 983:
case 3306:
case 3522:
case 53:
case 370:
case 2055:
case 2702:
case 3276:
case 2582:
case 1392:
case 319:
case 3249:
case 2092:
case 309:
case 942:
case 1752:
case 1005:
case 703:
case 1649:
case 1105:
case 713:
case 2475:
case 2305:
case 2011:
case 2111:
case 3056:
case 3655:
case 801:
case 896:
case 1075:
case 2405:
case 2842:
case 598:
case 1606:
case 2987:
case 3903:
case 1618:
case 3218:
case 1804:
case 3514:
case 1255:
case 2694:
case 2768:
case 2109:
case 285:
case 3852:
case 3121:
case 1446:
case 420:
case 3944:
case 2370:
case 2400:
case 1170:
case 3667:
case 1070:
case 2493:
case 3650:
case 405:
case 2228:
case 415:
case 1727:
case 2300:
case 2470:
case 2817:
case 1093:
case 3704:
case 2259:
case 1193:
case 1000:
case 581:
case 174:
case 1379:
case 2146:
case 427:
case 778:
case 2046:
case 2938:
case 1367:
case 506:
case 591:
case 859:
case 516:
case 2067:
case 2917:
case 1481:
case 2150:
case 447:
case 2428:
case 2621:
case 1703:
case 3288:
case 3646:
case 1128:
case 1943:
case 295:
case 3952:
case 1028:
case 862:
case 2359:
case 2293:
case 2512:
case 3679:
case 1467:
case 1279:
case 2081:
case 1450:
case 2996:
case 1381:
case 440:
case 2591:
case 3895:
case 1236:
case 3528:
case 3751:
case 2708:
case 2716:
case 1826:
case 101:
case 3312:
case 1885:
case 545:
case 3391:
case 2460:
case 2683:
case 1933:
case 2457:
case 3636:
case 3035:
case 3135:
case 1160:
case 535:
case 2360:
case 1057:
case 1157:
case 1910:
case 1060:
case 2778:
case 2797:
case 1469:
case 2023:
case 1323:
case 2948:
case 3412:
case 2123:
case 241:
case 2107:
case 1336:
case 3083:
case 2007:
case 2136:
case 951:
case 436:
case 1612:
case 3669:
case 1729:
case 3623:
case 1758:
case 3934:
case 2819:
case 507:
case 1833:
case 2198:
case 1398:
case 1377:
case 2077:
case 1985:
case 3570:
case 446:
case 2635:
case 2630:
case 162:
case 3575:
case 2871:
case 3247:
case 2265:
case 2832:
case 3482:
case 248:
case 3710:
case 1964:
case 1114:
case 2222:
case 322:
case 108:
case 977:
case 2989:
case 714:
case 3733:
case 3858:
case 2725:
case 1951:
case 658:
case 40:
case 887:
case 4032:
case 670:
case 984:
case 3347:
case 897:
case 1065:
case 2537:
case 3929:
case 2518:
case 2901:
case 1122:
case 2214:
case 3958:
case 890:
case 799:
case 2549:
case 342:
case 919:
case 3013:
case 393:
case 677:
case 1682:
case 3447:
case 2883:
case 3433:
case 930:
case 3226:
case 1517:
case 2462:
case 346:
case 620:
case 1162:
case 2362:
case 627:
case 1912:
case 1025:
case 3766:
case 4083:
case 3969:
case 2386:
case 3333:
case 1086:
case 937:
case 3877:
case 3410:
case 2241:
case 605:
case 615:
case 250:
case 2134:
case 834:
case 4035:
case 2765:
case 1812:
case 2648:
case 3747:
case 647:
case 3485:
case 795:
case 637:
case 2225:
case 3739:
case 915:
case 3936:
case 1633:
case 2619:
case 257:
case 3572:
case 927:
case 1041:
case 2341:
case 3426:
case 1141:
case 1263:
case 664:
case 3791:
case 363:
case 2632:
case 1847:
case 2220:
case 769:
case 1108:
case 2316:
case 2478:
case 2671:
case 1016:
case 1966:
case 182:
case 2830:
case 867:
case 1615:
case 1178:
case 0:
case 2378:
case 2813:
case 1097:
case 3364:
case 1839:
case 1258:
case 2760:
case 575:
case 1554:
case 2913:
case 3171:
case 1651:
case 3415:
case 1429:
case 1120:
case 3132:
case 964:
case 133:
case 476:
case 3032:
case 3724:
case 203:
case 2216:
case 1707:
case 1939:
case 30:
case 2208:
case 2574:
case 143:
case 1947:
case 529:
case 1664:
case 3280:
case 1777:
case 2278:
case 2297:
case 1866:
case 2930:
case 192:
case 3101:
case 2058:
case 3001:
case 3264:
case 422:
case 1358:
case 3568:
case 1329:
case 3404:
case 3788:
case 1290:
case 2654:
case 1427:
case 2940:
case 1501:
case 568:
case 1168:
case 2453:
case 2515:
case 78:
case 144:
case 3603:
case 1906:
case 1571:
case 419:
case 409:
case 1746:
case 1153:
case 204:
case 134:
case 60:
case 3673:
case 1053:
case 1976:
case 1532:
case 502:
case 3087:
case 2190:
case 1876:
case 2090:
case 1473:
case 3274:
case 3578:
case 3597:
case 1849:
case 2580:
case 2564:
case 470:
case 3054:
case 3154:
case 1767:
case 2840:
case 3992:
case 1589:
case 299:
case 3627:
case 728:
case 477:
case 1781:
case 494:
case 2253:
case 1818:
case 2073:
case 3911:
case 1403:
case 364:
case 2759:
case 2642:
case 1373:
case 3204:
case 3516:
case 1227:
case 3855:
case 1131:
case 2331:
case 1252:
case 843:
case 337:
case 2372:
case 1172:
case 1072:
case 3652:
case 2845:
case 2894:
case 3541:
case 330:
case 57:
case 2921:
case 1102:
case 1002:
case 3718:
case 3909:
case 2526:
case 561:
case 3881:
case 2638:
case 2585:
case 1988:
case 672:
case 4094:
case 4045:
case 741:
case 2044:
case 833:
case 2144:
case 1344:
case 256:
case 3809:
case 2231:
case 2052:
case 2152:
case 721:
case 315:
case 636:
case 2272:
case 2533:
case 1888:
case 320:
case 3695:
case 3967:
case 3038:
case 1244:
case 1452:
case 823:
case 3846:
case 1840:
case 199:
case 429:
case 2099:
case 3242:
case 224:
case 954:
case 2199:
case 1399:
case 1073:
case 2806:
case 1956:
case 3653:
case 2837:
case 3487:
case 1728:
case 1551:
case 3905:
case 2227:
case 698:
case 3668:
case 2876:
case 1003:
case 2390:
case 2473:
case 988:
case 1103:
case 1090:
case 3745:
case 3975:
case 94:
case 878:
case 576:
case 4018:
case 2767:
case 1268:
case 1499:
case 4037:
case 3875:
case 2949:
case 718:
case 708:
case 2746:
case 1353:
case 2779:
case 1468:
case 2153:
case 1299:
case 63:
case 114:
case 2053:
case 759:
case 2976:
case 3342:
case 353:
case 1793:
case 2532:
case 3261:
case 3004:
case 3699:
case 1127:
case 25:
case 92:
case 2327:
case 3287:
case 3174:
case 1770:
case 3074:
case 189:
case 2501:
case 3805:
case 449:
case 688:
case 3721:
case 2168:
case 2709:
case 1453:
case 2937:
case 1368:
case 593:
case 1856:
case 1687:
case 3529:
case 244:
case 2918:
case 786:
case 1510:
case 3338:
case 3317:
case 981:
case 2548:
case 260:
case 2244:
case 3602:
case 2452:
case 2711:
case 3756:
case 773:
case 3143:
case 1705:
case 1152:
case 3043:
case 2352:
case 2792:
case 606:
case 2888:
case 3870:
case 3417:
case 1921:
case 3534:
case 310:
case 1302:
case 3828:
case 300:
case 3217:
case 3859:
case 1431:
case 1585:
case 3740:
case 1095:
case 2395:
case 803:
case 1144:
case 991:
case 906:
case 2131:
case 3900:
case 3993:
case 1696:
case 325:
case 2252:
case 796:
case 2495:
case 701:
case 2643:
case 165:
case 307:
case 1894:
case 4012:
case 780:
case 1262:
case 3857:
case 935:
case 3219:
case 2633:
case 157:
case 3884:
case 1619:
case 1286:
case 625:
case 2041:
case 3662:
case 1341:
case 804:
case 814:
case 3730:
case 1722:
case 1034:
case 2812:
case 3026:
case 1648:
case 1441:
case 3185:
case 610:
case 2610:
case 3595:
case 1362:
case 316:
case 3641:
case 391:
case 306:
case 4024:
case 679:
case 2025:
case 3552:
case 2125:
case 47:
case 1325:
case 907:
case 1386:
case 774:
case 3133:
case 2086:
case 178:
case 2596:
case 797:
case 461:
case 3960:
case 3010:
case 900:
case 1486:
case 1883:
case 910:
case 2234:
case 2538:
case 551:
case 645:
case 1935:
case 790:
case 2824:
case 3419:
case 1425:
case 3984:
case 243:
case 388:
case 1574:
case 2947:
case 577:
case 1278:
case 1297:
case 292:
case 1058:
case 3471:
case 2463:
case 1129:
case 653:
case 1063:
case 3401:
case 1913:
case 2651:
case 3289:
case 1163:
case 2363:
case 4082:
case 2429:
case 2542:
case 3332:
case 1504:
case 113:
case 103:
case 570:
case 4066:
case 1689:
case 1208:
case 1216:
case 2707:
case 3590:
case 2723:
case 4047:
case 1784:
case 1601:
case 1378:
case 509:
case 2178:
case 2197:
case 2097:
case 3180:
case 2839:
case 2258:
case 1760:
case 3064:
case 3389:
case 3271:
case 3620:
case 1632:
case 398:
case 3865:
case 171:
case 2561:
case 3232:
case 468:
case 3573:
case 1478:
case 1497:
case 3051:
case 3822:
case 282:
case 2966:
case 3235:
case 286:
case 2926:
case 1257:
case 1819:
case 2398:
case 3483:
case 1177:
case 2833:
case 1198:
case 3657:
case 2436:
case 540:
case 3383:
case 547:
case 2336:
case 37:
case 4:
case 3124:
case 121:
case 406:
case 491:
case 1720:
case 3579:
case 2612:
case 481:
case 3550:
case 2057:
case 1357:
case 2910:
case 2060:
case 2469:
case 2277:
case 1384:
case 1797:
case 1023:
case 3841:
case 1948:
case 141:
case 1123:
case 1919:
case 2236:
case 1716:
case 2207:
case 2369:
case 3283:
case 3925:
case 1484:
case 3012:
case 296:
case 201:
case 2423:
case 211:
case 2624:
case 3581:
case 3191:
case 3986:
case 1741:
case 1576:
case 1422:
case 1549:
case 2880:
case 1971:
case 3313:
case 939:
case 3897:
case 2666:
case 19:
case 3039:
case 4051:
case 42:
case 2864:
case 629:
case 4080:
case 3614:
case 1889:
case 1537:
case 2065:
case 2915:
case 1365:
case 1322:
case 312:
case 2122:
case 2851:
case 2022:
case 302:
case 3182:
case 3592:
case 734:
case 1786:
case 3213:
case 2639:
case 1725:
case 43:
case 3916:
case 2951:
case 639:
case 3511:
case 75:
case 44:
case 3997:
case 1630:
case 1871:
case 488:
case 649:
case 564:
case 1265:
case 18:
case 1222:
case 2114:
case 1314:
case 2075:
case 831:
case 1405:
case 743:
case 2637:
case 2411:
case 2618:
case 563:
case 1987:
case 902:
case 2492:
case 912:
case 3796:
case 2752:
case 1475:
case 733:
case 1305:
case 841:
case 1566:
case 968:
case 4004:
case 2311:
case 1111:
case 1275:
case 2744:
case 2795:
case 2974:
case 3899:
case 3006:
case 3968:
case 1861:
case 3106:
case 3037:
case 2355:
case 1702:
case 51:
case 3953:
case 1656:
case 1942:
case 3176:
case 2455:
case 2513:
case 3149:
case 1772:
case 668:
case 2292:
case 3049:
case 3605:
case 329:
case 723:
case 1205:
case 1539:
case 2211:
case 2904:
case 3256:
case 1731:
case 2128:
case 425:
case 1328:
case 195:
case 3802:
case 2028:
case 280:
case 1293:
case 2159:
case 3494:
case 2773:
case 961:
case 1081:
case 1799:
case 2467:
case 546:
case 1996:
case 88:
case 2381:
case 1181:
case 2246:
case 407:
case 766:
case 1167:
case 1150:
case 3831:
case 2688:
case 1067:
case 1917:
case 410:
case 838:
case 400:
case 1621:
case 3872:
case 3394:
case 3345:
case 3787:
case 2790:
case 1270:
case 2583:
case 572:
case 3507:
case 4043:
case 661:
case 1228:
case 435:
case 2100:
case 755:
case 3931:
case 1470:
case 1393:
case 2193:
case 3659:
case 274:
case 2281:
case 1179:
case 67:
case 1753:
case 2379:
case 3972:
case 1146:
case 1046:
case 479:
case 1645:
case 2479:
case 2267:
case 3321:
case 828:
case 2446:
case 185:
case 290:
case 2843:
case 3577:
case 3598:
case 445:
case 1896:
case 2170:
case 3088:
case 1493:
case 3245:
case 2070:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761213601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,];
var gg_b = "1761213601/";

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
