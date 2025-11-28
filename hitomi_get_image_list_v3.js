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
case 2986:
case 2601:
case 729:
case 3877:
case 226:
case 822:
case 2073:
case 3263:
case 3138:
case 3781:
case 3220:
case 1139:
case 471:
case 263:
case 2521:
case 3633:
case 3430:
case 447:
case 3197:
case 2347:
case 1702:
case 2803:
case 3885:
case 2289:
case 3162:
case 1916:
case 125:
case 748:
case 1141:
case 3713:
case 2567:
case 1194:
case 1523:
case 1726:
case 1098:
case 3768:
case 247:
case 3516:
case 492:
case 561:
case 3393:
case 690:
case 3251:
case 2964:
case 516:
case 3165:
case 1400:
case 947:
case 3882:
case 2242:
case 653:
case 2648:
case 4073:
case 971:
case 426:
case 1176:
case 1071:
case 183:
case 2759:
case 178:
case 1718:
case 3479:
case 1425:
case 3528:
case 851:
case 706:
case 557:
case 1763:
case 1529:
case 2897:
case 209:
case 2862:
case 3103:
case 4047:
case 3510:
case 1890:
case 2211:
case 4079:
case 21:
case 2655:
case 3984:
case 1491:
case 3202:
case 1406:
case 2036:
case 2556:
case 3694:
case 2788:
case 3447:
case 910:
case 2753:
case 1170:
case 1371:
case 2182:
case 1987:
case 1213:
case 3226:
case 3641:
case 3334:
case 2690:
case 1268:
case 2980:
case 641:
case 1422:
case 984:
case 3572:
case 1697:
case 1751:
case 2514:
case 3307:
case 409:
case 1232:
case 3639:
case 1928:
case 1112:
case 520:
case 2809:
case 1975:
case 3843:
case 2283:
case 328:
case 669:
case 2428:
case 2475:
case 2668:
case 1188:
case 2770:
case 424:
case 1084:
case 1731:
case 3189:
case 3145:
case 698:
case 2410:
case 3072:
case 2395:
case 2014:
case 3802:
case 2922:
case 1683:
case 734:
case 2944:
case 2118:
case 459:
case 3456:
case 3748:
case 2632:
case 2238:
case 2547:
case 170:
case 1749:
case 1785:
case 3796:
case 1868:
case 1360:
case 1066:
case 1029:
case 756:
case 894:
case 3075:
case 3869:
case 259:
case 74:
case 1813:
case 1323:
case 2472:
case 2991:
case 3316:
case 924:
case 3940:
case 3414:
case 1832:
case 1782:
case 2858:
case 388:
case 580:
case 2209:
case 2151:
case 2883:
case 3805:
case 2733:
case 633:
case 2978:
case 2067:
case 1907:
case 4021:
case 286:
case 3495:
case 3016:
case 1598:
case 32:
case 3790:
case 1060:
case 2900:
case 537:
case 1329:
case 3231:
case 3375:
case 831:
case 3387:
case 2050:
case 717:
case 2356:
case 2530:
case 1934:
case 1464:
case 1571:
case 4095:
case 603:
case 3752:
case 1248:
case 320:
case 1624:
case 2203:
case 3285:
case 2845:
case 528:
case 2889:
case 3249:
case 2573:
case 1384:
case 3372:
case 2416:
case 3183:
case 3851:
case 2105:
case 3627:
case 2619:
case 218:
case 3971:
case 3492:
case 3653:
case 3450:
case 2021:
case 265:
case 3688:
case 2842:
case 3282:
case 1645:
case 2314:
case 704:
case 1743:
case 845:
case 575:
case 3998:
case 1546:
case 3755:
case 4092:
case 123:
case 2293:
case 54:
case 2351:
case 1773:
case 3939:
case 3469:
case 87:
case 3666:
case 4005:
case 2952:
case 1628:
case 1675:
case 621:
case 2617:
case 1123:
case 3814:
case 1594:
case 3011:
case 3116:
case 3700:
case 3941:
case 1508:
case 1361:
case 2483:
case 3236:
case 2192:
case 1997:
case 780:
case 3342:
case 2121:
case 2320:
case 1278:
case 3908:
case 194:
case 1817:
case 2069:
case 2875:
case 1909:
case 1225:
case 676:
case 1327:
case 714:
case 1541:
case 2810:
case 908:
case 1291:
case 3402:
case 1880:
case 3345:
case 2411:
case 2005:
case 3856:
case 1965:
case 3083:
case 2887:
case 3247:
case 208:
case 3058:
case 2737:
case 1539:
case 1059:
case 179:
case 2018:
case 2948:
case 938:
case 2816:
case 2326:
case 2234:
case 450:
case 652:
case 1512:
case 3744:
case 3850:
case 446:
case 493:
case 3358:
case 927:
case 1359:
case 1088:
case 4051:
case 462:
case 885:
case 1053:
case 3089:
case 2664:
case 3915:
case 2207:
case 438:
case 3463:
case 3933:
case 25:
case 1419:
case 293:
case 3778:
case 3725:
case 572:
case 1779:
case 262:
case 2051:
case 3420:
case 737:
case 1570:
case 1616:
case 3657:
case 3791:
case 3128:
case 1061:
case 427:
case 3912:
case 1864:
case 1129:
case 95:
case 3503:
case 728:
case 1747:
case 2996:
case 3311:
case 3110:
case 2489:
case 3988:
case 295:
case 4082:
case 3604:
case 3873:
case 3267:
case 287:
case 1015:
case 2077:
case 1496:
case 2031:
case 900:
case 3698:
case 1561:
case 7:
case 987:
case 3482:
case 3193:
case 1714:
case 3542:
case 334:
case 219:
case 2343:
case 716:
case 2919:
case 143:
case 1394:
case 3003:
case 2049:
case 3717:
case 34:
case 2729:
case 1527:
case 3362:
case 356:
case 3477:
case 1341:
case 1634:
case 2766:
case 2518:
case 4049:
case 2254:
case 3431:
case 400:
case 3961:
case 3397:
case 1012:
case 2147:
case 3338:
case 2082:
case 1264:
case 3830:
case 4077:
case 3646:
case 3780:
case 2403:
case 2600:
case 773:
case 883:
case 1033:
case 3449:
case 340:
case 788:
case 3545:
case 878:
case 3589:
case 2935:
case 2465:
case 430:
case 3097:
case 2723:
case 151:
case 389:
case 2569:
case 372:
case 1844:
case 1792:
case 1822:
case 2272:
case 4043:
case 2678:
case 958:
case 1146:
case 2760:
case 1333:
case 864:
case 1750:
case 258:
case 3558:
case 3836:
case 3583:
case 1039:
case 3134:
case 3640:
case 1559:
case 2757:
case 244:
case 1217:
case 1983:
case 3879:
case 1878:
case 2228:
case 1171:
case 2497:
case 1370:
case 2462:
case 2932:
case 458:
case 444:
case 1315:
case 1693:
case 1490:
case 2377:
case 1094:
case 2502:
case 1452:
case 3303:
case 699:
case 3764:
case 1198:
case 1891:
case 3511:
case 1806:
case 1008:
case 2968:
case 2438:
case 2913:
case 2043:
case 1894:
case 3514:
case 2307:
case 1724:
case 1196:
case 1006:
case 2966:
case 2436:
case 1101:
case 1300:
case 1259:
case 937:
case 1808:
case 3652:
case 2929:
case 750:
case 2843:
case 3917:
case 1174:
case 3079:
case 586:
case 3182:
case 1078:
case 746:
case 793:
case 2226:
case 113:
case 3980:
case 2572:
case 869:
case 31:
case 3211:
case 2608:
case 2202:
case 449:
case 1440:
case 738:
case 1643:
case 2984:
case 2587:
case 2694:
case 1789:
case 1745:
case 1839:
case 2447:
case 275:
case 2479:
case 176:
case 3149:
case 3185:
case 1022:
case 310:
case 1148:
case 2510:
case 0:
case 3242:
case 3224:
case 407:
case 3648:
case 2732:
case 855:
case 3407:
case 1758:
case 4034:
case 1446:
case 1344:
case 1631:
case 371:
case 631:
case 1322:
case 152:
case 2768:
case 2516:
case 2670:
case 2473:
case 4007:
case 16:
case 1155:
case 3143:
case 3434:
case 3592:
case 1812:
case 1677:
case 2393:
case 2633:
case 3521:
case 907:
case 363:
case 645:
case 1992:
case 2197:
case 98:
case 1471:
case 1437:
case 2885:
case 3245:
case 3803:
case 414:
case 1253:
case 1391:
case 3601:
case 3986:
case 28:
case 2263:
case 207:
case 1815:
case 1227:
case 326:
case 2877:
case 3379:
case 1950:
case 2831:
case 2138:
case 1378:
case 1404:
case 2220:
case 2034:
case 1168:
case 957:
case 2688:
case 365:
case 2450:
case 2653:
case 1500:
case 3126:
case 3169:
case 4016:
case 3824:
case 643:
case 2282:
case 3794:
case 1457:
case 174:
case 2507:
case 3708:
case 2998:
case 1233:
case 1423:
case 1620:
case 2467:
case 2937:
case 2372:
case 509:
case 3416:
case 1765:
case 3619:
case 2158:
case 2627:
case 1460:
case 2851:
case 1212:
case 1618:
case 2971:
case 2534:
case 73:
case 3050:
case 3530:
case 2387:
case 457:
case 1380:
case 853:
case 3739:
case 805:
case 1853:
case 758:
case 3203:
case 2249:
case 584:
case 1973:
case 220:
case 4054:
case 3067:
case 1215:
case 2599:
case 3102:
case 386:
case 1797:
case 2818:
case 2310:
case 2016:
case 3741:
case 920:
case 2790:
case 1762:
case 3454:
case 2375:
case 2231:
case 3092:
case 2414:
case 835:
case 1294:
case 3536:
case 3056:
case 2805:
case 592:
case 3151:
case 288:
case 461:
case 3978:
case 4072:
case 2826:
case 3681:
case 416:
case 3906:
case 2796:
case 2028:
case 1947:
case 2593:
case 2124:
case 3392:
case 2075:
case 3367:
case 973:
case 3712:
case 1484:
case 2940:
case 2316:
case 3163:
case 2802:
case 719:
case 3922:
case 2:
case 4075:
case 2659:
case 3632:
case 3120:
case 1239:
case 1506:
case 3321:
case 199:
case 700:
case 3547:
case 571:
case 3579:
case 3297:
case 877:
case 787:
case 1936:
case 1466:
case 2354:
case 547:
case 916:
case 1241:
case 3395:
case 3410:
case 3262:
case 1669:
case 3901:
case 1271:
case 2128:
case 2657:
case 2042:
case 2175:
case 1117:
case 350:
case 3302:
case 784:
case 3549:
case 3489:
case 2110:
case 1427:
case 1180:
case 2933:
case 2463:
case 1692:
case 3577:
case 3299:
case 3051:
case 3974:
case 1204:
case 2420:
case 3531:
case 1982:
case 362:
case 4089:
case 678:
case 2850:
case 1461:
case 530:
case 1574:
case 2970:
case 3424:
case 683:
case 71:
case 19:
case 1246:
case 153:
case 1332:
case 1857:
case 105:
case 3207:
case 2172:
case 2045:
case 2089:
case 1949:
case 3063:
case 1985:
case 2867:
case 709:
case 1019:
case 206:
case 3948:
case 4024:
case 3816:
case 1596:
case 3018:
case 3326:
case 2451:
case 3234:
case 3020:
case 1501:
case 710:
case 2892:
case 3369:
case 1313:
case 1695:
case 1240:
case 1032:
case 135:
case 1552:
case 3411:
case 3195:
case 2389:
case 664:
case 2083:
case 3737:
case 2908:
case 3026:
case 2279:
case 587:
case 1164:
case 3875:
case 3069:
case 832:
case 448:
case 3704:
case 236:
case 1590:
case 3318:
case 3002:
case 3167:
case 112:
case 1656:
case 868:
case 763:
case 2941:
case 3990:
case 3746:
case 2405:
case 1035:
case 3483:
case 248:
case 3458:
case 3192:
case 2236:
case 3543:
case 2565:
case 2426:
case 229:
case 177:
case 2939:
case 4083:
case 2666:
case 3617:
case 2629:
case 3385:
case 2303:
case 2764:
case 2199:
case 2511:
case 1348:
case 472:
case 765:
case 3438:
case 3968:
case 1055:
case 1535:
case 1926:
case 291:
case 2256:
case 821:
case 1229:
case 2879:
case 1905:
case 527:
case 2065:
case 3275:
case 3644:
case 3497:
case 2959:
case 1266:
case 3228:
case 67:
case 991:
case 33:
case 813:
case 4038:
case 3932:
case 3377:
case 169:
case 1441:
case 133:
case 1532:
case 4065:
case 989:
case 3606:
case 2214:
case 217:
case 1647:
case 2038:
case 358:
case 3382:
case 3691:
case 2134:
case 2443:
case 3465:
case 3935:
case 593:
case 1301:
case 1568:
case 55:
case 1513:
case 786:
case 289:
case 3723:
case 1902:
case 562:
case 1679:
case 491:
case 2830:
case 1951:
case 3082:
case 956:
case 685:
case 2780:
case 1871:
case 103:
case 155:
case 1837:
case 1352:
case 2485:
case 2545:
case 2589:
case 1787:
case 759:
case 256:
case 3729:
case 24:
case 3563:
case 2717:
case 434:
case 1390:
case 1415:
case 1096:
case 1191:
case 3254:
case 2431:
case 1106:
case 86:
case 4003:
case 940:
case 1804:
case 2637:
case 1355:
case 456:
case 319:
case 2309:
case 2250:
case 3343:
case 2193:
case 234:
case 2542:
case 611:
case 2003:
case 3085:
case 1144:
case 2927:
case 300:
case 1122:
case 3807:
case 1257:
case 1846:
case 2953:
case 30:
case 2267:
case 3077:
case 2873:
case 1772:
case 2365:
case 2292:
case 3784:
case 3834:
case 1412:
case 642:
case 1343:
case 3920:
case 2474:
case 863:
case 535:
case 922:
case 2308:
case 467:
case 3918:
case 2286:
case 3846:
case 100:
case 1807:
case 3630:
case 1085:
case 3433:
case 3144:
case 892:
case 3223:
case 826:
case 2945:
case 195:
case 996:
case 715:
case 1834:
case 3412:
case 1551:
case 1031:
case 2401:
case 2699:
case 4033:
case 2339:
case 4015:
case 422:
case 3871:
case 3178:
case 2607:
case 620:
case 3125:
case 512:
case 3074:
case 4070:
case 3787:
case 1600:
case 1403:
case 2553:
case 355:
case 3837:
case 3096:
case 3191:
case 1766:
case 2341:
case 2140:
case 3898:
case 1518:
case 1729:
case 577:
case 871:
case 1899:
case 2924:
case 2012:
case 3673:
case 3804:
case 732:
case 1147:
case 267:
case 3001:
case 62:
case 3647:
case 688:
case 1173:
case 2333:
case 1981:
case 951:
case 81:
case 3494:
case 333:
case 673:
case 1409:
case 2039:
case 2559:
case 144:
case 1757:
case 158:
case 3374:
case 1505:
case 3476:
case 1569:
case 702:
case 1723:
case 1465:
case 4094:
case 3301:
case 1678:
case 3396:
case 2146:
case 1760:
case 2792:
case 2844:
case 1625:
case 4008:
case 2198:
case 130:
case 2094:
case 2452:
case 1385:
case 1349:
case 3636:
case 3439:
case 2104:
case 3969:
case 1043:
case 505:
case 1438:
case 1968:
case 6:
case 59:
case 1497:
case 2171:
case 3266:
case 3229:
case 1130:
case 2825:
case 1275:
case 590:
case 1644:
case 2958:
case 2795:
case 369:
case 3441:
case 2490:
case 2315:
case 1377:
case 4039:
case 2137:
case 3581:
case 13:
case 494:
case 3656:
case 2962:
case 2594:
case 2432:
case 2687:
case 628:
case 2997:
case 2508:
case 3555:
case 2361:
case 2160:
case 1680:
case 3035:
case 2576:
case 2413:
case 637:
case 2468:
case 377:
case 1293:
case 1351:
case 2773:
case 2222:
case 4059:
case 2244:
case 3884:
case 2675:
case 1617:
case 3081:
case 649:
case 2730:
case 760:
case 1195:
case 994:
case 2291:
case 675:
case 335:
case 2388:
case 3552:
case 3240:
case 2880:
case 1771:
case 2353:
case 2206:
case 2435:
case 824:
case 2965:
case 1005:
case 3614:
case 108:
case 3013:
case 3943:
case 2817:
case 3164:
case 2909:
case 752:
case 1069:
case 1798:
case 1121:
case 1320:
case 1828:
case 3068:
case 1318:
case 3590:
case 76:
case 2481:
case 2359:
case 2200:
case 3574:
case 1305:
case 2184:
case 1664:
case 2736:
case 3977:
case 3857:
case 3332:
case 305:
case 39:
case 2533:
case 2053:
case 931:
case 2886:
case 1018:
case 1948:
case 1816:
case 4061:
case 3019:
case 2027:
case 3949:
case 279:
case 776:
case 3985:
case 2903:
case 569:
case 3313:
case 231:
case 2512:
case 2864:
case 680:
case 1686:
case 1901:
case 533:
case 4027:
case 3335:
case 482:
case 3271:
case 3548:
case 3237:
case 1549:
case 3650:
case 150:
case 1302:
case 3488:
case 2747:
case 2515:
case 721:
case 1299:
case 2419:
case 713:
case 1854:
case 945:
case 3667:
case 162:
case 1051:
case 4088:
case 1156:
case 1118:
case 1811:
case 1014:
case 4066:
case 368:
case 2658:
case 1922:
case 691:
case 1163:
case 1944:
case 1547:
case 1238:
case 2993:
case 399:
case 3703:
case 3239:
case 1487:
case 3578:
case 2417:
case 1475:
case 1579:
case 1297:
case 552:
case 1428:
case 1715:
case 2731:
case 2084:
case 1395:
case 1613:
case 56:
case 2188:
case 970:
case 1770:
case 3241:
case 2153:
case 47:
case 1635:
case 3386:
case 2357:
case 2255:
case 703:
case 3208:
case 1978:
case 124:
case 1858:
case 617:
case 1925:
case 1350:
case 808:
case 159:
case 1392:
case 381:
case 2813:
case 3947:
case 2360:
case 3276:
case 2066:
case 2161:
case 3484:
case 3544:
case 1712:
case 689:
case 1367:
case 332:
case 2464:
case 2571:
case 640:
case 442:
case 838:
case 1356:
case 2642:
case 297:
case 2624:
case 1889:
case 3086:
case 2537:
case 3888:
case 2598:
case 827:
case 3797:
case 1067:
case 521:
case 3827:
case 186:
case 2819:
case 2504:
case 423:
case 3762:
case 985:
case 656:
case 3135:
case 1900:
case 3270:
case 1741:
case 2366:
case 3113:
case 1169:
case 1824:
case 3861:
case 3500:
case 1126:
case 3168:
case 165:
case 2546:
case 1708:
case 3457:
case 374:
case 1314:
case 2743:
case 3709:
case 2384:
case 576:
case 1573:
case 798:
case 3765:
case 1416:
case 242:
case 85:
case 3132:
case 2296:
case 911:
case 3620:
case 2159:
case 497:
case 1105:
case 3663:
case 3930:
case 4057:
case 266:
case 769:
case 1347:
case 2702:
case 163:
case 1521:
case 2916:
case 3190:
case 2848:
case 3253:
case 2141:
case 1803:
case 3682:
case 1595:
case 3815:
case 581:
case 126:
case 2219:
case 887:
case 1073:
case 777:
case 1986:
case 80:
case 3404:
case 2139:
case 1696:
case 1379:
case 4037:
case 1648:
case 3261:
case 2071:
case 2954:
case 2176:
case 568:
case 1336:
case 2400:
case 2874:
case 360:
case 2705:
case 278:
case 599:
case 3995:
case 2557:
case 1407:
case 2037:
case 3586:
case 2896:
case 1567:
case 3322:
case 2194:
case 3344:
case 3631:
case 171:
case 4046:
case 3677:
case 606:
case 425:
case 139:
case 1964:
case 1592:
case 3155:
case 978:
case 3440:
case 3643:
case 2491:
case 2972:
case 2115:
case 1211:
case 2337:
case 2852:
case 79:
case 3839:
case 1753:
case 705:
case 844:
case 858:
case 376:
case 636:
case 1897:
case 2718:
case 3841:
case 3148:
case 2890:
case 3022:
case 1862:
case 1149:
case 2665:
case 3091:
case 3196:
case 648:
case 2910:
case 1761:
case 3742:
case 3894:
case 2975:
case 2112:
case 1917:
case 1047:
case 1258:
case 1652:
case 3006:
case 3101:
case 3300:
case 3876:
case 464:
case 2268:
case 2662:
case 1865:
case 3956:
case 1079:
case 3025:
case 321:
case 2584:
case 2751:
case 2697:
case 2444:
case 1980:
case 83:
case 3076:
case 742:
case 298:
case 3795:
case 582:
case 4052:
case 1879:
case 2905:
case 2229:
case 433:
case 3315:
case 2441:
case 269:
case 837:
case 2348:
case 1303:
case 3094:
case 1009:
case 191:
case 2969:
case 2439:
case 828:
case 104:
case 3008:
case 2055:
case 3806:
case 2926:
case 723:
case 2535:
case 3767:
case 172:
case 3312:
case 351:
case 2100:
case 2568:
case 3146:
case 3041:
case 2396:
case 3911:
case 3822:
case 1062:
case 4055:
case 2284:
case 2679:
case 3750:
case 1214:
case 624:
case 2532:
case 498:
case 3039:
case 785:
case 875:
case 1443:
case 1640:
case 797:
case 1558:
case 2415:
case 2390:
case 2191:
case 2096:
case 1295:
case 2519:
case 3527:
case 156:
case 2775:
case 1717:
case 14:
case 3942:
case 4048:
case 1397:
case 2673:
case 2804:
case 3012:
case 2106:
case 2178:
case 1646:
case 1221:
case 2074:
case 2951:
case 1338:
case 3756:
case 3448:
case 203:
case 140:
case 2352:
case 2837:
case 3588:
case 3553:
case 1449:
case 1267:
case 322:
case 1604:
case 594:
case 4074:
case 1988:
case 88:
case 77:
case 3376:
case 1698:
case 2412:
case 3699:
case 2772:
case 1365:
case 1524:
case 1193:
case 3714:
case 134:
case 3561:
case 3474:
case 2048:
case 2918:
case 2846:
case 2433:
case 2630:
case 396:
case 4001:
case 2122:
case 2692:
case 857:
case 1725:
case 1418:
case 1778:
case 2298:
case 2180:
case 3616:
case 2204:
case 626:
case 2667:
case 692:
case 1042:
case 2117:
case 1024:
case 4019:
case 1657:
case 663:
case 2548:
case 2488:
case 2596:
case 82:
case 1273:
case 2985:
case 2793:
case 106:
case 3027:
case 290:
case 671:
case 99:
case 3512:
case 331:
case 1744:
case 1892:
case 905:
case 2313:
case 1722:
case 2368:
case 1451:
case 2501:
case 1970:
case 3359:
case 2931:
case 764:
case 2977:
case 1915:
case 1045:
case 820:
case 2621:
case 29:
case 3053:
case 3088:
case 205:
case 522:
case 2943:
case 1279:
case 301:
case 3909:
case 2799:
case 394:
case 3672:
case 610:
case 935:
case 3278:
case 2866:
case 3541:
case 609:
case 4035:
case 136:
case 441:
case 3730:
case 1345:
case 477:
case 2032:
case 2552:
case 61:
case 1976:
case 783:
case 1247:
case 1538:
case 1058:
case 4081:
case 2614:
case 543:
case 1856:
case 778:
case 1083:
case 3413:
case 1426:
case 1565:
case 4032:
case 3773:
case 2884:
case 3244:
case 3222:
case 1666:
case 8:
case 1700:
case 1116:
case 977:
case 2656:
case 816:
case 3123:
case 1236:
case 1509:
case 1324:
case 3997:
case 2459:
case 3361:
case 2555:
case 2035:
case 1405:
case 3508:
case 1372:
case 157:
case 3384:
case 2620:
case 2132:
case 1054:
case 1971:
case 3159:
case 1534:
case 974:
case 366:
case 4086:
case 1158:
case 1183:
case 1851:
case 2460:
case 2212:
case 1904:
case 3274:
case 2113:
case 1282:
case 1688:
case 2168:
case 402:
case 323:
case 2233:
case 1998:
case 3546:
case 3743:
case 2709:
case 274:
case 3999:
case 2457:
case 1507:
case 3598:
case 1111:
case 2215:
case 751:
case 1277:
case 1599:
case 1863:
case 3329:
case 1231:
case 3504:
case 2135:
case 3366:
case 2270:
case 1820:
case 1328:
case 3934:
case 3464:
case 3571:
case 1421:
case 1387:
case 2973:
case 1249:
case 120:
case 2738:
case 3057:
case 3248:
case 2888:
case 385:
case 3537:
case 2853:
case 2086:
case 1142:
case 2947:
case 2017:
case 3360:
case 3161:
case 1028:
case 1796:
case 3868:
case 1940:
case 1010:
case 1316:
case 232:
case 836:
case 1774:
case 2294:
case 658:
case 1414:
case 3357:
case 3832:
case 981:
case 2386:
case 173:
case 3255:
case 415:
case 2602:
case 3417:
case 2429:
case 1354:
case 37:
case 63:
case 2578:
case 3777:
case 4080:
case 829:
case 2466:
case 2936:
case 2525:
case 722:
case 3084:
case 3731:
case 161:
case 3153:
case 3881:
case 2626:
case 2605:
case 3127:
case 1802:
case 578:
case 299:
case 2364:
case 3785:
case 743:
case 370:
case 1748:
case 2506:
case 1456:
case 432:
case 2876:
case 1641:
case 149:
case 2174:
case 221:
case 2025:
case 3987:
case 1572:
case 3444:
case 921:
case 1639:
case 476:
case 2091:
case 3910:
case 3638:
case 1307:
case 891:
case 3112:
case 3975:
case 597:
case 1205:
case 1966:
case 2006:
case 585:
case 4022:
case 2300:
case 3928:
case 4091:
case 782:
case 3304:
case 779:
case 1093:
case 1528:
case 1479:
case 1510:
case 2148:
case 3281:
case 3720:
case 2044:
case 3665:
case 731:
case 4006:
case 3491:
case 364:
case 511:
case 2440:
case 3609:
case 4078:
case 1984:
case 2580:
case 4025:
case 1608:
case 3852:
case 3337:
case 3170:
case 3371:
case 1447:
case 1694:
case 3406:
case 57:
case 1768:
case 3896:
case 960:
case 1670:
case 3098:
case 3769:
case 2344:
case 794:
case 4000:
case 701:
case 1713:
case 2322:
case 1099:
case 3194:
case 3004:
case 2812:
case 1109:
case 2677:
case 2921:
case 2155:
case 2261:
case 3176:
case 3954:
case 3071:
case 952:
case 1732:
case 260:
case 1882:
case 2649:
case 3874:
case 2758:
case 2995:
case 96:
case 2783:
case 2833:
case 840:
case 2586:
case 383:
case 1612:
case 1263:
case 662:
case 1877:
case 2227:
case 2152:
case 460:
case 1218:
case 18:
case 2378:
case 693:
case 646:
case 1554:
case 65:
case 2404:
case 1220:
case 1831:
case 2950:
case 2992:
case 834:
case 2306:
case 2000:
case 1633:
case 452:
case 1735:
case 2253:
case 3046:
case 2391:
case 3916:
case 325:
case 2190:
case 2682:
case 180:
case 2967:
case 1885:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1764327601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,];
var gg_b = "1764327601/";

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
