// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 3766:
case 2240:
case 1518:
case 282:
case 3135:
case 397:
case 1169:
case 2178:
case 237:
case 3752:
case 1235:
case 844:
case 2585:
case 2613:
case 3240:
case 2175:
case 1012:
case 3191:
case 592:
case 603:
case 276:
case 179:
case 2500:
case 3457:
case 3219:
case 2521:
case 2910:
case 501:
case 3866:
case 3007:
case 216:
case 1114:
case 3262:
case 3335:
case 178:
case 3531:
case 3800:
case 2013:
case 1784:
case 1822:
case 1153:
case 4004:
case 2631:
case 1201:
case 1634:
case 1199:
case 2966:
case 70:
case 2787:
case 2719:
case 3609:
case 3506:
case 585:
case 121:
case 2988:
case 1614:
case 1326:
case 3917:
case 3401:
case 1832:
case 3905:
case 697:
case 557:
case 2707:
case 1430:
case 3840:
case 1303:
case 1041:
case 3474:
case 1742:
case 797:
case 3967:
case 3616:
case 849:
case 3889:
case 2838:
case 3212:
case 2494:
case 1557:
case 3202:
case 771:
case 2864:
case 2417:
case 1936:
case 427:
case 1776:
case 3774:
case 3950:
case 1350:
case 1643:
case 3662:
case 2774:
case 1062:
case 930:
case 2426:
case 1093:
case 659:
case 2149:
case 2552:
case 711:
case 1206:
case 1423:
case 3511:
case 38:
case 3282:
case 2183:
case 4081:
case 1561:
case 2536:
case 3522:
case 297:
case 1156:
case 2793:
case 1340:
case 2090:
case 2287:
case 1039:
case 3351:
case 1772:
case 3908:
case 3041:
case 2131:
case 90:
case 1550:
case 1155:
case 2053:
case 1836:
case 1645:
case 1908:
case 2164:
case 312:
case 4065:
case 1940:
case 2695:
case 3055:
case 2139:
case 288:
case 499:
case 3856:
case 57:
case 2814:
case 551:
case 3222:
case 1907:
case 2887:
case 326:
case 1493:
case 1879:
case 3554:
case 3071:
case 3494:
case 3685:
case 306:
case 2258:
case 3799:
case 3778:
case 1037:
case 1053:
case 3957:
case 1800:
case 3458:
case 867:
case 1056:
case 1734:
case 217:
case 255:
case 1740:
case 54:
case 3712:
case 2082:
case 3678:
case 4046:
case 2118:
case 1855:
case 1387:
case 3780:
case 1956:
case 1404:
case 3862:
case 3361:
case 3487:
case 1482:
case 2201:
case 2892:
case 1960:
case 3817:
case 2992:
case 1658:
case 2696:
case 3842:
case 3058:
case 892:
case 3472:
case 1029:
case 2621:
case 2514:
case 2037:
case 863:
case 1935:
case 976:
case 2436:
case 799:
case 2367:
case 3072:
case 1030:
case 2394:
case 1001:
case 407:
case 3922:
case 3452:
case 281:
case 1403:
case 2346:
case 1693:
case 1537:
case 880:
case 2489:
case 2890:
case 3455:
case 683:
case 1299:
case 3154:
case 2233:
case 1223:
case 2975:
case 3252:
case 2265:
case 808:
case 3061:
case 1226:
case 184:
case 3167:
case 3739:
case 63:
case 50:
case 2591:
case 2852:
case 173:
case 224:
case 476:
case 2747:
case 1266:
case 280:
case 3215:
case 177:
case 1336:
case 3830:
case 3854:
case 0:
case 995:
case 1911:
case 1513:
case 3090:
case 3002:
case 3254:
case 1059:
case 688:
case 197:
case 1629:
case 3037:
case 3397:
case 232:
case 4071:
case 137:
case 2130:
case 2786:
case 1726:
case 3718:
case 266:
case 3601:
case 3833:
case 862:
case 3216:
case 1863:
case 1809:
case 383:
case 387:
case 3103:
case 3257:
case 2528:
case 1074:
case 1442:
case 2187:
case 3843:
case 560:
case 2019:
case 2017:
case 2950:
case 1339:
case 1370:
case 3459:
case 4047:
case 3318:
case 541:
case 3218:
case 2847:
case 3009:
case 291:
case 3973:
case 3415:
case 819:
case 2242:
case 2994:
case 1241:
case 3281:
case 441:
case 649:
case 842:
case 3276:
case 1384:
case 1109:
case 147:
case 3172:
case 2518:
case 1801:
case 1874:
case 2557:
case 2423:
case 135:
case 1113:
case 597:
case 330:
case 2595:
case 192:
case 3725:
case 2644:
case 3337:
case 4051:
case 826:
case 2220:
case 1792:
case 94:
case 1575:
case 497:
case 1210:
case 1781:
case 4034:
case 505:
case 1871:
case 1547:
case 853:
case 3692:
case 2771:
case 3420:
case 2207:
case 2093:
case 1180:
case 1437:
case 195:
case 1089:
case 3644:
case 357:
case 2647:
case 2030:
case 3162:
case 985:
case 1660:
case 2048:
case 1586:
case 640:
case 2033:
case 2862:
case 1885:
case 190:
case 4021:
case 3471:
case 3781:
case 593:
case 2615:
case 3575:
case 3643:
case 2634:
case 1524:
case 465:
case 714:
case 2363:
case 2895:
case 2772:
case 2869:
case 3412:
case 2704:
case 2667:
case 735:
case 3408:
case 1866:
case 233:
case 1669:
case 3371:
case 830:
case 2228:
case 3527:
case 715:
case 2440:
case 1756:
case 3419:
case 2395:
case 1489:
case 1479:
case 3763:
case 2231:
case 1197:
case 3193:
case 1132:
case 353:
case 3336:
case 1415:
case 2681:
case 1486:
case 3079:
case 1900:
case 3726:
case 2005:
case 1837:
case 921:
case 489:
case 1308:
case 4028:
case 2376:
case 319:
case 705:
case 877:
case 2703:
case 1361:
case 3686:
case 3798:
case 1724:
case 1224:
case 2422:
case 158:
case 2527:
case 385:
case 2176:
case 2077:
case 2538:
case 3012:
case 1568:
case 3379:
case 2846:
case 769:
case 1181:
case 2467:
case 2298:
case 2999:
case 2486:
case 3698:
case 2912:
case 570:
case 4017:
case 1401:
case 707:
case 615:
case 1906:
case 3430:
case 1831:
case 854:
case 989:
case 882:
case 638:
case 2266:
case 822:
case 2739:
case 1055:
case 2311:
case 2336:
case 859:
case 152:
case 3373:
case 2810:
case 2157:
case 1549:
case 596:
case 3966:
case 2653:
case 440:
case 3703:
case 109:
case 1741:
case 458:
case 940:
case 1090:
case 1814:
case 908:
case 2181:
case 2522:
case 527:
case 1841:
case 2919:
case 2544:
case 3680:
case 3820:
case 3987:
case 3271:
case 3677:
case 1105:
case 2870:
case 2162:
case 2612:
case 3996:
case 3105:
case 344:
case 670:
case 3082:
case 1425:
case 1803:
case 2539:
case 2063:
case 2717:
case 2169:
case 3735:
case 3292:
case 1764:
case 3042:
case 3064:
case 3449:
case 3938:
case 156:
case 1694:
case 3775:
case 1495:
case 2085:
case 3294:
case 127:
case 774:
case 982:
case 3879:
case 747:
case 1238:
case 2639:
case 676:
case 2307:
case 1100:
case 2196:
case 2915:
case 1715:
case 3251:
case 2441:
case 452:
case 1789:
case 1712:
case 1848:
case 3715:
case 2050:
case 2672:
case 1729:
case 1131:
case 3081:
case 363:
case 3147:
case 3306:
case 335:
case 616:
case 1582:
case 1739:
case 1650:
case 55:
case 2640:
case 2144:
case 1828:
case 1278:
case 2253:
case 1194:
case 2785:
case 3881:
case 2576:
case 4072:
case 285:
case 2074:
case 2027:
case 3220:
case 1018:
case 656:
case 244:
case 2474:
case 2960:
case 3526:
case 1500:
case 2971:
case 2455:
case 3599:
case 2977:
case 3513:
case 2055:
case 2805:
case 451:
case 352:
case 2348:
case 599:
case 932:
case 3976:
case 1556:
case 1753:
case 3068:
case 3898:
case 3654:
case 1805:
case 686:
case 2286:
case 3272:
case 532:
case 2010:
case 2790:
case 1304:
case 1487:
case 2222:
case 2031:
case 185:
case 1859:
case 199:
case 3909:
case 2872:
case 2884:
case 3273:
case 851:
case 1924:
case 3168:
case 1652:
case 1796:
case 1463:
case 3213:
case 2429:
case 1307:
case 2875:
case 2545:
case 919:
case 425:
case 786:
case 333:
case 3444:
case 1007:
case 904:
case 839:
case 3758:
case 3432:
case 1049:
case 3533:
case 3853:
case 2997:
case 3568:
case 1601:
case 2942:
case 488:
case 3441:
case 1599:
case 2596:
case 3590:
case 2331:
case 4084:
case 3562:
case 1509:
case 3025:
case 1572:
case 2295:
case 2431:
case 418:
case 897:
case 359:
case 3267:
case 847:
case 1281:
case 586:
case 2035:
case 1436:
case 49:
case 886:
case 3275:
case 779:
case 2393:
case 3927:
case 2548:
case 2654:
case 3944:
case 1807:
case 1068:
case 51:
case 3489:
case 1072:
case 2413:
case 2660:
case 2403:
case 3969:
case 888:
case 307:
case 2861:
case 3166:
case 3069:
case 3289:
case 2529:
case 1829:
case 1559:
case 14:
case 85:
case 3848:
case 1391:
case 3754:
case 920:
case 60:
case 2600:
case 1397:
case 986:
case 1318:
case 1433:
case 2718:
case 1743:
case 3525:
case 28:
case 2889:
case 2110:
case 114:
case 2692:
case 2202:
case 1498:
case 3112:
case 2070:
case 1869:
case 1986:
case 113:
case 1456:
case 1698:
case 99:
case 720:
case 308:
case 1150:
case 757:
case 446:
case 474:
case 1418:
case 1398:
case 1144:
case 3200:
case 2150:
case 4042:
case 155:
case 3700:
case 1600:
case 1679:
case 2918:
case 3496:
case 1043:
case 3160:
case 3157:
case 303:
case 263:
case 918:
case 454:
case 3885:
case 393:
case 752:
case 2219:
case 3811:
case 1664:
case 1684:
case 1813:
case 1185:
case 923:
case 3118:
case 3139:
case 520:
case 2001:
case 1076:
case 1365:
case 4093:
case 321:
case 3888:
case 3524:
case 3668:
case 1330:
case 3004:
case 2967:
case 2274:
case 550:
case 3583:
case 2641:
case 1851:
case 1245:
case 3283:
case 193:
case 800:
case 1287:
case 2947:
case 728:
case 2501:
case 2998:
case 2129:
case 144:
case 1036:
case 3651:
case 2879:
case 2763:
case 2753:
case 2214:
case 3627:
case 3581:
case 934:
case 191:
case 2439:
case 1228:
case 4088:
case 3360:
case 2855:
case 2530:
case 1536:
case 3451:
case 2389:
case 1369:
case 3460:
case 3409:
case 1249:
case 2845:
case 3201:
case 871:
case 3864:
case 3904:
case 1655:
case 2581:
case 2051:
case 2709:
case 2366:
case 3745:
case 4024:
case 1683:
case 2985:
case 1626:
case 341:
case 3896:
case 1745:
case 3588:
case 133:
case 2047:
case 3886:
case 1172:
case 3782:
case 3937:
case 1811:
case 3719:
case 2957:
case 2341:
case 205:
case 2708:
case 582:
case 1046:
case 533:
case 3208:
case 512:
case 222:
case 3205:
case 685:
case 2770:
case 2133:
case 1633:
case 2065:
case 1232:
case 3106:
case 1977:
case 116:
case 34:
case 554:
case 3918:
case 2706:
case 1164:
case 1657:
case 3417:
case 1768:
case 348:
case 4045:
case 667:
case 269:
case 2684:
case 1795:
case 3232:
case 552:
case 56:
case 1727:
case 961:
case 1987:
case 3264:
case 443:
case 1259:
case 1196:
case 2560:
case 3814:
case 3565:
case 3676:
case 1955:
case 413:
case 738:
case 2537:
case 3652:
case 3132:
case 650:
case 2901:
case 204:
case 2362:
case 2275:
case 478:
case 77:
case 2487:
case 2567:
case 1230:
case 3907:
case 2247:
case 496:
case 2116:
case 3290:
case 968:
case 737:
case 2369:
case 3656:
case 3:
case 614:
case 2097:
case 32:
case 969:
case 3093:
case 1334:
case 2745:
case 3142:
case 1160:
case 970:
case 2587:
case 490:
case 1649:
case 1783:
case 3359:
case 86:
case 1494:
case 3970:
case 98:
case 1505:
case 1388:
case 3228:
case 701:
case 1280:
case 2147:
case 2079:
case 722:
case 3333:
case 1351:
case 3185:
case 796:
case 694:
case 1127:
case 1358:
case 2490:
case 3000:
case 206:
case 3793:
case 2094:
case 2616:
case 801:
case 3249:
case 3959:
case 64:
case 3797:
case 3998:
case 2882:
case 376:
case 1429:
case 4027:
case 2385:
case 2163:
case 2038:
case 2903:
case 412:
case 584:
case 1032:
case 16:
case 351:
case 286:
case 3113:
case 723:
case 183:
case 3710:
case 3667:
case 2611:
case 2916:
case 1461:
case 1135:
case 2911:
case 1294:
case 2392:
case 2575:
case 2748:
case 2604:
case 2822:
case 3990:
case 3171:
case 3779:
case 3094:
case 1865:
case 3831:
case 2674:
case 3325:
case 252:
case 2076:
case 610:
case 1876:
case 3722:
case 1967:
case 2126:
case 300:
case 2965:
case 462:
case 2983:
case 1338:
case 620:
case 1714:
case 1239:
case 3713:
case 912:
case 1730:
case 2693:
case 2736:
case 566:
case 3550:
case 3529:
case 2294:
case 3501:
case 3628:
case 3809:
case 3422:
case 3479:
case 1913:
case 2809:
case 332:
case 1071:
case 1314:
case 1538:
case 21:
case 3470:
case 1086:
case 1872:
case 2310:
case 3414:
case 2309:
case 3436:
case 3615:
case 3086:
case 3787:
case 200:
case 3485:
case 1747:
case 3136:
case 3625:
case 1348:
case 2360:
case 3821:
case 2943:
case 1267:
case 1070:
case 2252:
case 956:
case 2306:
case 1949:
case 3146:
case 3065:
case 1544:
case 3508:
case 1749:
case 1124:
case 1095:
case 3097:
case 954:
case 1704:
case 470:
case 3555:
case 558:
case 1467:
case 1234:
case 3190:
case 1583:
case 1767:
case 727:
case 3851:
case 3593:
case 731:
case 805:
case 946:
case 3788:
case 1184:
case 2541:
case 3981:
case 1139:
case 2948:
case 3603:
case 3155:
case 1449:
case 678:
case 3694:
case 296:
case 2374:
case 2735:
case 996:
case 3320:
case 1473:
case 2645:
case 2632:
case 1606:
case 2243:
case 249:
case 2760:
case 2835:
case 279:
case 3313:
case 1593:
case 910:
case 835:
case 483:
case 807:
case 2769:
case 331:
case 3429:
case 3348:
case 1293:
case 1773:
case 1532:
case 2542:
case 1246:
case 2236:
case 1838:
case 3516:
case 2059:
case 1690:
case 1996:
case 2382:
case 2073:
case 3887:
case 1965:
case 2476:
case 2493:
case 1820:
case 3518:
case 939:
case 1052:
case 2934:
case 3161:
case 3480:
case 1335:
case 503:
case 2848:
case 2702:
case 2946:
case 3217:
case 2430:
case 3962:
case 1081:
case 3461:
case 1798:
case 578:
case 264:
case 693:
case 1503:
case 2161:
case 2954:
case 1011:
case 3083:
case 781:
case 2562:
case 310:
case 1483:
case 30:
case 3056:
case 181:
case 2733:
case 3448:
case 3315:
case 625:
case 189:
case 3236:
case 1045:
case 3672:
case 1148:
case 511:
case 3602:
case 3572:
case 3413:
case 347:
case 3534:
case 1797:
case 3984:
case 1222:
case 1069:
case 100:
case 3923:
case 1651:
case 2899:
case 2676:
case 2424:
case 2259:
case 311:
case 203:
case 1504:
case 214:
case 164:
case 151:
case 1120:
case 3062:
case 3804:
case 1691:
case 1283:
case 267:
case 3704:
case 2390:
case 4036:
case 984:
case 1514:
case 2701:
case 2526:
case 3943:
case 528:
case 80:
case 1731:
case 2976:
case 3523:
case 391:
case 529:
case 2024:
case 2969:
case 1289:
case 74:
case 295:
case 1958:
case 1274:
case 1347:
case 231:
case 3393:
case 1447:
case 775:
case 3080:
case 3702:
case 2057:
case 971:
case 1079:
case 2830:
case 2137:
case 3482:
case 1275:
case 2776:
case 1699:
case 1400:
case 2656:
case 2922:
case 1878:
case 1277:
case 994:
case 587:
case 2927:
case 3838:
case 1815:
case 544:
case 2816:
case 4008:
case 690:
case 1897:
case 1140:
case 1492:
case 101:
case 3978:
case 1265:
case 196:
case 1966:
case 2419:
case 763:
case 3874:
case 997:
case 3011:
case 1530:
case 770:
case 1812:
case 2496:
case 838:
case 3965:
case 2254:
case 730:
case 2980:
case 338:
case 3043:
case 3491:
case 818:
case 3510:
case 1889:
case 2009:
case 10:
case 2384:
case 3197:
case 1464:
case 3355:
case 744:
case 1099:
case 3711:
case 2958:
case 471:
case 3650:
case 1101:
case 1982:
case 809:
case 3403:
case 3997:
case 389:
case 2380:
case 1159:
case 2480:
case 2120:
case 1527:
case 3260:
case 2756:
case 1790:
case 1215:
case 1323:
case 364:
case 374:
case 2406:
case 3925:
case 1355:
case 618:
case 3256:
case 1817:
case 780:
case 2921:
case 449:
case 2391:
case 112:
case 1636:
case 2570:
case 581:
case 2628:
case 1510:
case 1451:
case 2012:
case 1736:
case 521:
case 1130:
case 392:
case 900:
case 1914:
case 2851:
case 2690:
case 2842:
case 831:
case 402:
case 3115:
case 1618:
case 3500:
case 2483:
case 2194:
case 652:
case 3230:
case 1362:
case 2379:
case 3816:
case 1602:
case 1656:
case 1728:
case 2796:
case 1920:
case 2409:
case 12:
case 3536:
case 1685:
case 4003:
case 176:
case 1512:
case 1475:
case 1006:
case 832:
case 1237:
case 3152:
case 3891:
case 2721:
case 417:
case 2826:
case 1040:
case 1675:
case 2447:
case 2342:
case 766:
case 2285:
case 477:
case 3717:
case 3066:
case 681:
case 1522:
case 360:
case 855:
case 240:
case 2614:
case 3280:
case 366:
case 1213:
case 2962:
case 2478:
case 647:
case 2775:
case 2453:
case 925:
case 2465:
case 3614:
case 278:
case 2534:
case 704:
case 1264:
case 2662:
case 2619:
case 621:
case 2665:
case 577:
case 1853:
case 3442:
case 1137:
case 1709:
case 1424:
case 2415:
case 1446:
case 3532:
case 447:
case 2866:
case 40:
case 66:
case 3955:
case 1393:
case 406:
case 889:
case 2345:
case 677:
case 2762:
case 3137:
case 1688:
case 1186:
case 2101:
case 941:
case 1951:
case 118:
case 3332:
case 2044:
case 2462:
case 2387:
case 20:
case 2434:
case 573:
case 3813:
case 3270:
case 3199:
case 4030:
case 3438:
case 636:
case 1458:
case 2396:
case 3169:
case 1411:
case 2625:
case 1416:
case 2025:
case 2368:
case 887:
case 2323:
case 630:
case 3829:
case 1472:
case 513:
case 803:
case 1777:
case 1174:
case 1642:
case 2398:
case 2321:
case 1171:
case 3994:
case 1985:
case 5:
case 298:
case 1881:
case 1111:
case 2218:
case 1752:
case 881:
case 3244:
case 2332:
case 4058:
case 1567:
case 902:
case 2956:
case 1405:
case 1750:
case 1565:
case 2241:
case 411:
case 3563:
case 1506:
case 2907:
case 3657:
case 1883:
case 929:
case 2749:
case 3140:
case 3696:
case 1927:
case 1484:
case 1976:
case 1579:
case 4001:
case 3948:
case 3988:
case 3099:
case 3278:
case 322:
case 2913:
case 524:
case 3338:
case 2188:
case 1343:
case 1611:
case 1631:
case 1860:
case 1471:
case 2438:
case 2766:
case 172:
case 3949:
case 3931:
case 522:
case 1145:
case 1574:
case 891:
case 975:
case 1793:
case 221:
case 4000:
case 4054:
case 2160:
case 825:
case 3892:
case 2917:
case 3410:
case 1596:
case 753:
case 3464:
case 68:
case 1189:
case 2041:
case 1478:
case 3674:
case 1625:
case 3520:
case 3424:
case 3596:
case 824:
case 145:
case 1412:
case 733:
case 436:
case 2115:
case 2894:
case 2054:
case 1972:
case 2876:
case 350:
case 866:
case 2352:
case 4079:
case 1212:
case 668:
case 4061:
case 793:
case 3180:
case 3183:
case 3958:
case 2525:
case 1975:
case 3114:
case 1973:
case 1435:
case 1971:
case 1359:
case 915:
case 2569:
case 1615:
case 1031:
case 2834:
case 1819:
case 1376:
case 3995:
case 2046:
case 229:
case 3761:
case 3872:
case 2995:
case 1989:
case 3946:
case 4013:
case 2778:
case 1002:
case 3701:
case 2091:
case 3445:
case 1000:
case 2100:
case 1571:
case 1930:
case 3587:
case 213:
case 3558:
case 3049:
case 2589:
case 2036:
case 2386:
case 2425:
case 661:
case 4066:
case 1188:
case 3807:
case 3177:
case 794:
case 175:
case 2800:
case 662:
case 531:
case 1539:
case 43:
case 623:
case 106:
case 3008:
case 3175:
case 3203:
case 381:
case 403:
case 1374:
case 2018:
case 3600:
case 434:
case 123:
case 73:
case 1515:
case 2755:
case 3624:
case 2863:
case 2974:
case 3189:
case 1680:
case 3974:
case 3453:
case 1528:
case 2045:
case 2140:
case 2421:
case 1992:
case 215:
case 3664:
case 2312:
case 3594:
case 673:
case 1542:
case 2973:
case 3906:
case 3569:
case 2296:
case 1491:
case 1644:
case 2020:
case 3181:
case 1580:
case 1406:
case 591:
case 3462:
case 743:
case 3129:
case 3822:
case 2235:
case 3953:
case 3198:
case 2883:
case 3920:
case 2515:
case 2543:
case 1219:
case 45:
case 2402:
case 1242:
case 2125:
case 3303:
case 3687:
case 1821:
case 852:
case 1630:
case 1258:
case 1469:
case 283:
case 355:
case 2505:
case 3630:
case 408:
case 1662:
case 598:
case 473:
case 3074:
case 1250:
case 883:
case 745:
case 260:
case 4022:
case 4083:
case 1915:
case 1887:
case 1389:
case 3221:
case 211:
case 78:
case 3544:
case 2905:
case 1407:
case 2193:
case 2349:
case 2963:
case 1533:
case 3844:
case 2339:
case 1711:
case 1198:
case 1624:
case 2359:
case 4059:
case 1588:
case 3846:
case 2113:
case 2844:
case 2498:
case 543:
case 3477:
case 2166:
case 2941:
case 2666:
case 827:
case 2724:
case 1302:
case 3126:
case 3612:
case 1154:
case 1856:
case 758:
case 2237:
case 3425:
case 420:
case 3690:
case 2195:
case 141:
case 1013:
case 437:
case 1419:
case 3635:
case 913:
case 207:
case 1248:
case 1984:
case 519:
case 3734:
case 3031:
case 2365:
case 1421:
case 576:
case 1367:
case 2276:
case 798:
case 2924:
case 3421:
case 2173:
case 3078:
case 2799:
case 2317:
case 3595:
case 2316:
case 601:
case 3783:
case 287:
case 3828:
case 3100:
case 373:
case 3574:
case 3637:
case 2197:
case 1775:
case 3269:
case 3026:
case 3242:
case 2225:
case 1107:
case 607:
case 128:
case 2742:
case 3298:
case 3629:
case 3466:
case 3116:
case 1716:
case 2689:
case 3952:
case 2179:
case 2740:
case 11:
case 3545:
case 634:
case 829:
case 17:
case 1420:
case 1253:
case 2566:
case 1974:
case 3509:
case 540:
case 539:
case 3808:
case 1806:
case 242:
case 1754:
case 1608:
case 2608:
case 2582:
case 3179:
case 1794:
case 2250:
case 2142:
case 2364:
case 3317:
case 2737:
case 1665:
case 327:
case 3287:
case 3063:
case 1603:
case 1383:
case 2900:
case 382:
case 3834:
case 256:
case 1564:
case 1474:
case 1706:
case 168:
case 3992:
case 2203:
case 2685:
case 876:
case 1073:
case 3836:
case 2507:
case 2897:
case 3013:
case 1858:
case 1833:
case 1912:
case 2297:
case 2728:
case 828:
case 405:
case 3250:
case 1707:
case 3860:
case 549:
case 1021:
case 1733:
case 901:
case 3538:
case 482:
case 1173:
case 1523:
case 1297:
case 894:
case 1562:
case 4009:
case 1231:
case 2029:
case 271:
case 202:
case 632:
case 3670:
case 3391:
case 346:
case 3826:
case 3255:
case 1485:
case 1438:
case 2052:
case 812:
case 637:
case 784:
case 3386:
case 3901:
case 1309:
case 3552:
case 4053:
case 2725:
case 272:
case 2904:
case 2516:
case 3302:
case 3757:
case 1057:
case 3723:
case 3484:
case 3127:
case 3940:
case 1686:
case 1516:
case 1301:
case 4025:
case 3871:
case 2192:
case 1413:
case 2789:
case 2593:
case 448:
case 395:
case 1999:
case 1695:
case 3243:
case 734:
case 3859:
case 3021:
case 2730:
case 3675:
case 3475:
case 1862:
case 396:
case 1027:
case 61:
case 1306:
case 3367:
case 3733:
case 110:
case 2944:
case 755:
case 564:
case 198:
case 556:
case 2448:
case 645:
case 3383:
case 1995:
case 1552:
case 872:
case 2659:
case 2135:
case 3382:
case 604:
case 3818:
case 981:
case 761:
case 2952:
case 1507:
case 479:
case 613:
case 3916:
case 962:
case 1279:
case 3589:
case 2383:
case 2682:
case 2388:
case 3556:
case 700:
case 212:
case 2559:
case 2212:
case 3742:
case 1382:
case 1024:
case 2356:
case 469:
case 545:
case 3810:
case 3125:
case 4082:
case 1439:
case 2886:
case 899:
case 1202:
case 1417:
case 2042:
case 1243:
case 3365:
case 1637:
case 1092:
case 87:
case 421:
case 2565:
case 588:
case 848:
case 3573:
case 1227:
case 3426:
case 9:
case 1717:
case 999:
case 3636:
case 3288:
case 3728:
case 1457:
case 250:
case 3369:
case 2520:
case 2155:
case 2929:
case 672:
case 2561:
case 2167:
case 91:
case 3138:
case 1204:
case 1673:
case 88:
case 1834:
case 525:
case 3247:
case 3993:
case 1042:
case 4049:
case 2026:
case 1379:
case 2412:
case 2933:
case 3720:
case 4011:
case 4019:
case 334:
case 3029:
case 3669:
case 1296:
case 475:
case 2315:
case 2102:
case 1166:
case 3347:
case 358:
case 3561:
case 1899:
case 3765:
case 1613:
case 2226:
case 423:
case 2452:
case 3934:
case 574:
case 460:
case 3463:
case 317:
case 651:
case 2000:
case 1216:
case 3023:
case 1678:
case 3266:
case 3245:
case 1823:
case 2191:
case 3330:
case 3144:
case 2204:
case 1324:
case 3259:
case 2095:
case 394:
case 134:
case 864:
case 3586:
case 2205:
case 3585:
case 3141:
case 2185:
case 1748:
case 3368:
case 171:
case 3109:
case 3559:
case 1065:
case 2669:
case 1211:
case 2798:
case 4031:
case 2277:
case 166:
case 1632:
case 2186:
case 414:
case 2200:
case 2722:
case 1845:
case 365:
case 537:
case 1818:
case 3231:
case 3356:
case 3519:
case 682:
case 463:
case 1928:
case 1990:
case 2782:
case 3418:
case 1560:
case 1573:
case 444:
case 3225:
case 2767:
case 92:
case 225:
case 1627:
case 1932:
case 313:
case 1519:
case 874:
case 1926:
case 1453:
case 1083:
case 132:
case 3339:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1720432802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,];
var gg_b = "1720432802/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
