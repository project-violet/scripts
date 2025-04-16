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
case 2553:
case 1114:
case 1934:
case 1252:
case 2856:
case 2090:
case 1777:
case 3556:
case 992:
case 1211:
case 3756:
case 1818:
case 1107:
case 1195:
case 2855:
case 235:
case 3024:
case 6:
case 3084:
case 1196:
case 1974:
case 976:
case 2001:
case 1379:
case 2922:
case 2323:
case 296:
case 1935:
case 3026:
case 3929:
case 2383:
case 1898:
case 3086:
case 1194:
case 1976:
case 3326:
case 497:
case 2083:
case 367:
case 895:
case 600:
case 1200:
case 1039:
case 3569:
case 3025:
case 2762:
case 3142:
case 272:
case 363:
case 327:
case 278:
case 630:
case 3862:
case 3325:
case 2869:
case 1497:
case 1975:
case 388:
case 1405:
case 382:
case 1968:
case 2014:
case 289:
case 1944:
case 3061:
case 2307:
case 2395:
case 1604:
case 379:
case 1452:
case 2007:
case 2396:
case 1204:
case 3093:
case 1547:
case 1528:
case 1588:
case 1747:
case 1771:
case 2096:
case 3393:
case 2999:
case 1217:
case 3750:
case 2394:
case 27:
case 1930:
case 343:
case 420:
case 351:
case 324:
case 2094:
case 38:
case 595:
case 1123:
case 1491:
case 3172:
case 1183:
case 1605:
case 2709:
case 1697:
case 1358:
case 2139:
case 494:
case 3132:
case 1946:
case 3020:
case 1297:
case 1049:
case 1205:
case 3080:
case 1400:
case 1970:
case 347:
case 3320:
case 1349:
case 3380:
case 460:
case 1321:
case 1792:
case 1381:
case 1950:
case 820:
case 3695:
case 1592:
case 345:
case 3971:
case 3401:
case 3947:
case 3988:
case 2424:
case 3928:
case 2467:
case 1899:
case 2484:
case 3214:
case 2159:
case 3490:
case 799:
case 1338:
case 540:
case 597:
case 3152:
case 199:
case 2127:
case 860:
case 2693:
case 3568:
case 2164:
case 3744:
case 2148:
case 3931:
case 519:
case 3216:
case 3570:
case 2846:
case 2743:
case 2280:
case 2485:
case 1712:
case 2425:
case 1432:
case 3615:
case 234:
case 1902:
case 3191:
case 2830:
case 3215:
case 3530:
case 3616:
case 3294:
case 204:
case 791:
case 1003:
case 3745:
case 2680:
case 2426:
case 191:
case 3496:
case 2267:
case 2224:
case 840:
case 3201:
case 2874:
case 1387:
case 3407:
case 1348:
case 3977:
case 1359:
case 3534:
case 2138:
case 1027:
case 3290:
case 3414:
case 1064:
case 3734:
case 2533:
case 1954:
case 1366:
case 2413:
case 207:
case 3683:
case 3105:
case 436:
case 618:
case 2836:
case 1672:
case 1232:
case 612:
case 4082:
case 3610:
case 3416:
case 1066:
case 1442:
case 237:
case 3736:
case 2686:
case 406:
case 2420:
case 2626:
case 2480:
case 3210:
case 646:
case 1757:
case 2998:
case 1365:
case 2286:
case 1557:
case 3776:
case 3873:
case 3740:
case 3735:
case 2103:
case 1529:
case 1065:
case 3283:
case 3415:
case 1589:
case 1632:
case 1272:
case 3535:
case 3540:
case 3798:
case 3072:
case 654:
case 2976:
case 4054:
case 1310:
case 3598:
case 674:
case 2663:
case 2194:
case 2079:
case 1383:
case 3372:
case 2935:
case 2940:
case 2115:
case 1323:
case 3460:
case 1010:
case 3973:
case 621:
case 1982:
case 3666:
case 2691:
case 1869:
case 661:
case 3933:
case 3113:
case 2339:
case 3266:
case 1854:
case 752:
case 3032:
case 2936:
case 772:
case 2200:
case 965:
case 778:
case 2195:
case 2107:
case 2211:
case 2577:
case 2818:
case 3287:
case 2777:
case 629:
case 548:
case 2252:
case 883:
case 1753:
case 56:
case 3877:
case 3518:
case 2114:
case 2934:
case 485:
case 1390:
case 1553:
case 2652:
case 2404:
case 52:
case 584:
case 2196:
case 1301:
case 2417:
case 3648:
case 2537:
case 822:
case 516:
case 3481:
case 3627:
case 669:
case 3421:
case 3664:
case 2737:
case 3687:
case 1709:
case 2183:
case 2123:
case 1509:
case 653:
case 3203:
case 3260:
case 641:
case 1094:
case 75:
case 2110:
case 2930:
case 1802:
case 1394:
case 2206:
case 4002:
case 2970:
case 2400:
case 1316:
case 2606:
case 2205:
case 677:
case 657:
case 1016:
case 3125:
case 3185:
case 3660:
case 610:
case 2358:
case 3603:
case 1095:
case 1007:
case 528:
case 3238:
case 3831:
case 2604:
case 816:
case 2190:
case 3459:
case 587:
case 1395:
case 2411:
case 3448:
case 2944:
case 2617:
case 789:
case 2531:
case 3487:
case 649:
case 884:
case 2101:
case 409:
case 3847:
case 848:
case 2217:
case 215:
case 1999:
case 3888:
case 86:
case 2747:
case 3184:
case 562:
case 3124:
case 2528:
case 3871:
case 1396:
case 3719:
case 632:
case 1870:
case 2512:
case 979:
case 638:
case 3305:
case 3397:
case 4045:
case 4030:
case 959:
case 3439:
case 484:
case 1543:
case 1280:
case 3005:
case 2551:
case 3249:
case 217:
case 1743:
case 2751:
case 39:
case 1486:
case 1620:
case 213:
case 46:
case 291:
case 1426:
case 1680:
case 1165:
case 809:
case 2003:
case 448:
case 1845:
case 1830:
case 2303:
case 839:
case 3658:
case 3909:
case 1467:
case 1484:
case 1661:
case 4044:
case 655:
case 3304:
case 2021:
case 3799:
case 2592:
case 2950:
case 1293:
case 3004:
case 2381:
case 3599:
case 951:
case 2078:
case 2792:
case 1164:
case 1187:
case 947:
case 1693:
case 2038:
case 964:
case 1261:
case 2338:
case 1844:
case 1159:
case 1480:
case 3962:
case 137:
case 1686:
case 4035:
case 392:
case 737:
case 468:
case 398:
case 1875:
case 2969:
case 539:
case 1836:
case 2672:
case 2232:
case 885:
case 3239:
case 707:
case 4076:
case 1285:
case 1533:
case 509:
case 3458:
case 2632:
case 2272:
case 3782:
case 2589:
case 2065:
case 703:
case 3639:
case 63:
case 214:
case 487:
case 3522:
case 1573:
case 2729:
case 1226:
case 2822:
case 4075:
case 1286:
case 2557:
case 2882:
case 2365:
case 428:
case 1998:
case 733:
case 60:
case 1835:
case 286:
case 3889:
case 1874:
case 1493:
case 1121:
case 923:
case 967:
case 1224:
case 1284:
case 944:
case 2955:
case 531:
case 2048:
case 1624:
case 1684:
case 2064:
case 2087:
case 988:
case 982:
case 2956:
case 2387:
case 2364:
case 927:
case 886:
case 2890:
case 3444:
case 2948:
case 3131:
case 2927:
case 570:
case 119:
case 550:
case 3234:
case 3674:
case 719:
case 3590:
case 2056:
case 2355:
case 2567:
case 3634:
case 2801:
case 3701:
case 375:
case 3867:
case 2965:
case 111:
case 2586:
case 193:
case 3276:
case 3636:
case 2786:
case 2883:
case 3445:
case 3430:
case 711:
case 793:
case 1398:
case 1229:
case 1289:
case 3523:
case 3240:
case 1572:
case 2273:
case 3723:
case 69:
case 1098:
case 3886:
case 1772:
case 1532:
case 2785:
case 3640:
case 3635:
case 3275:
case 1689:
case 2069:
case 2673:
case 1732:
case 302:
case 2354:
case 2966:
case 2443:
case 3885:
case 1657:
case 1839:
case 140:
case 3362:
case 3825:
case 338:
case 3236:
case 3676:
case 332:
case 3900:
case 2761:
case 2895:
case 3595:
case 415:
case 209:
case 813:
case 3795:
case 930:
case 1156:
case 1292:
case 514:
case 3137:
case 870:
case 817:
case 2981:
case 2350:
case 850:
case 3668:
case 2978:
case 2408:
case 3904:
case 3596:
case 9:
case 3435:
case 1429:
case 3646:
case 30:
case 1612:
case 2960:
case 1651:
case 231:
case 3794:
case 676:
case 33:
case 1457:
case 3670:
case 3245:
case 3476:
case 1858:
case 1251:
case 2580:
case 1742:
case 2520:
case 3813:
case 1169:
case 3630:
case 3645:
case 3270:
case 2780:
case 720:
case 2720:
case 3997:
case 3905:
case 2816:
case 1212:
case 3246:
case 1849:
case 1154:
case 369:
case 1881:
case 499:
case 1288:
case 946:
case 1247:
case 1174:
case 1878:
case 1437:
case 1717:
case 4038:
case 3250:
case 1231:
case 1995:
case 1477:
case 918:
case 3456:
case 1628:
case 2044:
case 1441:
case 4021:
case 1647:
case 4081:
case 1175:
case 2346:
case 3602:
case 2609:
case 1797:
case 1705:
case 2070:
case 26:
case 491:
case 3343:
case 2046:
case 361:
case 2949:
case 3469:
case 248:
case 815:
case 1019:
case 1136:
case 4060:
case 1706:
case 22:
case 1506:
case 1994:
case 470:
case 2345:
case 2330:
case 1176:
case 3189:
case 1140:
case 2182:
case 2030:
case 2122:
case 1677:
case 1237:
case 1471:
case 3192:
case 3656:
case 2199:
case 3450:
case 4048:
case 4027:
case 2653:
case 926:
case 4064:
case 4087:
case 1641:
case 3655:
case 1864:
case 1887:
case 349:
case 2253:
case 1241:
case 2334:
case 1752:
case 1144:
case 1511:
case 1168:
case 1700:
case 2075:
case 2262:
case 1500:
case 222:
case 2336:
case 3269:
case 3033:
case 3932:
case 287:
case 2119:
case 2939:
case 3333:
case 414:
case 136:
case 1923:
case 2335:
case 3972:
case 1983:
case 1591:
case 3654:
case 283:
case 1382:
case 2076:
case 262:
case 1145:
case 1910:
case 2376:
case 1022:
case 268:
case 2772:
case 3579:
case 3222:
case 1273:
case 1633:
case 2572:
case 2289:
case 3779:
case 2102:
case 458:
case 452:
case 293:
case 472:
case 1965:
case 1369:
case 2451:
case 4023:
case 240:
case 1443:
case 2657:
case 4010:
case 1354:
case 1966:
case 2732:
case 1233:
case 1673:
case 1525:
case 366:
case 3739:
case 2532:
case 2629:
case 2412:
case 1725:
case 1056:
case 1608:
case 803:
case 3077:
case 219:
case 4001:
case 405:
case 1927:
case 3377:
case 3499:
case 4090:
case 953:
case 3337:
case 534:
case 973:
case 1801:
case 645:
case 1784:
case 807:
case 504:
case 1355:
case 731:
case 2457:
case 2651:
case 1002:
case 701:
case 3422:
case 1960:
case 1473:
case 294:
case 3482:
case 2612:
case 2429:
case 1894:
case 1302:
case 1433:
case 2154:
case 4094:
case 1816:
case 3758:
case 312:
case 2542:
case 318:
case 1520:
case 3162:
case 2742:
case 2858:
case 2251:
case 2156:
case 709:
case 3699:
case 3331:
case 109:
case 804:
case 2692:
case 3153:
case 665:
case 1761:
case 139:
case 1561:
case 625:
case 1050:
case 1978:
case 3071:
case 4095:
case 3328:
case 2155:
case 4014:
case 1593:
case 3047:
case 1921:
case 3028:
case 3371:
case 2136:
case 76:
case 3805:
case 148:
case 3980:
case 3351:
case 748:
case 3920:
case 1462:
case 330:
case 3012:
case 742:
case 434:
case 3913:
case 3133:
case 1070:
case 2797:
case 3051:
case 3312:
case 1209:
case 535:
case 1122:
case 716:
case 1045:
case 667:
case 1182:
case 2915:
case 2135:
case 2176:
case 72:
case 1330:
case 784:
case 2860:
case 2803:
case 889:
case 184:
case 12:
case 2706:
case 2399:
case 596:
case 2717:
case 3804:
case 3721:
case 3781:
case 2631:
case 2247:
case 2099:
case 3578:
case 90:
case 2881:
case 3778:
case 2704:
case 3538:
case 1453:
case 2647:
case 2914:
case 3738:
case 558:
case 881:
case 85:
case 1368:
case 2907:
case 2838:
case 1036:
case 3925:
case 1939:
case 187:
case 3800:
case 3863:
case 3766:
case 128:
case 835:
case 3698:
case 122:
case 2500:
case 2866:
case 1262:
case 433:
case 2022:
case 168:
case 2082:
case 162:
case 3565:
case 3029:
case 3926:
case 437:
case 1035:
case 1040:
case 206:
case 1076:
case 651:
case 183:
case 1409:
case 671:
case 1340:
case 407:
case 3389:
case 2923:
case 3618:
case 1653:
case 2447:
case 3984:
case 872:
case 852:
case 3587:
case 2711:
case 659:
case 2637:
case 2144:
case 3548:
case 679:
case 3218:
case 3811:
case 2848:
case 3559:
case 2864:
case 2552:
case 2887:
case 908:
case 3232:
case 1623:
case 1683:
case 2000:
case 3954:
case 2239:
case 2679:
case 453:
case 875:
case 1833:
case 292:
case 473:
case 1416:
case 2300:
case 855:
case 4073:
case 3442:
case 3969:
case 3822:
case 410:
case 3557:
case 601:
case 386:
case 2889:
case 1576:
case 256:
case 3589:
case 1223:
case 2391:
case 2722:
case 2279:
case 1735:
case 1740:
case 2582:
case 2857:
case 905:
case 631:
case 2522:
case 3955:
case 808:
case 1104:
case 1690:
case 53:
case 125:
case 832:
case 1117:
case 1937:
case 1201:
case 1808:
case 50:
case 1407:
case 3348:
case 2311:
case 958:
case 639:
case 3956:
case 972:
case 4008:
case 3327:
case 765:
case 978:
case 2011:
case 2352:
case 1290:
case 2953:
case 3064:
case 1534:
case 3027:
case 350:
case 2249:
case 2097:
case 3819:
case 1770:
case 1694:
case 3751:
case 1216:
case 3242:
case 1570:
case 3512:
case 1546:
case 3432:
case 2397:
case 2305:
case 2258:
case 1746:
case 1215:
case 3902:
case 4043:
case 3472:
case 2006:
case 3360:
case 2479:
case 555:
case 2909:
case 1745:
case 2649:
case 1294:
case 2306:
case 3060:
case 1545:
case 1530:
case 1616:
case 97:
case 1971:
case 2799:
case 685:
case 745:
case 3950:
case 3321:
case 1928:
case 429:
case 1988:
case 3081:
case 1296:
case 2892:
case 3378:
case 1614:
case 399:
case 1152:
case 1696:
case 1214:
case 3338:
case 508:
case 1544:
case 502:
case 1295:
case 83:
case 1744:
case 3038:
case 2186:
case 143:
case 3110:
case 3945:
case 3930:
case 743:
case 3206:
case 751:
case 1502:
case 3697:
case 3123:
case 78:
case 1172:
case 64:
case 124:
case 2203:
case 2260:
case 3049:
case 628:
case 3205:
case 1132:
case 1912:
case 3946:
case 1020:
case 2466:
case 2042:
case 2660:
case 2185:
case 869:
case 2603:
case 1951:
case 1380:
case 190:
case 3400:
case 3463:
case 3970:
case 2342:
case 1013:
case 549:
case 4009:
case 3606:
case 3944:
case 2464:
case 2487:
case 2427:
case 3731:
case 1361:
case 3452:
case 159:
case 510:
case 2238:
case 759:
case 2831:
case 3190:
case 557:
case 3604:
case 179:
case 3747:
case 3528:
case 934:
case 3788:
case 2278:
case 553:
case 1093:
case 3571:
case 1750:
case 904:
case 861:
case 2828:
case 1393:
case 1550:
case 3291:
case 4062:
case 1989:
case 1026:
case 144:
case 2973:
case 402:
case 684:
case 2666:
case 62:
case 2265:
case 1957:
case 1386:
case 1326:
case 2798:
case 569:
case 3079:
case 438:
case 616:
case 767:
case 163:
case 2665:
case 529:
case 3936:
case 763:
case 3263:
case 1085:
case 182:
case 3975:
case 2332:
case 1754:
case 1325:
case 2933:
case 782:
case 1385:
case 3339:
case 3741:
case 2161:
case 3252:
case 3541:
case 2518:
case 2877:
case 561:
case 1853:
case 3107:
case 455:
case 2841:
case 2248:
case 3818:
case 3577:
case 2227:
case 853:
case 475:
case 1556:
case 2264:
case 3417:
case 877:
case 1084:
case 3537:
case 3611:
case 1024:
case 857:
case 2627:
case 574:
case 4053:
case 2664:
case 3737:
case 2193:
case 1555:
case 1384:
case 1367:
case 3404:
case 1755:
case 3974:
case 2659:
case 521:
case 546:
case 3181:
case 2808:
case 225:
case 2937:
case 2574:
case 3178:
case 2496:
case 866:
case 3508:
case 2690:
case 2104:
case 3224:
case 3708:
case 3138:
case 2941:
case 2414:
case 2290:
case 1953:
case 512:
case 1352:
case 3624:
case 1052:
case 2977:
case 1311:
case 2536:
case 198:
case 3875:
case 1363:
case 192:
case 1300:
case 4089:
case 337:
case 3686:
case 4029:
case 2833:
case 3225:
case 1239:
case 1679:
case 2775:
case 1000:
case 1063:
case 2105:
case 307:
case 2197:
case 2623:
case 2575:
case 4057:
case 3160:
case 660:
case 2735:
case 3103:
case 1857:
case 303:
case 1722:
case 2415:
case 776:
case 3773:
case 2540:
case 2535:
case 156:
case 2223:
case 3835:
case 3998:
case 333:
case 3226:
case 2947:
case 2614:
case 1304:
case 1892:
case 3467:
case 1017:
case 526:
case 2695:
case 245:
case 2401:
case 1317:
case 3127:
case 566:
case 2744:
case 3693:
case 2295:
case 2207:
case 2931:
case 2111:
case 2544:
case 3148:
case 846:
case 2214:
case 3159:
case 4:
case 2696:
case 3261:
case 180:
case 2843:
case 640:
case 3166:
case 3425:
case 1258:
case 1397:
case 1719:
case 780:
case 2546:
case 3846:
case 1812:
case 2216:
case 2694:
case 2100:
case 3280:
case 1005:
case 3543:
case 2616:
case 79:
case 2530:
case 2545:
case 2294:
case 1306:
case 3426:
case 2730:
case 2745:
case 430:
case 19:
case 3613:
case 693:
case 1658:
case 2191:
case 400:
case 2215:
case 3845:
case 1678:
case 2361:
case 1681:
case 1427:
case 950:
case 4047:
case 917:
case 3014:
case 3307:
case 2393:
case 830:
case 2550:
case 1281:
case 3096:
case 3999:
case 913:
case 1828:
case 991:
case 2750:
case 1847:
case 800:
case 1871:
case 1124:
case 4031:
case 1260:
case 3179:
case 3509:
case 2702:
case 3315:
case 2172:
case 2502:
case 37:
case 418:
case 3802:
case 3394:
case 412:
case 243:
case 1126:
case 1186:
case 2013:
case 290:
case 247:
case 1943:
case 3919:
case 999:
case 1185:
case 1603:
case 1466:
case 2313:
case 1042:
case 3016:
case 1125:
case 446:
case 2020:
case 2132:
case 2912:
case 8:
case 1287:
case 3090:
case 2756:
case 1841:
case 3390:
case 1259:
case 530:
case 3753:
case 1718:
case 1161:
case 1908:
case 1659:
case 2755:
case 1837:
case 305:
case 3001:
case 1627:
case 1648:
case 335:
case 3301:
case 1598:
case 1798:
case 223:
case 3083:
case 1265:
case 1460:
case 3010:
case 244:
case 1973:
case 3323:
case 2086:
case 2929:
case 2862:
case 2554:
case 1266:
case 3158:
case 2754:
case 3869:
case 288:
case 1332:
case 426:
case 282:
case 2085:
case 352:
case 3762:
case 2025:
case 2569:
case 1120:
case 372:
case 3562:
case 3854:
case 2769:
case 378:
case 559:
case 1269:
case 177:
case 710:
case 3170:
case 2698:
case 757:
case 3866:
case 2143:
case 3700:
case 3763:
case 777:
case 2566:
case 2766:
case 3791:
case 65:
case 1654:
case 3983:
case 3591:
case 985:
case 2389:
case 336:
case 3923:
case 3130:
case 1073:
case 2765:
case 3910:
case 173:
case 741:
case 3022:
case 2891:
case 2565:
case 153:
case 2089:
case 2926:
case 773:
case 827:
case 1656:
case 3471:
case 3901:
case 3237:
case 3677:
case 58:
case 543:
case 3641:
case 888:
case 1308:
case 3447:
case 2984:
case 571:
case 2924:
case 2559:
case 547:
case 2811:
case 3990:
case 749:
case 2759:
case 689:
case 1655:
case 3887:
case 149:
case 3552:
case 3827:
case 2748:
case 2564:
case 1256:
case 3711:
case 564:
case 425:
case 3431:
case 3859:
case 3637:
case 3144:
case 3797:
case 678:
case 2133:
case 1454:
case 2051:
case 3597:
case 3505:
case 3175:
case 2312:
case 652:
case 3136:
case 3916:
case 1942:
case 1469:
case 761:
case 2897:
case 3019:
case 2805:
case 2351:
case 2980:
case 2012:
case 1343:
case 3176:
case 3506:
case 721:
case 696:
case 3803:
case 121:
case 3706:
case 774:
case 2806:
case 3140:
case 879:
case 2817:
case 2578:
case 3247:
case 3099:
case 3174:
case 635:
case 2092:
case 3704:
case 1455:
case 169:
case 864:
case 2521:
case 3399:
case 3717:
case 2993:
case 890:
case 3437:
case 2721:
case 2804:
case 3271:
case 544:
case 588:
case 1650:
case 582:
case 843:
case 871:
case 3477:
case 3671:
case 3231:
case 445:
case 3134:
case 3647:
case 729:
case 3441:
case 563:
case 2961:
case 88:
case 3688:
case 2738:
case 824:
case 2422:
case 1715:
case 464:
case 1309:
case 3429:
case 1646:
case 4080:
case 3612:
case 1515:
case 4020:
case 1435:
case 4013:
case 1594:
case 603:
case 1230:
case 1009:
case 73:
case 360:
case 13:
case 490:
case 447:
case 3169:
case 845:
case 218:
case 1270:
case 451:
case 1716:
case 3858:
case 2162:
case 3742:
case 1880:
case 565:
case 3212:
case 1246:
case 1905:
case 1514:
case 1141:
case 2031:
case 1714:
case 3156:
case 2699:
case 948:
case 1177:
case 1507:
case 92:
case 2047:
case 984:
case 1137:
case 2028:
case 2371:
case 2088:
case 1596:
case 916:
case 1474:
case 2328:
case 3155:
case 1430:
case 1445:
case 3398:
case 1510:
case 1276:
case 634:
case 463:
case 3879:
case 3257:
case 311:
case 393:
case 2579:
case 545:
case 2282:
case 3772:
case 1886:
case 1523:
case 226:
case 2779:
case 1240:
case 482:
case 604:
case 3572:
case 1583:
case 1991:
case 3732:
case 2682:
case 2539:
case 444:
case 108:
case 3532:
case 1275:
case 708:
case 702:
case 4026:
case 1062:
case 3629:
case 825:
case 132:
case 1963:
case 1900:
case 1470:
case 1676:
case 1236:
case 738:
case 1825:
case 423:
case 1885:
case 1053:
case 3018:
case 4084:
case 1911:
case 2377:
case 1131:
case 4024:
case 1353:
case 1674:
case 1790:
case 987:
case 1274:
case 1147:
case 1188:
case 2499:
case 3150:
case 94:
case 755:
case 1701:
case 1824:
case 1171:
case 962:
case 2337:
case 775:
case 968:
case 2308:
case 3653:
case 3374:
case 4052:
case 2450:
case 911:
case 1764:
case 2256:
case 1748:
case 997:
case 1759:
case 3253:
case 1811:
case 3334:
case 1766:
case 2112:
case 2932:
case 1863:
case 2254:
case 2333:
case 3036:
case 3075:
case 2151:
case 257:
case 322:
case 2033:
case 3336:
case 277:
case 241:
case 3035:
case 1089:
case 34:
case 1565:
case 1891:
case 1298:
case 492:
case 2669:
case 1765:
case 2972:
case 3340:
case 383:
case 2654:
case 3076:
case 4063:
case 1392:
case 1804:
case 960:
case 1993:
case 7:
case 1108:
case 4017:
case 1738:
case 3453:
case 3344:
case 3368:
case 920:
case 4004:
case 1920:
case 130:
case 2343:
case 3949:
case 261:
case 1805:
case 2469:
case 2942:
case 3370:
case 342:
case 100:
case 2043:
case 1312:
case 2602:
case 1051:
case 4006:
case 700:
case 1133:
case 3609:
case 316:
case 1806:
case 480:
case 254:
case 3122:
case 3209:
case 3030:
case 1173:
case 4005:
case 2157:
case 221:
case 3330:
case 2507:
case 309:
case 3814:
case 2795:
case 2707:
case 1699:
case 592:
case 3561:
case 339:
case 3118:
case 2514:
case 3895:
case 1153:
case 880:
case 1328:
case 1347:
case 3978:
case 3050:
case 2596:
case 2904:
case 1088:
case 3896:
case 2137:
case 2644:
case 556:
case 1047:
case 3921:
case 3593:
case 3350:
case 2668:
case 3981:
case 2794:
case 2230:
case 2245:
case 2670:
case 3198:
case 2594:
case 2435:
case 146:
case 20:
case 2515:
case 1482:
case 1619:
case 746:
case 4042:
case 2475:
case 1842:
case 1758:
case 3816:
case 2716:
case 1549:
case 712:
case 2270:
case 2645:
case 3780:
case 1749:
case 112:
case 2952:
case 1077:
case 876:
case 2790:
case 2234:
case 3056:
case 2353:
case 3890:
case 2131:
case 3927:
case 2468:
case 3356:
case 3964:
case 699:
case 2053:
case 2501:
case 898:
case 2701:
case 2824:
case 2867:
case 1499:
case 2884:
case 3584:
case 2188:
case 3767:
case 2274:
case 2147:
case 59:
case 936:
case 2583:
case 3810:
case 2523:
case 1109:
case 2826:
case 2783:
case 613:
case 3633:
case 3273:
case 1282:
case 2886:
case 2723:
case 3965:
case 2710:
case 3526:
case 2636:
case 2276:
case 1872:
case 2510:
case 3823:
case 3726:
case 2362:
case 2885:
case 4072:
case 2825:
case 238:
case 2676:
case 2062:
case 3725:
case 2275:
case 2635:
case 2640:
case 766:
case 1419:
case 3069:
case 3354:
case 1539:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744794001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,];
var gg_b = "1744794001/";

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
