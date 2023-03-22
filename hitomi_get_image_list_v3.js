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
case 85:
case 397:
case 955:
case 3685:
case 299:
case 1838:
case 1785:
case 1171:
case 3868:
case 3464:
case 445:
case 3493:
case 2814:
case 3339:
case 1570:
case 915:
case 3673:
case 448:
case 3772:
case 250:
case 1098:
case 3040:
case 2936:
case 209:
case 462:
case 962:
case 2390:
case 1835:
case 948:
case 3742:
case 2402:
case 2244:
case 331:
case 2954:
case 1356:
case 2054:
case 3316:
case 272:
case 1286:
case 2685:
case 827:
case 3927:
case 3191:
case 3332:
case 2747:
case 3513:
case 2552:
case 659:
case 2948:
case 3766:
case 3873:
case 3719:
case 3551:
case 575:
case 1560:
case 3370:
case 252:
case 1083:
case 2619:
case 1278:
case 2445:
case 2758:
case 3944:
case 1718:
case 2157:
case 2934:
case 762:
case 1545:
case 3216:
case 1219:
case 3831:
case 287:
case 3912:
case 107:
case 1563:
case 597:
case 2137:
case 2513:
case 701:
case 3525:
case 486:
case 3776:
case 958:
case 1732:
case 979:
case 484:
case 2288:
case 3497:
case 176:
case 3552:
case 1249:
case 2494:
case 3060:
case 2382:
case 11:
case 859:
case 3294:
case 2398:
case 278:
case 3758:
case 3770:
case 1247:
case 2333:
case 1866:
case 3346:
case 1365:
case 868:
case 3416:
case 42:
case 2975:
case 2396:
case 1464:
case 788:
case 2489:
case 3504:
case 1796:
case 2643:
case 2985:
case 1344:
case 1622:
case 3617:
case 471:
case 132:
case 3824:
case 3042:
case 1373:
case 2105:
case 1890:
case 852:
case 1388:
case 1162:
case 3067:
case 212:
case 338:
case 1443:
case 2894:
case 1113:
case 2845:
case 333:
case 3577:
case 3775:
case 1962:
case 1730:
case 823:
case 986:
case 1980:
case 1068:
case 668:
case 1548:
case 3736:
case 2063:
case 364:
case 2413:
case 426:
case 2153:
case 1954:
case 221:
case 3322:
case 3818:
case 898:
case 3328:
case 1674:
case 671:
case 2344:
case 2598:
case 1381:
case 3840:
case 970:
case 284:
case 3646:
case 3681:
case 1559:
case 308:
case 2310:
case 2493:
case 2937:
case 1515:
case 3502:
case 3186:
case 3475:
case 3457:
case 950:
case 3523:
case 1544:
case 109:
case 1605:
case 2762:
case 1222:
case 475:
case 1101:
case 2049:
case 3501:
case 3244:
case 749:
case 1652:
case 1686:
case 3712:
case 705:
case 3797:
case 1841:
case 1252:
case 412:
case 3097:
case 458:
case 2050:
case 2479:
case 422:
case 2055:
case 891:
case 3641:
case 2046:
case 2575:
case 1965:
case 2463:
case 2103:
case 838:
case 2737:
case 1973:
case 1950:
case 3155:
case 3924:
case 578:
case 2319:
case 193:
case 938:
case 3152:
case 3266:
case 1210:
case 441:
case 3205:
case 1259:
case 1479:
case 797:
case 1218:
case 586:
case 285:
case 2818:
case 2041:
case 2849:
case 2698:
case 1255:
case 310:
case 60:
case 2403:
case 692:
case 4056:
case 1183:
case 3982:
case 4052:
case 144:
case 395:
case 3773:
case 3263:
case 1293:
case 921:
case 2529:
case 4039:
case 427:
case 1576:
case 3909:
case 1833:
case 2116:
case 821:
case 1312:
case 2239:
case 3195:
case 992:
case 888:
case 3227:
case 266:
case 2:
case 3910:
case 2185:
case 298:
case 3143:
case 3002:
case 4074:
case 2388:
case 512:
case 511:
case 1094:
case 29:
case 3079:
case 695:
case 3815:
case 2015:
case 3518:
case 1739:
case 2932:
case 3443:
case 2265:
case 2794:
case 188:
case 463:
case 158:
case 3447:
case 854:
case 91:
case 1735:
case 3624:
case 3050:
case 1455:
case 1359:
case 879:
case 2608:
case 2002:
case 3563:
case 2219:
case 2393:
case 349:
case 2143:
case 3782:
case 186:
case 1508:
case 1277:
case 3991:
case 3273:
case 1217:
case 987:
case 3001:
case 1741:
case 2621:
case 3698:
case 1458:
case 874:
case 2410:
case 3752:
case 134:
case 472:
case 86:
case 3374:
case 1924:
case 2928:
case 1867:
case 2038:
case 3555:
case 3613:
case 708:
case 328:
case 354:
case 3778:
case 2210:
case 2449:
case 1072:
case 3396:
case 775:
case 3100:
case 3230:
case 2869:
case 726:
case 3851:
case 3668:
case 1949:
case 1524:
case 2018:
case 3008:
case 3217:
case 3932:
case 2381:
case 622:
case 2407:
case 4027:
case 3549:
case 190:
case 3331:
case 4078:
case 2149:
case 2511:
case 1024:
case 2174:
case 3860:
case 3848:
case 1173:
case 985:
case 688:
case 1005:
case 3232:
case 1172:
case 3317:
case 1645:
case 148:
case 1375:
case 3835:
case 1505:
case 2126:
case 2261:
case 171:
case 3138:
case 1031:
case 791:
case 2362:
case 1023:
case 2084:
case 3654:
case 100:
case 3049:
case 1745:
case 3403:
case 2384:
case 1818:
case 3741:
case 175:
case 776:
case 2077:
case 2229:
case 2053:
case 2503:
case 1670:
case 496:
case 1428:
case 932:
case 2654:
case 1876:
case 3874:
case 1758:
case 3473:
case 3611:
case 890:
case 2972:
case 801:
case 3211:
case 3615:
case 1239:
case 2028:
case 687:
case 3921:
case 2037:
case 3355:
case 70:
case 3393:
case 2231:
case 1802:
case 3505:
case 3462:
case 3961:
case 2035:
case 2607:
case 289:
case 2656:
case 1106:
case 2750:
case 3088:
case 3148:
case 2313:
case 3897:
case 4072:
case 3872:
case 2252:
case 2347:
case 2708:
case 477:
case 2816:
case 205:
case 1607:
case 2487:
case 943:
case 3957:
case 1021:
case 1647:
case 46:
case 2530:
case 3614:
case 324:
case 2258:
case 1675:
case 1629:
case 2079:
case 2704:
case 68:
case 3368:
case 615:
case 3180:
case 2884:
case 2835:
case 1427:
case 341:
case 2720:
case 2300:
case 2430:
case 2926:
case 599:
case 876:
case 2256:
case 1609:
case 1875:
case 335:
case 1370:
case 3678:
case 2947:
case 50:
case 3487:
case 4040:
case 3561:
case 2279:
case 2166:
case 220:
case 355:
case 1111:
case 881:
case 531:
case 833:
case 159:
case 1935:
case 3823:
case 4077:
case 3078:
case 1574:
case 822:
case 1481:
case 3900:
case 3451:
case 1130:
case 1230:
case 3305:
case 1358:
case 2793:
case 840:
case 3483:
case 1223:
case 3582:
case 174:
case 3638:
case 457:
case 3537:
case 2908:
case 1691:
case 3406:
case 3257:
case 3658:
case 1151:
case 2158:
case 1271:
case 1963:
case 577:
case 3935:
case 669:
case 405:
case 2236:
case 3193:
case 1644:
case 2729:
case 1475:
case 3687:
case 1185:
case 811:
case 2251:
case 1143:
case 2301:
case 576:
case 3474:
case 2695:
case 1489:
case 36:
case 1105:
case 120:
case 1705:
case 1979:
case 900:
case 3118:
case 3672:
case 2792:
case 619:
case 3424:
case 2834:
case 510:
case 519:
case 413:
case 3383:
case 2721:
case 2735:
case 3828:
case 820:
case 3983:
case 2472:
case 857:
case 3202:
case 916:
case 1417:
case 509:
case 1888:
case 80:
case 262:
case 3005:
case 3580:
case 2444:
case 483:
case 1901:
case 283:
case 164:
case 443:
case 4003:
case 1595:
case 2004:
case 3147:
case 681:
case 1022:
case 1362:
case 525:
case 877:
case 3536:
case 1466:
case 3964:
case 1003:
case 2203:
case 2377:
case 4005:
case 3027:
case 3295:
case 1794:
case 3115:
case 813:
case 3660:
case 3864:
case 4076:
case 1137:
case 302:
case 3096:
case 380:
case 2521:
case 2073:
case 1346:
case 2394:
case 3811:
case 2102:
case 189:
case 56:
case 3069:
case 99:
case 20:
case 1749:
case 1268:
case 863:
case 1661:
case 3349:
case 2696:
case 3385:
case 1311:
case 2557:
case 79:
case 3708:
case 2821:
case 3817:
case 4050:
case 3978:
case 195:
case 2659:
case 1904:
case 3780:
case 651:
case 425:
case 1986:
case 3280:
case 1002:
case 3169:
case 1337:
case 1864:
case 3869:
case 3785:
case 2207:
case 2066:
case 2499:
case 3023:
case 736:
case 1422:
case 1041:
case 702:
case 3922:
case 2544:
case 33:
case 3014:
case 117:
case 2788:
case 1399:
case 208:
case 2109:
case 1208:
case 996:
case 3703:
case 3064:
case 2146:
case 1526:
case 1424:
case 1853:
case 1488:
case 3036:
case 2385:
case 1270:
case 2650:
case 1655:
case 1177:
case 3485:
case 178:
case 3158:
case 3292:
case 3414:
case 2558:
case 3644:
case 429:
case 392:
case 149:
case 1092:
case 2959:
case 2312:
case 101:
case 3844:
case 2075:
case 3730:
case 1848:
case 1585:
case 2370:
case 1710:
case 2140:
case 2324:
case 2078:
case 2673:
case 1291:
case 1887:
case 3116:
case 2837:
case 2754:
case 223:
case 1925:
case 301:
case 1203:
case 3674:
case 3453:
case 1503:
case 3054:
case 440:
case 1561:
case 444:
case 2897:
case 1228:
case 24:
case 3237:
case 2829:
case 990:
case 706:
case 1964:
case 593:
case 1678:
case 25:
case 1608:
case 453:
case 1855:
case 818:
case 3879:
case 2703:
case 1912:
case 2094:
case 963:
case 3417:
case 1825:
case 1554:
case 2338:
case 2369:
case 1486:
case 1089:
case 3221:
case 3219:
case 3379:
case 1720:
case 3967:
case 1103:
case 942:
case 2864:
case 1906:
case 1088:
case 1104:
case 976:
case 1966:
case 4011:
case 3886:
case 913:
case 3188:
case 3583:
case 1473:
case 2386:
case 524:
case 734:
case 1499:
case 3408:
case 968:
case 1264:
case 2363:
case 1641:
case 3578:
case 1500:
case 3813:
case 3256:
case 1061:
case 1380:
case 1133:
case 3420:
case 433:
case 1507:
case 3849:
case 3012:
case 1044:
case 1418:
case 1939:
case 3568:
case 446:
case 371:
case 2358:
case 1786:
case 1953:
case 2771:
case 1383:
case 3337:
case 1042:
case 3659:
case 1577:
case 3235:
case 1537:
case 630:
case 856:
case 3969:
case 715:
case 3531:
case 1708:
case 3618:
case 2365:
case 1060:
case 3743:
case 181:
case 1029:
case 2971:
case 3890:
case 1989:
case 3139:
case 2860:
case 3435:
case 3289:
case 766:
case 3043:
case 3760:
case 1689:
case 1163:
case 1795:
case 1631:
case 1309:
case 2677:
case 3433:
case 1166:
case 3629:
case 1636:
case 197:
case 172:
case 1632:
case 1820:
case 2374:
case 3908:
case 3352:
case 3440:
case 3923:
case 2321:
case 3686:
case 627:
case 3223:
case 2512:
case 166:
case 2853:
case 1760:
case 2372:
case 2104:
case 883:
case 2206:
case 3293:
case 1902:
case 329:
case 482:
case 4085:
case 2790:
case 3945:
case 177:
case 2912:
case 3384:
case 3934:
case 383:
case 4082:
case 2999:
case 123:
case 3906:
case 1214:
case 2447:
case 1581:
case 3077:
case 2295:
case 2350:
case 501:
case 3109:
case 270:
case 3882:
case 2632:
case 2145:
case 2538:
case 3968:
case 865:
case 936:
case 2534:
case 142:
case 1432:
case 1308:
case 137:
case 982:
case 3265:
case 2639:
case 2152:
case 1301:
case 1529:
case 2305:
case 157:
case 1009:
case 686:
case 4012:
case 4048:
case 126:
case 903:
case 660:
case 2486:
case 1461:
case 2292:
case 683:
case 1995:
case 3951:
case 1870:
case 3106:
case 1017:
case 3252:
case 2764:
case 1027:
case 3889:
case 994:
case 540:
case 2731:
case 2171:
case 2000:
case 1555:
case 3429:
case 3253:
case 1849:
case 2135:
case 1494:
case 3558:
case 1410:
case 2624:
case 2062:
case 885:
case 2218:
case 1077:
case 1829:
case 2498:
case 3135:
case 1349:
case 2316:
case 2713:
case 3907:
case 1449:
case 1273:
case 3259:
case 1725:
case 3490:
case 2605:
case 3159:
case 3557:
case 853:
case 3554:
case 1200:
case 2586:
case 1421:
case 908:
case 2763:
case 2961:
case 339:
case 2759:
case 3394:
case 1903:
case 1483:
case 1642:
case 761:
case 1332:
case 2958:
case 2641:
case 204:
case 3888:
case 282:
case 975:
case 2387:
case 3366:
case 1947:
case 2517:
case 3600:
case 2851:
case 1701:
case 1120:
case 3361:
case 4089:
case 1266:
case 210:
case 3022:
case 330:
case 1571:
case 738:
case 1513:
case 1856:
case 4018:
case 847:
case 4001:
case 923:
case 2448:
case 449:
case 1207:
case 3269:
case 1010:
case 2027:
case 1400:
case 571:
case 541:
case 1454:
case 507:
case 1763:
case 676:
case 2061:
case 3850:
case 3669:
case 2709:
case 694:
case 228:
case 2360:
case 3226:
case 2469:
case 1224:
case 2040:
case 2577:
case 2626:
case 2266:
case 834:
case 2322:
case 2237:
case 115:
case 415:
case 2418:
case 959:
case 311:
case 3336:
case 523:
case 1651:
case 2888:
case 1766:
case 3747:
case 1562:
case 2283:
case 3883:
case 3365:
case 421:
case 2490:
case 2931:
case 603:
case 3248:
case 2083:
case 3430:
case 2574:
case 3404:
case 1348:
case 2161:
case 3649:
case 504:
case 2668:
case 3279:
case 685:
case 156:
case 1510:
case 3124:
case 2724:
case 1186:
case 2224:
case 1756:
case 1943:
case 3626:
case 219:
case 3084:
case 32:
case 2086:
case 2349:
case 3506:
case 1075:
case 1907:
case 1977:
case 2500:
case 6:
case 1069:
case 3016:
case 2289:
case 3399:
case 3362:
case 1703:
case 187:
case 1734:
case 3571:
case 1374:
case 3988:
case 952:
case 842:
case 2095:
case 3134:
case 2939:
case 1180:
case 75:
case 242:
case 2119:
case 3767:
case 3693:
case 2569:
case 2141:
case 1292:
case 2480:
case 972:
case 2446:
case 1579:
case 800:
case 215:
case 3076:
case 129:
case 1981:
case 2836:
case 2373:
case 1775:
case 2903:
case 2900:
case 1036:
case 1737:
case 735:
case 3717:
case 1809:
case 1656:
case 3419:
case 3484:
case 1336:
case 1305:
case 3496:
case 1800:
case 3916:
case 1699:
case 2609:
case 637:
case 3047:
case 76:
case 3157:
case 1770:
case 3761:
case 290:
case 2795:
case 2689:
case 336:
case 914:
case 3074:
case 2425:
case 2929:
case 2838:
case 55:
case 1330:
case 3296:
case 3530:
case 141:
case 664:
case 3749:
case 889:
case 787:
case 2627:
case 369:
case 1135:
case 634:
case 274:
case 1351:
case 1389:
case 3164:
case 2739:
case 2660:
case 2995:
case 2009:
case 2121:
case 3570:
case 1368:
case 2842:
case 3129:
case 2364:
case 3560:
case 1662:
case 3238:
case 3121:
case 2505:
case 1694:
case 3444:
case 3004:
case 3395:
case 18:
case 1567:
case 327:
case 3871:
case 2179:
case 2712:
case 782:
case 3321:
case 3270:
case 358:
case 3972:
case 1227:
case 1921:
case 1056:
case 1176:
case 200:
case 2427:
case 1055:
case 104:
case 480:
case 2045:
case 2994:
case 1754:
case 236:
case 2253:
case 2582:
case 1420:
case 2357:
case 1159:
case 949:
case 3201:
case 542:
case 2129:
case 3194:
case 2618:
case 1923:
case 1781:
case 1004:
case 2862:
case 1248:
case 790:
case 3507:
case 2074:
case 729:
case 2411:
case 4087:
case 1128:
case 789:
case 3386:
case 3489:
case 1275:
case 2454:
case 8:
case 2876:
case 3603:
case 2110:
case 3343:
case 4015:
case 1773:
case 1541:
case 1025:
case 1492:
case 49:
case 318:
case 2457:
case 2883:
case 4009:
case 185:
case 2826:
case 3448:
case 2615:
case 1658:
case 2649:
case 307:
case 3791:
case 2371:
case 3986:
case 3137:
case 3276:
case 2294:
case 451:
case 534:
case 1769:
case 1956:
case 3204:
case 1565:
case 2587:
case 2118:
case 1325:
case 2791:
case 3881:
case 1490:
case 635:
case 3666:
case 2250:
case 2007:
case 1124:
case 319:
case 232:
case 1405:
case 3796:
case 4034:
case 723:
case 3382:
case 1114:
case 3783:
case 1015:
case 409:
case 2296:
case 581:
case 1414:
case 2052:
case 2987:
case 3171:
case 698:
case 1006:
case 3847:
case 2846:
case 2756:
case 1777:
case 1778:
case 351:
case 479:
case 2238:
case 2977:
case 3870:
case 3953:
case 3716:
case 1839:
case 2774:
case 3993:
case 3688:
case 1801:
case 646:
case 3272:
case 839:
case 2893:
case 3862:
case 2562:
case 1619:
case 4025:
case 3028:
case 3015:
case 1525:
case 1706:
case 2468:
case 162:
case 946:
case 3344:
case 1845:
case 3926:
case 731:
case 2189:
case 2383:
case 1991:
case 2911:
case 3680:
case 3214:
case 1512:
case 1916:
case 1283:
case 645:
case 1145:
case 492:
case 1850:
case 3288:
case 3919:
case 1442:
case 1584:
case 71:
case 2593:
case 767:
case 297:
case 1260:
case 1782:
case 3061:
case 2453:
case 2730:
case 2974:
case 3196:
case 3087:
case 2610:
case 2460:
case 1141:
case 3556:
case 1967:
case 391:
case 894:
case 3940:
case 697:
case 1326:
case 3172:
case 323:
case 15:
case 618:
case 3628:
case 268:
case 3284:
case 2935:
case 1659:
case 3958:
case 2580:
case 1478:
case 3176:
case 654:
case 3602:
case 3044:
case 2436:
case 983:
case 2854:
case 3512:
case 1633:
case 180:
case 3564:
case 3790:
case 430:
case 1914:
case 2147:
case 3125:
case 4038:
case 3690:
case 3011:
case 3333:
case 2241:
case 1807:
case 690:
case 3291:
case 1985:
case 1743:
case 725:
case 2687:
case 2782:
case 1253:
case 2191:
case 549:
case 3952:
case 4022:
case 1265:
case 1774:
case 1411:
case 1057:
case 3607:
case 2717:
case 435:
case 1393:
case 1090:
case 3111:
case 3671:
case 3013:
case 2797:
case 1321:
case 3472:
case 2198:
case 1648:
case 1612:
case 1335:
case 774:
case 4057:
case 3918:
case 1969:
case 562:
case 2707:
case 724:
case 1806:
case 1761:
case 130:
case 2745:
case 1282:
case 423:
case 2124:
case 1065:
case 3856:
case 2576:
case 3901:
case 3547:
case 2653:
case 3348:
case 3804:
case 1945:
case 969:
case 3287:
case 2438:
case 2693:
case 2337:
case 3581:
case 3415:
case 1712:
case 30:
case 255:
case 3323:
case 474:
case 3510:
case 163:
case 3380:
case 1532:
case 3240:
case 1364:
case 3647:
case 2811:
case 3989:
case 941:
case 2944:
case 313:
case 1714:
case 1158:
case 3397:
case 3422:
case 1897:
case 2012:
case 1437:
case 1776:
case 1067:
case 2033:
case 807:
case 2646:
case 1059:
case 2670:
case 3241:
case 116:
case 1772:
case 3182:
case 2780:
case 951:
case 497:
case 3630:
case 3754:
case 713:
case 3604:
case 2276:
case 2434:
case 974:
case 3190:
case 2216:
case 3877:
case 2325:
case 1187:
case 3099:
case 3676:
case 2270:
case 305:
case 1891:
case 258:
case 993:
case 3826:
case 3892:
case 2177:
case 1110:
case 14:
case 17:
case 105:
case 2222:
case 652:
case 3619:
case 4068:
case 264:
case 1244:
case 2165:
case 3740:
case 1048:
case 2603:
case 1167:
case 629:
case 2437:
case 1552:
case 3975:
case 3608:
case 812:
case 1046:
case 2477:
case 3938:
case 2032:
case 1911:
case 620:
case 1206:
case 1261:
case 3990:
case 931:
case 2630:
case 2431:
case 2481:
case 927:
case 2614:
case 2441:
case 1071:
case 2564:
case 257:
case 772:
case 2254:
case 3798:
case 2671:
case 1568:
case 2528:
case 169:
case 2690:
case 2865:
case 3431:
case 3737:
case 3845:
case 2026:
case 3261:
case 2817:
case 343:
case 2631:
case 3827:
case 1556:
case 48:
case 849:
case 829:
case 3744:
case 2178:
case 1588:
case 585:
case 2351:
case 2287:
case 961:
case 1018:
case 1869:
case 3310:
case 2019:
case 1493:
case 565:
case 528:
case 673:
case 1328:
case 2768:
case 837:
case 3438:
case 1746:
case 3441:
case 672:
case 1087:
case 2549:
case 2123:
case 3887:
case 532:
case 4053:
case 3936:
case 1316:
case 3597:
case 3748:
case 2902:
case 1873:
case 2655:
case 3503:
case 3197:
case 756:
case 1324:
case 490:
case 3733:
case 3354:
case 179:
case 529:
case 522:
case 3439:
case 3825:
case 3222:
case 3738:
case 3247:
case 4031:
case 3763:
case 3841:
case 119:
case 1681:
case 1343:
case 2267:
case 256:
case 1553:
case 2314:
case 924:
case 3390:
case 2392:
case 1487:
case 1862:
case 275:
case 3039:
case 2896:
case 714:
case 2844:
case 765:
case 1908:
case 1961:
case 344:
case 2043:
case 670:
case 1677:
case 2315:
case 1618:
case 907:
case 2863:
case 3086:
case 1440:
case 2555:
case 2554:
case 3917:
case 3777:
case 2182:
case 563:
case 2014:
case 442:
case 3486:
case 4004:
case 2877:
case 1382:
case 420:
case 3699:
case 1028:
case 1431:
case 2209:
case 2408:
case 2613:
case 4021:
case 436:
case 844:
case 3534:
case 476:
case 263:
case 2909:
case 1323:
case 2798:
case 64:
case 1771:
case 2168:
case 770:
case 2151:
case 2455:
case 666:
case 570:
case 3454:
case 3933:
case 3861:
case 3045:
case 160:
case 2047:
case 2890:
case 1352:
case 1780:
case 1992:
case 342:
case 3576:
case 929:
case 1927:
case 1211:
case 1788:
case 431:
case 3999:
case 2150:
case 3756:
case 122:
case 4046:
case 2629:
case 53:
case 2180:
case 2679:
case 77:
case 1740:
case 3101:
case 1601:
case 802:
case 3911:
case 1164:
case 1680:
case 1064:
case 2091:
case 1511:
case 2194:
case 1450:
case 2839:
case 2933:
case 830:
case 2757:
case 150:
case 155:
case 3215:
case 3834:
case 2502:
case 417:
case 1669:
case 45:
case 910:
case 2023:
case 326:
case 128:
case 550:
case 495:
case 3146:
case 3388:
case 3184:
case 3704:
case 794:
case 2874:
case 1182:
case 4026:
case 3075:
case 1932:
case 2120:
case 572:
case 498:
case 2097:
case 3819:
case 3189:
case 1787:
case 3413:
case 3309:
case 786:
case 2328:
case 2992:
case 3816:
case 2856:
case 1246:
case 373:
case 1506:
case 3949:
case 2872:
case 403:
case 831:
case 2665:
case 3375:
case 2506:
case 2664:
case 102:
case 988:
case 1306:
case 3757:
case 1047:
case 84:
case 2542:
case 3432:
case 547:
case 3650:
case 1582:
case 716:
case 2968:
case 3567:
case 2921:
case 2719:
case 3950:
case 10:
case 2297:
case 2048:
case 316:
case 1671:
case 527:
case 2420:
case 1928:
case 1451:
case 4051:
case 3167:
case 2225:
case 3610:
case 3192:
case 3041:
case 2138:
case 1840:
case 1188:
case 1376:
case 2272:
case 2399:
case 3779:
case 1318:
case 3199:
case 3913:
case 360:
case 2796:
case 3592:
case 2341:
case 4041:
case 452:
case 2548:
case 2170:
case 520:
case 1386:
case 3893:
case 345:
case 3329:
case 4037:
case 953:
case 3728:
case 3843:
case 1341:
case 611:
case 1590:
case 3963:
case 3085:
case 1514:
case 2376:
case 1491:
case 4084:
case 1837:
case 3315:
case 2422:
case 2020:
case 1425:
case 1315:
case 3885:
case 2590:
case 3274:
case 2160:
case 3572:
case 114:
case 584:
case 1339:
case 2579:
case 605:
case 815:
case 2760:
case 2991:
case 2005:
case 1926:
case 1118:
case 1635:
case 2910:
case 1946:
case 1520:
case 825:
case 674:
case 2718:
case 3746:
case 1978:
case 2676:
case 211:
case 909:
case 3732:
case 2070:
case 253:
case 2461:
case 1194:
case 3538:
case 2914:
case 1407:
case 3734:
case 2866:
case 4081:
case 3066:
case 3562:
case 1353:
case 2259:
case 3878:
case 3113:
case 322:
case 378:
case 2813:
case 3539:
case 945:
case 2957:
case 63:
case 1638:
case 2435:
case 3750:
case 1107:
case 3165:
case 2154:
case 2789:
case 2802:
case 2065:
case 3389:
case 2871:
case 4043:
case 2533:
case 1530:
case 4079:
case 632:
case 300:
case 2767:
case 1366:
case 720:
case 2085:
case 3149:
case 1012:
case 709:
case 2843:
case 3480:
case 2825:
case 1131:
case 3657:
case 1052:
case 2111:
case 3381:
case 2114:
case 1828:
case 2766:
case 1615:
case 3017:
case 3765:
case 3905:
case 3899:
case 1447:
case 3519:
case 737:
case 1288:
case 1347:
case 2519:
case 370:
case 3937:
case 2553:
case 3970:
case 1534:
case 934:
case 23:
case 1573:
case 727:
case 2917:
case 4066:
case 1415:
case 1859:
case 583:
case 97:
case 2072:
case 1462:
case 2113:
case 2616:
case 408:
case 3491:
case 2699:
case 2744:
case 2563:
case 1435:
case 1857:
case 4088:
case 3307:
case 2625:
case 2419:
case 1050:
case 3030:
case 981:
case 3771:
case 62:
case 2956:
case 1241:
case 2426:
case 560:
case 2001:
case 402:
case 1707:
case 808:
case 557:
case 3837:
case 2578:
case 3170:
case 418:
case 4067:
case 3498:
case 2405:
case 3458:
case 376:
case 2734:
case 3620:
case 1026:
case 3768:
case 638:
case 1445:
case 3290:
case 2021:
case 52:
case 2329:
case 4030:
case 2308:
case 1220:
case 1639:
case 826:
case 3173:
case 2819:
case 1938:
case 3271:
case 1053:
case 1736:
case 2525:
case 7:
case 506:
case 3994:
case 3714:
case 2886:
case 1430:
case 3342:
case 1063:
case 2016:
case 3072:
case 1258:
case 238:
case 3925:
case 3341:
case 1317:
case 1517:
case 3068:
case 828:
case 3320:
case 2156:
case 514:
case 2950:
case 1070:
case 2561:
case 1225:
case 2583:
case 1879:
case 1728:
case 1687:
case 3715:
case 1779:
case 3896:
case 3854:
case 2691:
case 2873:
case 47:
case 613:
case 2475:
case 639:
case 3852:
case 2636:
case 1439:
case 4029:
case 1695:
case 153:
case 1713:
case 1303:
case 2303:
case 2232:
case 1193:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1679482802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,];
var gg_b = "1679482802/";

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
