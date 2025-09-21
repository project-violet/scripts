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
case 3018:
case 1998:
case 1784:
case 2636:
case 4020:
case 2878:
case 278:
case 3009:
case 988:
case 1443:
case 1068:
case 1938:
case 2171:
case 3330:
case 1184:
case 3494:
case 485:
case 3285:
case 2739:
case 630:
case 218:
case 3441:
case 3822:
case 2771:
case 959:
case 1677:
case 659:
case 3638:
case 3353:
case 2016:
case 3395:
case 1321:
case 3737:
case 1871:
case 2650:
case 2991:
case 876:
case 2931:
case 2061:
case 2979:
case 3797:
case 2007:
case 2400:
case 2266:
case 559:
case 3356:
case 1778:
case 2304:
case 2620:
case 3268:
case 1218:
case 437:
case 2405:
case 153:
case 2625:
case 1085:
case 588:
case 710:
case 2328:
case 159:
case 2541:
case 1766:
case 950:
case 3252:
case 3716:
case 2278:
case 2362:
case 3428:
case 650:
case 628:
case 4017:
case 3222:
case 3619:
case 1954:
case 3608:
case 3885:
case 3305:
case 3654:
case 3039:
case 3969:
case 4082:
case 2811:
case 2109:
case 844:
case 3523:
case 2426:
case 933:
case 3071:
case 2118:
case 2606:
case 1919:
case 3099:
case 308:
case 2709:
case 3595:
case 25:
case 3404:
case 3276:
case 3300:
case 2718:
case 3624:
case 3880:
case 2456:
case 639:
case 3553:
case 2863:
case 1299:
case 773:
case 1271:
case 2617:
case 1239:
case 2495:
case 713:
case 2284:
case 34:
case 72:
case 1076:
case 2453:
case 2435:
case 719:
case 150:
case 1763:
case 2901:
case 3161:
case 3707:
case 3713:
case 1111:
case 1809:
case 3761:
case 2334:
case 2097:
case 1022:
case 457:
case 2430:
case 1711:
case 3113:
case 313:
case 1313:
case 1887:
case 74:
case 1004:
case 2800:
case 2235:
case 2253:
case 319:
case 3363:
case 373:
case 1499:
case 3686:
case 2143:
case 1439:
case 851:
case 548:
case 1537:
case 4049:
case 1597:
case 3647:
case 486:
case 2688:
case 90:
case 667:
case 1812:
case 1846:
case 3578:
case 2552:
case 648:
case 3834:
case 3422:
case 2910:
case 3894:
case 3602:
case 2187:
case 3148:
case 3981:
case 567:
case 442:
case 1843:
case 948:
case 2368:
case 2787:
case 460:
case 3258:
case 2665:
case 3748:
case 2478:
case 708:
case 1105:
case 815:
case 3584:
case 1342:
case 3476:
case 2021:
case 2746:
case 872:
case 2712:
case 2915:
case 3366:
case 875:
case 1902:
case 4088:
case 824:
case 812:
case 3683:
case 2146:
case 2660:
case 167:
case 3929:
case 2580:
case 2466:
case 2835:
case 3563:
case 1513:
case 2895:
case 1507:
case 38:
case 1975:
case 1614:
case 1561:
case 3664:
case 3511:
case 2823:
case 261:
case 1172:
case 1397:
case 1964:
case 2585:
case 426:
case 203:
case 1156:
case 764:
case 310:
case 831:
case 1094:
case 1337:
case 1126:
case 3468:
case 1409:
case 3675:
case 1756:
case 1629:
case 1212:
case 2089:
case 3121:
case 2957:
case 1723:
case 1195:
case 3828:
case 3234:
case 3858:
case 2872:
case 3046:
case 1795:
case 1753:
case 1735:
case 2927:
case 1062:
case 1243:
case 2373:
case 3632:
case 1130:
case 3804:
case 1542:
case 3692:
case 1790:
case 2411:
case 2826:
case 469:
case 3091:
case 1911:
case 1559:
case 2767:
case 2685:
case 582:
case 1025:
case 754:
case 946:
case 2101:
case 3031:
case 3575:
case 2167:
case 3907:
case 1033:
case 1963:
case 800:
case 646:
case 3296:
case 2680:
case 1020:
case 2432:
case 3663:
case 4068:
case 2298:
case 1607:
case 3386:
case 1457:
case 2854:
case 3564:
case 793:
case 706:
case 251:
case 1801:
case 1381:
case 3666:
case 1108:
case 3169:
case 1642:
case 2909:
case 3220:
case 3740:
case 3383:
case 2077:
case 453:
case 137:
case 3817:
case 1867:
case 4085:
case 2374:
case 3769:
case 341:
case 721:
case 1244:
case 1231:
case 3882:
case 3145:
case 1754:
case 1279:
case 494:
case 224:
case 777:
case 1124:
case 275:
case 488:
case 430:
case 3255:
case 982:
case 3942:
case 3745:
case 1036:
case 1966:
case 546:
case 734:
case 957:
case 2622:
case 2219:
case 1637:
case 1359:
case 1697:
case 2208:
case 1329:
case 4073:
case 574:
case 3896:
case 3836:
case 2898:
case 2144:
case 1978:
case 2676:
case 2224:
case 114:
case 3364:
case 1003:
case 896:
case 2483:
case 3206:
case 3370:
case 125:
case 3460:
case 3937:
case 174:
case 1314:
case 4052:
case 1201:
case 2045:
case 302:
case 1267:
case 2549:
case 305:
case 1006:
case 439:
case 2486:
case 3203:
case 433:
case 3583:
case 3217:
case 2560:
case 2971:
case 614:
case 1138:
case 3825:
case 2939:
case 974:
case 1831:
case 2999:
case 2040:
case 3488:
case 1198:
case 622:
case 674:
case 1738:
case 3893:
case 914:
case 298:
case 3833:
case 428:
case 450:
case 207:
case 1467:
case 2864:
case 1060:
case 3554:
case 381:
case 818:
case 3623:
case 1377:
case 2286:
case 186:
case 1074:
case 1651:
case 1049:
case 1990:
case 1545:
case 3695:
case 3398:
case 2081:
case 3524:
case 3653:
case 3635:
case 1953:
case 1065:
case 586:
case 3015:
case 2336:
case 1792:
case 2157:
case 660:
case 3519:
case 3951:
case 2127:
case 3690:
case 1192:
case 3482:
case 1569:
case 2247:
case 642:
case 1956:
case 2393:
case 545:
case 686:
case 2333:
case 3672:
case 3265:
case 40:
case 1164:
case 3714:
case 2325:
case 276:
case 2582:
case 2202:
case 1764:
case 1926:
case 3249:
case 3274:
case 2283:
case 3260:
case 3129:
case 2517:
case 1972:
case 1775:
case 3159:
case 1827:
case 2832:
case 160:
case 3729:
case 2270:
case 2886:
case 3450:
case 3057:
case 2264:
case 3354:
case 1905:
case 895:
case 1577:
case 321:
case 741:
case 1702:
case 3324:
case 2715:
case 669:
case 1345:
case 3598:
case 1648:
case 663:
case 3027:
case 3420:
case 3948:
case 2987:
case 2110:
case 317:
case 3781:
case 601:
case 3493:
case 1369:
case 2847:
case 2710:
case 3605:
case 1479:
case 3425:
case 244:
case 3319:
case 3181:
case 1491:
case 1340:
case 626:
case 1815:
case 3496:
case 2382:
case 163:
case 169:
case 354:
case 2641:
case 2059:
case 2303:
case 399:
case 2550:
case 1810:
case 393:
case 1747:
case 2232:
case 2943:
case 569:
case 563:
case 2498:
case 2520:
case 2292:
case 4062:
case 3989:
case 692:
case 869:
case 3785:
case 3667:
case 4040:
case 3451:
case 1603:
case 2271:
case 2076:
case 3421:
case 3842:
case 1504:
case 1284:
case 498:
case 1495:
case 3185:
case 992:
case 228:
case 250:
case 1453:
case 1435:
case 3601:
case 1901:
case 2052:
case 3078:
case 2111:
case 2389:
case 4045:
case 1558:
case 1490:
case 3180:
case 1341:
case 1334:
case 1528:
case 2163:
case 239:
case 801:
case 233:
case 65:
case 1430:
case 1967:
case 2022:
case 2766:
case 1362:
case 1472:
case 192:
case 2166:
case 789:
case 431:
case 826:
case 2669:
case 55:
case 2908:
case 1811:
case 1109:
case 3861:
case 2551:
case 365:
case 2073:
case 3387:
case 2521:
case 15:
case 2645:
case 1709:
case 2348:
case 595:
case 758:
case 340:
case 1718:
case 3011:
case 1991:
case 2871:
case 3722:
case 766:
case 294:
case 412:
case 1979:
case 424:
case 475:
case 2899:
case 3152:
case 1944:
case 230:
case 3993:
case 1400:
case 978:
case 3122:
case 1884:
case 2487:
case 3933:
case 3448:
case 3955:
case 2209:
case 2589:
case 1633:
case 1655:
case 1358:
case 2446:
case 791:
case 3679:
case 253:
case 845:
case 63:
case 3631:
case 3644:
case 1594:
case 3691:
case 1534:
case 259:
case 1625:
case 1199:
case 1562:
case 2784:
case 2998:
case 1696:
case 2938:
case 1139:
case 343:
case 1799:
case 71:
case 53:
case 3837:
case 1739:
case 729:
case 451:
case 2351:
case 578:
case 2677:
case 1211:
case 3996:
case 1016:
case 738:
case 518:
case 1263:
case 1042:
case 13:
case 3066:
case 2548:
case 2195:
case 961:
case 323:
case 2723:
case 1957:
case 4014:
case 3005:
case 2153:
case 2135:
case 2992:
case 3289:
case 1872:
case 661:
case 2123:
case 2062:
case 2753:
case 2735:
case 1856:
case 1048:
case 3627:
case 4029:
case 2190:
case 3000:
case 2516:
case 609:
case 3413:
case 3339:
case 996:
case 3371:
case 909:
case 3399:
case 1411:
case 503:
case 3128:
case 1466:
case 2975:
case 3758:
case 3442:
case 2772:
case 509:
case 3416:
case 3728:
case 2614:
case 366:
case 444:
case 3158:
case 391:
case 109:
case 825:
case 3104:
case 2034:
case 2337:
case 1322:
case 103:
case 2970:
case 3704:
case 2126:
case 1089:
case 2212:
case 2983:
case 3974:
case 837:
case 1187:
case 3949:
case 3497:
case 3090:
case 3318:
case 3309:
case 1478:
case 3889:
case 1665:
case 1787:
case 3035:
case 762:
case 416:
case 320:
case 740:
case 1573:
case 2681:
case 1746:
case 1226:
case 1674:
case 476:
case 1051:
case 3162:
case 3599:
case 1649:
case 3539:
case 1112:
case 765:
case 1146:
case 3023:
case 1484:
case 100:
case 3848:
case 248:
case 1235:
case 2004:
case 3988:
case 1223:
case 2499:
case 2947:
case 2361:
case 3251:
case 2439:
case 1143:
case 3026:
case 2471:
case 407:
case 2537:
case 2986:
case 885:
case 1688:
case 1805:
case 2846:
case 3072:
case 2058:
case 46:
case 2812:
case 3024:
case 584:
case 1045:
case 2581:
case 3796:
case 2201:
case 3327:
case 1574:
case 1549:
case 2267:
case 1560:
case 3054:
case 4037:
case 3639:
case 598:
case 3196:
case 3671:
case 1939:
case 3008:
case 2138:
case 184:
case 1971:
case 931:
case 2879:
case 2831:
case 1999:
case 2984:
case 1588:
case 1208:
case 1402:
case 771:
case 3269:
case 3120:
case 2359:
case 3150:
case 3733:
case 2978:
case 3952:
case 222:
case 684:
case 3793:
case 1191:
case 1676:
case 1744:
case 131:
case 1779:
case 1254:
case 347:
case 727:
case 1791:
case 698:
case 984:
case 3193:
case 336:
case 3098:
case 2801:
case 2642:
case 2108:
case 3038:
case 3968:
case 732:
case 512:
case 2616:
case 1360:
case 1077:
case 515:
case 1374:
case 3557:
case 3310:
case 2867:
case 2708:
case 1349:
case 1464:
case 112:
case 2754:
case 951:
case 3459:
case 2231:
case 2244:
case 175:
case 2291:
case 3706:
case 4061:
case 80:
case 1475:
case 2154:
case 4007:
case 172:
case 651:
case 4013:
case 1668:
case 3618:
case 2036:
case 3315:
case 2025:
case 1685:
case 304:
case 2911:
case 3703:
case 1819:
case 4042:
case 1167:
case 1701:
case 2963:
case 2529:
case 3980:
case 43:
case 1238:
case 624:
case 2427:
case 675:
case 1824:
case 2607:
case 478:
case 282:
case 612:
case 3845:
case 787:
case 924:
case 356:
case 285:
case 912:
case 3277:
case 418:
case 1854:
case 2050:
case 1029:
case 2689:
case 1533:
case 850:
case 4048:
case 1555:
case 828:
case 1593:
case 3643:
case 3075:
case 263:
case 3544:
case 1802:
case 1059:
case 2786:
case 1525:
case 269:
case 3064:
case 387:
case 944:
case 1303:
case 756:
case 3070:
case 3477:
case 1014:
case 3994:
case 3367:
case 644:
case 1438:
case 2227:
case 3301:
case 1498:
case 1886:
case 226:
case 409:
case 1115:
case 1270:
case 496:
case 2577:
case 1264:
case 1715:
case 1912:
case 3092:
case 2102:
case 3687:
case 4089:
case 3032:
case 3962:
case 332:
case 1275:
case 1987:
case 3149:
case 3174:
case 1536:
case 2183:
case 1596:
case 2900:
case 3160:
case 3229:
case 2479:
case 1847:
case 2431:
case 2340:
case 2783:
case 144:
case 461:
case 2215:
case 2956:
case 116:
case 96:
case 4021:
case 888:
case 1658:
case 3047:
case 4051:
case 2770:
case 1325:
case 2088:
case 2926:
case 3469:
case 1202:
case 3344:
case 907:
case 3331:
case 859:
case 2210:
case 1454:
case 1350:
case 1517:
case 245:
case 736:
case 516:
case 1892:
case 242:
case 2972:
case 576:
case 1424:
case 1832:
case 3083:
case 1864:
case 2930:
case 2467:
case 107:
case 976:
case 2990:
case 3814:
case 2049:
case 2651:
case 1870:
case 2074:
case 355:
case 1506:
case 286:
case 16:
case 352:
case 2545:
case 916:
case 2401:
case 400:
case 2732:
case 2953:
case 2935:
case 1875:
case 2792:
case 2995:
case 1336:
case 3002:
case 1127:
case 2569:
case 2192:
case 3859:
case 2120:
case 602:
case 4039:
case 3637:
case 2720:
case 1465:
case 1375:
case 2976:
case 3329:
case 1896:
case 3415:
case 2481:
case 2793:
case 760:
case 2245:
case 2952:
case 2755:
case 3978:
case 2193:
case 236:
case 1206:
case 1586:
case 745:
case 1460:
case 1067:
case 2922:
case 247:
case 374:
case 3410:
case 1364:
case 1449:
case 2133:
case 2155:
case 3003:
case 2327:
case 2796:
case 3201:
case 87:
case 1820:
case 786:
case 823:
case 1583:
case 1217:
case 2639:
case 1850:
case 81:
case 2699:
case 2510:
case 2357:
case 105:
case 829:
case 2:
case 3831:
case 2019:
case 1282:
case 3879:
case 3198:
case 1825:
case 3891:
case 1177:
case 3798:
case 3984:
case 44:
case 2515:
case 1893:
case 769:
case 1079:
case 1961:
case 1044:
case 2840:
case 2869:
case 763:
case 941:
case 2980:
case 3529:
case 3033:
case 3963:
case 2103:
case 3055:
case 3093:
case 1913:
case 3613:
case 2845:
case 2182:
case 4009:
case 3607:
case 3427:
case 3457:
case 3050:
case 1564:
case 2277:
case 256:
case 385:
case 1386:
case 3661:
case 3616:
case 2038:
case 1169:
case 1220:
case 2527:
case 3801:
case 3381:
case 2098:
case 2310:
case 889:
case 464:
case 141:
case 3719:
case 2414:
case 1817:
case 3124:
case 3244:
case 1302:
case 1882:
case 1145:
case 3754:
case 2429:
case 3966:
case 2315:
case 2618:
case 1293:
case 3096:
case 1916:
case 820:
case 541:
case 2609:
case 1354:
case 3905:
case 2165:
case 3577:
case 3702:
case 235:
case 326:
case 517:
case 232:
case 3102:
case 2032:
case 1027:
case 2962:
case 1420:
case 2092:
case 1600:
case 577:
case 4043:
case 1538:
case 117:
case 48:
case 3900:
case 2646:
case 862:
case 699:
case 1948:
case 606:
case 2149:
case 1425:
case 1319:
case 3783:
case 1181:
case 3340:
case 3369:
case 2259:
case 1605:
case 906:
case 1888:
case 1308:
case 2749:
case 3815:
case 1496:
case 593:
case 506:
case 1865:
case 1436:
case 4087:
case 369:
case 2591:
case 3257:
case 2788:
case 3810:
case 106:
case 193:
case 301:
case 199:
case 287:
case 2064:
case 2934:
case 782:
case 3147:
case 2301:
case 4012:
case 3227:
case 2881:
case 554:
case 4046:
case 386:
case 1403:
case 3651:
case 3049:
case 3990:
case 2814:
case 1554:
case 3930:
case 3401:
case 1653:
case 990:
case 1695:
case 3545:
case 252:
case 1398:
case 3995:
case 581:
case 1015:
case 29:
case 1921:
case 2829:
case 42:
case 3569:
case 1482:
case 479:
case 2859:
case 1630:
case 1508:
case 3132:
case 1690:
case 1265:
case 681:
case 1114:
case 3956:
case 3215:
case 2331:
case 981:
case 3926:
case 2440:
case 3770:
case 2928:
case 725:
case 345:
case 1260:
case 774:
case 3175:
case 497:
case 3857:
case 1274:
case 1759:
case 3827:
case 2501:
case 2281:
case 714:
case 1729:
case 342:
case 3775:
case 1945:
case 1458:
case 1252:
case 1716:
case 94:
case 3766:
case 2312:
case 832:
case 64:
case 1530:
case 2297:
case 4067:
case 1608:
case 1885:
case 508:
case 2906:
case 1590:
case 3640:
case 1619:
case 1222:
case 265:
case 1940:
case 2861:
case 1099:
case 767:
case 3551:
case 1969:
case 3908:
case 2168:
case 1300:
case 1624:
case 2084:
case 240:
case 1535:
case 108:
case 3348:
case 3645:
case 2813:
case 2807:
case 3521:
case 1404:
case 2387:
case 3073:
case 3271:
case 3239:
case 2982:
case 3299:
case 2667:
case 2601:
case 748:
case 328:
case 2185:
case 14:
case 2842:
case 908:
case 402:
case 3389:
case 3111:
case 3763:
case 2078:
case 3052:
case 1161:
case 3818:
case 887:
case 3711:
case 1113:
case 2903:
case 2180:
case 1009:
case 2773:
case 852:
case 3998:
case 3784:
case 1852:
case 2489:
case 249:
case 1441:
case 1822:
case 2837:
case 1390:
case 1330:
case 1505:
case 855:
case 4031:
case 4044:
case 964:
case 1698:
case 2936:
case 2207:
case 2587:
case 1500:
case 1280:
case 664:
case 1638:
case 1335:
case 1353:
case 2996:
case 3178:
case 2152:
case 1737:
case 2011:
case 2216:
case 2752:
case 2448:
case 1197:
case 3487:
case 2242:
case 3080:
case 2122:
case 1873:
case 811:
case 3446:
case 3218:
case 1268:
case 3209:
case 1462:
case 2920:
case 3085:
case 164:
case 359:
case 2644:
case 827:
case 2631:
case 2416:
case 3513:
case 417:
case 2442:
case 3287:
case 18:
case 2821:
case 3975:
case 2758:
case 788:
case 510:
case 730:
case 477:
case 3172:
case 1670:
case 794:
case 2728:
case 759:
case 110:
case 3094:
case 3337:
case 2104:
case 3034:
case 3964:
case 58:
case 3659:
case 3726:
case 3756:
case 3212:
case 3629:
case 3246:
case 3126:
case 1468:
case 1043:
case 1378:
case 1262:
case 3409:
case 1675:
case 229:
case 493:
case 3153:
case 68:
case 3723:
case 223:
case 3753:
case 868:
case 1858:
case 3123:
case 1046:
case 2289:
case 3992:
case 2509:
case 2413:
case 1692:
case 3542:
case 1384:
case 2407:
case 2627:
case 238:
case 1566:
case 2657:
case 2399:
case 3730:
case 2371:
case 910:
case 2461:
case 670:
case 2339:
case 8:
case 2134:
case 697:
case 2141:
case 4015:
case 119:
case 728:
case 2848:
case 113:
case 2194:
case 3307:
case 12:
case 3471:
case 2026:
case 804:
case 2734:
case 2251:
case 997:
case 3947:
case 1189:
case 1311:
case 2988:
case 3597:
case 1647:
case 4010:
case 52:
case 513:
case 733:
case 3028:
case 856:
case 739:
case 519:
case 3537:
case 573:
case 1862:
case 2072:
case 973:
case 1894:
case 1602:
case 2497:
case 613:
case 283:
case 619:
case 1228:
case 3983:
case 3100:
case 979:
case 197:
case 1422:
case 2437:
case 1258:
case 2889:
case 2309:
case 92:
case 673:
case 1981:
case 2318:
case 2615:
case 30:
case 220:
case 258:
case 1366:
case 2762:
case 2053:
case 2035:
case 1584:
case 1683:
case 2539:
case 2610:
case 3705:
case 3902:
case 2599:
case 434:
case 2220:
case 2592:
case 604:
case 1968:
case 3918:
case 2666:
case 2532:
case 2769:
case 241:
case 1557:
case 3349:
case 3464:
case 2817:
case 2250:
case 2383:
case 3077:
case 2740:
case 2803:
case 375:
case 1706:
case 324:
case 956:
case 312:
case 4011:
case 2302:
case 4063:
case 1106:
case 2942:
case 1609:
case 372:
case 2233:
case 2916:
case 1703:
case 873:
case 3101:
case 2961:
case 2079:
case 1717:
case 3685:
case 3767:
case 3388:
case 104:
case 879:
case 1869:
case 3701:
case 2296:
case 813:
case 82:
case 2907:
case 2575:
case 2236:
case 2913:
case 1182:
case 3492:
case 3298:
case 504:
case 3824:
case 1985:
case 351:
case 2564:
case 2611:
case 2570:
case 156:
case 443:
case 168:
case 3045:
case 1327:
case 2332:
case 3673:
case 76:
case 2684:
case 2820:
case 4078:
case 2850:
case 1054:
case 2203:
case 3486:
case 1671:
case 3574:
case 1136:
case 205:
case 3549:
case 707:
case 2488:
case 2777:
case 2502:
case 3447:
case 3999:
case 1019:
case 947:
case 3939:
case 3971:
case 2833:
case 636:
case 1515:
case 647:
case 3588:
case 1269:
case 2547:
case 3219:
case 668:
case 1750:
case 2678:
case 2465:
case 2836:
case 968:
case 2896:
case 716:
case 88:
case 3191:
case 1733:
case 2001:
case 1952:
case 3131:
case 147:
case 2067:
case 1922:
case 2937:
case 2206:
case 2370:
case 3791:
case 136:
case 3483:
case 3744:
case 3779:
case 2449:
case 3254:
case 952:
case 420:
case 458:
case 2672:
case 111:
case 655:
case 3393:
case 3408:
case 4023:
case 1469:
case 3582:
case 1344:
case 1331:
case 3419:
case 1440:
case 1391:
case 3325:
case 3350:
case 3517:
case 127:
case 483:
case 3503:
case 2626:
case 2274:
case 864:
case 511:
case 731:
case 3454:
case 2656:
case 3424:
case 571:
case 3320:
case 1958:
case 2417:
case 155:
case 3286:
case 611:
case 2623:
case 281:
case 3864:
case 2554:
case 971:
case 2338:
case 2653:
case 2524:
case 2398:
case 152:
case 2695:
case 911:
case 3157:
case 2921:
case 2015:
case 3727:
case 555:
case 3396:
case 627:
case 2508:
case 552:
case 4026:
case 2690:
case 1002:
case 3127:
case 2951:
case 2519:
case 4000:
case 480:
case 2436:
case 2865:
case 3533:
case 438:
case 3634:
case 1591:
case 3641:
case 3525:
case 1579:
case 632:
case 1544:
case 1531:
case 1070:
case 1477:
case 751:
case 293:
case 206:
case 1788:
case 3014:
case 1367:
case 2849:
case 2860:
case 3317:
case 3550:
case 187:
case 299:
case 423:
case 2989:
case 3520:
case 1188:
case 3943:
case 3438:
case 3232:
case 221:
case 2057:
case 1214:
case 3886:
case 491:
case 3270:
case 3306:
case 135:
case 2420:
case 1765:
case 1962:
case 1032:
case 2598:
case 2538:
case 3715:
case 2324:
case 2781:
case 715:
case 3596:
case 535:
case 1160:
case 1229:
case 1612:
case 3110:
case 3987:
case 1174:
case 2455:
case 3536:
case 2319:
case 987:
case 277:
case 724:
case 344:
case 2425:
case 1760:
case 532:
case 1749:
case 2308:
case 3710:
case 3847:
case 1259:
case 1774:
case 3979:
case 761:
case 2797:
case 834:
case 1152:
case 3061:
case 3991:
case 1011:
case 1925:
case 3620:
case 3884:
case 1242:
case 2197:
case 3304:
case 1448:
case 1955:
case 643:
case 1216:
case 649:
case 3266:
case 3400:
case 3007:
case 3693:
case 1776:
case 1920:
case 2372:
case 3633:
case 3655:
case 3358:
case 1691:
case 3534:
case 1950:
case 264:
case 703:
case 3625:
case 3405:
case 1631:
case 1644:
case 3696:
case 1773:
case 3562:
case 3636:
case 2018:
case 1173:
case 3771:
case 2822:
case 1837:
case 881:
case 318:
case 149:
case 2285:
case 456:
case 2977:
case 3799:
case 2494:
case 2330:
case 2323:
case 1261:
case 404:
case 1936:
case 2395:
case 2698:
case 1213:
case 1996:
case 3016:
case 2353:
case 2638:
case 2280:
case 4:
case 4019:
case 3617:
case 3603:
case 4008:
case 3423:
case 2526:
case 2556:
case 3453:
case 1421:
case 1842:
case 3504:
case 3284:
case 1816:
case 2707:
case 1343:
case 665:
case 3901:
case 4024:
case 4054:
case 3682:
case 3394:
case 1180:
case 1917:
case 965:
case 640:
case 893:
case 2252:
case 2716:
case 2458:
case 3472:
case 392:
case 565:
case 1312:
case 2116:
case 2305:
case 2608:
case 2885:
case 562:
case 436:
case 1297:
case 447:
case 2619:
case 2222:
case 2590:
case 1906:
case 2428:
case 821:
case 1861:
case 2099:
case 2940:
case 3606:
case 2071:
case 2523:
case 877:
case 1168:
case 2039:
case 2553:
case 3863:
case 2535:
case 140:
case 2880:
case 2300:
case 1387:
case 2404:
case 35:
case 1807:
case 1813:
case 2595:
case 162:
case 183:
case 1974:
case 2602:
case 3187:
case 427:
case 1090:
case 2894:
case 297:
case 2841:
case 1960:
case 189:
case 795:
case 4086:
case 2228:
case 1889:
case 2452:
case 2258:
case 3665:
case 3368:
case 1615:
case 1318:
case 2981:
case 589:
case 2366:
case 3712:
case 411:
case 158:
case 3256:
case 3573:
case 3021:
case 3746:
case 1053:
case 1965:
case 583:
case 1762:
case 1539:
case 471:
case 3660:
case 1571:
case 1023:
case 2683:
case 3226:
case 3674:
case 4047:
case 1162:
case 2363:
case 219:
case 3235:
case 689:
case 3253:
case 1141:
case 1134:
case 22:
case 1194:
case 3484:
case 213:
case 1056:
case 300:
case 683:
case 989:
case 1734:
case 1988:
case 1794:
case 3223:
case 2311:
case 273:
case 3805:
case 455:
case 3385:
case 3230:
case 2647:
case 4083:
case 2862:
case 3552:
case 452:
case 580:
case 966:
case 805:
case 2751:
case 123:
case 11:
case 3957:
case 2121:
case 1518:
case 666:
case 3927:
case 2012:
case 1509:
case 17:
case 3872:
case 2046:
case 2858:
case 2692:
case 2384:
case 1000:
case 73:
case 2804:
case 138:
case 2632:
case 1627:
case 3373:
case 2480:
case 57:
case 3826:
case 1657:
case 1371:
case 1758:
case 1442:
case 591:
case 1248:
case 3895:
case 3835:
case 2563:
case 1128:
case 629:
case 3853:
case 3580:
case 2929:
case 361:
case 3823:
case 67:
case 923:
case 2959:
case 91:
case 2664:
case 929:
case 3322:
case 3890:
case 396:
case 210:
case 309:
case 3585:
case 3205:
case 3830:
case 566:
case 938:
case 3089:
case 4032:
case 3352:
case 2262:
case 4092:
case 2043:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758492001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,];
var gg_b = "1758492001/";

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
