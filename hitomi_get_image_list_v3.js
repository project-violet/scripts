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
case 1014:
case 3533:
case 3415:
case 3492:
case 2257:
case 2799:
case 744:
case 637:
case 2155:
case 2723:
case 1812:
case 265:
case 2761:
case 206:
case 1524:
case 1595:
case 1282:
case 430:
case 3685:
case 1722:
case 2670:
case 3077:
case 3138:
case 3833:
case 3181:
case 1836:
case 3049:
case 3260:
case 2023:
case 2061:
case 2734:
case 2026:
case 808:
case 1049:
case 2545:
case 230:
case 1458:
case 3836:
case 406:
case 1833:
case 1138:
case 1077:
case 513:
case 1685:
case 3595:
case 2816:
case 1902:
case 4061:
case 2429:
case 3524:
case 3714:
case 1446:
case 2034:
case 3812:
case 1749:
case 878:
case 3824:
case 3022:
case 1777:
case 465:
case 3536:
case 1492:
case 1185:
case 3256:
case 1609:
case 2776:
case 2464:
case 827:
case 2541:
case 1330:
case 254:
case 1727:
case 3072:
case 1681:
case 3907:
case 3591:
case 1287:
case 1517:
case 4065:
case 443:
case 2447:
case 2076:
case 141:
case 3891:
case 629:
case 1817:
case 3497:
case 4073:
case 2841:
case 4076:
case 1869:
case 1772:
case 2328:
case 945:
case 2655:
case 913:
case 2073:
case 2488:
case 2151:
case 341:
case 661:
case 1359:
case 696:
case 1907:
case 1591:
case 82:
case 1072:
case 3330:
case 2310:
case 2968:
case 1569:
case 524:
case 3253:
case 368:
case 3609:
case 2618:
case 152:
case 2064:
case 171:
case 2747:
case 1875:
case 3472:
case 1606:
case 3797:
case 1711:
case 2779:
case 639:
case 2205:
case 2764:
case 2476:
case 1168:
case 403:
case 4031:
case 3356:
case 811:
case 2654:
case 2690:
case 837:
case 3575:
case 760:
case 2210:
case 2580:
case 1097:
case 534:
case 3353:
case 1356:
case 382:
case 1866:
case 3387:
case 3821:
case 83:
case 1348:
case 2031:
case 2985:
case 2473:
case 3230:
case 1566:
case 3521:
case 3563:
case 273:
case 1259:
case 1472:
case 1603:
case 4064:
case 3875:
case 3951:
case 2880:
case 2465:
case 2228:
case 371:
case 2788:
case 2844:
case 3571:
case 298:
case 1743:
case 2909:
case 1508:
case 3918:
case 3092:
case 550:
case 2278:
case 2035:
case 2938:
case 3894:
case 2981:
case 3850:
case 420:
case 829:
case 3477:
case 1684:
case 1839:
case 3550:
case 774:
case 2499:
case 916:
case 3715:
case 3046:
case 2383:
case 4093:
case 246:
case 3920:
case 3449:
case 2423:
case 2357:
case 3955:
case 3106:
case 3058:
case 693:
case 4029:
case 1058:
case 2093:
case 1871:
case 848:
case 2426:
case 832:
case 1715:
case 2029:
case 1525:
case 3043:
case 505:
case 934:
case 1594:
case 3684:
case 3839:
case 498:
case 1758:
case 2190:
case 2201:
case 1894:
case 3000:
case 591:
case 2607:
case 2289:
case 1092:
case 1015:
case 2519:
case 3414:
case 3508:
case 1571:
case 4042:
case 2729:
case 220:
case 1668:
case 575:
case 35:
case 1312:
case 2267:
case 2661:
case 2911:
case 1172:
case 327:
case 393:
case 3271:
case 291:
case 2070:
case 1208:
case 3085:
case 2751:
case 2165:
case 1947:
case 7:
case 903:
case 205:
case 3333:
case 3127:
case 2244:
case 1964:
case 1622:
case 2770:
case 889:
case 2051:
case 2173:
case 1614:
case 1294:
case 1250:
case 2176:
case 3614:
case 1785:
case 2316:
case 3964:
case 3336:
case 4051:
case 1333:
case 2889:
case 2407:
case 280:
case 2589:
case 1988:
case 2219:
case 1085:
case 3208:
case 3484:
case 1677:
case 1931:
case 475:
case 2501:
case 193:
case 3979:
case 3239:
case 733:
case 2626:
case 3312:
case 1627:
case 1263:
case 3266:
case 1830:
case 1996:
case 2454:
case 3114:
case 122:
case 3929:
case 1406:
case 416:
case 3369:
case 2900:
case 1275:
case 1038:
case 1935:
case 339:
case 818:
case 726:
case 4018:
case 1317:
case 234:
case 1530:
case 503:
case 3859:
case 308:
case 2199:
case 3530:
case 3009:
case 652:
case 216:
case 946:
case 2828:
case 2123:
case 2755:
case 434:
case 2161:
case 3942:
case 2510:
case 2280:
case 799:
case 2720:
case 1672:
case 3081:
case 3406:
case 2528:
case 3709:
case 1122:
case 1114:
case 2673:
case 2810:
case 998:
case 2402:
case 1993:
case 740:
case 3830:
case 1266:
case 3221:
case 3627:
case 2020:
case 3697:
case 1611:
case 785:
case 3100:
case 689:
case 1217:
case 4002:
case 224:
case 3703:
case 3548:
case 3269:
case 857:
case 2241:
case 1192:
case 2852:
case 1999:
case 887:
case 792:
case 930:
case 3934:
case 1438:
case 1158:
case 1481:
case 1006:
case 2193:
case 1363:
case 2914:
case 543:
case 3366:
case 2922:
case 1146:
case 2129:
case 1143:
case 2702:
case 906:
case 1366:
case 2504:
case 2418:
case 3409:
case 3321:
case 668:
case 3006:
case 3481:
case 3438:
case 1274:
case 3553:
case 976:
case 361:
case 424:
case 129:
case 2237:
case 3192:
case 3115:
case 4090:
case 4054:
case 1269:
case 714:
case 1040:
case 1703:
case 1926:
case 3961:
case 1291:
case 85:
case 2455:
case 263:
case 3325:
case 2583:
case 2213:
case 3350:
case 3860:
case 1643:
case 3646:
case 2470:
case 3973:
case 3485:
case 3233:
case 618:
case 2344:
case 3560:
case 1600:
case 943:
case 245:
case 1197:
case 915:
case 311:
case 2367:
case 3692:
case 3615:
case 2883:
case 530:
case 1339:
case 3965:
case 3068:
case 3224:
case 3339:
case 413:
case 1615:
case 3582:
case 3212:
case 111:
case 2232:
case 1111:
case 3197:
case 3308:
case 1371:
case 3236:
case 1485:
case 1646:
case 1860:
case 954:
case 1394:
case 1350:
case 852:
case 576:
case 1042:
case 1796:
case 3793:
case 4092:
case 1567:
case 4015:
case 2382:
case 680:
case 1981:
case 3154:
case 1938:
case 1035:
case 3607:
case 1909:
case 2508:
case 3289:
case 3729:
case 320:
case 198:
case 2140:
case 1844:
case 457:
case 2422:
case 738:
case 2808:
case 1096:
case 2103:
case 3819:
case 1742:
case 1357:
case 1735:
case 146:
case 1383:
case 3386:
case 1499:
case 2684:
case 2477:
case 287:
case 2550:
case 2594:
case 3867:
case 1029:
case 2792:
case 2715:
case 2046:
case 666:
case 1426:
case 3735:
case 675:
case 3357:
case 2449:
case 2058:
case 2871:
case 3742:
case 3096:
case 978:
case 2668:
case 922:
case 3102:
case 1729:
case 2360:
case 2571:
case 2918:
case 2015:
case 1289:
case 3938:
case 1607:
case 605:
case 3278:
case 1201:
case 709:
case 257:
case 1190:
case 2894:
case 3981:
case 2825:
case 3567:
case 3304:
case 2563:
case 2606:
case 993:
case 3880:
case 1747:
case 1064:
case 271:
case 3731:
case 3228:
case 616:
case 3210:
case 3580:
case 1107:
case 2575:
case 1690:
case 2353:
case 2821:
case 1562:
case 539:
case 1476:
case 201:
case 1764:
case 2230:
case 3473:
case 3985:
case 3088:
case 1473:
case 1088:
case 3205:
case 1031:
case 845:
case 3562:
case 4011:
case 401:
case 103:
case 3690:
case 3654:
case 1210:
case 1788:
case 92:
case 1228:
case 495:
case 1465:
case 1731:
case 3064:
case 747:
case 2472:
case 452:
case 522:
case 173:
case 2638:
case 2287:
case 529:
case 70:
case 459:
case 154:
case 2330:
case 3310:
case 3773:
case 1541:
case 1464:
case 1776:
case 3065:
case 3968:
case 268:
case 1298:
case 2185:
case 3618:
case 3537:
case 3620:
case 3655:
case 77:
case 343:
case 315:
case 1479:
case 1252:
case 1984:
case 3488:
case 3073:
case 911:
case 3431:
case 241:
case 880:
case 489:
case 184:
case 777:
case 384:
case 3447:
case 3076:
case 1431:
case 1765:
case 4027:
case 1151:
case 1073:
case 548:
case 3252:
case 289:
case 2574:
case 93:
case 2497:
case 2869:
case 2772:
case 3841:
case 441:
case 624:
case 1170:
case 259:
case 875:
case 2874:
case 3298:
case 2569:
case 1065:
case 3541:
case 468:
case 354:
case 561:
case 2591:
case 165:
case 2400:
case 1435:
case 3286:
case 2812:
case 2895:
case 3516:
case 2824:
case 702:
case 2022:
case 1799:
case 3845:
case 929:
case 1257:
case 176:
case 781:
case 1061:
case 418:
case 3734:
case 3389:
case 537:
case 330:
case 4077:
case 2990:
case 2954:
case 511:
case 1496:
case 728:
case 4049:
case 2722:
case 1670:
case 3816:
case 2512:
case 3301:
case 106:
case 2446:
case 1301:
case 1940:
case 1429:
case 218:
case 53:
case 2077:
case 3813:
case 2833:
case 3496:
case 790:
case 1493:
case 130:
case 1026:
case 1734:
case 2415:
case 3651:
case 376:
case 3257:
case 3442:
case 3120:
case 1286:
case 3723:
case 645:
case 3435:
case 3761:
case 3283:
case 3513:
case 1034:
case 1726:
case 959:
case 873:
case 2236:
case 1557:
case 2976:
case 788:
case 3164:
case 2643:
case 1213:
case 2882:
case 3216:
case 803:
case 2339:
case 1451:
case 1131:
case 3886:
case 2295:
case 989:
case 3972:
case 518:
case 3007:
case 23:
case 2600:
case 437:
case 4068:
case 721:
case 411:
case 3319:
case 3245:
case 2560:
case 1245:
case 2371:
case 3642:
case 1319:
case 345:
case 1179:
case 1007:
case 3857:
case 1232:
case 1972:
case 313:
case 3131:
case 1886:
case 211:
case 2615:
case 2692:
case 676:
case 2965:
case 237:
case 2325:
case 2658:
case 3213:
case 3696:
case 1707:
case 3927:
case 2350:
case 1629:
case 606:
case 2646:
case 2233:
case 968:
case 2768:
case 3631:
case 1598:
case 3237:
case 1852:
case 1241:
case 1647:
case 3420:
case 429:
case 2706:
case 124:
case 3142:
case 615:
case 1679:
case 2587:
case 4040:
case 643:
case 1129:
case 1664:
case 1914:
case 3418:
case 589:
case 1193:
case 2006:
case 2481:
case 2853:
case 3196:
case 1552:
case 3790:
case 654:
case 3552:
case 1196:
case 2274:
case 2740:
case 2366:
case 3914:
case 3922:
case 3664:
case 2848:
case 3129:
case 3090:
case 3054:
case 1804:
case 1135:
case 3679:
case 2926:
case 1142:
case 898:
case 2040:
case 3647:
case 2269:
case 3241:
case 1380:
case 1977:
case 2556:
case 3852:
case 229:
case 3598:
case 1002:
case 278:
case 3718:
case 3810:
case 3673:
case 1676:
case 3402:
case 1454:
case 1490:
case 603:
case 3958:
case 957:
case 2996:
case 2738:
case 2221:
case 2263:
case 3199:
case 830:
case 439:
case 208:
case 1505:
case 134:
case 2530:
case 3915:
case 3992:
case 2317:
case 794:
case 3665:
case 673:
case 3123:
case 2149:
case 2942:
case 3161:
case 3510:
case 2935:
case 2038:
case 1341:
case 2406:
case 3720:
case 1720:
case 806:
case 1280:
case 2403:
case 4009:
case 3262:
case 4081:
case 116:
case 2391:
case 1992:
case 1018:
case 334:
case 767:
case 1199:
case 552:
case 712:
case 2266:
case 3134:
case 478:
case 3805:
case 1958:
case 2559:
case 1055:
case 3454:
case 1402:
case 2114:
case 1810:
case 1718:
case 95:
case 2947:
case 3332:
case 166:
case 427:
case 493:
case 717:
case 557:
case 3589:
case 3219:
case 350:
case 3345:
case 191:
case 2172:
case 3501:
case 2239:
case 3626:
case 175:
case 4085:
case 2395:
case 2312:
case 3176:
case 3801:
case 1878:
case 2614:
case 2622:
case 1244:
case 3407:
case 587:
case 305:
case 1889:
case 1407:
case 2333:
case 3244:
case 982:
case 58:
case 3770:
case 2785:
case 3878:
case 3173:
case 3051:
case 1176:
case 2294:
case 3267:
case 3623:
case 55:
case 3661:
case 1626:
case 1501:
case 995:
case 42:
case 2931:
case 3699:
case 2271:
case 1219:
case 2085:
case 2988:
case 2677:
case 3070:
case 971:
case 366:
case 952:
case 2320:
case 3957:
case 1872:
case 2573:
case 2628:
case 474:
case 3527:
case 3717:
case 1791:
case 1203:
case 5:
case 2480:
case 3475:
case 3983:
case 3206:
case 1659:
case 3381:
case 662:
case 342:
case 2037:
case 4041:
case 1572:
case 2178:
case 720:
case 2873:
case 1774:
case 2960:
case 3463:
case 338:
case 1463:
case 4037:
case 533:
case 1309:
case 204:
case 1421:
case 3572:
case 2254:
case 2101:
case 210:
case 2982:
case 940:
case 2605:
case 1630:
case 2189:
case 142:
case 3240:
case 3986:
case 274:
case 3791:
case 746:
case 1527:
case 2462:
case 379:
case 260:
case 3998:
case 2689:
case 703:
case 9:
case 1577:
case 3024:
case 3736:
case 1425:
case 1268:
case 2716:
case 2948:
case 1549:
case 821:
case 3822:
case 1385:
case 1849:
case 3522:
case 3514:
case 1904:
case 2419:
case 486:
case 3724:
case 3159:
case 2745:
case 2534:
case 1877:
case 3952:
case 2732:
case 2467:
case 2013:
case 1439:
case 347:
case 1159:
case 1036:
case 3471:
case 3033:
case 1408:
case 1284:
case 235:
case 14:
case 2823:
case 2128:
case 3849:
case 1712:
case 2987:
case 2110:
case 1814:
case 1822:
case 4032:
case 256:
case 612:
case 3130:
case 1095:
case 1012:
case 3450:
case 3424:
case 4044:
case 37:
case 743:
case 3412:
case 3495:
case 555:
case 2686:
case 2432:
case 2959:
case 1558:
case 1892:
case 3739:
case 3384:
case 2445:
case 177:
case 536:
case 2893:
case 1858:
case 3008:
case 2019:
case 1433:
case 30:
case 817:
case 1750:
case 3843:
case 1846:
case 1910:
case 3039:
case 107:
case 585:
case 3368:
case 2744:
case 2413:
case 1039:
case 3846:
case 2067:
case 4019:
case 3660:
case 1843:
case 3750:
case 2896:
case 3515:
case 3285:
case 2270:
case 1156:
case 1905:
case 2930:
case 3858:
case 3725:
case 3153:
case 2044:
case 377:
case 3815:
case 225:
case 2683:
case 3558:
case 2657:
case 3094:
case 2835:
case 1800:
case 2251:
case 2104:
case 3546:
case 3771:
case 1424:
case 730:
case 894:
case 1656:
case 1989:
case 2218:
case 2531:
case 1182:
case 190:
case 3653:
case 351:
case 328:
case 3763:
case 3281:
case 3511:
case 1597:
case 688:
case 3238:
case 3721:
case 3978:
case 3075:
case 2302:
case 59:
case 985:
case 2157:
case 3811:
case 658:
case 2604:
case 2437:
case 1303:
case 302:
case 3306:
case 1469:
case 3775:
case 2831:
case 381:
case 2255:
case 181:
case 2186:
case 776:
case 812:
case 2652:
case 483:
case 3066:
case 1021:
case 1063:
case 2847:
case 1306:
case 2564:
case 349:
case 2879:
case 669:
case 3897:
case 1811:
case 1721:
case 1238:
case 1075:
case 1687:
case 3474:
case 3340:
case 3901:
case 1511:
case 1281:
case 1763:
case 2698:
case 3989:
case 1209:
case 3656:
case 2062:
case 2354:
case 1759:
case 49:
case 925:
case 3581:
case 3211:
case 2365:
case 297:
case 3617:
case 3509:
case 169:
case 2404:
case 2518:
case 2231:
case 1195:
case 464:
case 358:
case 2855:
case 2820:
case 1124:
case 602:
case 3809:
case 2113:
case 84:
case 2818:
case 1059:
case 2555:
case 2520:
case 2028:
case 2950:
case 1136:
case 3453:
case 651:
case 672:
case 1838:
case 1133:
case 2498:
case 690:
case 3136:
case 1881:
case 847:
case 2264:
case 2705:
case 1730:
case 1944:
case 188:
case 583:
case 497:
case 423:
case 29:
case 3372:
case 3669:
case 4010:
case 2908:
case 713:
case 369:
case 3691:
case 1617:
case 1211:
case 1581:
case 1967:
case 3314:
case 1460:
case 2616:
case 1258:
case 3174:
case 1885:
case 1633:
case 3482:
case 3243:
case 455:
case 2229:
case 2334:
case 2789:
case 60:
case 1117:
case 842:
case 2486:
case 485:
case 944:
case 2645:
case 1377:
case 2141:
case 3962:
case 3169:
case 436:
case 1349:
case 838:
case 2326:
case 67:
case 1585:
case 3215:
case 3292:
case 285:
case 3585:
case 2570:
case 983:
case 2323:
case 414:
case 1695:
case 3349:
case 1624:
case 1962:
case 4001:
case 809:
case 400:
case 4089:
case 2399:
case 2235:
case 1200:
case 236:
case 2975:
case 2851:
case 3117:
case 292:
case 3246:
case 1243:
case 1636:
case 3633:
case 1322:
case 1174:
case 2296:
case 879:
case 2613:
case 3258:
case 607:
case 3460:
case 2778:
case 2507:
case 167:
case 426:
case 851:
case 872:
case 2226:
case 1315:
case 1392:
case 2162:
case 36:
case 2969:
case 1568:
case 3082:
case 2619:
case 1277:
case 1937:
case 3166:
case 4057:
case 1163:
case 904:
case 535:
case 1760:
case 2329:
case 2086:
case 2401:
case 1346:
case 2974:
case 1625:
case 881:
case 586:
case 4086:
case 2396:
case 3625:
case 1782:
case 3650:
case 1584:
case 2083:
case 3346:
case 3868:
case 849:
case 1608:
case 2342:
case 2299:
case 1082:
case 3568:
case 2335:
case 16:
case 226:
case 1300:
case 3392:
case 3315:
case 2261:
case 3060:
case 2667:
case 647:
case 367:
case 560:
case 1639:
case 3175:
case 1503:
case 2410:
case 3913:
case 1748:
case 3663:
case 1840:
case 3787:
case 1666:
case 87:
case 3621:
case 362:
case 1756:
case 3753:
case 3125:
case 4052:
case 3194:
case 780:
case 2273:
case 2388:
case 1945:
case 1932:
case 1459:
case 1272:
case 80:
case 3087:
case 2680:
case 510:
case 1803:
case 1108:
case 935:
case 233:
case 1397:
case 2265:
case 11:
case 31:
case 2379:
case 679:
case 3397:
case 1311:
case 1171:
case 2912:
case 2995:
case 2119:
case 1087:
case 3459:
case 3932:
case 2347:
case 131:
case 3945:
case 3048:
case 2405:
case 1150:
case 2890:
case 2854:
case 2798:
case 1753:
case 3756:
case 1787:
case 4004:
case 1227:
case 1663:
case 3748:
case 1506:
case 1913:
case 2648:
case 451:
case 718:
case 2474:
case 3579:
case 826:
case 153:
case 2597:
case 3698:
case 290:
case 2656:
case 1588:
case 2989:
case 3354:
case 3390:
case 3547:
case 3186:
case 1255:
case 402:
case 2491:
case 1888:
case 2066:
case 1220:
case 2469:
case 2303:
case 3441:
case 481:
case 3762:
case 249:
case 1437:
case 4021:
case 1157:
case 919:
case 183:
case 3157:
case 2811:
case 1762:
case 1441:
case 2306:
case 2063:
case 1847:
case 2775:
case 697:
case 3255:
case 3831:
case 1354:
case 1547:
case 3588:
case 3218:
case 272:
case 2209:
case 251:
case 2653:
case 1698:
case 353:
case 2763:
case 2511:
case 2075:
case 2238:
case 3080:
case 2687:
case 899:
case 1864:
case 3302:
case 277:
case 47:
case 2892:
case 636:
case 2815:
case 325:
case 3767:
case 1432:
case 2050:
case 3104:
case 958:
case 1719:
case 2025:
case 3744:
case 40:
case 2368:
case 1416:
case 2187:
case 2910:
case 3413:
case 2846:
case 4008:
case 3067:
case 2660:
case 4039:
case 1307:
case 2515:
case 2071:
case 1198:
case 2725:
case 2153:
case 2858:
case 1893:
case 2905:
case 2008:
case 3829:
case 1542:
case 4071:
case 2500:
case 1744:
case 3529:
case 2424:
case 2543:
case 1835:
case 1251:
case 2495:
case 969:
case 600:
case 3593:
case 3432:
case 3959:
case 4025:
case 4094:
case 1044:
case 3445:
case 1032:
case 3678:
case 4024:
case 2385:
case 1526:
case 1716:
case 1948:
case 1045:
case 56:
case 3523:
case 3444:
case 2268:
case 2130:
case 864:
case 2450:
case 3599:
case 3953:
case 3467:
case 3351:
case 386:
case 1534:
case 3013:
case 2877:
case 1745:
case 1016:
case 2033:
case 3861:
case 626:
case 2849:
case 3823:
case 1823:
case 2795:
case 1128:
case 91:
case 447:
case 135:
case 3826:
case 1861:
case 699:
case 2284:
case 2514:
case 795:
case 3016:
case 3745:
case 1899:
case 2439:
case 2952:
case 3534:
case 771:
case 512:
case 1599:
case 2998:
case 640:
case 3105:
case 3689:
case 567:
case 823:
case 782:
case 897:
case 2024:
case 1444:
case 2822:
case 3526:
case 1713:
case 1561:
case 1678:
case 1480:
case 2203:
case 1865:
case 1628:
case 855:
case 2769:
case 3576:
case 2774:
case 885:
case 2466:
case 1178:
case 1873:
case 3101:
case 3290:
case 3876:
case 6:
case 3982:
case 517:
case 1037:
case 3041:
case 836:
case 1565:
case 4017:
case 2069:
case 2240:
case 2827:
case 3565:
case 2381:
case 4091:
case 1041:
case 242:
case 2338:
case 3037:
case 1189:
case 3202:
case 1254:
case 1290:
case 3873:
case 2017:
case 3318:
case 2421:
case 104:
case 51:
case 409:
case 75:
case 800:
case 2957:
case 3320:
case 3573:
case 633:
case 78:
case 2527:
case 2717:
case 174:
case 2983:
case 2475:
case 3480:
case 870:
case 479:
case 3:
case 3890:
case 610:
case 3798:
case 2666:
case 604:
case 1144:
case 2840:
case 3364:
case 1802:
case 2748:
case 2916:
case 2503:
case 3052:
case 3662:
case 21:
case 3924:
case 1428:
case 2540:
case 1502:
case 3098:
case 2803:
case 3119:
case 727:
case 2108:
case 793:
case 1680:
case 3347:
case 2459:
case 2945:
case 542:
case 1388:
case 231:
case 3167:
case 72:
case 41:
case 1554:
case 1590:
case 947:
case 1098:
case 1995:
case 3502:
case 2806:
case 3265:
case 333:
case 2311:
case 1924:
case 1379:
case 1662:
case 3704:
case 1052:
case 3410:
case 1364:
case 2506:
case 2227:
case 2663:
case 579:
case 3144:
case 2621:
case 1798:
case 1276:
case 2150:
case 2194:
case 1:
case 3933:
case 1405:
case 3342:
case 2277:
case 494:
case 2671:
case 3757:
case 1162:
case 635:
case 3783:
case 2392:
case 686:
case 4082:
case 3223:
case 267:
case 46:
case 1991:
case 2175:
case 212:
case 3396:
case 656:
case 2625:
case 2694:
case 3057:
case 2650:
case 844:
case 1807:
case 1489:
case 2346:
case 1086:
case 1401:
case 2163:
case 938:
case 778:
case 883:
case 722:
case 1644:
case 3086:
case 3401:
case 3329:
case 1083:
case 1478:
case 3234:
case 547:
case 3807:
case 2214:
case 660:
case 340:
case 2222:
case 1180:
case 2884:
case 1223:
case 3786:
case 1667:
case 3226:
case 294:
case 1783:
case 1261:
case 26:
case 126:
case 467:
case 3969:
case 1299:
case 2082:
case 1789:
case 1334:
case 972:
case 3551:
case 2633:
case 928:
case 3613:
case 3870:
case 1616:
case 57:
case 2460:
case 3778:
case 3921:
case 3137:
case 2292:
case 385:
case 1326:
case 3457:
case 902:
case 2377:
case 114:
case 419:
case 1645:
case 810:
case 1632:
case 1486:
case 1001:
case 3078:
case 625:
case 3975:
case 3235:
case 3483:
case 1975:
case 2200:
case 136:
case 1078:
case 1235:
case 1483:
case 2191:
case 1851:
case 3486:
case 3001:
case 1242:
case 3141:
case 2169:
case 1323:
case 949:
case 2612:
case 3089:
case 3326:
case 1361:
case 1570:
case 3966:
case 2314:
case 1963:
case 3616:
case 155:
case 2174:
case 1613:
case 1870:
case 1551:
case 2482:
case 732:
case 2636:
case 370:
case 192:
case 3641:
case 39:
case 2669:
case 1820:
case 3247:
case 1971:
case 2195:
case 1728:
case 97:
case 2112:
case 1231:
case 3005:
case 2919:
case 1010:
case 711:
case 3279:
case 528:
case 3939:
case 3132:
case 572:
case 2297:
case 737:
case 458:
case 2456:
case 1950:
case 3498:
case 1925:
case 1028:
case 3705:
case 1710:
case 1520:
case 2448:
case 3376:
case 502:
case 1555:
case 2059:
case 1113:
case 1818:
case 2674:
case 907:
case 2944:
case 3520:
case 3373:
case 3710:
case 1705:
case 3028:
case 1264:
case 2327:
case 2453:
case 2881:
case 3950:
case 2838:
case 164:
case 977:
case 860:
case 469:
case 323:
case 2581:
case 2211:
case 2538:
case 1452:
case 3288:
case 2030:
case 3637:
case 2509:
case 1005:
case 3231:
case 1641:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743156002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,];
var gg_b = "1743156002/";

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
