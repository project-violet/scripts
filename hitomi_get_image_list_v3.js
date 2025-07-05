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
case 2207:
case 1674:
case 459:
case 2261:
case 1779:
case 3235:
case 1936:
case 760:
case 419:
case 3444:
case 3823:
case 1670:
case 3814:
case 2205:
case 1783:
case 3071:
case 1469:
case 2896:
case 1855:
case 773:
case 1608:
case 3810:
case 3965:
case 1266:
case 2912:
case 2403:
case 3452:
case 256:
case 2158:
case 169:
case 3816:
case 2894:
case 3405:
case 703:
case 3992:
case 3203:
case 2558:
case 2890:
case 3899:
case 2435:
case 48:
case 2825:
case 1943:
case 1934:
case 2240:
case 1038:
case 1676:
case 2606:
case 3000:
case 3515:
case 2009:
case 482:
case 1284:
case 663:
case 2311:
case 1554:
case 724:
case 1063:
case 3908:
case 1280:
case 3706:
case 2647:
case 1154:
case 2983:
case 3115:
case 3593:
case 1521:
case 4059:
case 2526:
case 3302:
case 3636:
case 3039:
case 2872:
case 1316:
case 1601:
case 2043:
case 789:
case 1667:
case 2645:
case 2524:
case 959:
case 420:
case 3987:
case 71:
case 2151:
case 3976:
case 3739:
case 1275:
case 2730:
case 2551:
case 75:
case 3529:
case 600:
case 514:
case 2743:
case 2124:
case 3355:
case 919:
case 3630:
case 1323:
case 2709:
case 399:
case 571:
case 3391:
case 3700:
case 3047:
case 1556:
case 697:
case 2595:
case 3468:
case 258:
case 1012:
case 180:
case 218:
case 1763:
case 3609:
case 3704:
case 1489:
case 1368:
case 1232:
case 479:
case 1579:
case 3833:
case 3389:
case 2942:
case 1728:
case 1179:
case 1926:
case 3840:
case 2849:
case 111:
case 3852:
case 736:
case 3888:
case 1583:
case 2950:
case 232:
case 753:
case 366:
case 2419:
case 1253:
case 2348:
case 540:
case 4070:
case 1455:
case 2496:
case 2082:
case 3373:
case 2058:
case 2954:
case 276:
case 4076:
case 1402:
case 3571:
case 684:
case 2427:
case 2494:
case 3805:
case 983:
case 1995:
case 3296:
case 198:
case 1951:
case 2223:
case 135:
case 2377:
case 1920:
case 3846:
case 4085:
case 409:
case 1028:
case 104:
case 44:
case 2835:
case 3861:
case 3807:
case 598:
case 1218:
case 3547:
case 208:
case 1659:
case 1512:
case 2095:
case 1307:
case 3106:
case 1361:
case 2693:
case 1112:
case 3506:
case 4067:
case 385:
case 2322:
case 442:
case 483:
case 1131:
case 866:
case 1346:
case 2024:
case 2097:
case 749:
case 1742:
case 2341:
case 909:
case 2136:
case 2726:
case 2472:
case 610:
case 94:
case 2051:
case 2366:
case 2020:
case 3626:
case 4065:
case 2617:
case 535:
case 961:
case 2724:
case 3651:
case 2797:
case 3272:
case 2360:
case 979:
case 827:
case 3017:
case 1873:
case 3539:
case 1388:
case 77:
case 2751:
case 2364:
case 1352:
case 3729:
case 3139:
case 3178:
case 2720:
case 2130:
case 2543:
case 2509:
case 3015:
case 1889:
case 1982:
case 2062:
case 3104:
case 1340:
case 1563:
case 3868:
case 2713:
case 3504:
case 2109:
case 1333:
case 1344:
case 3093:
case 1991:
case 1385:
case 3175:
case 303:
case 1426:
case 2442:
case 3575:
case 625:
case 1957:
case 1387:
case 3698:
case 3186:
case 2421:
case 3910:
case 2919:
case 3459:
case 2798:
case 3586:
case 4081:
case 2990:
case 1902:
case 3184:
case 3221:
case 2589:
case 3892:
case 360:
case 2189:
case 2098:
case 3180:
case 3254:
case 3718:
case 3916:
case 148:
case 2456:
case 3584:
case 1495:
case 2573:
case 1420:
case 4068:
case 1830:
case 475:
case 3148:
case 312:
case 1217:
case 3548:
case 1497:
case 1843:
case 352:
case 2173:
case 691:
case 3242:
case 824:
case 49:
case 1072:
case 1796:
case 1998:
case 1027:
case 1094:
case 146:
case 31:
case 3564:
case 1610:
case 1503:
case 3655:
case 281:
case 3053:
case 2339:
case 2378:
case 492:
case 1719:
case 4033:
case 4044:
case 2428:
case 3870:
case 2838:
case 799:
case 2757:
case 3691:
case 2304:
case 177:
case 1149:
case 3011:
case 1549:
case 4052:
case 3657:
case 2791:
case 1392:
case 3032:
case 2611:
case 2057:
case 2632:
case 324:
case 107:
case 3876:
case 1535:
case 2091:
case 2347:
case 873:
case 3122:
case 3602:
case 1096:
case 2055:
case 860:
case 1727:
case 1794:
case 3336:
case 2653:
case 4061:
case 3566:
case 4007:
case 3753:
case 1616:
case 4046:
case 1537:
case 3541:
case 3885:
case 3382:
case 2675:
case 2949:
case 2842:
case 1436:
case 3944:
case 3775:
case 3467:
case 1572:
case 1862:
case 3080:
case 2686:
case 967:
case 1204:
case 3465:
case 2821:
case 2292:
case 895:
case 3786:
case 431:
case 2412:
case 3118:
case 1895:
case 2463:
case 188:
case 3905:
case 3780:
case 2937:
case 3212:
case 849:
case 1409:
case 1813:
case 3689:
case 1247:
case 2773:
case 455:
case 2935:
case 766:
case 1824:
case 353:
case 1897:
case 428:
case 3673:
case 3748:
case 1245:
case 372:
case 313:
case 1820:
case 1596:
case 2555:
case 493:
case 4023:
case 229:
case 3320:
case 1703:
case 2483:
case 37:
case 1688:
case 1196:
case 2155:
case 3397:
case 1652:
case 1271:
case 588:
case 3041:
case 2191:
case 2287:
case 2276:
case 928:
case 1640:
case 2:
case 3313:
case 3474:
case 338:
case 4014:
case 1644:
case 3981:
case 2157:
case 1035:
case 2479:
case 2591:
case 3470:
case 1359:
case 872:
case 3722:
case 2393:
case 3111:
case 3476:
case 676:
case 1525:
case 3511:
case 2622:
case 3362:
case 785:
case 836:
case 632:
case 853:
case 321:
case 467:
case 1594:
case 3064:
case 2102:
case 3153:
case 2641:
case 2317:
case 565:
case 1882:
case 1737:
case 1194:
case 3326:
case 3283:
case 189:
case 1885:
case 3616:
case 2505:
case 1166:
case 4:
case 3790:
case 390:
case 722:
case 3482:
case 848:
case 3458:
case 2716:
case 3794:
case 3699:
case 1602:
case 2105:
case 3096:
case 2331:
case 3365:
case 46:
case 293:
case 1732:
case 1887:
case 2561:
case 950:
case 503:
case 64:
case 2507:
case 1876:
case 441:
case 124:
case 910:
case 307:
case 2546:
case 609:
case 1032:
case 267:
case 839:
case 2144:
case 2133:
case 2723:
case 1874:
case 512:
case 3549:
case 780:
case 3025:
case 2140:
case 552:
case 3623:
case 2363:
case 679:
case 1870:
case 4069:
case 3614:
case 1560:
case 2710:
case 3719:
case 1330:
case 2099:
case 1164:
case 3090:
case 2696:
case 2714:
case 2619:
case 2552:
case 2016:
case 1564:
case 2588:
case 11:
case 560:
case 3094:
case 1160:
case 3027:
case 1334:
case 1343:
case 2282:
case 1242:
case 3072:
case 2226:
case 771:
case 3497:
case 3424:
case 4089:
case 3834:
case 152:
case 3217:
case 2932:
case 112:
case 173:
case 2839:
case 3420:
case 2429:
case 3830:
case 2568:
case 4073:
case 3495:
case 1916:
case 3215:
case 2379:
case 1254:
case 754:
case 3370:
case 2262:
case 51:
case 1180:
case 714:
case 55:
case 3293:
case 890:
case 1250:
case 3374:
case 3902:
case 1577:
case 2806:
case 9:
case 1586:
case 1018:
case 642:
case 683:
case 2415:
case 1256:
case 228:
case 1459:
case 1910:
case 589:
case 3376:
case 1186:
case 3387:
case 2417:
case 450:
case 877:
case 941:
case 3957:
case 96:
case 1575:
case 524:
case 3991:
case 2251:
case 1923:
case 1801:
case 2845:
case 3194:
case 3737:
case 3127:
case 1060:
case 1283:
case 2342:
case 444:
case 3989:
case 3858:
case 888:
case 723:
case 10:
case 664:
case 2599:
case 3003:
case 1153:
case 2637:
case 963:
case 2516:
case 1064:
case 2088:
case 3190:
case 2052:
case 2199:
case 1485:
case 149:
case 3049:
case 970:
case 3646:
case 1279:
case 3973:
case 2707:
case 1511:
case 1111:
case 1476:
case 2321:
case 1132:
case 292:
case 2033:
case 3359:
case 3607:
case 2350:
case 619:
case 536:
case 317:
case 900:
case 553:
case 3749:
case 2007:
case 2356:
case 357:
case 513:
case 2975:
case 2744:
case 2733:
case 3271:
case 3037:
case 1397:
case 3688:
case 865:
case 2114:
case 386:
case 1320:
case 1066:
case 2514:
case 2752:
case 997:
case 2986:
case 1764:
case 2788:
case 3596:
case 3851:
case 400:
case 2478:
case 1946:
case 3245:
case 2922:
case 1673:
case 3434:
case 538:
case 1961:
case 2236:
case 1907:
case 2081:
case 711:
case 1077:
case 1231:
case 2768:
case 3813:
case 774:
case 57:
case 3895:
case 497:
case 2068:
case 1084:
case 1777:
case 275:
case 2964:
case 1786:
case 521:
case 944:
case 1859:
case 2447:
case 2815:
case 643:
case 3969:
case 682:
case 3204:
case 463:
case 886:
case 735:
case 3862:
case 29:
case 470:
case 1467:
case 102:
case 1775:
case 3278:
case 1048:
case 2230:
case 1944:
case 1933:
case 3172:
case 817:
case 2817:
case 1382:
case 2234:
case 2781:
case 4024:
case 3489:
case 82:
case 494:
case 2818:
case 1704:
case 3763:
case 4051:
case 801:
case 1468:
case 3031:
case 1047:
case 2065:
case 3277:
case 3323:
case 2663:
case 1700:
case 1391:
case 1630:
case 1355:
case 1529:
case 615:
case 408:
case 3473:
case 4095:
case 3314:
case 3275:
case 1129:
case 1778:
case 1976:
case 2067:
case 1045:
case 2001:
case 1987:
case 1634:
case 4013:
case 2319:
case 242:
case 3310:
case 283:
case 3142:
case 2327:
case 932:
case 478:
case 4062:
case 3316:
case 1636:
case 2767:
case 322:
case 1078:
case 1974:
case 3399:
case 2390:
case 2701:
case 3542:
case 2475:
case 1593:
case 2612:
case 3154:
case 3665:
case 2289:
case 1706:
case 3554:
case 145:
case 947:
case 2477:
case 3712:
case 871:
case 1193:
case 2765:
case 2159:
case 2978:
case 3930:
case 2074:
case 2422:
case 432:
case 2070:
case 1398:
case 3687:
case 4082:
case 4058:
case 880:
case 93:
case 2853:
case 301:
case 545:
case 279:
case 1992:
case 2900:
case 2785:
case 3264:
case 1405:
case 32:
case 667:
case 1816:
case 447:
case 2372:
case 2904:
case 1488:
case 371:
case 599:
case 1810:
case 3266:
case 2947:
case 1965:
case 994:
case 2085:
case 209:
case 3855:
case 2460:
case 693:
case 3469:
case 3241:
case 3783:
case 1071:
case 1814:
case 2708:
case 908:
case 1967:
case 2638:
case 2679:
case 748:
case 2076:
case 2774:
case 130:
case 2087:
case 3891:
case 1444:
case 3738:
case 3779:
case 3674:
case 3857:
case 406:
case 2192:
case 168:
case 2059:
case 2656:
case 340:
case 566:
case 717:
case 1504:
case 1868:
case 3563:
case 2884:
case 3054:
case 2418:
case 3958:
case 898:
case 3756:
case 2298:
case 3163:
case 3982:
case 1613:
case 4043:
case 1015:
case 2848:
case 1139:
case 2303:
case 491:
case 69:
case 3388:
case 1624:
case 786:
case 3352:
case 1578:
case 3873:
case 675:
case 3042:
case 2875:
case 1145:
case 2167:
case 1029:
case 2642:
case 458:
case 2101:
case 605:
case 956:
case 1717:
case 3742:
case 874:
case 2337:
case 933:
case 3305:
case 2654:
case 2165:
case 3131:
case 185:
case 2886:
case 1506:
case 2877:
case 3361:
case 3754:
case 3659:
case 3056:
case 2650:
case 2565:
case 1547:
case 4036:
case 2576:
case 958:
case 416:
case 127:
case 2257:
case 433:
case 765:
case 2822:
case 2929:
case 3951:
case 2187:
case 456:
case 335:
case 1171:
case 2255:
case 1296:
case 259:
case 2841:
case 219:
case 1682:
case 2185:
case 3913:
case 3402:
case 1219:
case 2453:
case 2866:
case 1414:
case 1373:
case 2860:
case 3253:
case 166:
case 2993:
case 2202:
case 1959:
case 1852:
case 311:
case 568:
case 2508:
case 3457:
case 2574:
case 1840:
case 2917:
case 3179:
case 1225:
case 1389:
case 1423:
case 2570:
case 1833:
case 3538:
case 3211:
case 788:
case 2628:
case 2174:
case 119:
case 3490:
case 2499:
case 2571:
case 1453:
case 1866:
case 3210:
case 520:
case 306:
case 878:
case 3214:
case 3427:
case 3494:
case 1585:
case 159:
case 1432:
case 1176:
case 3377:
case 1576:
case 2807:
case 3835:
case 3425:
case 227:
case 1257:
case 2844:
case 2423:
case 401:
case 60:
case 750:
case 469:
case 3849:
case 2840:
case 1574:
case 894:
case 621:
case 649:
case 3380:
case 2410:
case 3419:
case 1202:
case 2888:
case 762:
case 1864:
case 2852:
case 18:
case 2294:
case 3954:
case 2227:
case 1108:
case 922:
case 3058:
case 3082:
case 1860:
case 4079:
case 1915:
case 901:
case 4063:
case 741:
case 3629:
case 2620:
case 3134:
case 3724:
case 3797:
case 3143:
case 564:
case 182:
case 1848:
case 3543:
case 3130:
case 3720:
case 1303:
case 2697:
case 2104:
case 1418:
case 3062:
case 378:
case 3795:
case 2613:
case 58:
case 2500:
case 2015:
case 602:
case 3509:
case 2695:
case 268:
case 3109:
case 1192:
case 2504:
case 876:
case 1621:
case 3095:
case 559:
case 2106:
case 308:
case 2547:
case 1565:
case 2715:
case 954:
case 1165:
case 2147:
case 832:
case 1654:
case 2793:
case 2662:
case 1759:
case 653:
case 1886:
case 3013:
case 2506:
case 1877:
case 519:
case 636:
case 2545:
case 971:
case 2717:
case 1501:
case 3928:
case 3341:
case 3726:
case 3536:
case 1875:
case 3617:
case 4012:
case 2626:
case 480:
case 2405:
case 3437:
case 474:
case 1904:
case 1372:
case 2771:
case 1269:
case 1008:
case 818:
case 797:
case 1466:
case 858:
case 1785:
case 3288:
case 3252:
case 179:
case 1070:
case 65:
case 700:
case 3825:
case 3435:
case 411:
case 1939:
case 1978:
case 1074:
case 1787:
case 2446:
case 1422:
case 689:
case 3207:
case 498:
case 3318:
case 2440:
case 3449:
case 387:
case 770:
case 1679:
case 2967:
case 2901:
case 583:
case 230:
case 537:
case 404:
case 1460:
case 2237:
case 923:
case 1708:
case 3205:
case 1906:
case 2814:
case 435:
case 2452:
case 356:
case 2488:
case 3912:
case 624:
case 2965:
case 3819:
case 333:
case 1683:
case 998:
case 1067:
case 3730:
case 3120:
case 2976:
case 2778:
case 1001:
case 2634:
case 3151:
case 183:
case 142:
case 1319:
case 3639:
case 3124:
case 3734:
case 3197:
case 3520:
case 3551:
case 1484:
case 3595:
case 509:
case 2468:
case 3604:
case 325:
case 1792:
case 299:
case 3709:
case 1480:
case 1818:
case 3513:
case 2357:
case 3562:
case 245:
case 856:
case 3311:
case 391:
case 1477:
case 2193:
case 1159:
case 1092:
case 652:
case 3009:
case 3606:
case 2000:
case 4042:
case 1612:
case 1559:
case 673:
case 2115:
case 3162:
case 3983:
case 2004:
case 2908:
case 2706:
case 3353:
case 2078:
case 2039:
case 2745:
case 1767:
case 951:
case 2636:
case 1390:
case 1701:
case 2517:
case 4021:
case 3938:
case 1394:
case 3126:
case 1273:
case 911:
case 887:
case 2117:
case 3684:
case 1941:
case 1328:
case 2905:
case 3463:
case 350:
case 907:
case 2518:
case 3680:
case 2086:
case 2492:
case 439:
case 1400:
case 253:
case 732:
case 1236:
case 2961:
case 236:
case 3773:
case 1081:
case 776:
case 1829:
case 2748:
case 2946:
case 3201:
case 884:
case 3073:
case 946:
case 592:
case 2775:
case 2933:
case 1960:
case 1815:
case 3089:
case 3198:
case 19:
case 4072:
case 3854:
case 2084:
case 3292:
case 977:
case 3850:
case 3431:
case 1447:
case 2465:
case 1893:
case 2487:
case 4090:
case 708:
case 2111:
case 3393:
case 2722:
case 192:
case 1033:
case 4027:
case 862:
case 1040:
case 1354:
case 2238:
case 2362:
case 1707:
case 2511:
case 2766:
case 1637:
case 2153:
case 3102:
case 1199:
case 1052:
case 1516:
case 2064:
case 249:
case 794:
case 575:
case 1342:
case 3666:
case 2060:
case 2553:
case 1599:
case 1471:
case 850:
case 4025:
case 341:
case 2669:
case 3329:
case 2066:
case 2320:
case 3285:
case 73:
case 2764:
case 36:
case 3555:
case 1110:
case 627:
case 505:
case 2760:
case 2041:
case 3664:
case 2397:
case 2408:
case 27:
case 407:
case 3483:
case 490:
case 778:
case 1649:
case 1744:
case 3287:
case 2470:
case 3438:
case 3591:
case 1356:
case 2395:
case 1800:
case 2184:
case 1168:
case 1953:
case 787:
case 2999:
case 370:
case 3990:
case 2250:
case 2584:
case 3456:
case 2718:
case 2916:
case 1338:
case 2180:
case 1932:
case 273:
case 2148:
case 567:
case 1429:
case 1911:
case 1226:
case 3925:
case 756:
case 1383:
case 2242:
case 465:
case 1220:
case 203:
case 1251:
case 2801:
case 986:
case 1845:
case 488:
case 1181:
case 1224:
case 3442:
case 844:
case 3831:
case 3919:
case 2698:
case 2186:
case 917:
case 300:
case 2577:
case 1806:
case 526:
case 3454:
case 957:
case 155:
case 3996:
case 2228:
case 486:
case 224:
case 791:
case 1107:
case 1546:
case 3611:
case 4037:
case 2122:
case 1146:
case 1625:
case 1023:
case 1312:
case 988:
case 1507:
case 2876:
case 630:
case 1918:
case 528:
case 1871:
case 417:
case 1690:
case 289:
case 515:
case 2166:
case 3345:
case 1694:
case 3702:
case 457:
case 1714:
case 21:
case 3883:
case 4049:
case 1619:
case 1552:
case 3169:
case 2343:
case 3755:
case 2560:
case 3569:
case 1710:
case 3378:
case 3339:
case 381:
case 2330:
case 25:
case 1696:
case 2655:
case 3002:
case 1152:
case 897:
case 3304:
case 3972:
case 1140:
case 3757:
case 1363:
case 758:
case 3879:
case 3838:
case 1533:
case 725:
case 1544:
case 965:
case 1133:
case 2309:
case 3791:
case 2874:
case 1540:
case 2011:
case 1157:
case 3007:
case 2644:
case 2633:
case 2749:
case 3740:
case 3523:
case 1828:
case 184:
case 1479:
case 3733:
case 3123:
case 1287:
case 2640:
case 3975:
case 698:
case 286:
case 1483:
case 424:
case 2652:
case 782:
case 1664:
case 3005:
case 2196:
case 1155:
case 550:
case 3603:
case 2271:
case 2119:
case 3110:
case 510:
case 16:
case 2596:
case 3986:
case 3788:
case 1285:
case 3752:
case 1329:
case 141:
case 3514:
case 3471:
case 3599:
case 1502:
case 1317:
case 2882:
case 2858:
case 3705:
case 2989:
case 1069:
case 2737:
case 1666:
case 674:
case 4032:
case 2527:
case 3052:
case 3199:
case 2605:
case 3088:
case 805:
case 2190:
case 3984:
case 2003:
case 3707:
case 2646:
case 2125:
case 41:
case 3044:
case 2607:
case 3350:
case 1274:
case 392:
case 2661:
case 3746:
case 3635:
case 2525:
case 651:
case 412:
case 1821:
case 3893:
case 3447:
case 1850:
case 1292:
case 1412:
case 3068:
case 39:
case 1089:
case 265:
case 1686:
case 2204:
case 3960:
case 1677:
case 3445:
case 91:
case 1073:
case 3781:
case 3817:
case 1675:
case 2826:
case 2436:
case 1842:
case 1201:
case 3922:
case 1267:
case 3478:
case 2820:
case 3439:
case 1935:
case 4018:
case 3236:
case 162:
case 989:
case 2443:
case 2824:
case 2434:
case 529:
case 3400:
case 541:
case 305:
case 2813:
case 1680:
case 924:
case 1265:
case 2247:
case 3768:
case 3966:
case 623:
case 3404:
case 288:
case 2895:
case 1856:
case 334:
case 2668:
case 1684:
case 3941:
case 3328:
case 2549:
case 669:
case 3540:
case 737:
case 2392:
case 3133:
case 3144:
case 3533:
case 144:
case 1428:
case 3544:
case 1757:
case 2149:
case 601:
case 2025:
case 277:
case 3140:
case 2090:
case 3188:
case 3099:
case 1002:
case 2103:
case 1378:
case 1339:
case 181:
case 2614:
case 783:
case 902:
case 3258:
case 2796:
case 2094:
case 2027:
case 1169:
case 2610:
case 3588:
case 855:
case 3619:
case 2503:
case 290:
case 1702:
case 2790:
case 1345:
case 2367:
case 953:
case 3505:
case 614:
case 2537:
case 326:
case 2794:
case 2137:
case 2458:
case 3014:
case 3312:
case 831:
case 4066:
case 2535:
case 495:
case 1091:
case 3023:
case 393:
case 3625:
case 2365:
case 1611:
case 3546:
case 1306:
case 3107:
case 3161:
case 207:
case 47:
case 328:
case 3295:
case 1996:
case 1454:
case 2462:
case 2376:
case 938:
case 413:
case 1831:
case 1421:
case 1450:
case 3213:
case 2836:
case 1442:
case 779:
case 2426:
case 680:
case 2957:
case 3181:
case 1371:
case 2772:
case 995:
case 3581:
case 4086:
case 2229:
case 867:
case 2217:
case 949:
case 2834:
case 4080:
case 921:
case 2424:
case 544:
case 2072:
case 1925:
case 3226:
case 3383:
case 331:
case 2420:
case 3911:
case 74:
case 90:
case 761:
case 1189:
case 2370:
case 826:
case 1927:
case 3338:
case 3379:
case 3804:
case 622:
case 3568:
case 2495:
case 248:
case 170:
case 1618:
case 2809:
case 688:
case 3101:
case 223:
case 3642:
case 4047:
case 3875:
case 1536:
case 1726:
case 1472:
case 3501:
case 4006:
case 1615:
case 2112:
case 2750:
case 3654:
case 2131:
case 2218:
case 2498:
case 506:
case 2531:
case 792:
case 1095:
case 2307:
case 2056:
case 108:
case 2659:
case 296:
case 1762:
case 2361:
case 2754:
case 3621:
case 4078:
case 3884:
case 532:
case 240:
case 2344:
case 3059:
case 2021:
case 859:
case 1509:
case 3880:
case 2889:
case 2163:
case 178:
case 2958:
case 3298:
case 3349:
case 2352:
case 1751:
case 1364:
case 2388:
case 382:
case 1534:
case 665:
case 1797:
case 2042:
case 1360:
case 13:
case 3860:
case 3915:
case 2869:
case 1496:
case 1058:
case 3108:
case 251:
case 176:
case 38:
case 1954:
case 211:
case 3864:
case 2583:
case 1299:
case 3202:
case 2253:
case 132:
case 53:
case 1380:
case 1849:
case 147:
case 945:
case 364:
case 2579:
case 3257:
case 204:
case 2028:
case 1835:
case 3587:
case 3576:
case 1223:
case 2951:
case 79:
case 686:
case 3411:
case 3929:
case 3176:
case 3822:
case 1494:
case 3585:
case 508:
case 359:
case 3841:
case 1214:
case 298:
case 1758:
case 3255:
case 2995:
case 2381:
case 657:
case 1956:
case 106:
case 3453:
case 3866:
case 1210:
case 2402:
case 3185:
case 319:
case 2316:
case 1043:
case 1645:
case 1126:
case 1979:
case 2142:
case 4093:
case 3475:
case 1526:
case 726:
case 2542:
case 2399:
case 1353:
case 3767:
case 2248:
case 3289:
case 2063:
case 1162:
case 1983:
case 3325:
case 4017:
case 2665:
case 3559:
case 861:
case 2550:
case 2521:
case 793:
case 2898:
case 3159:
case 1606:
case 809:
case 2121:
case 2731:
case 191:
case 2712:
case 2554:
case 2763:
case 2156:
case 3971:
case 2489:
case 516:
case 3480:
case 767:
case 2323:
case 125:
case 3065:
case 1604:
case 158:
case 2012:
case 2556:
case 1595:
case 1113:
case 1551:
case 2314:
case 2473:
case 1197:
case 1281:
case 3396:
case 1036:
case 1524:
case 342:
case 3001:
case 2275:
case 558:
case 1819:
case 3947:
case 607:
case 1205:
case 731:
case 2783:
case 34:
case 2469:
case 427:
case 2855:
case 1896:
case 2528:
case 2891:
case 3087:
case 2222:
case 2670:
case 3945:
case 3679:
case 1246:
case 690:
case 1207:
case 2936:
case 1261:
case 2779:
case 3770:
case 3422:
case 728:
case 3074:
case 755:
case 1233:
case 3787:
case 3939:
case 1825:
case 715:
case 1435:
case 2676:
case 3070:
case 968:
case 3785:
case 1252:
case 201:
case 677:
case 2802:
case 269:
case 1182:
case 2685:
case 1158:
case 3008:
case 2260:
case 3904:
case 837:
case 22:
case 1894:
case 1827:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751738401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,];
var gg_b = "1751738401/";

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
