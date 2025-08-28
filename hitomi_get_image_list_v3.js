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
case 1189:
case 3146:
case 1659:
case 160:
case 1476:
case 1413:
case 1898:
case 3300:
case 406:
case 3191:
case 1747:
case 1951:
case 1362:
case 2867:
case 97:
case 3206:
case 2262:
case 3834:
case 2937:
case 1580:
case 733:
case 2823:
case 2441:
case 905:
case 1554:
case 3107:
case 839:
case 2853:
case 2505:
case 2496:
case 902:
case 579:
case 311:
case 2214:
case 1706:
case 1469:
case 3912:
case 55:
case 194:
case 2779:
case 1035:
case 3955:
case 2993:
case 1142:
case 266:
case 1195:
case 273:
case 565:
case 1281:
case 2871:
case 3366:
case 562:
case 3299:
case 412:
case 948:
case 1094:
case 1134:
case 2840:
case 3379:
case 242:
case 3781:
case 1630:
case 2910:
case 468:
case 2636:
case 245:
case 711:
case 3702:
case 1958:
case 3889:
case 3003:
case 1973:
case 3990:
case 3661:
case 1363:
case 943:
case 3969:
case 3839:
case 1120:
case 2605:
case 1412:
case 2156:
case 476:
case 1357:
case 278:
case 1085:
case 509:
case 972:
case 150:
case 1006:
case 2331:
case 3843:
case 3421:
case 3976:
case 1464:
case 1327:
case 2219:
case 975:
case 1529:
case 1319:
case 890:
case 1517:
case 2774:
case 1238:
case 3677:
case 2303:
case 614:
case 969:
case 3428:
case 1530:
case 787:
case 3294:
case 4005:
case 3473:
case 219:
case 2079:
case 3416:
case 24:
case 56:
case 3738:
case 256:
case 555:
case 344:
case 3820:
case 1794:
case 871:
case 2987:
case 1425:
case 1060:
case 2111:
case 864:
case 3586:
case 1762:
case 745:
case 93:
case 3496:
case 2895:
case 308:
case 2247:
case 3505:
case 2107:
case 606:
case 3700:
case 3388:
case 3441:
case 527:
case 961:
case 2561:
case 2834:
case 3937:
case 1140:
case 539:
case 653:
case 3470:
case 3867:
case 1306:
case 2031:
case 1644:
case 1027:
case 766:
case 2300:
case 2788:
case 1533:
case 1445:
case 3636:
case 3409:
case 3766:
case 2702:
case 2038:
case 2198:
case 19:
case 554:
case 1582:
case 85:
case 1501:
case 2781:
case 818:
case 3840:
case 1167:
case 2577:
case 2925:
case 3302:
case 3871:
case 1487:
case 1597:
case 366:
case 373:
case 2260:
case 2472:
case 2955:
case 3381:
case 1178:
case 676:
case 3822:
case 904:
case 3227:
case 1437:
case 1544:
case 1970:
case 3852:
case 2843:
case 756:
case 3257:
case 1608:
case 1763:
case 189:
case 2913:
case 1115:
case 1532:
case 3118:
case 2088:
case 3156:
case 74:
case 2839:
case 3605:
case 287:
case 809:
case 1941:
case 932:
case 3126:
case 813:
case 128:
case 1811:
case 2661:
case 2990:
case 3263:
case 2850:
case 2235:
case 61:
case 420:
case 1335:
case 3987:
case 244:
case 2820:
case 1948:
case 2374:
case 356:
case 2738:
case 2668:
case 1274:
case 1909:
case 303:
case 195:
case 3079:
case 571:
case 319:
case 2416:
case 34:
case 1152:
case 2294:
case 3992:
case 1410:
case 4061:
case 1122:
case 3774:
case 855:
case 4056:
case 2963:
case 269:
case 732:
case 3341:
case 4018:
case 2808:
case 1012:
case 3598:
case 455:
case 3269:
case 4026:
case 431:
case 903:
case 919:
case 2770:
case 3396:
case 1534:
case 3051:
case 3213:
case 1861:
case 2611:
case 1790:
case 814:
case 2741:
case 3854:
case 2957:
case 3276:
case 1542:
case 558:
case 704:
case 2919:
case 3021:
case 1769:
case 2796:
case 3824:
case 2927:
case 51:
case 1485:
case 549:
case 3168:
case 2656:
case 243:
case 3058:
case 2186:
case 20:
case 3772:
case 1868:
case 2618:
case 413:
case 3073:
case 3028:
case 1684:
case 690:
case 3994:
case 2897:
case 1392:
case 1650:
case 3161:
case 2004:
case 1272:
case 3481:
case 4011:
case 3348:
case 1460:
case 2801:
case 272:
case 1025:
case 978:
case 2287:
case 2709:
case 1387:
case 3865:
case 563:
case 1589:
case 1055:
case 973:
case 512:
case 1221:
case 2321:
case 3985:
case 1539:
case 568:
case 157:
case 1642:
case 1251:
case 515:
case 1337:
case 1712:
case 1076:
case 2351:
case 2962:
case 3859:
case 774:
case 259:
case 1069:
case 942:
case 2136:
case 1988:
case 1543:
case 1130:
case 2844:
case 1090:
case 654:
case 945:
case 3817:
case 2914:
case 3728:
case 1117:
case 1393:
case 124:
case 2474:
case 234:
case 479:
case 27:
case 3225:
case 110:
case 1159:
case 2048:
case 3304:
case 553:
case 374:
case 4075:
case 2556:
case 1310:
case 1520:
case 3438:
case 506:
case 2883:
case 2009:
case 1755:
case 2210:
case 1216:
case 1584:
case 3607:
case 1258:
case 2316:
case 33:
case 1273:
case 841:
case 1725:
case 1578:
case 2168:
case 3927:
case 775:
case 3796:
case 2370:
case 3849:
case 1462:
case 464:
case 1197:
case 3400:
case 3957:
case 772:
case 1376:
case 66:
case 944:
case 1567:
case 1622:
case 858:
case 1369:
case 81:
case 1101:
case 520:
case 1414:
case 849:
case 1241:
case 514:
case 1182:
case 3833:
case 198:
case 369:
case 3575:
case 2935:
case 1133:
case 375:
case 1093:
case 1615:
case 2402:
case 2865:
case 3882:
case 1745:
case 490:
case 3287:
case 1108:
case 204:
case 372:
case 2481:
case 2348:
case 3004:
case 609:
case 2161:
case 987:
case 1010:
case 1:
case 2309:
case 3897:
case 2507:
case 3292:
case 876:
case 3626:
case 2772:
case 2016:
case 232:
case 30:
case 3618:
case 3479:
case 343:
case 3656:
case 2212:
case 868:
case 815:
case 1312:
case 646:
case 3844:
case 2947:
case 2751:
case 2829:
case 933:
case 401:
case 3096:
case 3675:
case 359:
case 597:
case 2721:
case 3351:
case 3962:
case 1678:
case 662:
case 2264:
case 316:
case 1183:
case 1364:
case 665:
case 2431:
case 618:
case 1457:
case 1900:
case 439:
case 3358:
case 23:
case 1671:
case 3526:
case 853:
case 679:
case 12:
case 1979:
case 3210:
case 3883:
case 1793:
case 3009:
case 193:
case 305:
case 759:
case 1045:
case 1132:
case 2304:
case 2646:
case 2773:
case 3048:
case 541:
case 716:
case 37:
case 1836:
case 2072:
case 1325:
case 2758:
case 3293:
case 2960:
case 2255:
case 2691:
case 1640:
case 806:
case 2728:
case 2082:
case 1538:
case 3112:
case 1503:
case 2783:
case 391:
case 3065:
case 650:
case 1077:
case 2236:
case 3484:
case 3383:
case 3828:
case 5:
case 2137:
case 136:
case 1681:
case 226:
case 3730:
case 1602:
case 2415:
case 489:
case 3858:
case 3535:
case 3873:
case 3443:
case 2452:
case 1173:
case 3821:
case 370:
case 3998:
case 3024:
case 1158:
case 1061:
case 2422:
case 1864:
case 492:
case 617:
case 3054:
case 1934:
case 1128:
case 3717:
case 1259:
case 230:
case 867:
case 2033:
case 1229:
case 2519:
case 1995:
case 347:
case 1812:
case 2527:
case 1777:
case 810:
case 3268:
case 3560:
case 3489:
case 4019:
case 2782:
case 937:
case 593:
case 4027:
case 3599:
case 3765:
case 586:
case 824:
case 2083:
case 2809:
case 3397:
case 1768:
case 4063:
case 2918:
case 1920:
case 929:
case 2797:
case 1984:
case 660:
case 3382:
case 3030:
case 1890:
case 3308:
case 3780:
case 1761:
case 2044:
case 2911:
case 3029:
case 2657:
case 2423:
case 2187:
case 3017:
case 3333:
case 857:
case 2478:
case 2619:
case 197:
case 3059:
case 3585:
case 3506:
case 2453:
case 2896:
case 1498:
case 2354:
case 2663:
case 1280:
case 49:
case 1254:
case 1876:
case 2032:
case 2324:
case 1386:
case 694:
case 3547:
case 2205:
case 681:
case 423:
case 1305:
case 2514:
case 4006:
case 2946:
case 2858:
case 2816:
case 628:
case 1736:
case 4085:
case 2660:
case 326:
case 1810:
case 2991:
case 730:
case 1283:
case 3137:
case 1574:
case 3097:
case 2383:
case 3001:
case 3804:
case 2907:
case 2450:
case 689:
case 3783:
case 1456:
case 825:
case 2420:
case 3732:
case 3662:
case 247:
case 1978:
case 2344:
case 3033:
case 1953:
case 2685:
case 1411:
case 4060:
case 3359:
case 330:
case 2125:
case 2054:
case 1837:
case 1232:
case 3744:
case 3110:
case 3422:
case 2647:
case 2080:
case 2332:
case 3049:
case 1005:
case 921:
case 2443:
case 158:
case 567:
case 2030:
case 524:
case 3926:
case 893:
case 3797:
case 1377:
case 510:
case 1201:
case 82:
case 1196:
case 3918:
case 2277:
case 1036:
case 3956:
case 2301:
case 799:
case 2765:
case 385:
case 2113:
case 1915:
case 106:
case 1566:
case 3782:
case 3440:
case 2560:
case 940:
case 1922:
case 3286:
case 2547:
case 112:
case 2349:
case 3324:
case 1361:
case 1475:
case 3192:
case 2261:
case 115:
case 557:
case 3663:
case 3354:
case 2495:
case 4035:
case 2724:
case 3896:
case 481:
case 3453:
case 3627:
case 1148:
case 200:
case 3619:
case 494:
case 3478:
case 1705:
case 2754:
case 2017:
case 2333:
case 1208:
case 3423:
case 2029:
case 3044:
case 2308:
case 2780:
case 154:
case 2483:
case 1672:
case 3838:
case 59:
case 2127:
case 3720:
case 2040:
case 3315:
case 2687:
case 881:
case 1894:
case 1091:
case 3525:
case 657:
case 1007:
case 2256:
case 2218:
case 2510:
case 1318:
case 1220:
case 999:
case 1284:
case 2226:
case 2692:
case 2350:
case 2384:
case 1965:
case 1250:
case 1835:
case 2715:
case 3042:
case 3095:
case 2053:
case 288:
case 3459:
case 3676:
case 3743:
case 4087:
case 985:
case 1551:
case 1239:
case 2023:
case 3429:
case 2537:
case 2444:
case 237:
case 2343:
case 3690:
case 1980:
case 1243:
case 139:
case 1954:
case 3034:
case 4092:
case 2432:
case 624:
case 1103:
case 3322:
case 2905:
case 486:
case 2986:
case 3512:
case 1098:
case 2401:
case 1628:
case 3050:
case 3147:
case 1477:
case 1860:
case 3881:
case 3465:
case 1658:
case 1188:
case 1899:
case 3789:
case 2482:
case 1572:
case 2162:
case 164:
case 930:
case 707:
case 3106:
case 3655:
case 3185:
case 283:
case 3340:
case 1468:
case 2015:
case 595:
case 296:
case 1707:
case 2389:
case 3625:
case 3246:
case 4037:
case 2771:
case 592:
case 4:
case 425:
case 4010:
case 1461:
case 3742:
case 2449:
case 3367:
case 2334:
case 2753:
case 3569:
case 422:
case 1806:
case 2778:
case 3043:
case 3612:
case 190:
case 3039:
case 1959:
case 2408:
case 3513:
case 1102:
case 3888:
case 4093:
case 1847:
case 1181:
case 1651:
case 1242:
case 3160:
case 1295:
case 1917:
case 3664:
case 3734:
case 98:
case 2767:
case 2637:
case 850:
case 2395:
case 1436:
case 1609:
case 581:
case 3384:
case 1982:
case 3350:
case 3226:
case 823:
case 3645:
case 1901:
case 3218:
case 3874:
case 3320:
case 4090:
case 3256:
case 2430:
case 729:
case 2525:
case 1215:
case 2750:
case 737:
case 2315:
case 3687:
case 1504:
case 2555:
case 4076:
case 1648:
case 2089:
case 2803:
case 2720:
case 3119:
case 3593:
case 146:
case 1756:
case 3127:
case 457:
case 2838:
case 1696:
case 1222:
case 3986:
case 1827:
case 277:
case 3905:
case 2322:
case 3432:
case 560:
case 1819:
case 1075:
case 2739:
case 2669:
case 2194:
case 3067:
case 2034:
case 2961:
case 2831:
case 3343:
case 3339:
case 1174:
case 3537:
case 686:
case 3722:
case 337:
case 3023:
case 424:
case 1670:
case 2417:
case 2743:
case 3078:
case 3752:
case 240:
case 62:
case 3053:
case 1863:
case 2042:
case 3771:
case 4064:
case 1100:
case 2625:
case 698:
case 3389:
case 3879:
case 3693:
case 396:
case 2655:
case 2185:
case 1240:
case 2106:
case 1509:
case 155:
case 2020:
case 1056:
case 1018:
case 3866:
case 3610:
case 2147:
case 2084:
case 3740:
case 3767:
case 3637:
case 3342:
case 2734:
case 2664:
case 889:
case 622:
case 1814:
case 2353:
case 1570:
case 1253:
case 2378:
case 1944:
case 2888:
case 3433:
case 1166:
case 2576:
case 4055:
case 625:
case 2323:
case 2513:
case 1775:
case 3408:
case 3778:
case 828:
case 1862:
case 2612:
case 1596:
case 3052:
case 550:
case 2569:
case 2795:
case 113:
case 2367:
case 1486:
case 2480:
case 3022:
case 1541:
case 3275:
case 2590:
case 991:
case 2197:
case 2037:
case 1854:
case 3861:
case 3790:
case 2376:
case 1880:
case 1051:
case 847:
case 1370:
case 496:
case 621:
case 2805:
case 2462:
case 3406:
case 367:
case 3595:
case 2241:
case 1598:
case 2182:
case 2390:
case 3643:
case 3713:
case 1488:
case 1290:
case 870:
case 2567:
case 2296:
case 530:
case 2101:
case 2414:
case 995:
case 1348:
case 2540:
case 3272:
case 1546:
case 2133:
case 3055:
case 1935:
case 3387:
case 1402:
case 2792:
case 3499:
case 767:
case 104:
case 2108:
case 222:
case 3903:
case 1073:
case 928:
case 151:
case 1016:
case 1772:
case 3124:
case 884:
case 3180:
case 526:
case 225:
case 2571:
case 1161:
case 3650:
case 3392:
case 2787:
case 2:
case 3988:
case 3543:
case 1859:
case 99:
case 1212:
case 3764:
case 3634:
case 2667:
case 2737:
case 2522:
case 2312:
case 1829:
case 1751:
case 1947:
case 1431:
case 4040:
case 3221:
case 2457:
case 2678:
case 3712:
case 357:
case 3695:
case 3642:
case 2183:
case 1985:
case 2427:
case 3539:
case 2653:
case 3755:
case 585:
case 161:
case 1438:
case 3520:
case 2793:
case 2092:
case 3273:
case 3494:
case 3725:
case 13:
case 3550:
case 3258:
case 22:
case 1960:
case 3981:
case 1830:
case 2640:
case 4078:
case 310:
case 3435:
case 757:
case 1716:
case 3902:
case 2325:
case 488:
case 2966:
case 4084:
case 3369:
case 2447:
case 2534:
case 696:
case 3567:
case 3296:
case 4050:
case 3622:
case 683:
case 725:
case 169:
case 1963:
case 2713:
case 1808:
case 2776:
case 3390:
case 2643:
case 547:
case 4020:
case 3652:
case 722:
case 2595:
case 3270:
case 3462:
case 2769:
case 2406:
case 1849:
case 3886:
case 1796:
case 2485:
case 2861:
case 2790:
case 3376:
case 1400:
case 3313:
case 3037:
case 1957:
case 3197:
case 2064:
case 1245:
case 2684:
case 1292:
case 3787:
case 3010:
case 3209:
case 3571:
case 2650:
case 143:
case 3149:
case 10:
case 798:
case 1479:
case 4043:
case 322:
case 3792:
case 1882:
case 2499:
case 3093:
case 2589:
case 2055:
case 3133:
case 1004:
case 2460:
case 2877:
case 950:
case 172:
case 1801:
case 2025:
case 3248:
case 2539:
case 3653:
case 3427:
case 3364:
case 2251:
case 2642:
case 2695:
case 3419:
case 4089:
case 2712:
case 981:
case 3457:
case 3900:
case 994:
case 2130:
case 3312:
case 2090:
case 3667:
case 3522:
case 1675:
case 500:
case 3552:
case 3463:
case 1136:
case 786:
case 2543:
case 3325:
case 3966:
case 2435:
case 4095:
case 3836:
case 2689:
case 1048:
case 3355:
case 2117:
case 3087:
case 2393:
case 2129:
case 3710:
case 1474:
case 1293:
case 960:
case 32:
case 2216:
case 1704:
case 1373:
case 1526:
case 1316:
case 4034:
case 2273:
case 3132:
case 2228:
case 1556:
case 3045:
case 2310:
case 2520:
case 105:
case 393:
case 3979:
case 2755:
case 637:
case 3554:
case 1107:
case 3490:
case 993:
case 2171:
case 92:
case 1912:
case 2549:
case 2632:
case 2347:
case 588:
case 3785:
case 111:
case 1247:
case 781:
case 2027:
case 2508:
case 2019:
case 794:
case 3921:
case 1146:
case 2533:
case 2200:
case 3659:
case 1206:
case 2140:
case 2714:
case 3747:
case 1031:
case 2306:
case 3362:
case 1285:
case 1191:
case 2501:
case 1781:
case 3891:
case 223:
case 3630:
case 1379:
case 1577:
case 3094:
case 133:
case 3973:
case 3565:
case 4032:
case 2492:
case 3799:
case 1889:
case 1038:
case 1702:
case 29:
case 1198:
case 2582:
case 381:
case 3142:
case 3281:
case 2153:
case 3035:
case 1955:
case 2360:
case 760:
case 2123:
case 2487:
case 2904:
case 3202:
case 2266:
case 1421:
case 1976:
case 2608:
case 48:
case 2633:
case 3231:
case 2115:
case 1913:
case 289:
case 3357:
case 1451:
case 3517:
case 691:
case 3319:
case 2437:
case 2544:
case 2757:
case 138:
case 2014:
case 3654:
case 3184:
case 228:
case 3680:
case 3150:
case 1661:
case 1731:
case 3047:
case 2532:
case 2727:
case 3120:
case 2719:
case 1969:
case 187:
case 1374:
case 3139:
case 1820:
case 2948:
case 317:
case 3099:
case 4008:
case 1002:
case 2274:
case 4033:
case 3455:
case 3972:
case 1850:
case 1235:
case 430:
case 2697:
case 3794:
case 3425:
case 292:
case 647:
case 3530:
case 2601:
case 1677:
case 2122:
case 3238:
case 1458:
case 596:
case 295:
case 583:
case 4049:
case 1416:
case 3143:
case 3644:
case 2629:
case 2951:
case 3306:
case 2747:
case 3385:
case 1470:
case 2617:
case 1867:
case 3057:
case 1937:
case 1262:
case 888:
case 837:
case 2189:
case 3200:
case 3533:
case 2476:
case 577:
case 3875:
case 924:
case 2898:
case 3027:
case 3508:
case 2314:
case 79:
case 1505:
case 1496:
case 3063:
case 3762:
case 829:
case 1214:
case 3347:
case 1878:
case 2706:
case 3549:
case 2524:
case 2580:
case 1388:
case 1700:
case 1441:
case 4030:
case 685:
case 2288:
case 4029:
case 3266:
case 3399:
case 3904:
case 699:
case 957:
case 3487:
case 400:
case 4059:
case 1448:
case 1381:
case 3683:
case 2035:
case 3153:
case 2195:
case 166:
case 2142:
case 2281:
case 2916:
case 1766:
case 1409:
case 3445:
case 2846:
case 2973:
case 2928:
case 2134:
case 142:
case 2891:
case 2760:
case 323:
case 3501:
case 3279:
case 1910:
case 484:
case 3719:
case 2120:
case 4065:
case 491:
case 3649:
case 3996:
case 3727:
case 1118:
case 795:
case 1263:
case 328:
case 2047:
case 2150:
case 2654:
case 1126:
case 3014:
case 2464:
case 2327:
case 3544:
case 1000:
case 1822:
case 2517:
case 2357:
case 3115:
case 2085:
case 3763:
case 3633:
case 250:
case 1331:
case 1257:
case 3062:
case 1852:
case 1536:
case 1945:
case 1992:
case 3682:
case 1079:
case 1815:
case 119:
case 2735:
case 14:
case 630:
case 1774:
case 2238:
case 3410:
case 1303:
case 3122:
case 1338:
case 2203:
case 2530:
case 2794:
case 3826:
case 2425:
case 896:
case 3697:
case 3335:
case 1111:
case 521:
case 789:
case 3818:
case 156:
case 3583:
case 3948:
case 2139:
case 447:
case 3318:
case 3220:
case 262:
case 915:
case 2901:
case 3356:
case 3007:
case 3528:
case 265:
case 566:
case 3835:
case 448:
case 833:
case 301:
case 3573:
case 912:
case 25:
case 459:
case 2648:
case 3046:
case 1089:
case 2756:
case 246:
case 545:
case 416:
case 2215:
case 1750:
case 542:
case 2726:
case 2997:
case 1784:
case 1315:
case 2504:
case 4070:
case 811:
case 2252:
case 402:
case 3954:
case 1034:
case 1352:
case 1690:
case 2222:
case 405:
case 3924:
case 2827:
case 3138:
case 701:
case 1512:
case 1322:
case 177:
case 1739:
case 2075:
case 2819:
case 1676:
case 63:
case 3311:
case 140:
case 2933:
case 279:
case 1135:
case 754:
case 1042:
case 508:
case 1564:
case 661:
case 674:
case 3239:
case 906:
case 327:
case 3551:
case 2670:
case 1340:
case 3468:
case 503:
case 1655:
case 54:
case 2548:
case 1291:
case 2983:
case 1185:
case 1106:
case 790:
case 2100:
case 1246:
case 844:
case 2604:
case 2346:
case 3860:
case 3791:
case 3930:
case 1050:
case 252:
case 3746:
case 2307:
case 2509:
case 1207:
case 3188:
case 2018:
case 1465:
case 1802:
case 26:
case 3798:
case 1888:
case 475:
case 771:
case 1323:
case 107:
case 1199:
case 390:
case 2775:
case 1039:
case 2223:
case 635:
case 651:
case 3917:
case 1734:
case 1664:
case 2278:
case 1160:
case 3242:
case 2944:
case 3847:
case 3929:
case 3461:
case 887:
case 976:
case 2398:
case 3806:
case 2862:
case 2596:
case 209:
case 1569:
case 2179:
case 838:
case 213:
case 1795:
case 578:
case 1742:
case 40:
case 1424:
case 1367:
case 1157:
case 533:
case 1040:
case 659:
case 3504:
case 2894:
case 3726:
case 3215:
case 2131:
case 648:
case 2091:
case 1483:
case 254:
case 1127:
case 346:
case 1593:
case 2558:
case 1226:
case 1645:
case 1350:
case 480:
case 2516:
case 201:
case 2326:
case 1384:
case 2965:
case 3436:
case 2835:
case 2007:
case 616:
case 2528:
case 1256:
case 1218:
case 1874:
case 362:
case 2220:
case 2551:
case 3670:
case 137:
case 3863:
case 2521:
case 4072:
case 1053:
case 3933:
case 3908:
case 1078:
case 1432:
case 3819:
case 1905:
case 2103:
case 2138:
case 3949:
case 1986:
case 461:
case 765:
case 3696:
case 718:
case 3711:
case 1343:
case 67:
case 129:
case 2980:
case 2243:
case 808:
case 239:
case 2954:
case 762:
case 43:
case 1067:
case 3252:
case 713:
case 2616:
case 1545:
case 1592:
case 2658:
case 1936:
case 3509:
case 355:
case 3307:
case 544:
case 331:
case 803:
case 3026:
case 2930:
case 352:
case 2860:
case 1610:
case 2707:
case 669:
case 1587:
case 3604:
case 3100:
case 1771:
case 3391:
case 264:
case 1162:
case 3548:
case 183:
case 3983:
case 271:
case 1879:
case 1693:
case 313:
case 432:
case 76:
case 1753:
case 1334:
case 3596:
case 3267:
case 3932:
case 2806:
case 1778:
case 4073:
case 672:
case 3405:
case 731:
case 1275:
case 4028:
case 1022:
case 752:
case 3253:
case 3011:
case 2847:
case 643:
case 2295:
case 3570:
case 2651:
case 878:
case 3814:
case 3278:
case 1637:
case 1342:
case 2959:
case 587:
case 3223:
case 1408:
case 404:
case 2621:
case 3166:
case 2102:
case 2798:
case 2810:
case 1660:
case 804:
case 1991:
case 1828:
case 2940:
case 336:
case 687:
case 720:
case 2574:
case 4000:
case 1383:
case 638:
case 1946:
case 2666:
case 1816:
case 543:
case 835:
case 2893:
case 2679:
case 1065:
case 3503:
case 575:
case 1420:
case 1112:
case 913:
case 3825:
case 2426:
case 1594:
case 2104:
case 3531:
case 320:
case 2600:
case 3812:
case 1606:
case 3217:
case 147:
case 1344:
case 3942:
case 3995:
case 2953:
case 1685:
case 569:
case 2244:
case 44:
case 3158:
case 931:
case 3116:
case 1998:
case 3173:
case 1759:
case 2005:
case 258:
case 1054:
case 3128:
case 1851:
case 1729:
case 955:
case 3061:
case 1332:
case 253:
case 2377:
case 1169:
case 57:
case 2196:
case 1872:
case 2036:
case 3950:
case 1382:
case 534:
case 3407:
case 874:
case 3265:
case 2282:
case 861:
case 3984:
case 2368:
case 979:
case 1560:
case 502:
case 2674:
case 3777:
case 611:
case 1635:
case 1397:
case 2915:
case 505:
case 206:
case 2566:
case 3502:
case 2297:
case 1489:
case 2845:
case 2892:
case 2475:
case 2361:
case 2952:
case 3876:
case 3943:
case 3588:
case 215:
case 2109:
case 1261:
case 3280:
case 268:
case 3305:
case 3224:
case 2249:
case 880:
case 1434:
case 3386:
case 1333:
case 2208:
case 4074:
case 1029:
case 3890:
case 3761:
case 1495:
case 2786:
case 466:
case 1506:
case 100:
case 633:
case 559:
case 1585:
case 2705:
case 3971:
case 2825:
case 438:
case 1001:
case 80:
case 2336:
case 504:
case 1082:
case 487:
case 749:
case 376:
case 2230:
case 2503:
case 2855:
case 3679:
case 3666:
case 3736:
case 2068:
case 1415:
case 2602:
case 2989:
case 2121:
case 875:
case 1137:
case 3940:
case 236:
case 3283:
case 990:
case 2681:
case 126:
case 1110:
case 1744:
case 1422:
case 3967:
case 1614:
case 869:
case 2128:
case 3837:
case 358:
case 1452:
case 1563:
case 2173:
case 763:
case 349:
case 2116:
case 3086:
case 1049:
case 2158:
case 2688:
case 3953:
case 1317:
case 3244:
case 1519:
case 2942:
case 3978:
case 444:
case 1662:
case 3600:
case 971:
case 1359:
case 964:
case 64:
case 3104:
case 1782:
case 3892:
case 3845:
case 574:
case 834:
case 3566:
case 2502:
case 927:
case 1809:
case 1083:
case 3674:
case 608:
case 3170:
case 3368:
case 1926:
case 2984:
case 3887:
case 1365:
case 1471:
case 3141:
case 712:
case 2265:
case 2950:
case 2768:
case 3036:
case 1918:
case 939:
case 768:
case 241:
case 3201:
case 353:
case 2920:
case 1619:
case 2869:
case 2939:
case 1453:
case 1627:
case 706:
case 1896:
case 3786:
case 2890:
case 2761:
case 3233:
case 3500:
case 1911:
case 1044:
case 3208:
case 1657:
case 1187:
case 954:
case 1841:
case 816:
case 1870:
case 1467:
case 1324:
case 1205:
case 433:
case 901:
case 312:
case 673:
case 1286:
case 2224:
case 2305:
case 3922:
case 2498:
case 1663:
case 199:
case 3109:
case 368:
case 1145:
case 1192:
case 2588:
case 2254:
case 4003:
case 3361:
case 753:
case 3952:
case 1032:
case 2876:
case 1708:
case 1380:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756386001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,];
var gg_b = "1756386001/";

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
