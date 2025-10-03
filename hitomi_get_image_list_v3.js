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
case 556:
case 2631:
case 3242:
case 874:
case 1877:
case 410:
case 1992:
case 4057:
case 104:
case 1087:
case 2010:
case 1709:
case 3041:
case 2832:
case 2014:
case 3477:
case 1507:
case 3867:
case 428:
case 2201:
case 540:
case 914:
case 3153:
case 3052:
case 3099:
case 3295:
case 125:
case 338:
case 2002:
case 2726:
case 3015:
case 3219:
case 1173:
case 1131:
case 3647:
case 327:
case 1024:
case 368:
case 3926:
case 1969:
case 2256:
case 437:
case 1271:
case 555:
case 1020:
case 658:
case 784:
case 2037:
case 3206:
case 736:
case 2577:
case 2290:
case 1457:
case 2294:
case 2331:
case 3163:
case 3062:
case 2779:
case 765:
case 1603:
case 3979:
case 1740:
case 3261:
case 1532:
case 2858:
case 98:
case 2355:
case 2170:
case 241:
case 810:
case 1559:
case 2811:
case 1757:
case 596:
case 3305:
case 4009:
case 2230:
case 2612:
case 631:
case 1293:
case 319:
case 2521:
case 1374:
case 1568:
case 867:
case 2665:
case 2869:
case 2648:
case 2604:
case 3650:
case 2982:
case 1322:
case 1674:
case 1670:
case 2304:
case 1013:
case 3175:
case 1767:
case 2217:
case 1112:
case 3421:
case 2649:
case 2365:
case 1569:
case 1284:
case 3809:
case 3605:
case 1558:
case 2977:
case 3664:
case 2655:
case 2859:
case 22:
case 3579:
case 612:
case 1932:
case 661:
case 2691:
case 351:
case 1100:
case 58:
case 1148:
case 3949:
case 3107:
case 200:
case 1774:
case 2157:
case 1095:
case 1252:
case 930:
case 2547:
case 1051:
case 1667:
case 2755:
case 2473:
case 3764:
case 3287:
case 486:
case 434:
case 1241:
case 3760:
case 1357:
case 2029:
case 3955:
case 2225:
case 750:
case 1042:
case 4003:
case 2960:
case 1143:
case 2905:
case 1061:
case 745:
case 2853:
case 464:
case 153:
case 1836:
case 3531:
case 2712:
case 2996:
case 923:
case 2167:
case 3436:
case 2028:
case 1403:
case 85:
case 3573:
case 3220:
case 3904:
case 1298:
case 3682:
case 2950:
case 1006:
case 530:
case 3224:
case 1563:
case 1847:
case 485:
case 2704:
case 3881:
case 1367:
case 2765:
case 2748:
case 2700:
case 1215:
case 877:
case 1850:
case 1178:
case 4070:
case 3747:
case 2626:
case 298:
case 3450:
case 2404:
case 2448:
case 378:
case 2465:
case 1238:
case 4022:
case 3192:
case 2679:
case 2875:
case 3496:
case 834:
case 2378:
case 886:
case 212:
case 1316:
case 62:
case 929:
case 1608:
case 159:
case 2560:
case 1640:
case 2564:
case 2289:
case 2085:
case 790:
case 1644:
case 2455:
case 3464:
case 2379:
case 3460:
case 3512:
case 2731:
case 529:
case 2288:
case 89:
case 2491:
case 641:
case 3931:
case 901:
case 1470:
case 162:
case 1986:
case 2326:
case 3084:
case 1474:
case 2550:
case 3213:
case 3822:
case 3158:
case 2449:
case 1963:
case 3111:
case 885:
case 3874:
case 154:
case 3329:
case 2101:
case 1846:
case 1690:
case 3628:
case 418:
case 506:
case 3151:
case 1007:
case 839:
case 3446:
case 115:
case 4025:
case 1383:
case 2462:
case 3253:
case 924:
case 1587:
case 2997:
case 3938:
case 420:
case 852:
case 2498:
case 645:
case 3437:
case 548:
case 3797:
case 235:
case 2183:
case 2633:
case 2820:
case 2082:
case 3676:
case 2452:
case 3939:
case 3402:
case 1601:
case 687:
case 2537:
case 1520:
case 608:
case 360:
case 771:
case 2333:
case 2371:
case 1356:
case 3286:
case 265:
case 524:
case 3562:
case 1394:
case 3825:
case 284:
case 1273:
case 3119:
case 2077:
case 2546:
case 1032:
case 646:
case 1133:
case 1788:
case 1814:
case 323:
case 863:
case 329:
case 481:
case 1092:
case 1059:
case 3385:
case 3941:
case 2327:
case 3078:
case 1987:
case 2523:
case 676:
case 2914:
case 439:
case 2274:
case 452:
case 2270:
case 820:
case 3702:
case 3999:
case 2680:
case 978:
case 2222:
case 2813:
case 2684:
case 2902:
case 1045:
case 1068:
case 2134:
case 2693:
case 2798:
case 3737:
case 578:
case 675:
case 1069:
case 690:
case 2438:
case 2715:
case 622:
case 1317:
case 21:
case 1920:
case 1204:
case 1513:
case 3135:
case 1011:
case 1489:
case 3746:
case 4088:
case 2117:
case 2627:
case 1180:
case 3079:
case 3275:
case 2352:
case 1141:
case 2698:
case 3187:
case 513:
case 3856:
case 208:
case 355:
case 783:
case 287:
case 2047:
case 1551:
case 314:
case 2819:
case 2125:
case 1518:
case 3993:
case 4066:
case 2341:
case 1199:
case 1152:
case 3927:
case 2861:
case 3310:
case 3428:
case 1490:
case 3314:
case 2662:
case 1730:
case 636:
case 758:
case 3894:
case 2727:
case 1325:
case 700:
case 479:
case 3890:
case 2985:
case 1828:
case 3124:
case 3614:
case 1466:
case 873:
case 4090:
case 1561:
case 3073:
case 1625:
case 3866:
case 356:
case 849:
case 3172:
case 991:
case 1483:
case 927:
case 538:
case 2699:
case 3980:
case 635:
case 2398:
case 2784:
case 3801:
case 2818:
case 4056:
case 2851:
case 1063:
case 2780:
case 1876:
case 968:
case 61:
case 1701:
case 3049:
case 222:
case 3268:
case 3245:
case 395:
case 3817:
case 290:
case 582:
case 275:
case 2639:
case 3397:
case 2338:
case 1918:
case 3593:
case 370:
case 712:
case 1417:
case 1766:
case 3527:
case 3323:
case 38:
case 2929:
case 3055:
case 3292:
case 3259:
case 4030:
case 2064:
case 1138:
case 1389:
case 879:
case 14:
case 2005:
case 1942:
case 109:
case 2060:
case 3623:
case 3113:
case 1790:
case 1430:
case 2427:
case 3211:
case 1388:
case 1434:
case 3258:
case 2928:
case 1689:
case 3580:
case 7:
case 3971:
case 2493:
case 3584:
case 3000:
case 982:
case 197:
case 731:
case 1535:
case 3697:
case 1756:
case 519:
case 2771:
case 3317:
case 1998:
case 3513:
case 3920:
case 532:
case 1026:
case 3069:
case 2772:
case 769:
case 1497:
case 2254:
case 2720:
case 1737:
case 1539:
case 1915:
case 2724:
case 2838:
case 3972:
case 3180:
case 1079:
case 3630:
case 3823:
case 33:
case 1275:
case 871:
case 3489:
case 3184:
case 1962:
case 993:
case 2040:
case 559:
case 1685:
case 2016:
case 959:
case 3334:
case 3725:
case 274:
case 3488:
case 441:
case 593:
case 3330:
case 36:
case 3059:
case 3255:
case 1714:
case 2264:
case 2589:
case 2787:
case 752:
case 2009:
case 677:
case 3249:
case 1999:
case 3127:
case 1952:
case 2635:
case 781:
case 3356:
case 647:
case 907:
case 1286:
case 2695:
case 2899:
case 2306:
case 1598:
case 160:
case 3520:
case 2319:
case 4037:
case 1515:
case 316:
case 2618:
case 733:
case 1676:
case 1263:
case 3171:
case 3788:
case 3814:
case 2841:
case 1106:
case 3133:
case 2361:
case 82:
case 3273:
case 1328:
case 953:
case 1410:
case 2487:
case 686:
case 1562:
case 2642:
case 634:
case 3394:
case 2057:
case 2661:
case 553:
case 1253:
case 999:
case 3007:
case 2236:
case 1446:
case 792:
case 4014:
case 664:
case 2176:
case 1151:
case 2525:
case 1628:
case 4010:
case 2606:
case 685:
case 1552:
case 228:
case 2472:
case 763:
case 267:
case 1376:
case 2247:
case 2351:
case 718:
case 1437:
case 1142:
case 2424:
case 2129:
case 1938:
case 3388:
case 3139:
case 3434:
case 2990:
case 3689:
case 196:
case 2994:
case 1728:
case 1834:
case 321:
case 1012:
case 674:
case 2827:
case 3961:
case 3075:
case 1623:
case 1830:
case 4:
case 1113:
case 3919:
case 70:
case 1697:
case 2893:
case 397:
case 2706:
case 1269:
case 2517:
case 773:
case 2313:
case 277:
case 942:
case 170:
case 2074:
case 2795:
case 2221:
case 800:
case 1397:
case 2901:
case 3918:
case 2022:
case 1776:
case 1817:
case 2613:
case 2123:
case 2884:
case 1268:
case 1049:
case 1245:
case 883:
case 34:
case 412:
case 3783:
case 2197:
case 3688:
case 1055:
case 2966:
case 1259:
case 1292:
case 3278:
case 1527:
case 2983:
case 2530:
case 18:
case 3766:
case 1729:
case 504:
case 1031:
case 3625:
case 1073:
case 264:
case 1346:
case 1172:
case 2442:
case 2137:
case 610:
case 3466:
case 357:
case 572:
case 3162:
case 3063:
case 3935:
case 3519:
case 667:
case 1801:
case 1337:
case 1980:
case 2917:
case 2451:
case 1476:
case 380:
case 525:
case 1533:
case 1984:
case 3401:
case 2418:
case 1602:
case 2556:
case 2501:
case 2672:
case 400:
case 3518:
case 779:
case 3456:
case 637:
case 458:
case 925:
case 3243:
case 898:
case 2406:
case 4076:
case 2114:
case 2624:
case 1637:
case 3141:
case 2110:
case 2282:
case 972:
case 247:
case 2833:
case 743:
case 3325:
case 3734:
case 2566:
case 286:
case 3828:
case 812:
case 3730:
case 2461:
case 483:
case 3542:
case 2102:
case 1428:
case 1207:
case 1314:
case 2003:
case 2583:
case 3494:
case 1927:
case 3152:
case 3053:
case 1310:
case 1354:
case 182:
case 3013:
case 3767:
case 3112:
case 3280:
case 41:
case 1235:
case 2445:
case 3670:
case 3821:
case 3674:
case 2967:
case 2154:
case 2459:
case 2492:
case 3100:
case 3148:
case 1816:
case 1777:
case 3165:
case 3409:
case 2375:
case 2878:
case 836:
case 3932:
case 3558:
case 2544:
case 269:
case 2732:
case 2540:
case 521:
case 2879:
case 1578:
case 3408:
case 649:
case 3444:
case 3149:
case 281:
case 2458:
case 673:
case 1808:
case 239:
case 1360:
case 1696:
case 1840:
case 702:
case 2707:
case 2285:
case 3559:
case 1844:
case 4021:
case 3191:
case 119:
case 3374:
case 1782:
case 2164:
case 1038:
case 2469:
case 597:
case 3370:
case 3020:
case 113:
case 957:
case 2386:
case 3271:
case 1647:
case 2567:
case 2843:
case 127:
case 744:
case 81:
case 1219:
case 1979:
case 1261:
case 3740:
case 2711:
case 1857:
case 3744:
case 1636:
case 2908:
case 3457:
case 643:
case 1062:
case 2228:
case 263:
case 2792:
case 2916:
case 218:
case 3709:
case 466:
case 1978:
case 3877:
case 3992:
case 57:
case 728:
case 3945:
case 325:
case 292:
case 3968:
case 2686:
case 2136:
case 138:
case 220:
case 1099:
case 1052:
case 1721:
case 710:
case 2663:
case 435:
case 1251:
case 2276:
case 1867:
case 3381:
case 1931:
case 3860:
case 476:
case 3805:
case 3864:
case 2358:
case 2692:
case 1973:
case 2659:
case 273:
case 777:
case 1405:
case 3575:
case 1460:
case 1512:
case 681:
case 2891:
case 1464:
case 3422:
case 1111:
case 1158:
case 75:
case 2786:
case 845:
case 1213:
case 1504:
case 3179:
case 2017:
case 2645:
case 3470:
case 1084:
case 2369:
case 1093:
case 490:
case 3238:
case 1454:
case 2297:
case 850:
case 1192:
case 1159:
case 1321:
case 808:
case 2574:
case 332:
case 1549:
case 887:
case 2368:
case 2669:
case 2804:
case 3850:
case 2522:
case 2658:
case 1736:
case 2359:
case 1555:
case 3703:
case 3644:
case 846:
case 3608:
case 359:
case 3896:
case 3640:
case 2475:
case 1168:
case 2034:
case 53:
case 4060:
case 2030:
case 994:
case 2223:
case 1496:
case 4064:
case 2812:
case 1027:
case 2246:
case 106:
case 1573:
case 1531:
case 554:
case 2453:
case 1803:
case 353:
case 3836:
case 3061:
case 1796:
case 1912:
case 663:
case 2177:
case 79:
case 1754:
case 1881:
case 3367:
case 307:
case 3586:
case 1900:
case 1224:
case 2056:
case 388:
case 620:
case 1948:
case 1904:
case 764:
case 445:
case 3006:
case 516:
case 3667:
case 2001:
case 3018:
case 450:
case 2486:
case 2970:
case 734:
case 875:
case 1382:
case 2922:
case 2463:
case 1949:
case 3042:
case 446:
case 3143:
case 124:
case 243:
case 2182:
case 2083:
case 1760:
case 3357:
case 2214:
case 3056:
case 2586:
case 937:
case 2298:
case 2215:
case 1700:
case 3177:
case 1643:
case 2836:
case 3607:
case 253:
case 896:
case 2657:
case 1853:
case 3090:
case 2262:
case 944:
case 1167:
case 3775:
case 3094:
case 3083:
case 2241:
case 1431:
case 3182:
case 1755:
case 3214:
case 183:
case 626:
case 343:
case 1791:
case 1029:
case 3463:
case 3922:
case 1157:
case 414:
case 2774:
case 100:
case 3202:
case 1886:
case 870:
case 967:
case 2667:
case 3974:
case 3581:
case 1343:
case 2722:
case 2051:
case 1863:
case 3970:
case 3486:
case 1749:
case 3001:
case 3017:
case 502:
case 2179:
case 2474:
case 1326:
case 3668:
case 3645:
case 2470:
case 1554:
case 2422:
case 1108:
case 4000:
case 2963:
case 2035:
case 1449:
case 2239:
case 1144:
case 4004:
case 1731:
case 349:
case 2575:
case 574:
case 496:
case 2126:
case 2616:
case 1455:
case 3891:
case 1773:
case 2609:
case 2805:
case 189:
case 1288:
case 3855:
case 3659:
case 1:
case 1936:
case 3903:
case 3034:
case 3030:
case 1679:
case 2644:
case 1085:
case 1564:
case 2640:
case 3475:
case 2309:
case 2896:
case 1412:
case 3611:
case 1560:
case 259:
case 3848:
case 1116:
case 3669:
case 470:
case 232:
case 3368:
case 3345:
case 3800:
case 3522:
case 3804:
case 814:
case 1400:
case 2238:
case 1465:
case 1448:
case 1404:
case 3981:
case 1947:
case 495:
case 642:
case 801:
case 1779:
case 423:
case 2911:
case 171:
case 1373:
case 2958:
case 1046:
case 2532:
case 716:
case 3711:
case 3653:
case 3758:
case 417:
case 333:
case 985:
case 3843:
case 3363:
case 2173:
case 1726:
case 460:
case 1037:
case 1443:
case 2020:
case 2271:
case 1256:
case 2969:
case 547:
case 3768:
case 3745:
case 430:
case 2381:
case 3276:
case 3663:
case 3136:
case 4043:
case 225:
case 585:
case 1582:
case 688:
case 754:
case 1673:
case 2959:
case 3147:
case 3432:
case 318:
case 2507:
case 3916:
case 3759:
case 3792:
case 653:
case 1832:
case 1283:
case 986:
case 2709:
case 1010:
case 2087:
case 934:
case 3353:
case 3544:
case 659:
case 3088:
case 2558:
case 823:
case 3540:
case 369:
case 401:
case 3732:
case 2165:
case 3459:
case 2100:
case 817:
case 1312:
case 2104:
case 2409:
case 3375:
case 2670:
case 2674:
case 2821:
case 2284:
case 1365:
case 1868:
case 1649:
case 1300:
case 632:
case 2622:
case 1304:
case 2374:
case 1521:
case 3160:
case 76:
case 1097:
case 830:
case 3469:
case 3164:
case 2322:
case 1982:
case 794:
case 1648:
case 1665:
case 3826:
case 1869:
case 2568:
case 1349:
case 1479:
case 339:
case 4078:
case 2592:
case 1355:
case 3089:
case 3957:
case 2227:
case 1612:
case 1230:
case 3879:
case 3675:
case 2907:
case 381:
case 2444:
case 1391:
case 3320:
case 448:
case 280:
case 3917:
case 1652:
case 1699:
case 2086:
case 520:
case 3324:
case 3556:
case 2717:
case 3495:
case 2876:
case 2063:
case 753:
case 4071:
case 257:
case 4033:
case 3146:
case 1784:
case 2519:
case 145:
case 406:
case 39:
case 2198:
case 615:
case 707:
case 2466:
case 3594:
case 933:
case 27:
case 3590:
case 1528:
case 3277:
case 2115:
case 2625:
case 2829:
case 3102:
case 533:
case 3930:
case 3387:
case 424:
case 1341:
case 1257:
case 386:
case 1985:
case 3566:
case 2325:
case 1727:
case 918:
case 799:
case 150:
case 1698:
case 3282:
case 2141:
case 878:
case 1399:
case 3672:
case 2518:
case 1125:
case 1819:
case 405:
case 187:
case 1433:
case 616:
case 3719:
case 2226:
case 1493:
case 1050:
case 552:
case 3313:
case 848:
case 1638:
case 1188:
case 1339:
case 3706:
case 1733:
case 297:
case 4084:
case 2790:
case 176:
case 969:
case 2279:
case 581:
case 2961:
case 2075:
case 2794:
case 539:
case 1928:
case 2434:
case 1244:
case 1208:
case 694:
case 3761:
case 711:
case 1096:
case 824:
case 3983:
case 2766:
case 63:
case 1005:
case 981:
case 24:
case 569:
case 1064:
case 1585:
case 2688:
case 3966:
case 3613:
case 3022:
case 2995:
case 3880:
case 3718:
case 759:
case 3884:
case 1480:
case 2951:
case 3795:
case 1976:
case 805:
case 1484:
case 3901:
case 3070:
case 1639:
case 136:
case 2390:
case 1077:
case 2273:
case 2666:
case 3988:
case 1441:
case 3642:
case 851:
case 2814:
case 344:
case 2788:
case 579:
case 4062:
case 2810:
case 2601:
case 1190:
case 3319:
case 1194:
case 3651:
case 882:
case 337:
case 3067:
case 3713:
case 468:
case 1739:
case 165:
case 2524:
case 2802:
case 427:
case 2913:
case 2520:
case 3306:
case 3247:
case 3351:
case 367:
case 3420:
case 1281:
case 3318:
case 2301:
case 3129:
case 3619:
case 3815:
case 4052:
case 1633:
case 3898:
case 3606:
case 3395:
case 1183:
case 135:
case 1824:
case 3176:
case 3862:
case 725:
case 3989:
case 3525:
case 772:
case 943:
case 1923:
case 1510:
case 1514:
case 2007:
case 3236:
case 3296:
case 3040:
case 891:
case 1946:
case 609:
case 3044:
case 3588:
case 90:
case 973:
case 742:
case 2630:
case 2180:
case 1117:
case 868:
case 1798:
case 813:
case 1693:
case 11:
case 2317:
case 1937:
case 2200:
case 827:
case 1715:
case 3254:
case 1384:
case 2248:
case 3772:
case 697:
case 1597:
case 1799:
case 1752:
case 1021:
case 3413:
case 302:
case 2068:
case 2045:
case 1902:
case 1684:
case 1130:
case 4038:
case 1813:
case 2617:
case 1680:
case 3264:
case 294:
case 2255:
case 2059:
case 2092:
case 3205:
case 573:
case 2291:
case 50:
case 3016:
case 26:
case 2330:
case 1327:
case 621:
case 3064:
case 3585:
case 2055:
case 3060:
case 52:
case 2729:
case 2091:
case 3216:
case 899:
case 941:
case 1530:
case 28:
case 601:
case 1983:
case 2527:
case 3484:
case 3338:
case 3189:
case 3639:
case 3835:
case 2397:
case 1070:
case 1795:
case 270:
case 2245:
case 322:
case 1884:
case 1123:
case 1613:
case 390:
case 2776:
case 1751:
case 1022:
case 1880:
case 462:
case 3638:
case 3771:
case 2933:
case 177:
case 2580:
case 4035:
case 1517:
case 807:
case 2048:
case 2584:
case 1956:
case 2065:
case 2211:
case 3208:
case 493:
case 3427:
case 853:
case 541:
case 296:
case 3928:
case 92:
case 2113:
case 15:
case 2830:
case 2012:
case 376:
case 3727:
case 1461:
case 705:
case 2890:
case 617:
case 2646:
case 134:
case 3529:
case 2310:
case 1930:
case 2927:
case 623:
case 1583:
case 2314:
case 499:
case 1934:
case 3036:
case 346:
case 859:
case 3576:
case 1081:
case 832:
case 3433:
case 3125:
case 4095:
case 1620:
case 147:
case 724:
case 1110:
case 1282:
case 2637:
case 3352:
case 1624:
case 255:
case 4051:
case 2302:
case 1871:
case 3793:
case 2856:
case 308:
case 2801:
case 1146:
case 3784:
case 1372:
case 3315:
case 1495:
case 3851:
case 862:
case 488:
case 3267:
case 185:
case 1735:
case 407:
case 2571:
case 2602:
case 1418:
case 630:
case 2984:
case 3398:
case 2533:
case 2476:
case 1451:
case 706:
case 3895:
case 4019:
case 2172:
case 3528:
case 4061:
case 453:
case 1594:
case 3842:
case 893:
case 2614:
case 19:
case 1687:
case 748:
case 1442:
case 2232:
case 3641:
case 872:
case 2952:
case 2999:
case 3680:
case 3134:
case 1413:
case 825:
case 2538:
case 3393:
case 1839:
case 3270:
case 531:
case 804:
case 3910:
case 3523:
case 3327:
case 2941:
case 3914:
case 719:
case 1016:
case 5:
case 3741:
case 229:
case 912:
case 1009:
case 961:
case 1205:
case 2385:
case 2714:
case 2888:
case 201:
case 68:
case 2746:
case 2079:
case 826:
case 2889:
case 2685:
case 1044:
case 1040:
case 782:
case 3715:
case 3384:
case 1772:
case 31:
case 3937:
case 442:
case 1838:
case 670:
case 3693:
case 1335:
case 2539:
case 2737:
case 2797:
case 1472:
case 3671:
case 1898:
case 3082:
case 230:
case 472:
case 1606:
case 1318:
case 640:
case 2938:
case 3872:
case 3997:
case 1129:
case 3166:
case 1619:
case 1424:
case 1815:
case 2142:
case 1351:
case 2376:
case 1420:
case 3498:
case 3203:
case 3514:
case 3510:
case 4087:
case 1525:
case 2151:
case 1342:
case 983:
case 1862:
case 656:
case 426:
case 3887:
case 1361:
case 223:
case 144:
case 3441:
case 1642:
case 2562:
case 2410:
case 3077:
case 2119:
case 1988:
case 2414:
case 2629:
case 2161:
case 3333:
case 842:
case 2598:
case 260:
case 1306:
case 1695:
case 1899:
case 655:
case 3739:
case 3371:
case 3452:
case 4024:
case 3194:
case 2676:
case 791:
case 137:
case 1618:
case 3190:
case 2939:
case 1753:
case 3505:
case 3412:
case 1611:
case 3560:
case 2555:
case 3085:
case 3289:
case 3378:
case 2027:
case 651:
case 2496:
case 3679:
case 3875:
case 1030:
case 409:
case 1903:
case 2168:
case 1034:
case 770:
case 3404:
case 1981:
case 3947:
case 78:
case 1297:
case 2454:
case 2093:
case 682:
case 1522:
case 1804:
case 3116:
case 398:
case 1368:
case 1800:
case 1345:
case 2870:
case 2158:
case 2874:
case 3140:
case 2111:
case 2621:
case 497:
case 2084:
case 857:
case 1849:
case 796:
case 2822:
case 2504:
case 2213:
case 3491:
case 1855:
case 3:
case 4075:
case 803:
case 389:
case 421:
case 2169:
case 331:
case 3773:
case 1891:
case 3678:
case 3731:
case 3379:
case 2405:
case 143:
case 1066:
case 224:
case 2955:
case 1873:
case 2677:
case 3905:
case 3960:
case 2764:
case 809:
case 3536:
case 1307:
case 2991:
case 84:
case 966:
case 1210:
case 627:
case 1974:
case 3343:
case 3547:
case 3863:
case 358:
case 3886:
case 2949:
case 1463:
case 3157:
case 2382:
case 565:
case 668:
case 2881:
case 3704:
case 965:
case 2754:
case 3748:
case 248:
case 480:
case 1237:
case 2447:
case 2033:
case 535:
case 2904:
case 2948:
case 457:
case 1056:
case 2965:
case 897:
case 4063:
case 1453:
case 3996:
case 821:
case 3167:
case 1094:
case 403:
case 2573:
case 1090:
case 1332:
case 936:
case 1607:
case 3648:
case 3665:
case 1826:
case 2654:
case 3600:
case 3349:
case 152:
case 2650:
case 3982:
case 990:
case 2038:
case 2782:
case 1105:
case 2943:
case 3521:
case 4045:
case 1458:
case 3391:
case 576:
case 3612:
case 1879:
case 854:
case 1675:
case 2844:
case 341:
case 3858:
case 2364:
case 1707:
case 3479:
case 2840:
case 2696:
case 2360:
case 2808:
case 3312:
case 4058:
case 2579:
case 1375:
case 1150:
case 2777:
case 1459:
case 4011:
case 251:
case 1154:
case 1732:
case 3478:
case 1088:
case 3892:
case 1544:
case 2421:
case 3217:
case 2526:
case 3365:
case 2354:
case 590:
case 3300:
case 3649:
case 701:
case 1967:
case 678:
case 4069:
case 1468:
case 2099:
case 120:
case 3582:
case 1136:
case 987:
case 2543:
case 2867:
case 908:
case 2347:
case 2251:
case 1663:
case 1745:
case 3201:
case 3832:
case 1557:
case 454:
case 894:
case 1353:
case 2477:
case 1916:
case 1759:
case 163:
case 1909:
case 606:
case 3181:
case 3631:
case 3778:
case 946:
case 1147:
case 415:
case 1229:
case 730:
case 1025:
case 1758:
case 2186:
case 546:
case 2261:
case 1653:
case 1944:
case 371:
case 3577:
case 1940:
case 2062:
case 2163:
case 3294:
case 3256:
case 268:
case 213:
case 508:
case 3443:
case 1843:
case 2482:
case 1363:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759500001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,];
var gg_b = "1759500001/";

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
